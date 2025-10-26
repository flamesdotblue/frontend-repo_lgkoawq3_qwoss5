import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-cyan-100"
        >
          Let's build something futuristic
        </motion.h2>
        <p className="mt-3 text-cyan-200/70">
          Open to collaborations, internships, and freelance projects. I reply fast.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vishruth@example.com"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-black bg-cyan-300/90 hover:bg-cyan-300 transition-colors"
          >
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-cyan-200 border border-cyan-500/30 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-cyan-200 border border-cyan-500/30 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-cyan-300/60">© {new Date().getFullYear()} Vishruth Sai Thuraka. All rights reserved.</p>
      </div>
    </section>
  );
}
