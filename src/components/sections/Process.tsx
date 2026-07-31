import { motion } from 'framer-motion';

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'I start by deeply understanding your business goals, target audience, and technical constraints.'
    },
    {
      number: '02',
      title: 'Architecture',
      description: 'I design a scalable technical foundation and create high-fidelity prototypes.'
    },
    {
      number: '03',
      title: 'Agile Build',
      description: 'I develop in 2-week sprints, giving you full visibility and frequent demos.'
    },
    {
      number: '04',
      title: 'Launch & Scale',
      description: 'I deploy to production, monitor performance, and provide ongoing support.'
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight">How I Work</h2>
          <p className="text-gray-400 text-sm mt-2">A transparent, iterative process designed to deliver value quickly and consistently.</p>
          <div className="w-12 h-px bg-white/20 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-lg p-6 hover:border-white/10 transition-all"
            >
              <div className="text-3xl font-light text-cyan-400/30 mb-2">{step.number}</div>
              <h3 className="text-lg font-light mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;