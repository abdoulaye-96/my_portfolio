'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy } from 'lucide-react'

const experiences = [
  {
    company: 'Infocom Services Group',
    role: 'Web Development Intern',
    period: 'April 2025 – August 2025',
    location: 'Dakar, Senegal',
    highlights: [
      'Developed and maintained Django / React web applications in a production environment',
      'Designed REST API modules with a focus on performance and maintainability',
      'Collaborated with frontend and backend teams in an agile workflow',
    ],
    stack: ['Django', 'React', 'PostgreSQL', 'REST APIs'],
  },
  {
    company: 'Bakeli (Volkeno)',
    role: 'Web Development Intern',
    period: 'February 2025 – April 2025',
    location: 'Remote (Online)',
    highlights: [
      'Built EasyService — a full-featured service management platform from scratch',
      'Developed a hotel reservation system with React, Node.js and MongoDB',
      'Integrated REST APIs and handled data persistence with MongoDB',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'Labdev IT',
    role: 'Web Development Intern',
    period: 'May 2021 · Oct – Dec 2023',
    location: 'Dakar, Senegal',
    highlights: [
      'Contributed to internal web projects alongside senior developers',
      'Built RESTful APIs using Django REST Framework',
      'Integrated React frontend interfaces with backend services',
    ],
    stack: ['Django', 'DRF', 'React', 'Python'],
  },
  {
    company: 'Tout en Génie Informatique (TGI)',
    role: 'IT Maintenance & Web Dev Intern',
    period: 'September 2023',
    location: 'Dakar, Senegal',
    highlights: [
      'Provided IT maintenance and technical support',
      'Created graphic content for internal communications',
      'Contributed to front-end web development tasks',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

const education = [
  {
    degree: "Master's Degree in Software Engineering",
    institution: 'Université Numérique Cheikh Hamidou Kane (UNCHK)',
    period: '2023 – Present',
    status: 'In Progress',
  },
  {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: 'Université Professionnelle du Sénégal (UNIPRO)',
    period: '2022 – 2023',
    status: 'Completed',
  },
  {
    degree: "Bachelor's in Applied Mathematics & Computer Science",
    institution: 'Université Numérique Cheikh Hamidou Kane (UNCHK)',
    period: '2022 – 2023',
    status: 'Completed',
  },
]

const hackathons = [
  {
    title: 'SENGAM Hackathon',
    organizer: 'SENGAM · GoMyCode, Dakar',
    period: 'April 2024',
    note: null,
  },
  {
    title: 'Dakar Innovation Days Hackathon',
    organizer: 'City of Dakar',
    period: 'July 2024',
    note: null,
  },
  {
    title: 'Blockchain Hackathon — E-Voting System',
    organizer: 'Bold African Movement (BAM)',
    period: 'October 2024',
    note: 'Built a decentralized e-voting system addressing electoral transparency.',
  },
  {
    title: 'Online Hackathon',
    organizer: 'Bakeli (Volkeno), Senegal',
    period: null,
    note: null,
  },
  {
    title: 'Banlieue Smart Days',
    organizer: 'Banlieue Smart Genius · Yeumbeul',
    period: null,
    note: null,
  },
  {
    title: 'Online Hackathon — "YourPast Hunts You" Game',
    organizer: 'Online',
    period: null,
    note: 'Built an interactive web game from scratch during the competition.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-28 relative bg-[#0D0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="section-number text-cyan-400 mb-4">06. EXPERIENCE & EDUCATION</p>
            <h2 className="text-4xl font-bold mb-4">
              Where I've{' '}
              <span className="gradient-text">worked & learned</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-8">
                <Briefcase size={18} className="text-cyan-400" />
                Work Experience
              </h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1E1E2E]" />
                <div className="space-y-7">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative flex gap-4"
                    >
                      <div className="relative z-10 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                        <Briefcase size={14} className="text-cyan-400" />
                      </div>
                      <div className="flex-1 card p-5 hover:border-cyan-500/20 transition-colors">
                        <h4 className="font-semibold text-slate-200 text-sm">{exp.company}</h4>
                        <p className="text-cyan-400 text-sm mt-0.5">{exp.role}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-600 mt-1 mb-3">
                          <span>{exp.period}</span>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {exp.highlights.map((h) => (
                            <li key={h} className="text-xs text-slate-500 flex items-start gap-2">
                              <span className="text-cyan-700 mt-0.5 shrink-0">→</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-600 border border-white/[0.07]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education + Hackathons */}
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-6">
                  <GraduationCap size={18} className="text-violet-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.12 }}
                      className="card p-5 hover:border-violet-500/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm">{edu.degree}</h4>
                          <p className="text-slate-500 text-xs mt-0.5">{edu.institution}</p>
                          <p className="text-slate-700 text-xs mt-1">{edu.period}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                            edu.status === 'In Progress'
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : 'bg-green-500/15 text-green-400 border border-green-500/30'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-5">
                  <Trophy size={18} className="text-yellow-500" />
                  Hackathons & Competitions
                </h3>
                <div className="space-y-3">
                  {hackathons.map((h, i) => (
                    <motion.div
                      key={h.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="card p-4 hover:border-yellow-500/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm">{h.title}</h4>
                          <p className="text-yellow-500/70 text-xs mt-0.5">{h.organizer}</p>
                          {h.note && (
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{h.note}</p>
                          )}
                        </div>
                        {h.period && (
                          <span className="text-slate-600 text-xs shrink-0">{h.period}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
