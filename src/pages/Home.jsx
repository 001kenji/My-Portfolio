import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import TiltCard from '../components/ui/TiltCard'

// Typewriter cycling through skills
const WORDS = ['React Dev', 'AI Builder', 'Full-Stack', 'Android Dev', 'ML Engineer']
function TypewriterText() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[idx]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1400)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIdx(i => (i + 1) % WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx])

  return (
    <span className="font-mono text-xs text-plasma-light">
      {displayed}<span className="animate-pulse">▋</span>
    </span>
  )
}
import PageWrapper from '../components/ui/PageWrapper'
import { about } from '../data/data'

// Staggered text animation
const sentence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
}
const letter = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function AnimatedName({ text }) {
  return (
    <motion.span variants={sentence} initial="hidden" animate="visible" className="inline-flex flex-wrap">
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={letter} className={char === ' ' ? 'mr-3' : ''}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">

          {/* Left — Text */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-px bg-plasma-light" />
              <span className="font-mono text-xs tracking-widest uppercase text-plasma-light">
                Available for work
              </span>
              <span className="w-2 h-2 rounded-full bg-pulse animate-pulse-slow" />
            </motion.div>

            {/* Name */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight text-glow-plasma">
              <AnimatedName text={about.name} />
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-mono text-sm md:text-base text-ion-light tracking-wide"
            >
              {about.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg"
            >
              {about.bio.slice(0, 220)}…
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link
                to="/projects"
                className="btn-plasma rounded-xl px-6 py-3 font-display font-semibold text-sm flex items-center gap-2"
              >
                View Projects <FaArrowRight size={12} />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-plasma rounded-xl px-6 py-3 font-display font-semibold text-sm flex items-center gap-2"
              >
                Contact Me
              </Link>
              <a
                href="https://github.com/001kenji"
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl px-4 py-3 text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <FaGithub size={16} /> GitHub
              </a>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="grid grid-cols-4 gap-3 pt-4 border-t border-white/5"
            >
              {about.highlights.map((h, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl mb-1">{h.icon}</div>
                  <div className="font-display font-bold text-lg gradient-text-plasma">{h.value}</div>
                  <div className="font-mono text-xs text-white/40 mt-0.5">{h.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo with 3D tilt */}
          <div className="order-1 md:order-2 flex justify-center items-center relative py-12">
            {/* Ambient pulse ring */}
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(37,99,235,0.13) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <TiltCard
                intensity={12}
                scale={1.03}
                className="relative z-10 w-52 h-52 md:w-64 md:h-64"
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden glow-plasma"
                  style={{
                    border: '1.5px solid rgba(37,99,235,0.4)',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(6,182,212,0.1))',
                  }}
                >
                  <img
                    src={about.photo}
                    alt={about.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="w-full h-full items-center justify-center font-display font-bold text-6xl gradient-text-plasma"
                    style={{ display: 'none' }}
                  >
                    BN
                  </div>
                </div>

                {/* Commit streak badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                  className="absolute -bottom-5 -right-5 rounded-2xl px-3 py-2.5 flex items-center gap-2.5"
                  style={{
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.25)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 0 20px rgba(6,182,212,0.12)',
                  }}
                >
                  <div className="flex gap-0.5 items-end">
                    {[3,5,2,7,4,6,5,3,6,7].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width: '4px',
                          height: `${h * 2.5}px`,
                          borderRadius: '2px',
                          background: `rgba(6,182,212,${0.2 + (h / 7) * 0.8})`,
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-ion-light font-bold leading-none">Active</div>
                    <div className="font-mono text-xs text-white/35 leading-none mt-0.5">Always building</div>
                  </div>
                </motion.div>

                {/* Terminal badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                  className="absolute -top-5 -left-5 rounded-2xl px-3 py-2"
                  style={{
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.3)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 0 20px rgba(37,99,235,0.12)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                    </div>
                    <TypewriterText />
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-white/30 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-plasma to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* About section */}
      <section className="section-pad max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <span className="font-mono text-xs tracking-widest uppercase text-plasma-light mb-4 block">
              ── About ──
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
              Self-taught. Versatile.{' '}
              <span className="gradient-text-ion">Always building.</span>
            </h2>
            <p className="text-white/55 leading-relaxed text-base md:text-lg">
              {about.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Python', 'Django', 'Kotlin', 'Machine Learning', 'Android', 'PostgreSQL', 'TailwindCSS'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CV / Resume Downloads ─────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase text-plasma-light mb-3 block">
              ── Documents ──
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              Download My <span className="gradient-text-plasma">CV & Resumes</span>
            </h2>
            <p className="text-white/40 text-sm">
              Three tailored documents — pick the one that fits your context.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: 'Combined CV',
                sub: 'Programming + Public Administration',
                desc: 'Full curriculum vitae covering both software development and governance expertise.',
                icon: '📄',
                file: '/Brian_Njuguna_Combined_CV.pdf',
                color: '#2563EB',
                badge: 'CV',
              },
              {
                label: 'Programming Resume',
                sub: 'Tech & Software Roles',
                desc: 'Focused on full-stack, AI/ML, and Android development skills and shipped projects.',
                icon: '💻',
                file: '/Brian_Njuguna_Resume_Programming.pdf',
                color: '#0891B2',
                badge: 'Resume',
              },
              {
                label: 'Public Admin Resume',
                sub: 'Governance & Policy Roles',
                desc: 'Highlights policy research, community development, and administration competencies.',
                icon: '🏛️',
                file: '/Brian_Njuguna_Resume_PublicAdmin.pdf',
                color: '#0F766E',
                badge: 'Resume',
              },
            ].map((doc, i) => (
              <motion.a
                key={i}
                href={doc.file}
                download
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-5 flex flex-col gap-3 group cursor-pointer"
                style={{ borderColor: `${doc.color}28` }}
              >
                {/* Icon + badge row */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{doc.icon}</span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${doc.color}18`,
                      border: `1px solid ${doc.color}40`,
                      color: doc.color,
                    }}
                  >
                    {doc.badge}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-sm text-white mb-0.5 group-hover:text-white/90">
                    {doc.label}
                  </h3>
                  <p className="font-mono text-xs mb-2" style={{ color: doc.color }}>
                    {doc.sub}
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed">{doc.desc}</p>
                </div>

                {/* Download button */}
                <div
                  className="mt-auto flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-display font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{
                    background: `${doc.color}14`,
                    border: `1px solid ${doc.color}35`,
                    color: doc.color,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
