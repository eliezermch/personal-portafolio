import { Environment, Float } from '@react-three/drei';
import { Book } from './PortafolioBook';
export const Experience = () => {
  return (
    <>
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
