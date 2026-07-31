import { motion } from 'framer-motion';

function About() {
  const stats = [
    { value: '7+', label: 'LIVE PRODUCTS' },
    { value: '6', label: 'INDUSTRIES SERVED' },
    { value: 'Full Stack', label: 'DEVELOPMENT' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight">About</h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-3"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/[0.02] border border-white/5 rounded-lg p-6">
              <div className="text-3xl font-light text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
        >
          I've built production-ready applications across Healthcare, Fitness Tech, 
          and FinTech domains, including MyGymBook, IPO Tracker, and MCCD App.
          <br /><br />
          My focus is creating fast, beautiful, and business-focused software that 
          solves real-world problems through engineering excellence paired with 
          deep business understanding.
        </motion.p>
      </div>
    </section>
  );
}

export default About;