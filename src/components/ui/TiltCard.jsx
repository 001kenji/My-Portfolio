import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard — smooth 3D tilt that follows the mouse.
 * ALL hooks are called unconditionally at the top level (Rules of Hooks).
 *
 * Props:
 *   intensity  — max rotation degrees (default 8)
 *   scale      — hover scale factor (default 1.025)
 *   glare      — show light-glare overlay (default true)
 *   className / style — forwarded to the wrapper
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  intensity = 8,
  scale = 1.025,
  glare = true,
}) {
  const ref = useRef(null)

  // Raw normalised mouse position  (-0.5 → 0.5)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = { stiffness: 180, damping: 22, mass: 0.6 }

  // Rotation springs
  const rotateY = useSpring(
    useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]),
    springCfg
  )
  const rotateX = useSpring(
    useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]),
    springCfg
  )

  // Glare position springs  (always created — never conditional)
  const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [20, 80]), springCfg)
  const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [20, 80]), springCfg)

  // Glare opacity
  const glareOpacityRaw = useMotionValue(0)
  const glareOpacity    = useSpring(glareOpacityRaw, { stiffness: 200, damping: 25 })

  // Glare background — derived ONCE at top level, never inside JSX
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.08) 0%, transparent 65%)`
  )

  const handleMouseMove = e => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width  - 0.5)
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5)
    glareOpacityRaw.set(1)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    glareOpacityRaw.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.25, ease: 'easeOut' } }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      {children}

      {/* Glare overlay — rendered based on prop but background/opacity are
          always-created motion values so hook count never changes */}
      {glare && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 20,
            opacity: glareOpacity,
            background: glareBackground,
          }}
        />
      )}
    </motion.div>
  )
}
