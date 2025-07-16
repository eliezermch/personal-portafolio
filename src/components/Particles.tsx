import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

export function Particles() {
  //   const { scene } = useThree();

  const particleTexture1 = useLoader(THREE.TextureLoader, '../../assets/solar_sys/star1.png');
  const particleTexture2 = useLoader(THREE.TextureLoader, '../assets/solar_sys/star2.png');
  const particleTexture3 = useLoader(THREE.TextureLoader, '../assets/solar_sys/star3.png');

  const particlesRef = useRef<THREE.Group>(null);
  const particlesObjectRef = useRef<THREE.Points>(null);

  // Animation using useFrame
  useFrame((state, delta) => {
    if (particlesRef.current) {
      // Rotate the entire particle system slowly
      particlesRef.current.rotation.y += delta * 0.1;
      particlesRef.current.rotation.x += delta * 0.05;
    }

    if (particlesObjectRef.current) {
      // Add a subtle floating motion
      particlesObjectRef.current.position.y = 27 + Math.sin(state.clock.elapsedTime * 0.5) * 2;

      // Optional: Add slight rotation to individual particles
      particlesObjectRef.current.rotation.z += delta * 0.02;
    }
  });

  useEffect(() => {
    const scene = particlesRef.current;

    /**
     * Particles
     */
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const textures = [];

    const minDistance = 300; // Minimum distance from the Sun
    const maxDistance = 500; // Maximum distance

    for (let i = 0; i < count; i++) {
      const distance = minDistance + Math.random() * (maxDistance - minDistance); // Distance between minDistance and maxDistance
      const theta = Math.random() * 2 * Math.PI; // Random angle in spherical coordinates
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);

      colors[i * 3] = Math.random(); // r
      colors[i * 3 + 1] = Math.random(); // g
      colors[i * 3 + 2] = Math.random(); // b

      // Alternate between the three textures
      if (i % 3 === 0) textures.push(particleTexture1);
      else if (i % 3 === 1) textures.push(particleTexture2);
      else textures.push(particleTexture3);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterials = textures.map((texture) => {
      return new THREE.PointsMaterial({
        size: 1,
        sizeAttenuation: true,
        map: texture,
        transparent: true,
        depthWrite: false,
        vertexColors: true, // Enable vertex colors
      });
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterials[0]);
    particles.position.y = 27;
    particlesObjectRef.current = particles;
    if (scene) {
      scene.add(particles);
    }

    return () => {
      if (scene) {
        scene.remove(particles);
      }
      particlesGeometry.dispose();
      particleMaterials.forEach((material) => material.dispose());
      particlesObjectRef.current = null;
    };
  }, [particleTexture1, particleTexture2, particleTexture3]);

  return <group ref={particlesRef} />;
}