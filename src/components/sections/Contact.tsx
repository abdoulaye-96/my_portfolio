'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Copy, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const EMAIL = 'seneabdoulaye124@gmail.com'

const links = [
  {
    icon: FaGithub,
    label: 'GitHub',
    sub: '@abdoulaye-96',
    href: 'https://github.com/abdoulaye-96',
    hoverClass: 'hover:border-slate-500/50 hover:text-white',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    sub: 'abdoulaye-sene',
    href: 'https://www.linkedin.com/in/abdoulaye-sene-707801203/',
    hoverClass: 'hover:border-blue-500/40 hover:text-blue-400',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,211,238,0.06),transparent)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-number text-cyan-400 mb-4">07. GET IN TOUCH</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's build something{' '}
            <span className="gradient-text">remarkable</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Open to full-time remote roles, freelance projects, and interesting collaborations.
            If you have a project in mind or a position that fits — let's talk.
          </p>

          {/* Availability */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 bg-green-500/10 text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for remote opportunities
            </span>
          </div>

          {/* Email */}
          <div className="mb-8">
            <motion.button
              onClick={copy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-cyan-500/[0.08] border border-cyan-500/30 rounded-2xl text-cyan-400 hover:bg-cyan-500/[0.14] hover:border-cyan-500/50 transition-all duration-200"
            >
              <Mail size={19} />
              <span className="font-mono text-sm sm:text-base">{EMAIL}</span>
              {copied ? (
                <CheckCircle2 size={16} className="text-green-400" />
              ) : (
                <Copy size={15} className="opacity-40 group-hover:opacity-80 transition-opacity" />
              )}
            </motion.button>
            <AnimatedCopyNote show={copied} />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {links.map(({ icon: Icon, label, sub, href, hoverClass }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                className={`flex items-center gap-2.5 px-5 py-3 card text-slate-500 text-sm transition-all duration-200 ${hoverClass}`}
              >
                <Icon size={17} />
                <div className="text-left">
                  <div className="font-medium">{label}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm">
            <MapPin size={13} />
            <span>Dakar, Senegal · Worldwide remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedCopyNote({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-xs text-green-400 mt-2"
    >
      Email copied to clipboard!
    </motion.p>
  )
}
