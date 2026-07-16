import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCarouselCSS from '../components/ProjectCarouselCSS'
import { projects } from '../data/data'

export default function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  const prev = () => setActive(i => (i - 1 + projects.length) % projects.length)
  const next = () => setActive(i => (i + 1) % projects.length)

  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>My <span className="gradient-text-plasma">Projects</span></>}
          subtitle="Real products, shipped and deployed. Use the arrows or click adjacent cards to explore."
        />

        {/* Carousel wrapper */}
        <div className="relative w-full mb-6">
          <ProjectCarouselCSS
            projects={projects}
            activeIndex={active}
            setActive={setActive}
          />

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 glass rounded-xl p-3 text-white/60 hover:text-white transition-all hover:glow-plasma"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 glass rounded-xl p-3 text-white/60 hover:text-white transition-all hover:glow-plasma"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-6 h-1.5 bg-plasma'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-6 md:p-10"
            style={{ borderColor: `${project.color}28` }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }}
                  />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-white/25 ml-auto">
                    {active + 1} / {projects.length}
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-white/55 leading-relaxed">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{
                        background: `${project.color}12`,
                        borderColor: `${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-plasma rounded-xl px-5 py-3 font-display font-semibold text-sm flex items-center gap-2 justify-center"
                  >
                    <FaExternalLinkAlt size={12} /> View Live Site
                  </a>
                ) : (
                  <div className="rounded-xl px-5 py-3 text-sm text-center text-white/25 border border-white/5 font-mono">
                    No live demo available
                  </div>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-plasma rounded-xl px-5 py-3 font-display font-semibold text-sm flex items-center gap-2 justify-center"
                  >
                    <FaGithub size={14} /> View Source Code
                  </a>
                )}
                <p className="font-mono text-xs text-center text-white/20 pt-1">
                  ← → keyboard shortcut to navigate
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Grid thumbnails */}
        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest uppercase text-white/25 mb-5 text-center">
            ── All Projects ──
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`glass rounded-xl p-4 text-left transition-all duration-300 group ${
                  i === active ? 'ring-1' : 'hover:bg-ghost-2'
                }`}
                style={i === active ? { ringColor: p.color, borderColor: `${p.color}40` } : {}}
              >
                <div
                  className="w-6 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-10"
                  style={{ background: p.color }}
                />
                <p className="font-display font-semibold text-sm text-white/80 group-hover:text-white transition-colors leading-tight">
                  {p.title}
                </p>
                <p className="font-mono text-xs text-white/30 mt-1">{p.category}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
