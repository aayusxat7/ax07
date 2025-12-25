import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  position?: [number, number, number];
  color?: string;
  hoverColor?: string;
}

function Card3D({ position = [0, 0, 0], color = "#00ffff", hoverColor = "#bf00ff" }: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox
        ref={meshRef}
        args={[3, 2, 0.2]}
        radius={0.1}
        smoothness={4}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? hoverColor : color}
          attach="material"
          distort={hovered ? 0.2 : 0.1}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>
    </Float>
  );
}

export function FloatingCard({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />
        <Card3D />
      </Canvas>
    </div>
  );
}

function InteractiveShape({ 
  shape = 'box',
  color = "#00ffff",
  position = [0, 0, 0] as [number, number, number]
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.8]} />}
        {shape === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
    </Float>
  );
}

export function InteractiveShapes({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#bf00ff" />
        
        <InteractiveShape shape="octahedron" color="#00ffff" position={[-2, 1, 0]} />
        <InteractiveShape shape="sphere" color="#bf00ff" position={[2, -1, 0]} />
        <InteractiveShape shape="torus" color="#ff00ff" position={[0, 0, -2]} />
        <InteractiveShape shape="box" color="#00ffff" position={[-1, -1.5, 1]} />
      </Canvas>
    </div>
  );
}
