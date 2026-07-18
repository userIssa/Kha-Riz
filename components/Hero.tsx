'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const headline = ['Engineering Sustainable Energy.', 'Empowering Smarter Businesses.'];

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
      <motion.div style={{ y: imgY, filter: 'brightness(0.55) contrast(1.05)' }} className="absolute inset-0 scale-105">
        <Image
          src="/images/hero_ai.png"
          alt="KHA-RIZ ENERGY sustainable energy plant and EV hub"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
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
        className="absolute bottom-24 md:bottom-32 left-8 md:left-16 right-8 md:right-auto z-10 max-w-4xl"
      >
        <h1 className="font-serif leading-[1.15]">
          {headline.map((line, li) => (
            <span key={li} className="block overflow-hidden pt-1.5 pb-0.5">
              {line.split(' ').map((word, wi) => (
                <motion.span
                  key={wi}
                  custom={li * 3 + wi}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-3 ${
                    li === 0
                      ? 'text-[clamp(32px,5vw,68px)] text-[#ECEAE0]'
                      : 'text-[clamp(32px,5vw,68px)] text-[#ECEAE0]/75'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-mono text-[11px] md:text-[13px] tracking-[0.04em] text-[#ECEAE0]/90 mt-6 leading-[1.8] max-w-2xl"
        >
          KHA-RIZ ENERGY LTD delivers innovative renewable energy, engineering, electric mobility and EPC solutions that help businesses reduce operating costs, improve energy reliability and accelerate their transition to a cleaner, more sustainable future.
        </motion.p>
      </motion.div>

      {/* CTA pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-wrap gap-3"
      >
        <a
          href="#contact"
          className="font-mono text-[9px] tracking-[0.12em] font-bold px-6 py-3.5 rounded-full bg-[#ECEAE0] text-[#18181A] hover:bg-white hover:scale-105 transition-all shadow-lg"
        >
          REQUEST A CONSULTATION
        </a>
        <a
          href="#solutions"
          className="font-mono text-[9px] tracking-[0.12em] font-bold px-6 py-3.5 rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-black/60 hover:border-white/40 hover:scale-105 transition-all"
        >
          EXPLORE OUR SOLUTIONS
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
