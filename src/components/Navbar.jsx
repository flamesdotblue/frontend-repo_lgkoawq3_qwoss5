import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/40 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-cyan-300 font-semibold tracking-wide text-sm sm:text-base">
          Vishruth Sai Thuraka
        </a>
        <nav className="flex items-center gap-3">
          <a
            href="mailto:vishruth@example.com"
            className="p-2 rounded-md border border-cyan-500/20 hover:border-cyan-400/40 text-cyan-200/90 hover:text-cyan-100 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-cyan-500/20 hover:border-cyan-400/40 text-cyan-200/90 hover:text-cyan-100 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-cyan-500/20 hover:border-cyan-400/40 text-cyan-200/90 hover:text-cyan-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
