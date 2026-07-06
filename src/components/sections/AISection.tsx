'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Zap, BookOpen, Sparkles } from 'lucide-react'

interface RoadmapItem {
  phase: string
  title: string
  status: 'completed' | 'active' | 'upcoming'
  items: string[]
}

const roadmap: RoadmapItem[] = [
  {
    phase: '01',
    title: 'LLM Foundations',
    status: 'completed',
    items: [
      'LLM concepts & prompt engineering',
      'OpenAI & Anthropic API integration',
      'Building LLM-powered application features',
    ],
  },
  {
    phase: '02',
    title: 'AI Agents',
    status: 'active',
    items: [
      'CrewAI multi-agent orchestration',
      'Tool use & function calling',
      'Agent memory and state management',
    ],
  },
  {
    phase: '03',
    title: 'RAG & Vector Search',
    status: 'upcoming',
    items: [
      'LangChain & LlamaIndex',
      'Vector databases (pgvector, Pinecone)',
      'Retrieval-augmented generation pipelines',
    ],
  },
  {
    phase: '04',
    title: 'LLMOps & Production',
    status: 'upcoming',
    items: [
      'Model deployment and serving',
      'Observability for LLM applications',
      'Fine-tuning and RLHF fundamentals',
    ],
  },
]

const aiProjects = [
  {
    emoji: '🤖',
    title: 'Multi-Agent Research System',
    description:
      'Built with CrewAI — specialized agents collaborate to research topics, cross-verify sources, and generate structured reports autonomously.',
    tags: ['CrewAI', 'Python', 'LLM', 'Agents'],
  },
  {
    emoji: '💬',
    title: 'LLM-Powered Chat Interface',
    description:
      'Full-stack conversational application using the Anthropic API — streaming responses, context management, and a React frontend.',
    tags: ['React', 'Node.js', 'Anthropic API', 'Streaming'],
  },
]

const statusConfig = {
  completed: {
    color: 'text-green-400',
    borderColor: 'border-green-500/20',
    bgColor: 'bg-green-500/[0.07]',
    dot: 'bg-green-500',
    label: 'Completed',
  },
  active: {
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/[0.07]',
    dot: 'bg-cyan-500 animate-pulse',
    label: 'In Progress',
  },
  upcoming: {
    color: 'text-slate-500',
    borderColor: 'border-white/[0.07]',
    bgColor: 'bg-white/[0.02]',
    dot: 'bg-slate-700',
    label: 'Upcoming',
  },
}

export default function AISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ai" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_20%,rgba(139,92,246,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="section-number text-violet-400 mb-4">05. AI ENGINEERING</p>
            <h2 className="text-4xl font-bold mb-4">
              The next frontier:{' '}
              <span className="gradient-text-ai">AI Engineering</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Software is evolving. I'm actively positioning myself at the intersection of Full
              Stack development and AI Engineering — building intelligent applications that go far
              beyond traditional CRUD.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Learning Roadmap */}
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-7">
                <BookOpen size={18} className="text-violet-400" />
                Learning Roadmap
              </h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1E1E2E]" />
                <div className="space-y-5">
                  {roadmap.map((item) => {
                    const cfg = statusConfig[item.status]
                    return (
                      <div key={item.phase} className="relative flex gap-4">
                        <div className="relative z-10 w-10 h-10 rounded-full bg-[#13131A] border border-[#1E1E2E] flex items-center justify-center shrink-0">
                          <div className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                        </div>
                        <div className={`flex-1 p-4 rounded-xl border ${cfg.borderColor} ${cfg.bgColor}`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500 font-mono">{item.phase}</span>
                              <h4 className={`font-semibold text-sm ${cfg.color}`}>{item.title}</h4>
                            </div>
                            <span className={`text-xs ${cfg.color}`}>{cfg.label}</span>
                          </div>
                          <ul className="space-y-1">
                            {item.items.map((it) => (
                              <li key={it} className="text-xs text-slate-500 flex items-center gap-2">
                                <span className="text-slate-700">·</span>
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-5">
                  <Sparkles size={18} className="text-violet-400" />
                  AI Projects
                </h3>
                <div className="space-y-4">
                  {aiProjects.map((p) => (
                    <div
                      key={p.title}
                      className="card p-5 hover:border-violet-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl leading-none mt-0.5">{p.emoji}</span>
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm mb-1">{p.title}</h4>
                          <p className="text-sm text-slate-500 mb-3 leading-relaxed">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why card */}
              <div className="card p-6 border-violet-500/20 bg-gradient-to-br from-violet-500/[0.06] to-transparent">
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={18} className="text-violet-400" />
                  <h3 className="font-semibold text-slate-200">Why AI Engineering?</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  The next generation of software doesn't just respond — it reasons, plans, and
                  adapts. As a Full Stack developer who already understands deployment and
                  infrastructure, I'm uniquely positioned to build AI-powered applications that
                  actually reach production.
                </p>
                <div className="flex items-center gap-2 text-sm text-violet-400">
                  <Zap size={14} />
                  <span>Focused on agentic workflows and production LLM systems</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
