import { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import { skills } from '../data/data'
import TiltCard from '../components/ui/TiltCard'

// ─── Data helpers ───────────────────────────────────────────────────────────
const LEVEL_ORDER = ['proficient', 'intermediate', 'tools']
const LEVEL_META = {
  proficient:   { label: 'Core',         ring: 3, glow: 1.0 },
  intermediate: { label: 'Intermediate', ring: 2, glow: 0.6 },
  tools:        { label: 'Tools',        ring: 1, glow: 0.4 },
}

function buildSkillList() {
  const items = []
  Object.entries(skills).forEach(([catKey, cat]) => {
    LEVEL_ORDER.forEach(level => {
      ;(cat[level] || []).forEach(name => {
        items.push({ name, color: cat.color, category: catKey, catLabel: cat.label, level })
      })
    })
  })
  return items
}

// ─── Single hexagonal skill chip ────────────────────────────────────────────
function HexChip({ item, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [hov, setHov] = useState(false)
  const meta = LEVEL_META[item.level]
  const rings = meta.ring

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.34, 1.56, 0.64, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col items-center justify-center cursor-default"
      style={{ width: '110px', height: '110px' }}
    >
      {/* Animated concentric rings on hover */}
      {hov && Array.from({ length: rings }).map((_, ri) => (
        <motion.div
          key={ri}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1 + ri * 0.28, opacity: 0.18 - ri * 0.04 }}
          transition={{ duration: 0.5, delay: ri * 0.06 }}
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid ${item.color}`, pointerEvents: 'none' }}
        />
      ))}

      {/* Hex shape via clip-path */}
      <div
        style={{
          width: '80px',
          height: '80px',
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          background: hov
            ? `linear-gradient(135deg, ${item.color}35, ${item.color}18)`
            : `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
          border: `none`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: hov ? `0 0 24px ${item.color}55` : 'none',
          position: 'relative',
        }}
      >
        {/* Inner hex border via pseudo-layer */}
        <div
          style={{
            position: 'absolute',
            inset: '2px',
            clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            background: 'rgba(6,8,17,0.85)',
          }}
        />
        {/* Dot */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: item.color,
            boxShadow: `0 0 ${hov ? 14 : 6}px ${item.color}`,
            transition: 'all 0.3s ease',
          }}
        />
      </div>

      {/* Label */}
      <span
        className="font-mono text-center leading-tight mt-2 px-1"
        style={{
          fontSize: '0.65rem',
          color: hov ? '#fff' : 'rgba(255,255,255,0.6)',
          transition: 'color 0.25s',
          maxWidth: '100px',
          wordBreak: 'break-word',
        }}
      >
        {item.name}
      </span>

      {/* Level badge on hover */}
      <AnimatePresence>
        {hov && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{
              background: `${item.color}22`,
              border: `1px solid ${item.color}50`,
              color: item.color,
              fontSize: '0.6rem',
            }}
          >
            {meta.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Category block ──────────────────────────────────────────────────────────
function CategoryBlock({ catKey, cat, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const allSkills = LEVEL_ORDER.flatMap(l => (cat[l] || []).map(n => ({
    name: n, level: l, color: cat.color, category: catKey, catLabel: cat.label,
  })))

  return (
    <TiltCard intensity={7} scale={1.015} glare={true}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${cat.color}0a, rgba(6,8,17,0.9))`,
        border: `1px solid ${cat.color}22`,
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: 'absolute', top: 0, right: 0,
          width: '80px', height: '80px',
          background: `radial-gradient(circle at top right, ${cat.color}18, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          style={{
            width: '32px', height: '32px',
            clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            background: `linear-gradient(135deg, ${cat.color}40, ${cat.color}20)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: cat.color, boxShadow: `0 0 8px ${cat.color}`,
            }}
          />
        </div>
        <div>
          <h3 className="font-display font-bold text-white text-base">{cat.label}</h3>
          <p className="font-mono text-xs" style={{ color: `${cat.color}99` }}>
            {allSkills.length} technologies
          </p>
        </div>
      </div>

      {/* Skill hex grid */}
      <div className="flex flex-wrap gap-1 justify-start">
        {allSkills.map((item, i) => (
          <HexChip key={item.name} item={item} delay={delay + i * 0.04} />
        ))}
      </div>

      {/* Bottom level legend */}
      <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
        {LEVEL_ORDER.filter(l => cat[l] && cat[l].length > 0).map(l => (
          <div key={l} className="flex items-center gap-1.5">
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: cat.color,
              opacity: l === 'proficient' ? 1 : l === 'intermediate' ? 0.6 : 0.35,
            }} />
            <span className="font-mono text-xs text-white/35">
              {LEVEL_META[l].label} ({cat[l].length})
            </span>
          </div>
        ))}
      </div>
    </motion.div>
    </TiltCard>
  )
}

// ─── Floating constellation background ──────────────────────────────────────
function ConstellationBG() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
      style={{ opacity: 0.35 }}
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${5 + (i * 37 + i * i * 3) % 90}%`,
            top: `${10 + (i * 53 + i * 7) % 80}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            borderRadius: '50%',
            background: i % 3 === 0 ? '#2563EB' : i % 3 === 1 ? '#06B6D4' : '#10B981',
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Skills() {
  const [filter, setFilter] = useState('all')
  const allItems = useMemo(buildSkillList, [])

  const categories = [
    { key: 'all', label: 'All' },
    ...Object.entries(skills).map(([k, v]) => ({ key: k, label: v.label })),
  ]

  const proficientCount   = allItems.filter(s => s.level === 'proficient').length
  const intermediateCount = allItems.filter(s => s.level === 'intermediate').length
  const toolsCount        = allItems.filter(s => s.level === 'tools').length

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Tech <span className="gradient-text-ion">Arsenal</span></>}
          subtitle="Hover any hexagon to reveal details. Brighter glow = deeper mastery."
        />

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { val: proficientCount,   label: 'Core Skills',    color: '#10B981' },
            { val: intermediateCount, label: 'Intermediate',   color: '#06B6D4' },
            { val: toolsCount,        label: 'Tools',          color: '#F59E0B' },
            { val: Object.keys(skills).length, label: 'Domains', color: '#2563EB' },
          ].map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span
                className="font-display font-bold text-3xl"
                style={{ color: s.color, textShadow: `0 0 20px ${s.color}50` }}
              >
                {s.val}
              </span>
              <span className="font-mono text-xs text-white/40">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`rounded-full px-5 py-1.5 font-mono text-xs tracking-wide transition-all duration-300 ${
                filter === c.key
                  ? 'text-white'
                  : 'glass text-white/45 hover:text-white/70'
              }`}
              style={filter === c.key ? {
                background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                boxShadow: '0 0 16px rgba(37,99,235,0.4)',
              } : {}}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Category blocks */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {Object.entries(skills)
              .filter(([k]) => filter === 'all' || filter === k)
              .map(([catKey, cat], i) => (
                <CategoryBlock
                  key={catKey}
                  catKey={catKey}
                  cat={cat}
                  delay={i * 0.08}
                />
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Master hex constellation banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.06))',
            border: '1px solid rgba(37,99,235,0.18)',
          }}
        >
          <ConstellationBG />
          <div className="relative z-10 text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-white/30 mb-4">
              Full Stack
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              Web · Mobile · AI · Backend
            </h3>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              From pixel-perfect React interfaces to Kotlin Android apps and Python ML pipelines —
              I build across the full spectrum.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {allItems.filter(s => s.level === 'proficient').map(s => (
                <span
                  key={s.name}
                  className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{
                    background: `${s.color}14`,
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
