import { ExternalLink, Code, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon UI Library',
    desc: 'A collection of reactive, neon-styled components with smooth motion and accessibility in mind.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    icon: Code,
    link: '#',
  },
  {
    title: 'Realtime 3D Playground',
    desc: 'Interactive 3D scenes powered by Spline and WebGL with thoughtful performance tuning.',
    tags: ['Spline', 'WebGL', 'Shaders'],
    icon: Rocket,
    link: '#',
  },
  {
    title: 'AI Dev Tools',
    desc: 'Lightweight utilities for faster prototyping, linting, and scaffolding in modern stacks.',
    tags: ['TypeScript', 'Node', 'CLI'],
    icon: Cpu,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-cyan-100"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-2 text-cyan-200/70 max-w-2xl">
          A selection of work exploring interface design, 3D, and high-performance frontends.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl border border-cyan-500/20 bg-slate-950/60 p-6 overflow-hidden hover:border-cyan-300/40 transition-colors"
              >
                <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-cyan-400/10 border border-cyan-400/30 text-cyan-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-cyan-100 font-medium text-lg">{p.title}</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-cyan-300/70" />
                  </div>
                  <p className="mt-3 text-sm text-cyan-200/70">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-cyan-200/80 border border-cyan-400/30 bg-cyan-500/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
