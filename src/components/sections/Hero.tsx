'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, FileText } from 'lucide-react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiKubernetes,
  SiTypescript,
} from 'react-icons/si'

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiDjango, name: 'Django', color: '#44B78B' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
]

const roles = [
  { label: 'Full Stack Developer', colorClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  { label: 'DevOps Engineer', colorClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { label: 'AI Engineering Enthusiast', colorClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.07),transparent)]" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,46,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,46,0.5)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      {/* Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="mb-7 flex justify-center">
          <motion.div
            className="relative w-24 h-24 sm:w-28 sm:h-28"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 blur-xl"
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Spinning gradient ring */}
            <motion.div
              className="absolute -inset-[3px] rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            {/* Mask to isolate ring */}
            <div className="absolute inset-[2px] rounded-full bg-[#0B0B0F]" />
            <Image
              src="/profile.jpeg"
              alt="Abdoulaye Sène"
              fill
              className="rounded-full object-cover object-top z-10"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Available badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 bg-green-500/10 text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for remote opportunities
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-6"
        >
          <MapPin size={13} />
          <span>Dakar, Senegal — Open to worldwide remote</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-slate-100">Building scalable</span>
          <br />
          <span className="gradient-text">products end-to-end</span>
        </motion.h1>

        {/* Role badges */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {roles.map(({ label, colorClass }) => (
            <span
              key={label}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I design and ship complete applications — from intuitive{' '}
          <span className="text-cyan-400 font-medium">React / Next.js</span> frontends to robust{' '}
          <span className="text-cyan-400 font-medium">Django / Node.js</span> backends,
          containerized with <span className="text-cyan-400 font-medium">Docker</span>, automated
          via <span className="text-cyan-400 font-medium">CI/CD</span>, and increasingly powered by{' '}
          <span className="text-violet-400 font-medium">LLMs</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(34,211,238,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-colors duration-200 text-base"
          >
            View My Projects
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-xl transition-all duration-200 text-base"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 font-medium rounded-xl transition-all duration-200 text-base"
          >
            <FileText size={17} />
            View CV
          </motion.a>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://github.com/abdoulaye-96"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-slate-600 hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abdoulaye-sene-707801203/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-slate-600 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </motion.div>

        {/* Tech stack strip */}
        <motion.div variants={item} className="flex flex-col items-center gap-5">
          <p className="text-xs text-slate-700 uppercase tracking-widest font-medium">Core Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-7">
            {techStack.map(({ icon: Icon, name, color }) => (
              <TechIcon key={name} Icon={Icon} name={name} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

interface TechIconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any
  name: string
  color: string
}

function TechIcon({ Icon, name, color }: TechIconProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      whileHover={{ scale: 1.25, y: -4 }}
      className="flex flex-col items-center gap-1.5 cursor-default"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Icon
        className="w-6 h-6 transition-colors duration-200"
        style={{ color: hovered ? color : '#475569' }}
      />
      <span
        className="text-[10px] transition-colors duration-200"
        style={{ color: hovered ? '#94A3B8' : '#334155' }}
      >
        {name}
      </span>
    </motion.div>
  )
}
