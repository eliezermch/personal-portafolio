import { Environment, Float } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useAtom } from 'jotai';
import { easing } from 'maath';
import { pageAtom, pages } from './portfolioData';
import { Book } from './PortafolioBook';

const CameraRig = () => {
  const { camera } = useThree();
  const [page] = useAtom(pageAtom);

  useFrame((_, delta) => {
    const bookOpen = page > 0 && page < pages.length;
    const targetY = bookOpen ? 1.5 : 2;
    const targetZ = bookOpen ? 7 : 8.5;
    easing.damp3(camera.position, [0, targetY, targetZ], 0.5, delta);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export const Experience = () => {
  return (
    <>
      <CameraRig />
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={1.5}
        rotationIntensity={1}
      >
        <group scale={[3.5, 3.5, 3.5]}>
          <Book />
        </group>
      </Float>
      {/* <OrbitControls /> */}
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
