import { motion } from 'framer-motion';
import { FaMobileAlt, FaRocket, FaCogs, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: FaMobileAlt,
      title: 'Mobile App Development',
      description: 'Build high-performance Android, iOS and Flutter applications.',
      items: ['Flutter Apps', 'Android Apps', 'iOS Apps', 'Cross Platform Solutions']
    },
    {
      icon: FaRocket,
      title: 'Startup & MVP Development',
      description: 'Transform ideas into launch-ready products quickly.',
      items: ['MVP Development', 'Product Strategy', 'UI/UX Design', 'Rapid Prototyping']
    },
    {
      icon: FaCogs,
      title: 'Custom Software Solutions',
      description: 'Tailored software built around your business workflow.',
      items: ['CRM Systems', 'Gym Management', 'Healthcare Platforms', 'Business Automation']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight">Services</h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <service.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-light mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm font-light mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400/50 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mt-4 group-hover:gap-3"
              >
                Learn More <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;