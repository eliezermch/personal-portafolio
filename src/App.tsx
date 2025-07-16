
import { Canvas } from '@react-three/fiber';
import './App.css'
import { Particles } from './components/Particles';
import { Html } from '@react-three/drei';
import { NavBar } from './components/NavBar';

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
            className='w-full h-full'
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
            
            <Html  wrapperClass='navbar-wrapper' fullscreen>
              <NavBar />
            </Html>

            <ambientLight intensity={0.5} />
          </Canvas>
    </>
  )
}

export default App
