import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-12 ${alignClass}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs tracking-widest uppercase text-plasma-light opacity-70 mb-3 block">
          ── {eyebrow} ──
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
