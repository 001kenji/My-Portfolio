import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function JourneyPath({ total }) {
  const mesh = useRef()

  const curve = useMemo(() => {
    const points = Array.from({ length: total }, (_, i) => {
      const t = i / (total - 1)
      return new THREE.Vector3(
        Math.sin(t * Math.PI * 2.5) * 3,
        -i * 1.6 + (total / 2) * 1.6,
        Math.cos(t * Math.PI * 2.5) * 2
      )
    })
    return new THREE.CatmullRomCurve3(points)
  }, [total])

  const tubeGeo = useMemo(
    () => new THREE.TubeGeometry(curve, total * 6, 0.02, 8, false),
    [curve, total]
  )

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.material.dashOffset -= 0.003
  })

  return (
    <mesh ref={mesh} geometry={tubeGeo}>
      <meshBasicMaterial
        color="#2563EB"
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function MilestoneOrb({ position, color = '#2563EB', index }) {
  const mesh = useRef()
  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.getElapsedTime() * 0.8 + index * 0.5
    mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.6 + index) * 0.06
  })

  return (
    <group ref={mesh} position={position}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.01, 6, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

function Scene({ total }) {
  const group = useRef()
  const points = useMemo(() => {
    const colors = [
      '#2563EB', '#06B6D4', '#10B981', '#F59E0B', '#EF4444',
      '#60A5FA', '#67E8F9', '#6EE7B7', '#FCD34D', '#F87171',
      '#8B5CF6', '#0EA5E9', '#34D399',
    ]
    return Array.from({ length: total }, (_, i) => {
      const t = i / (total - 1)
      return {
        position: [
          Math.sin(t * Math.PI * 2.5) * 3,
          -i * 1.6 + (total / 2) * 1.6,
          Math.cos(t * Math.PI * 2.5) * 2,
        ],
        color: colors[i % colors.length],
      }
    })
  }, [total])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.07) * 0.25
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]}   color="#2563EB" intensity={4} />
      <pointLight position={[-5, 0, -5]} color="#06B6D4" intensity={3} />
      <pointLight position={[0, -10, 5]} color="#10B981" intensity={2} />

      <JourneyPath total={total} />
      {points.map((p, i) => (
        <MilestoneOrb key={i} position={p.position} color={p.color} index={i} />
      ))}
    </group>
  )
}

export default function JourneyPath3D({ total = 13 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene total={total} />
    </Canvas>
  )
}
