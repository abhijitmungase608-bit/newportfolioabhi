import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full border-2 border-white/10 mx-auto flex items-center justify-center bg-white/5">
            <span className="text-4xl">👤</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight"
        >
          I Build Software That
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Moves Businesses Forward
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
        >
          I'm a Software Developer from Maharashtra, India. I build scalable 
          mobile applications, admin dashboards, SaaS products, and modern 
          business software using Flutter, Firebase, Supabase, Node.js, 
          PostgreSQL, and cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/work"
            className="px-6 py-3 bg-white text-black rounded-lg text-sm font-light hover:bg-white/90 transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-light hover:bg-white/10 transition-colors"
          >
            Let's Talk
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown className="text-gray-500 w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;