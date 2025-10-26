import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-700/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-200/90 text-xs sm:text-sm"
        >
          Blue Neon • Futuristic • 3D
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-cyan-100"
        >
          Vishruth Sai Thuraka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-cyan-200/80"
        >
          17-year-old developer crafting immersive web experiences at the intersection of
          design, code, and real-time 3D. Passionate about performance, interaction, and
          beautiful motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-black bg-cyan-300/90 hover:bg-cyan-300 transition-colors"
          >
            View Projects
            <span className="absolute inset-0 rounded-lg ring-2 ring-cyan-400/50 group-hover:ring-cyan-300/80 transition" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-cyan-200 border border-cyan-500/30 hover:border-cyan-300/60 hover:text-cyan-100 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
