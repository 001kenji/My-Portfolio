import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function Orb({ color = '#2563EB', position = [0, 0, 0], speed = 0.4, distort = 0.5, scale = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere args={[scale, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function Ring({ color = '#06B6D4' }) {
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.x = clock.getElapsedTime() * 0.3
    mesh.current.rotation.y = clock.getElapsedTime() * 0.5
  })
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[2.2, 0.015, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

export default function FloatingOrb({ className = '' }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]}  color="#2563EB" intensity={3} />
        <pointLight position={[-4, -3, 3]} color="#06B6D4" intensity={2} />
        <pointLight position={[0, 0, 6]}   color="#10B981" intensity={1} />

        <Orb color="#2563EB" scale={1.4} speed={0.4} distort={0.55} />
        <Ring color="#06B6D4" />
        <Ring color="#60A5FA" />
      </Canvas>
    </div>
  )
}
