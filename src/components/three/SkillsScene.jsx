import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const CATEGORY_COLORS = {
  frontend: '#2563EB',
  backend:  '#06B6D4',
  mobile:   '#10B981',
  ai_ml:    '#F59E0B',
  other:    '#EF4444',
}

function SkillPedestal({ skill, position, color, delay = 0 }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const targetY = useRef(position[1])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime() + delay
    const floatY = Math.sin(t * 0.8) * 0.08
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      (hovered ? targetY.current + 0.3 : targetY.current) + floatY,
      0.06
    )
    const s = hovered ? 1.12 : 1.0
    mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, s, 0.1))
  })

  const r = parseInt(color.slice(1, 3), 16) / 255
  const g = parseInt(color.slice(3, 5), 16) / 255
  const b = parseInt(color.slice(5, 7), 16) / 255

  return (
    <group
      ref={mesh}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Base pedestal */}
      <mesh position={[0, -0.55, 0]}>
        <cylinderGeometry args={[0.38, 0.45, 0.12, 16]} />
        <meshStandardMaterial color={[r * 0.25, g * 0.25, b * 0.25]} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.48, 0]}>
        <cylinderGeometry args={[0.3, 0.38, 0.12, 16]} />
        <meshStandardMaterial color={[r * 0.4, g * 0.4, b * 0.4]} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Glowing orb */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : 0.6}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.012, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={hovered ? 0.9 : 0.4} />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 0.55, 0]}
        fontSize={0.12}
        color={hovered ? '#ffffff' : 'rgba(255,255,255,0.8)'}
        anchorX="center"
        anchorY="middle"
        maxWidth={1.4}
        textAlign="center"
      >
        {skill}
      </Text>
    </group>
  )
}

function Scene({ skillItems }) {
  const group = useRef()
  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.getElapsedTime() * 0.04
  })

  const positions = useMemo(() => {
    const cols = Math.ceil(Math.sqrt(skillItems.length * 1.5))
    return skillItems.map((_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      return [
        (col - cols / 2) * 1.8 + 0.9,
        0,
        (row - Math.ceil(skillItems.length / cols) / 2) * 1.8,
      ]
    })
  }, [skillItems])

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 8, 0]}   color="#ffffff"  intensity={2} />
      <pointLight position={[5, 3, 5]}   color="#2563EB"  intensity={3} />
      <pointLight position={[-5, 3, -5]} color="#06B6D4"  intensity={3} />
      <pointLight position={[0, -4, 0]}  color="#10B981"  intensity={2} />

      {/* Floor grid plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
        <planeGeometry args={[30, 30, 20, 20]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>

      {skillItems.map((item, i) => (
        <SkillPedestal
          key={item.name}
          skill={item.name}
          color={item.color}
          position={positions[i]}
          delay={i * 0.3}
        />
      ))}
    </group>
  )
}

export default function SkillsScene({ skillItems }) {
  return (
    <Canvas
      camera={{ position: [0, 4, 10], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene skillItems={skillItems} />
    </Canvas>
  )
}
