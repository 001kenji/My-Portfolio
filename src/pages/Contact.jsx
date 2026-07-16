import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import TiltCard from '../components/ui/TiltCard'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import { contact, about } from '../data/data'

function ContactCard({ icon: Icon, title, value, href, color, label, delay, primary }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <TiltCard intensity={10} scale={1.03} glare={true}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`group flex flex-col items-center gap-5 rounded-2xl p-8 text-center cursor-pointer transition-colors duration-300 ${
            primary ? 'glass-strong' : 'glass'
          }`}
          style={primary ? { borderColor: `${color}40`, boxShadow: `0 0 40px ${color}15` } : {}}
        >
          {/* Glow icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${color}18`,
              border: `1.5px solid ${color}40`,
              boxShadow: `0 0 24px ${color}25`,
            }}
          >
            <Icon size={36} style={{ color }} />
          </div>

          <div>
            {primary && (
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2 block">
                Primary
              </span>
            )}
            <h3 className="font-display font-bold text-xl text-white mb-1">{title}</h3>
            <p className="font-mono text-sm mb-3" style={{ color }}>{value}</p>
            <p className="text-white/40 text-sm">{label}</p>
          </div>

          <span
            className="flex items-center gap-2 text-sm font-display font-semibold"
            style={{ color }}
          >
            {primary ? 'Open WhatsApp' : title === 'Phone Call' ? 'Call Now' : 'Send Email'}
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </TiltCard>
    </motion.div>
  )
}

export default function Contact() {
  const whatsappNum = contact.whatsapp.replace(/\D/g, '')
  const whatsappMsg = encodeURIComponent(`Hi Brian! I found your portfolio and I'd love to connect.`)

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Let's <span className="gradient-text-plasma">Work Together</span></>}
          subtitle="I'm open to freelance projects, full-time opportunities, and exciting collaborations."
        />

        {/* Primary WhatsApp CTA */}
        <TiltCard intensity={5} scale={1.01} glare={true}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-10 mb-10 text-center"
          style={{ borderColor: 'rgba(37,211,102,0.25)', boxShadow: '0 0 60px rgba(37,211,102,0.08)' }}
        >
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(37,211,102,0.12)', border: '1.5px solid rgba(37,211,102,0.35)' }}
          >
            <FaWhatsapp size={44} style={{ color: '#25D366' }} />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Message me on WhatsApp
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            The fastest way to reach me. Tap the button and your WhatsApp app will open directly to my inbox — no copy-pasting needed.
          </p>
          <a
            href={`https://wa.me/${whatsappNum}?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-display font-bold text-lg text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              boxShadow: '0 0 30px rgba(37,211,102,0.35)',
            }}
          >
            <FaWhatsapp size={22} />
            Open WhatsApp Chat
          </a>
          <p className="font-mono text-xs text-white/25 mt-5">{contact.whatsapp}</p>
        </motion.div>
        </TiltCard>

        {/* Other contact options */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <ContactCard
            icon={FaPhone}
            title="Phone Call"
            value={contact.phone}
            href={`tel:${contact.phone}`}
            color="#06B6D4"
            label="Available during Kenyan business hours"
            delay={0.1}
          />
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            color="#60A5FA"
            label="I respond within 24 hours"
            delay={0.2}
          />
        </div>

        {/* Availability status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 grid md:grid-cols-3 gap-6 text-center"
        >
          {[
            { icon: '🟢', title: 'Available',        desc: 'Open to new projects & roles' },
            { icon: '⚡', title: 'Quick Response',   desc: 'Usually within a few hours' },
            { icon: '🌍', title: 'Remote-Friendly',  desc: 'Can work with global teams' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="font-display font-semibold text-white text-sm">{item.title}</h4>
              <p className="text-white/40 text-xs">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="font-display text-xl md:text-2xl text-white/25 italic leading-relaxed max-w-2xl mx-auto">
            "I don't just write code — I craft experiences. Let's build something worth talking about."
          </p>
          <p className="font-mono text-xs text-white/20 mt-3">— {about.name}</p>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
