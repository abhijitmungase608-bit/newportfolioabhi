import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

function Work() {
  return (
    <section id="work" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight">Work</h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-3"></div>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/[0.02] border border-white/5 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-light group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-500">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-light mt-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech: string, i: number) => (
                      <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                >
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;