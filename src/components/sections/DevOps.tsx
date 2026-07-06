'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiDocker, SiGitlab, SiLinux, SiKubernetes, SiNginx } from 'react-icons/si'
import { Terminal, GitBranch, Package, Server, Cpu, Code2 } from 'lucide-react'
import type { IconComponent } from '@/lib/icon-types'

type Level = 'Proficient' | 'Intermediate' | 'Learning'

interface DevOpsItem {
  icon: IconComponent
  name: string
  color: string
  level: Level
  description: string
  practices: string[]
}

const devopsItems: DevOpsItem[] = [
  {
    icon: SiDocker,
    name: 'Docker & Containerization',
    color: '#2496ED',
    level: 'Proficient',
    description:
      'Containerizing applications with multi-stage Dockerfiles, Docker Compose for full-stack local environments, and image optimization for lean production images.',
    practices: ['Multi-stage builds', 'Compose stacks', 'Volume management', 'Network isolation'],
  },
  {
    icon: SiGitlab,
    name: 'GitLab CI/CD Pipelines',
    color: '#FCA121',
    level: 'Proficient',
    description:
      'Building automated pipelines that go from code push to production deployment — with stages for linting, testing, building Docker images, and deploying to servers.',
    practices: ['.gitlab-ci.yml', 'Pipeline stages', 'Environment secrets', 'Artifact registry'],
  },
  {
    icon: SiLinux,
    name: 'Linux & VPS Management',
    color: '#FCC624',
    level: 'Intermediate',
    description:
      'Server provisioning from scratch, SSH hardening, systemd service management, log monitoring, and applying security best practices for production servers.',
    practices: ['Server hardening', 'systemd services', 'Log analysis', 'UFW firewall'],
  },
  {
    icon: SiNginx,
    name: 'Nginx — Reverse Proxy & TLS',
    color: '#009900',
    level: 'Intermediate',
    description:
      'Configuring Nginx as a reverse proxy for containerized apps, SSL/TLS termination with Let\'s Encrypt, and serving static assets at scale.',
    practices: ['Reverse proxy config', 'SSL termination', 'Static file serving', 'Rate limiting'],
  },
  {
    icon: GitBranch,
    name: 'ArgoCD — GitOps',
    color: '#EF7B4D',
    level: 'Learning',
    description:
      'Implementing GitOps workflows where Git is the single source of truth for infrastructure and application state — automated sync from repository to cluster.',
    practices: ['Application manifests', 'Auto-sync policies', 'Health checks', 'Rollback'],
  },
  {
    icon: SiKubernetes,
    name: 'Kubernetes Orchestration',
    color: '#326CE5',
    level: 'Learning',
    description:
      'Container orchestration for deploying, scaling, and managing stateless and stateful applications across a production-grade cluster.',
    practices: ['Deployments & Pods', 'Services & Ingress', 'ConfigMaps', 'Namespaces'],
  },
]

const levelStyle: Record<Level, string> = {
  Proficient: 'bg-green-500/15 text-green-400 border-green-500/30',
  Intermediate: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  Learning: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
}

const pipelineSteps = [
  { icon: Code2, label: 'Code' },
  { icon: Terminal, label: 'Lint & Test' },
  { icon: Package, label: 'Build Image' },
  { icon: SiDocker, label: 'Container' },
  { icon: Server, label: 'Deploy' },
  { icon: Cpu, label: 'Monitor' },
]

export default function DevOps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="devops" className="py-28 relative bg-[#0D0D14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(251,146,60,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="section-number text-orange-400 mb-4">04. DEVOPS & INFRASTRUCTURE</p>
            <h2 className="text-4xl font-bold mb-4">
              Code is just the beginning.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                I also ship it.
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Beyond writing code, I understand what it takes to deploy, maintain, and scale
              applications in production. DevOps isn't a separate job — it's part of how I build.
            </p>
          </div>

          {/* Pipeline visual */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-16">
            {pipelineSteps.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2 min-w-[72px]">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange-400/70" />
                  </div>
                  <span className="text-xs text-slate-500">{label}</span>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <span className="text-slate-700 text-lg mb-4 shrink-0">→</span>
                )}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {devopsItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card p-6 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-semibold text-slate-200 text-sm leading-snug">
                        {item.name}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ml-2 ${levelStyle[item.level]}`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.practices.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-600 border border-white/[0.06]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
