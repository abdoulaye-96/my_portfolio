'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiDjango, SiNodedotjs, SiFastapi, SiSpring,
  SiPostgresql, SiMongodb, SiMysql,
  SiDocker, SiGitlab, SiLinux, SiKubernetes, SiNginx, SiGit,
  SiFigma,
} from 'react-icons/si'
import { Brain, Zap, GitBranch, Server } from 'lucide-react'
import type { IconComponent } from '@/lib/icon-types'

type SkillLevel = 'Advanced' | 'Intermediate' | 'Learning'

interface Skill {
  name: string
  icon: IconComponent
  color: string
  level: SkillLevel
}

interface Category {
  title: string
  gradient: string
  glowClass: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: 'Frontend',
    gradient: 'from-cyan-500 to-blue-500',
    glowClass: 'hover:border-cyan-500/30',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 'Advanced' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 'Advanced' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 'Intermediate' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 'Advanced' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & APIs',
    gradient: 'from-blue-500 to-violet-500',
    glowClass: 'hover:border-blue-500/30',
    skills: [
      { name: 'Django / DRF', icon: SiDjango, color: '#44B78B', level: 'Advanced' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 'Advanced' },
      { name: 'Express.js', icon: Server, color: '#9CA3AF', level: 'Advanced' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 'Learning' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', level: 'Learning' },
    ],
  },
  {
    title: 'Databases',
    gradient: 'from-violet-500 to-purple-500',
    glowClass: 'hover:border-violet-500/30',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 'Advanced' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'Advanced' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 'Advanced' },
    ],
  },
  {
    title: 'DevOps & Infra',
    gradient: 'from-orange-500 to-amber-500',
    glowClass: 'hover:border-orange-500/30',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 'Advanced' },
      { name: 'GitLab CI/CD', icon: SiGitlab, color: '#FCA121', level: 'Intermediate' },
      { name: 'Linux / VPS', icon: SiLinux, color: '#FCC624', level: 'Intermediate' },
      { name: 'Nginx', icon: SiNginx, color: '#009900', level: 'Intermediate' },
      { name: 'ArgoCD', icon: GitBranch, color: '#EF7B4D', level: 'Learning' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: 'Learning' },
    ],
  },
  {
    title: 'AI & Emerging',
    gradient: 'from-pink-500 to-violet-500',
    glowClass: 'hover:border-pink-500/30',
    skills: [
      { name: 'CrewAI Agents', icon: Brain, color: '#A78BFA', level: 'Learning' },
      { name: 'LLM Applications', icon: Zap, color: '#F59E0B', level: 'Learning' },
      { name: 'AI Engineering', icon: Server, color: '#C084FC', level: 'Learning' },
    ],
  },
  {
    title: 'Tools & Design',
    gradient: 'from-green-500 to-teal-500',
    glowClass: 'hover:border-green-500/30',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 'Advanced' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 'Intermediate' },
    ],
  },
]

const levelStyle: Record<SkillLevel, string> = {
  Advanced: 'bg-cyan-500/15 text-cyan-400',
  Intermediate: 'bg-blue-500/15 text-blue-400',
  Learning: 'bg-violet-500/15 text-violet-400',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-28 relative bg-[#0D0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="section-number text-cyan-400 mb-4">02. TECHNICAL EXPERTISE</p>
            <h2 className="text-4xl font-bold mb-4">
              Full-spectrum{' '}
              <span className="gradient-text">technical stack</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From UI components to Kubernetes manifests — built for end-to-end product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card p-6 transition-all duration-300 ${cat.glowClass}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                  <h3 className="font-semibold text-slate-200 text-sm">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map(({ name, icon: Icon, color, level }) => (
                    <div key={name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 shrink-0" style={{ color }} />
                        <span className="text-sm text-slate-300">{name}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${levelStyle[level]}`}>
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
