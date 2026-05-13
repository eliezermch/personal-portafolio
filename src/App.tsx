import { Canvas } from '@react-three/fiber';
import './App.css';
import { Particles } from './components/Particles';
import { Html } from '@react-three/drei';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import {
  skillsData,
  skillCategories,
  type SkillCategory,
} from './data/skillsData';
import Card from './components/Card';
import { Suspense, useRef, useState } from 'react';
import { Experience } from './components/PortfolioBook/PortafolioExperience';
import { Footer } from './components/Footer';
import { UI as PortfolioUI } from './components/PortfolioBook/PortafolioUI';
import { Timeline } from './components/Timeline';
import { useAtom } from 'jotai';
import { pageAtom, pages } from './components/PortfolioBook/portfolioData';
import { RevealOnScroll } from './components/RevealOnScroll';
import { LoadingScreen } from './components/LoadingScreen';
import { CursorGlow } from './components/CursorGlow';

function App() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [, setPage] = useAtom(pageAtom);
  const touchStartX = useRef(0);

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) setPage((p) => Math.min(p + 1, pages.length));
      else setPage((p) => Math.max(p - 1, 0));
    }
  };

  return (
    <>
      {/* Global UX — rendered via portals to document.body */}
      <LoadingScreen />
      <CursorGlow />

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 4000,
          position: [-50, 320, 500],
        }}
        onCreated={(state) => {
          const _gl = state.gl.getContext();
          const pixelStorei = _gl.pixelStorei.bind(_gl);
          _gl.pixelStorei = function (...args) {
            const [parameter] = args;
            switch (parameter) {
              case _gl.UNPACK_FLIP_Y_WEBGL:
                return pixelStorei(...args);
            }
          };
        }}
      >
        <Particles />

        <Html wrapperClass="html-wrapper">
          <NavBar />

          <section id="profile">
            <Profile />
          </section>

          {/* Skills Section */}
          <div
            id="skills"
            className="container max-w-4xl mx-auto flex flex-col py-8 px-4 sm:px-8 mt-8 gap-6"
          >
            <RevealOnScroll>
              <h2 className="text-3xl font-bold text-white text-center">
                Skills &amp; Technologies
              </h2>
            </RevealOnScroll>

            {/* Filter bar */}
            <RevealOnScroll delay={100}>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg'
                        : 'bg-slate-800/50 text-gray-400 border-white/10 hover:bg-slate-700/50 hover:text-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <Card
                  key={skill.title}
                  index={index}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  shadowColor={skill.shadowColor}
                  glowColor={skill.glowColor}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <Timeline />

          {/* Portfolio Book Section */}
          <section id="portfolio" className="w-full py-16 px-4">
            <div className="w-full">
              <RevealOnScroll>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Portfolio Book
                </h2>
              </RevealOnScroll>

              {/* 3D Experience — swipe enabled */}
              <div
                className="h-[280px] sm:h-[380px] md:h-[500px] w-full relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Canvas
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    position: [0, 5, 14],
                  }}
                  className="w-full h-full"
                  style={{ background: 'transparent' }}
                >
                  <Suspense fallback={null}>
                    <Experience />
                  </Suspense>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                </Canvas>
              </div>

              {/* Portfolio Book Pagination UI */}
              <div className="mt-8">
                <PortfolioUI />
              </div>

              <div className="pb-20"></div>
            </div>
          </section>

          {/* ContactForm hidden — uncomment to restore */}
          {/* <ContactForm /> */}

          <Footer />
        </Html>

        <ambientLight intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
