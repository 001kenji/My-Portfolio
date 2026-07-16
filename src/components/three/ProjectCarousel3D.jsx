import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

// Single project card floating in 3D
function ProjectCard3D({ index, total, activeIndex, project, onClick }) {
  const mesh = useRef()
  const angle = ((index - activeIndex) / total) * Math.PI * 2
  const targetX = Math.sin(angle) * 3.5
  const targetZ = Math.cos(angle) * 3.5 - 2
  const targetY = Math.abs(index - activeIndex) > total / 2 ? 0 : (index === activeIndex ? 0.1 : -0.3)
  const targetScale = index === activeIndex ? 1.1 : 0.75
  const targetOpacity = index === activeIndex ? 1 : 0.5

  useFrame(() => {
    if (!mesh.current) return
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.07)
    mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, targetZ, 0.07)
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY, 0.07)
    mesh.current.scale.setScalar(THREE.MathUtils.lerp(mesh.current.scale.x, targetScale, 0.07))
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, -angle * 0.2, 0.07)
  })

  const hex = project.color || '#2563EB'
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  return (
    <group ref={mesh} onClick={() => onClick(index)} position={[targetX, targetY, targetZ]}>
      {/* Card body */}
      <RoundedBox args={[2.8, 1.9, 0.08]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          color={[r * 0.12, g * 0.12, b * 0.12]}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={targetOpacity}
        />
      </RoundedBox>

      {/* Accent top bar */}
      <mesh position={[0, 0.82, 0.05]}>
        <boxGeometry args={[2.6, 0.06, 0.02]} />
        <meshBasicMaterial color={hex} transparent opacity={0.8} />
      </mesh>

      {/* Project title */}
      <Text
        position={[0, 0.45, 0.06]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mF71Q-gozuenz.woff2"
        maxWidth={2.4}
      >
        {project.title}
      </Text>

      {/* Category */}
      <Text
        position={[0, 0.22, 0.06]}
        fontSize={0.1}
        color={hex}
        anchorX="center"
        anchorY="middle"
        maxWidth={2.4}
      >
        {project.category}
      </Text>

      {/* Description preview */}
      <Text
        position={[0, -0.1, 0.06]}
        fontSize={0.09}
        color="rgba(255,255,255,0.6)"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.3}
        lineHeight={1.4}
      >
        {project.description.slice(0, 90) + '...'}
      </Text>

      {/* Tech summary */}
      <Text
        position={[0, -0.65, 0.06]}
        fontSize={0.085}
        color="rgba(96,165,250,0.8)"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.4}
      >
        {project.techSummary}
      </Text>
    </group>
  )
}

function Scene({ projects, activeIndex, setActive }) {
  const group = useRef()
  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.04
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 5, 5]}  color="#2563EB" intensity={4} />
      <pointLight position={[0, -5, 3]} color="#06B6D4" intensity={3} />
      {projects.map((p, i) => (
        <ProjectCard3D
          key={p.id}
          index={i}
          total={projects.length}
          activeIndex={activeIndex}
          project={p}
          onClick={setActive}
        />
      ))}
    </group>
  )
}

export default function ProjectCarousel3D({ projects, activeIndex, setActive }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene projects={projects} activeIndex={activeIndex} setActive={setActive} />
    </Canvas>
  )
}
