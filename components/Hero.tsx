'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const headline = ['Engineering', 'the Future'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY       = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section ref={ref} id="home" className="relative w-full h-screen overflow-hidden bg-[#18181A]">
      {/* Parallax background */}
      <motion.div style={{ y: imgY, filter: 'brightness(0.35) contrast(1.1)' }} className="absolute inset-0 scale-105">
        <Image
          src="/images/WhatsApp Image 2026-07-15 at 9.57.31 AM (2).jpeg"
          alt="KHA-RIZ ENERGY solar installation"
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
      </motion.div>

      {/* Floating animation overlay */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="absolute bottom-28 md:bottom-36 left-10 md:left-16 z-10"
      >
        <h1 className="font-serif leading-[1.2]">
          {headline.map((line, li) => (
            <span key={li} className="block overflow-hidden pt-2.5 pb-0.5">
              {line.split(' ').map((word, wi) => (
                <motion.span
                  key={wi}
                  custom={li * 3 + wi}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-4 ${
                    li === 0
                      ? 'text-[clamp(44px,7.5vw,96px)] text-[#ECEAE0]'
                      : 'text-[clamp(44px,7.5vw,96px)] text-[#ECEAE0]/60'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
              {li === 1 && (
                <motion.span
                  custom={6}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block align-middle mr-4 text-[clamp(32px,5vw,64px)] text-[#ECEAE0]/60"
                >
                  <span className="inline-block animate-spin-slow">
                    ⊕
                  </span>
                </motion.span>
              )}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-mono text-[9px] tracking-[0.25em] text-[#ECEAE0]/80 mt-4 uppercase font-bold"
        >
          KHA-RIZ ENERGY LTD • CORPORATE CAPABILITY STATEMENT
        </motion.p>
      </motion.div>

      {/* CTA pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-12 right-10 md:right-16 z-10 flex gap-3"
      >
        <a
          href="#solutions"
          className="font-mono text-[9px] tracking-[0.12em] font-bold px-5 py-3 rounded-full bg-black/25 text-white border border-white/20 backdrop-blur-md hover:bg-black/40 hover:border-white/40 hover:scale-105 transition-all"
        >
          EXPLORE SOLUTIONS
        </a>
        <a
          href="#contact"
          className="font-mono text-[9px] tracking-[0.12em] font-bold px-5 py-3 rounded-full bg-[#ECEAE0] text-[#18181A] hover:bg-white hover:scale-105 transition-all"
        >
          × PARTNER WITH US
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-white/40 origin-top"
        />
      </motion.div>

    </section>
  );
}
