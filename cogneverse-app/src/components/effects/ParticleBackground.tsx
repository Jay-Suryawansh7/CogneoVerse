"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles
  const [positions, colors] = useMemo(() => {
    const count = 500; // Number of particles
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Brand colors: Nectarine (#FFBD76), Oceanic (#003F47), Cobalt (#193497)
    // Converted to normalized RGB for Three.js
    const brandColors = [
      new THREE.Color("#FFBD76"), // Nectarine
      new THREE.Color("#193497"), // Cobalt
      new THREE.Color("#003F47"), // Oceanic (Primary)
    ];

    for (let i = 0; i < count; i++) {
      // Position spread
      positions[i * 3] = (Math.random() - 0.5) * 20;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      // Random brand color
      const color = brandColors[Math.floor(Math.random() * brandColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30; // Slow continuous rotation
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Ambient light for subtle depth */}
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
