import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import { socials, contact } from '../data/data'

const iconMap = {
  FaGithub:    FaGithub,
  FaLinkedin:  FaLinkedin,
  FaInstagram: FaInstagram,
  FaFacebook:  FaFacebook,
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: i => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Social() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <SectionHeading
          eyebrow="Connect"
          title={<>Find Me <span className="gradient-text-ion">Online</span></>}
          subtitle="I'm active across these platforms. Feel free to reach out or follow along."
        />

        {/* Social cards — single column on mobile, 2-col on sm+ */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mb-10">
          {socials.map((platform, i) => {
            const Icon = iconMap[platform.icon] || FaGithub
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-2xl flex items-center gap-4 cursor-pointer group"
                style={{
                  borderColor: `${platform.color}25`,
                  padding: '16px 18px',   /* tighter padding so it fits narrow screens */
                }}
              >
                {/* Icon bubble — slightly smaller on mobile */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${platform.color}18`,
                    border: `1.5px solid ${platform.color}40`,
                  }}
                >
                  <Icon size={22} style={{ color: platform.color }} />
                </div>

                {/* Text block — min-w-0 so long URLs truncate instead of overflowing */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white leading-tight mb-0.5">
                    {platform.name}
                  </h3>
                  <p className="text-white/45 text-xs sm:text-sm leading-snug">
                    {platform.description}
                  </p>
                  <p
                    className="font-mono text-xs mt-1.5 truncate"
                    style={{ color: platform.color }}
                  >
                    {platform.url.replace('https://', '')}
                  </p>
                </div>

                {/* Arrow icon */}
                <FaExternalLinkAlt
                  size={12}
                  className="text-white/25 group-hover:text-white/60 transition-colors flex-shrink-0"
                />
              </motion.a>
            )
          })}
        </div>

        {/* GitHub banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 text-center mb-6"
        >
          <FaGithub size={30} className="mx-auto text-plasma-light mb-4" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
            See all my code on GitHub
          </h3>
          <p className="text-white/45 text-sm mb-5">
            Open-source projects, experiments, and the full history of my development journey.
          </p>
          <a
            href="https://github.com/001kenji"
            target="_blank"
            rel="noreferrer"
            className="btn-plasma rounded-xl px-6 py-3 font-display font-semibold text-sm inline-flex items-center gap-2"
          >
            <FaGithub size={14} /> @001kenji
          </a>
        </motion.div>

        {/* Quick contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-display font-semibold text-white">Prefer a direct message?</p>
            <p className="text-white/40 text-sm">Reach out on WhatsApp or email</p>
          </div>
          {/* Buttons: full-width stacked on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ion rounded-xl px-5 py-3 font-display font-semibold text-sm text-center"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn-outline-plasma rounded-xl px-5 py-3 font-display font-semibold text-sm text-center"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
