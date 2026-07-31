"use client";

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Next.js ka hook

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={
        'fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ' +
        (scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent')
      }
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-light tracking-tight text-lg hover:text-cyan-400 transition-colors duration-300"
        >
          AM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={
                  'text-sm transition-colors duration-300 font-light relative ' +
                  (isActive ? 'text-white' : 'text-gray-400 hover:text-white')
                }
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 mt-4">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-300 font-light w-full text-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}