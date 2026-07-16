import TiltCard from './ui/TiltCard'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function ProjectCarouselCSS({ projects, activeIndex, setActive }) {
  const total   = projects.length
  const VISIBLE = 2

  return (
    <div
      className="relative w-full select-none"
      style={{ height: '340px', perspective: '1200px' }}
    >
      {projects.map((p, i) => {
        const offset = i - activeIndex
        let wrapped  = offset
        if (wrapped >  total / 2) wrapped -= total
        if (wrapped < -total / 2) wrapped += total

        const isActive  = wrapped === 0
        const isVisible = Math.abs(wrapped) <= VISIBLE

        const tx     = wrapped * 240
        const tz     = -Math.abs(wrapped) * 130
        const rotY   = wrapped * -20
        const opct   = isActive ? 1 : Math.abs(wrapped) === 1 ? 0.52 : 0.18
        const sc     = isActive ? 1 : Math.abs(wrapped) === 1 ? 0.86 : 0.70
        const zIdx   = isActive ? 10 : VISIBLE - Math.abs(wrapped)

        // Active card: solid dark bg so text is always legible
        const cardBg = isActive
          ? `linear-gradient(145deg, rgba(6,8,17,0.97) 0%, ${p.color}22 100%)`
          : `linear-gradient(145deg, rgba(6,8,17,0.70) 0%, ${p.color}10 100%)`

        const cardBorder = isActive
          ? `1.5px solid ${p.color}70`
          : `1px solid ${p.color}28`

        const cardShadow = isActive
          ? `0 0 50px ${p.color}28, 0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)`
          : `0 8px 32px rgba(0,0,0,0.5)`

        return (
          <div
            key={p.id}
            onClick={() => !isActive && setActive(i)}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '330px', height: '280px',
              marginLeft: '-165px', marginTop: '-140px',
              transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${sc})`,
              opacity: opct,
              zIndex: zIdx,
              transition: 'all 0.55s cubic-bezier(0.23,1,0.32,1)',
              cursor: isActive ? 'default' : 'pointer',
              display: isVisible ? 'block' : 'none',
            }}
          >
            <TiltCard
              intensity={isActive ? 8 : 0}
              scale={1}
              glare={isActive}
              style={{ width: '100%', height: '100%', borderRadius: '16px' }}
            >
              <div
                className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
                style={{
                  background: cardBg,
                  border: cardBorder,
                  boxShadow: cardShadow,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: '22px 22px 18px',
                  position: 'relative',
                }}
              >
                {/* Top colour accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }} />

                {/* Category row */}
                <div className="flex items-center gap-2 mb-3 mt-1">
                  <span
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                      background: p.color, boxShadow: `0 0 8px ${p.color}`,
                    }}
                  />
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: p.color, textShadow: `0 0 10px ${p.color}80` }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Title — white, bold, readable */}
                <h3
                  className="font-display font-bold leading-tight mb-2"
                  style={{
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    textShadow: '0 1px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  {p.title}
                </h3>

                {/* Description — higher contrast */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: 'rgba(255,255,255,0.72)',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: isActive ? 3 : 2,
                    WebkitBoxOrient: 'vertical',
                    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  {p.description}
                </p>

                {/* Tech summary */}
                <p
                  className="font-mono text-xs mt-3"
                  style={{
                    color: isActive ? `${p.color}` : `${p.color}aa`,
                    textShadow: isActive ? `0 0 12px ${p.color}60` : 'none',
                  }}
                >
                  {p.techSummary}
                </p>

                {/* Links — active card only */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-2 mt-3 pt-3"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-display font-semibold transition-all hover:scale-105"
                        style={{
                          background: `${p.color}28`,
                          border: `1px solid ${p.color}55`,
                          color: '#fff',
                        }}
                      >
                        <FaExternalLinkAlt size={10} /> Live
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-display font-semibold hover:text-white transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.75)',
                        }}
                      >
                        <FaGithub size={11} /> Code
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </TiltCard>
          </div>
        )
      })}
    </div>
  )
}
