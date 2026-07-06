import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

const DevOps = dynamic(() => import('@/components/sections/DevOps'))
const AISection = dynamic(() => import('@/components/sections/AISection'))
const Experience = dynamic(() => import('@/components/sections/Experience'))

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DevOps />
      <AISection />
      <Experience />
      <Contact />
    </>
  )
}
