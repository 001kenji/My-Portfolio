import { useEffect, useRef } from 'react'

/**
 * 3D Warp Field — pure canvas, zero deps.
 *
 * Particles exist in 3D space (x, y, z).
 * Perspective projection brings depth.
 * Mouse movement tilts the virtual camera.
 * Scroll accelerates the warp / fly-through speed.
 */

const FOV     = 400          // perspective focal length
const DEPTH   = 1000         // z range  0..DEPTH
const COUNT   = 220          // particle count
const BASE_SPEED = 1.2       // px/frame z-movement

// Deep-blue palette — very dim so text stays readable
const COLORS = [
  [37, 99, 235],   // deep blue  (plasma)
  [6, 182, 212],   // cyan       (ion)
  [16, 185, 129],  // teal       (pulse)
  [255, 255, 255], // pure white (stars)
  [96, 165, 250],  // blue-400
]

function mkParticle(W, H) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)]
  return {
    x: (Math.random() - 0.5) * W * 2,
    y: (Math.random() - 0.5) * H * 2,
    z: Math.random() * DEPTH,
    pz: 0,              // previous z (for streaks)
    r: 0.6 + Math.random() * 1.4,
    c,
    tail: Math.random() > 0.65, // some particles leave motion streaks
  }
}

export default function StarField() {
  const canvasRef = useRef(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const scroll    = useRef({ v: 0, last: 0 })
  const particles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    let animId
    let camX = 0, camY = 0  // smooth camera offset

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
      if (particles.current.length === 0) {
        particles.current = Array.from({ length: COUNT }, () => mkParticle(W, H))
      }
    }
    resize()

    // Mouse → gentle camera tilt
    const onMouse = e => {
      mouse.current.x = (e.clientX / W - 0.5) * 2   // -1 .. 1
      mouse.current.y = (e.clientY / H - 0.5) * 2
    }

    // Touch support
    const onTouch = e => {
      if (!e.touches[0]) return
      mouse.current.x = (e.touches[0].clientX / W - 0.5) * 2
      mouse.current.y = (e.touches[0].clientY / H - 0.5) * 2
    }

    // Scroll → speed boost
    const onScroll = () => {
      const now   = window.scrollY
      const delta = Math.abs(now - scroll.current.last)
      scroll.current.v  = Math.min(delta * 0.08, 6)  // cap boost
      scroll.current.last = now
    }

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('touchmove', onTouch,  { passive: true })
    window.addEventListener('scroll',    onScroll,  { passive: true })
    window.addEventListener('resize',    resize)

    const draw = () => {
      // Decay scroll boost
      scroll.current.v *= 0.92

      // Smooth camera drift toward mouse
      camX += (mouse.current.x * 60 - camX) * 0.04
      camY += (mouse.current.y * 40 - camY) * 0.04

      const cx = W / 2 + camX
      const cy = H / 2 + camY

      const speed = BASE_SPEED + scroll.current.v

      // Dark background — semi-transparent fill creates motion blur effect
      ctx.fillStyle = 'rgba(6, 8, 17, 0.35)'
      ctx.fillRect(0, 0, W, H)

      for (const p of particles.current) {
        p.pz = p.z
        p.z -= speed
        if (p.z <= 1) {
          // Reset behind camera
          p.x  = (Math.random() - 0.5) * W * 2
          p.y  = (Math.random() - 0.5) * H * 2
          p.z  = DEPTH
          p.pz = DEPTH
          continue
        }

        // Perspective projection
        const scale  = FOV / p.z
        const px     = p.x * scale + cx
        const py     = p.y * scale + cy

        // Clip to canvas
        if (px < -20 || px > W + 20 || py < -20 || py > H + 20) continue

        const prevScale = FOV / p.pz
        const ppx = p.x * prevScale + cx
        const ppy = p.y * prevScale + cy

        const brightness = 1 - p.z / DEPTH   // brighter as they approach
        const alpha = brightness * 0.7 + 0.05
        const size  = scale * p.r

        const [r, g, b] = p.c

        // Streak / tail for some particles
        if (p.tail && Math.abs(ppx - px) > 0.5) {
          const grad = ctx.createLinearGradient(ppx, ppy, px, py)
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`)
          grad.addColorStop(1, `rgba(${r},${g},${b},${alpha * 0.6})`)
          ctx.beginPath()
          ctx.strokeStyle = grad
          ctx.lineWidth = size * 0.7
          ctx.moveTo(ppx, ppy)
          ctx.lineTo(px, py)
          ctx.stroke()
        }

        // Dot
        ctx.beginPath()
        ctx.arc(px, py, Math.max(size, 0.4), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fill()

        // Glow halo on brighter particles
        if (brightness > 0.6) {
          const glow = size * 2.5
          const rg = ctx.createRadialGradient(px, py, 0, px, py, glow)
          rg.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.25})`)
          rg.addColorStop(1, `rgba(${r},${g},${b},0)`)
          ctx.beginPath()
          ctx.arc(px, py, glow, 0, Math.PI * 2)
          ctx.fillStyle = rg
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('scroll',    onScroll)
      window.removeEventListener('resize',    resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
