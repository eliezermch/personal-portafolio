import { Canvas } from '@react-three/fiber';
import './App.css';
import { Particles } from './components/Particles';
import { Html } from '@react-three/drei';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { skillsData } from './data/skillsData';
import Card from './components/Card';

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
        className="w-full h-full"
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

        <Html wrapperClass="navbar-wrapper" fullscreen>
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
        </Html>

        <ambientLight intensity={0.5} />
      </Canvas>
    </>
  );
}

export default App;
