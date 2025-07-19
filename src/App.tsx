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
          <div className="container max-w-4xl mx-auto flex py-8 mt-4">
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
            <div className="w-full mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Portfolio Book
              </h2>

              {/* Project Glossary - Above the book */}
              <div className="mb-8">
                <div className="bg-indigo-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl">
                  <h3 className="text-lg font-bold text-white text-center mb-6">
                    📋 Project Glossary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Page 1 - Bike Project */}
                    <div
                      id="glossary-page-2"
                      className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">
                          Page 1
                        </span>
                        <span className="text-xs text-gray-400">🚴‍♂️</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        3D Bike Configurator
                      </h4>
                      <p className="text-xs text-gray-300 mb-3">
                        Modern bicycle e-commerce platform with React
                      </p>
                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={() =>
                          window.open(
                            'https://www.fresco-design.com/3d-bike-configurator',
                            '_blank'
                          )
                        }
                      >
                        🌐 View Project
                      </button>
                    </div>

                    {/* Page 2 - Polyjoule */}
                    <div
                      id="glossary-page-1"
                      className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">
                          Page 2
                        </span>
                        <span className="text-xs text-gray-400">⚡</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        Polyjoule
                      </h4>
                      <p className="text-xs text-gray-300 mb-3">
                        Energy management dashboard with TypeScript
                      </p>
                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={() =>
                          window.open('https://www.polyjoule.com/', '_blank')
                        }
                      >
                        🌐 View Project
                      </button>
                    </div>

                    {/* Page 3 - Fresco Design */}
                    <div
                      id="glossary-page-3"
                      className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">
                          Page 3
                        </span>
                        <span className="text-xs text-gray-400">🎨</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        Fresco Design
                      </h4>
                      <p className="text-xs text-gray-300 mb-3">
                        Creative design studio website with animations
                      </p>
                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={() =>
                          window.open(
                            'https://www.fresco-design.com/',
                            '_blank'
                          )
                        }
                      >
                        🌐 View Project
                      </button>
                    </div>

                    {/* Page 4 - Fresco Design */}
                    <div
                      id="glossary-page-3"
                      className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">
                          Page 4
                        </span>
                        <span className="text-xs text-gray-400">🎨</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">
                        Fresco 3D Library
                      </h4>
                      <p className="text-xs text-gray-300 mb-3">
                        3D model library with Three.js
                      </p>
                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={() =>
                          window.open(
                            'https://s3.us-east-1.amazonaws.com/fresco-augmented-reality.com/libs/demo/index.html',
                            '_blank'
                          )
                        }
                      >
                        🌐 View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>

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
