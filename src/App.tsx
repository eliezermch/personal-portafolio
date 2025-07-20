import { Canvas } from '@react-three/fiber';
import './App.css';
import { Particles } from './components/Particles';
import { Html } from '@react-three/drei';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { skillsData } from './data/skillsData';
import Card from './components/Card';
import { Suspense } from 'react';
import { Experience } from './components/PortfolioBook/PortafolioExperience';
import { Footer } from './components/Footer';
import { UI as PortfolioUI } from './components/PortfolioBook/PortafolioUI';
import { PortfolioGlossary } from './components/PortfolioBook/PortfolioGlossary';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas
        // scene={{ background: cubeTexture }}
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

          <Profile />

          {/* Skills Grid */}
          <div className="container max-w-4xl mx-auto flex py-8 px-8 mt-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {skillsData.map((skill, index) => (
                <Card
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  shadowColor={skill.shadowColor}
                  glowColor={skill.glowColor}
                />
              ))}
            </div>
          </div>

          {/* Portfolio Book Section - Seamlessly integrated */}
          <section className="w-full py-16 px-4">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Portfolio Book
              </h2>

              {/* Project Glossary - Above the book */}
              <PortfolioGlossary />

              {/* 3D Experience */}

              <div className="h-[500px] w-full relative">
                <Canvas
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    position: [0, 2, 8],
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

              {/* Bottom spacing to avoid footer overlap */}
              <div className="pb-20"></div>
            </div>
          </section>

          <Footer />
        </Html>

        <ambientLight intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
