import Link from "next/link";
import { socialLinks } from "../../Data/socialLinks";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-light mb-3">Abhijit Mungase</h3>
            <p className="text-gray-500 text-sm font-light">Software Developer</p>
            <p className="text-gray-500 text-sm font-light">Maharashtra, India</p>
          </div>

          <div>
            <h4 className="text-white font-light text-sm mb-3">SERVICES</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Startup & MVP Development</Link></li>
              <li><Link to="/services" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-light text-sm mb-3">COMPANY</h4>
            <ul className="space-y-2">
              <li><Link to="/work" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="text-gray-500 text-sm font-light hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-500 text-sm font-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs font-light">
              © {currentYear} Abhijit Mungase. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;