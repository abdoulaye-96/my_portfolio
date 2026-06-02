'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

type ProjectStatus = 'Live' | 'In Progress' | 'Design'

interface StackItem { name: string; color: string }

interface Project {
  id: string
  title: string
  tagline: string
  type: string
  status: ProjectStatus
  tags: string[]
  gradient: string
  problem: string
  solution: string
  features: string[]
  stack: StackItem[]
  challenges: string[]
  outcome: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 'studpay',
    title: 'StudPay',
    tagline: 'Fintech platform for international students',
    type: 'Product Architecture · Microservices',
    status: 'In Progress',
    tags: ['Fintech', 'Microservices', 'System Design'],
    gradient: 'from-violet-600 to-indigo-600',
    problem:
      'International students face critical barriers: no local bank accounts, high cross-border transaction fees, and fragmented payment systems that make managing finances abroad stressful.',
    solution:
      'A comprehensive digital banking platform tailored for students — multi-currency wallets, automated KYC, low-cost transfers, and a React admin panel for financial operations.',
    features: [
      'Multi-currency digital wallet with real-time balances',
      'Automated KYC/AML onboarding pipeline',
      'Cross-border payment processing engine',
      'Admin panel (React) for operations team',
      'Microservices: auth, wallet, payments, notifications',
    ],
    stack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Spring Boot', color: '#6DB33F' },
      { name: 'Node.js', color: '#339933' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Docker', color: '#2496ED' },
    ],
    challenges: [
      'Designing a secure multi-tenant architecture for financial data',
      'Implementing eventual consistency across microservices',
      'Building compliant KYC flows without a third-party vendor',
    ],
    outcome:
      'Full product vision delivered: microservices architecture, admin panel, mobile-ready APIs, and a wallet service — all actively developed across multiple repositories.',
    github: 'https://github.com/abdoulaye-96',
  },
  {
    id: 'edu-platform',
    title: 'EduPlatform',
    tagline: 'Full-stack learning management system',
    type: 'Full Stack Web Application',
    status: 'Live',
    tags: ['Education', 'Django', 'React', 'PostgreSQL'],
    gradient: 'from-cyan-600 to-blue-600',
    problem:
      'Educational institutions lacked a centralized, modern platform to manage courses, track student progress, and streamline the assignment lifecycle.',
    solution:
      'A production-ready LMS with role-based access control for students, teachers, and administrators — built on Django REST Framework with a React frontend.',
    features: [
      'Three-role authentication (Student, Teacher, Admin)',
      'Course creation with rich content management',
      'Assignment submission and grading workflows',
      'Student progress dashboard with analytics',
      'Comprehensive REST API with DRF',
    ],
    stack: [
      { name: 'Django', color: '#44B78B' },
      { name: 'React', color: '#61DAFB' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Docker', color: '#2496ED' },
    ],
    challenges: [
      'Designing a flexible, extensible RBAC permission model',
      'Optimising DB queries for large student/course datasets',
      'Building a real-time notification system for submissions',
    ],
    outcome:
      'Production-ready LMS with clean architecture, a full REST API, and a responsive React frontend — used as a foundation for further feature development.',
    github: 'https://github.com/abdoulaye-96/learn-easy',
  },
  {
    id: 'hotel',
    title: 'Hotel Management System',
    tagline: 'Full-stack hospitality operations dashboard',
    type: 'Full Stack Web Application — MERN',
    status: 'Live',
    tags: ['Hospitality', 'React', 'Node.js', 'MongoDB'],
    gradient: 'from-green-600 to-teal-600',
    problem:
      'Small and mid-size hotels managed reservations manually via spreadsheets, leading to overbooking, lost revenue, and poor guest experiences.',
    solution:
      'A comprehensive MERN-stack dashboard providing real-time room availability, end-to-end reservation management, and operational analytics.',
    features: [
      'Real-time room availability grid',
      'Guest reservation lifecycle management',
      'Check-in / check-out workflows',
      'Revenue and occupancy analytics',
      'REST API built with Express.js',
    ],
    stack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#9CA3AF' },
      { name: 'MongoDB', color: '#47A248' },
    ],
    challenges: [
      'Handling concurrent reservation conflicts without race conditions',
      'Designing an intuitive UI for non-technical hotel staff',
      'MongoDB aggregation pipeline for real-time analytics',
    ],
    outcome:
      'Complete hotel management solution built during internship at Bakeli, demonstrating full MERN stack proficiency and real-world product thinking.',
    github: 'https://github.com/abdoulaye-96/gestionHotel',
  },
  {
    id: 'easyservice',
    title: 'EasyService',
    tagline: 'Full-stack service management platform',
    type: 'Full Stack Web Application — MERN',
    status: 'Live',
    tags: ['Service Management', 'React', 'Node.js', 'MongoDB'],
    gradient: 'from-orange-600 to-amber-600',
    problem:
      'Service providers and freelancers lacked a centralized platform to manage service offerings, track client requests, and handle the full lifecycle of a service engagement.',
    solution:
      'A full-featured service management platform built with the MERN stack — enabling service providers to list services, manage incoming requests, and track job status from a clean dashboard.',
    features: [
      'Service listing and categorization',
      'Client request submission and tracking',
      'Provider dashboard with job pipeline',
      'Status management (pending, in progress, completed)',
      'REST API with Express.js and MongoDB',
    ],
    stack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#9CA3AF' },
      { name: 'MongoDB', color: '#47A248' },
    ],
    challenges: [
      'Designing a clear state machine for service request lifecycles',
      'Building an intuitive dashboard that works for both providers and clients',
      'Handling real-time status updates across user roles',
    ],
    outcome:
      'A complete, production-ready service management platform developed during internship at Bakeli — demonstrating full MERN stack proficiency and real-world product delivery.',
    github: 'https://github.com/abdoulaye-96',
  },
]

const statusStyle: Record<ProjectStatus, string> = {
  'Live': 'bg-green-500/15 text-green-400 border-green-500/30',
  'In Progress': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  'Design': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card overflow-hidden hover:border-slate-600/50 transition-all duration-300 flex flex-col"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyle[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="text-slate-400 text-sm">{project.tagline}</p>
            <p className="text-slate-600 text-xs mt-0.5 font-mono">{project.type}</p>
          </div>
          <div className="flex gap-1.5 shrink-0 ml-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-cyan-400 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.07]">
              {tag}
            </span>
          ))}
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="text-xs font-mono text-cyan-500 uppercase tracking-wider mb-1.5">Problem</p>
          <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech.name}
              className="text-xs px-2 py-1 rounded-md font-mono"
              style={{
                backgroundColor: `${tech.color}15`,
                color: tech.color,
                border: `1px solid ${tech.color}30`,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-cyan-400 transition-colors mt-auto"
        >
          {open ? 'Hide' : 'View'} full case study
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-[#1E1E2E] space-y-4">
                <div>
                  <p className="text-xs font-mono text-green-500 uppercase tracking-wider mb-1.5">Solution</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1.5">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-600 mt-0.5 shrink-0">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-1.5">Technical Challenges</p>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5 shrink-0">⚡</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1.5">Outcome</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-number text-cyan-400 mb-4">03. FEATURED PROJECTS</p>
          <h2 className="text-4xl font-bold mb-4">
            Products I've{' '}
            <span className="gradient-text">designed & shipped</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world problems solved with thoughtful engineering. Click{' '}
            <span className="text-slate-300">View full case study</span> for architecture, challenges,
            and outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            These are just the highlights — I have more projects on GitHub.
          </p>
          <motion.a
            href="https://github.com/abdoulaye-96"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <FaGithub size={18} />
            See all my projects on GitHub
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
