'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'DevOps', href: '#devops' },
  { label: 'AI', href: '#ai' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0F]/90 backdrop-blur-md border-b border-[#1E1E2E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a href="#" whileHover={{ scale: 1.05 }} className="flex items-center gap-1">
            <span className="text-lg font-bold gradient-text">AS</span>
            <span className="text-slate-600">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -1 }}
                className="px-3 py-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-cyan-500/5"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="mailto:seneabdoulaye124@gmail.com"
              className="ml-3 px-4 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#1E1E2E] bg-[#0B0B0F]/98 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:seneabdoulaye124@gmail.com"
                className="mt-2 px-4 py-3 text-center text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
