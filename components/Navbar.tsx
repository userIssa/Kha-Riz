'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'MOBILITY', href: '#mobility' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'LEADERSHIP', href: '#leadership' },
];

export default function Navbar() {
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // light sections: about, solutions, mobility, projects, leadership
    const lightIds = ['about', 'solutions', 'mobility', 'projects', 'leadership'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOnLight(lightIds.includes(e.target.id));
          }
        });
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0.15 }
    );

    // observe all sections
    [...lightIds, 'home', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const textColor = onLight ? 'text-[#18181A]' : 'text-[#ECEAE0]';
  const dotColor  = onLight ? 'text-[#9A9A90]' : 'text-[#ECEAE0]/40';

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl h-14 rounded-full px-6 flex items-center justify-between transition-all duration-500 backdrop-blur-md border shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] ${
          onLight
            ? 'bg-[#ECEAE0]/50 border-black/10 shadow-black/5'
            : 'bg-black/35 border-white/15 shadow-black/25'
        } ${textColor}`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
            {/* Architectural vertical pillar */}
            <motion.path
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              d="M4 3h2.5v18H4z"
              fill="currentColor"
              className="opacity-90"
            />
            {/* Energy core node in negative space */}
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              cx="7.75"
              cy="12"
              r="1"
              fill="currentColor"
              className="opacity-75"
            />
            {/* Solar ray / upper diagonal */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              d="M9 11.5L17.5 3H20L11.5 11.5z"
              fill="currentColor"
            />
            {/* Mobility flow / lower diagonal */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              d="M11.5 12.5L20 21h-2.5L9 12.5z"
              fill="currentColor"
            />
          </svg>
          <span className="font-mono text-[10px] tracking-[0.18em] font-bold">
            KHA-RIZ
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 font-mono text-[9px] tracking-[0.12em] font-bold">
          {links.map((l) => (
            <li key={l.label} className="flex items-center gap-1">
              <span className={`${dotColor} transition-colors duration-500`}>•</span>
              <a href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-5 font-mono text-[9px] tracking-[0.12em] font-bold">
          <a
            href="#contact"
            className="opacity-85 hover:opacity-100 transition-opacity"
          >
            × PARTNER WITH US
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#18181A] flex flex-col items-center justify-center gap-10"
          >
            {[...links, { label: 'PARTNER WITH US', href: '#contact' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-[#ECEAE0] opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
