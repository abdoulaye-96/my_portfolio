'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Brain, GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '20+', label: 'Technologies' },
  { value: '100%', label: 'Remote Ready' },
]

const highlights = [
  { icon: Code2, text: 'End-to-end product development', color: 'text-cyan-400' },
  { icon: Server, text: 'Infrastructure & DevOps mindset', color: 'text-blue-400' },
  { icon: Brain, text: 'Actively learning AI Engineering', color: 'text-violet-400' },
  { icon: GraduationCap, text: "MSc Software Engineering — In Progress", color: 'text-green-400' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="section-number text-cyan-400 mb-4">01. ABOUT ME</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Not just a developer.
              <br />
              <span className="gradient-text">A full-spectrum engineer.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm <span className="text-slate-200 font-medium">Abdoulaye Sène</span>, a Full Stack
                Developer and DevOps Engineer based in Dakar, Senegal. I've built real-world
                applications across fintech, education, hospitality, and transportation — taking
                products from wireframe to production.
              </p>
              <p>
                My differentiator is the combination of{' '}
                <span className="text-slate-200">software engineering depth</span> with an{' '}
                <span className="text-slate-200">infrastructure-first mindset</span>. I don't just
                write code — I think about deployment, scalability, and operations from day one.
              </p>
              <p>
                Currently pursuing my Master's in Software Engineering while actively building
                AI-powered applications with CrewAI and LLMs, positioning myself for the next wave
                of intelligent software.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <Icon size={17} className={`shrink-0 ${color}`} />
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-slate-600 text-sm">
              <MapPin size={13} />
              <span>Dakar, Senegal · Open to worldwide remote positions</span>
            </div>
          </div>

          {/* Right: photo + stats */}
          <div className="flex flex-col gap-5">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-xl" />
                <div className="absolute inset-0 rounded-2xl border border-cyan-500/20" />
                <Image
                  src="/profile.jpeg"
                  alt="Abdoulaye Sène"
                  fill
                  className="rounded-2xl object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="card p-5 text-center hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="card col-span-2 p-5 flex items-center justify-between gap-4 hover:border-slate-600/50 transition-colors"
              >
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">GitHub Profile</p>
                  <p className="text-slate-200 font-medium text-sm">@abdoulaye-96</p>
                  <p className="text-xs text-slate-600 mt-1">Open source contributions & personal projects</p>
                </div>
                <a
                  href="https://github.com/abdoulaye-96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 text-sm border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                >
                  View →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
