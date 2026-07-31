import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import toast from 'react-hot-toast';
import axios from 'axios';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'startup-mvp', label: 'Startup & MVP Development' },
    { value: 'custom-software', label: 'Custom Software Solutions' },
    { value: 'other', label: 'Other' }
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight">Let's Build Something Extraordinary</h2>
          <p className="text-gray-400 text-sm mt-2">Fill out the form or reach out directly. I respond within 24 hours.</p>
          <div className="w-12 h-px bg-white/20 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-light mb-4">How It Works</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 text-sm font-light">01</span>
                  <h4 className="text-white font-light">Share Your Idea</h4>
                </div>
                <p className="text-gray-500 text-sm font-light pl-7">Tell me about your project, goals, and timeline.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 text-sm font-light">02</span>
                  <h4 className="text-white font-light">Free Assessment</h4>
                </div>
                <p className="text-gray-500 text-sm font-light pl-7">I analyze feasibility, recommend a tech stack, and estimate scope.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 text-sm font-light">03</span>
                  <h4 className="text-white font-light">Tailored Plan</h4>
                </div>
                <p className="text-gray-500 text-sm font-light pl-7">Receive a detailed proposal with timeline, milestones, and pricing.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
              <div className="flex items-center gap-3">
                <FaClock className="text-cyan-400 w-4 h-4" />
                <p className="text-sm text-gray-400 font-light">I respond within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-light">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 mt-1"
                  placeholder="Rahul Patil"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-light">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 mt-1"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-light">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 mt-1"
                  placeholder="rahul@example.com"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-light">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 mt-1"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-light">Service Required *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 mt-1"
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>{service.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-light">Estimated Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 mt-1"
              >
                <option value="">Select budget range...</option>
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value}>{budget.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-light">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 resize-none mt-1"
                placeholder="Tell me about your project, goals, and timeline..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-light py-3 rounded-lg hover:bg-white/90 transition-colors duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;