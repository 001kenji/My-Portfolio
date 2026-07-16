import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import JourneyPath3D from '../components/three/JourneyPath3D'
import { journey } from '../data/data'

function formatDate(dateStr) {
  const [year, month] = dateStr.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

function MilestoneCard({ item, index }) {
  const isLeft = index % 2 === 0
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <div ref={ref} className={`flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
        className="glass rounded-2xl p-5 flex-1 group hover:bg-ghost-2 transition-colors"
        style={{ maxWidth: '44%' }}
      >
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <p className="font-mono text-xs text-plasma-light tracking-widest mb-1">
              {formatDate(item.date)}
            </p>
            <h3 className="font-display font-bold text-base text-white group-hover:text-plasma-light transition-colors">
              {item.title}
            </h3>
          </div>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
      </motion.div>

      {/* Center line + dot */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '40px' }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="timeline-dot"
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1" style={{ maxWidth: '44%' }} />
    </div>
  )
}

export default function Journey() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        <SectionHeading
          eyebrow="Timeline"
          title={<>The <span className="gradient-text-warm">Journey</span></>}
          subtitle="Every milestone on the path from complete beginner to full-stack AI developer."
        />

        {/* 3D path preview */}
        <div className="w-full glass rounded-2xl overflow-hidden mb-16" style={{ height: '300px' }}>
          <JourneyPath3D total={journey.length} />
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #2563EB, rgba(6,182,212,0.4), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {journey.map((item, i) => (
              <MilestoneCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-8"
          >
            <div className="glass-strong rounded-2xl px-6 py-3 flex items-center gap-3">
              <span className="text-xl">🌍</span>
              <div>
                <p className="font-display font-semibold text-sm text-white">Present Day</p>
                <p className="font-mono text-xs text-white/40">Still building, always growing</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Year range callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">The numbers</p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="font-display font-bold text-4xl gradient-text-plasma mb-1">4+</div>
              <div className="font-mono text-xs text-white/40">Years coding</div>
            </div>
            <div>
              <div className="font-display font-bold text-4xl gradient-text-ion mb-1">6+</div>
              <div className="font-mono text-xs text-white/40">Tech stacks learned</div>
            </div>
            <div>
              <div className="font-display font-bold text-4xl gradient-text-warm mb-1">13</div>
              <div className="font-mono text-xs text-white/40">Major milestones</div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
