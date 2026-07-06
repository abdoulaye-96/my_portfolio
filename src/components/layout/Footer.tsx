import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-10 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">AS</span>
            <span className="text-slate-500 text-sm font-medium">Abdoulaye Sène</span>
          </div>

          <p className="text-slate-500 text-sm text-center">
            Designed & built by Abdoulaye Sène · {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abdoulaye-96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdoulaye-sene-707801203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:seneabdoulaye124@gmail.com"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
