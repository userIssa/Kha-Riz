'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const values = [
  { name: 'Professionalism', desc: 'We uphold the highest standards of technical competence, accountability and service excellence.' },
  { name: 'Innovation', desc: 'We continuously embrace emerging technologies and engineering best practices.' },
  { name: 'Integrity', desc: 'We conduct our business with honesty, transparency and ethical responsibility.' },
  { name: 'Safety', desc: 'We maintain an uncompromising commitment to protecting people, assets and the environment.' },
  { name: 'Excellence', desc: 'We pursue excellence in planning, execution and service delivery.' },
  { name: 'Sustainability', desc: 'Creating long-term environmental and operational value through sustainable energy practices.' },
  { name: 'Customer Focus', desc: 'Partnering closely with clients to deliver tailored solutions that exceed expectations.' }
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#ECEAE0] text-[#18181A] min-h-screen flex flex-col justify-center py-28 px-8 md:px-16 overflow-hidden relative"
    >
      {/* Top transition gradient from Hero dark background to cream */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#18181A] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8 uppercase"
        >
          ABOUT KHA-RIZ ENERGY LTD
        </motion.p>

        {/* Row 1: Intro Story & Main Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.1] mb-8"
            >
              Powering Nigeria’s <br />
              <span className="text-[#9A9A90]">Energy Transition</span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-mono text-[11px] tracking-[0.04em] text-[#5A5A54] leading-[2] mb-6"
            >
              KHA-RIZ ENERGY LTD is an indigenous, forward-thinking renewable energy and engineering company delivering integrated solutions across commercial, industrial and government sectors. Due to grid instability and high cost of combusting alternative power systems, organizations require resilient infrastructure designed for long-term performance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="font-mono text-[11px] tracking-[0.04em] text-[#5A5A54] leading-[2] mb-8"
            >
              Our expertise covers solar EPC, battery energy storage, electric vehicle infrastructure, engineering procurement and construction (EPC), and intelligent energy management systems. Driven by innovation and technical excellence, we partner with clients to design, build and maintain reliable energy infrastructure that improves operational efficiency, reduces carbon emissions and creates long-term value.
            </motion.p>

            {/* Key Registry Badges */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-8 pt-6 border-t border-[#5A5A54]/15"
            >
              {[
                { num: 'RC 9252950', label: 'Registered' },
                { num: 'Nigeria', label: 'Service Coverage' },
                { num: 'EPC + O&M', label: 'Delivery Model' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-xl text-[#18181A] font-semibold">{s.num}</p>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-[#9A9A90] mt-1 uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <div className="relative h-[540px] overflow-hidden rounded-sm ring-1 ring-[#5A5A54]/15 shadow-sm">
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
              <Image
                src="/images/WhatsApp Image 2026-07-15 at 9.57.30 AM.jpeg"
                alt="Solar Panel Grid Site"
                fill
                className="object-cover object-center"
              />
            </motion.div>
            {/* Frame accent */}
            <div className="absolute inset-0 ring-1 ring-[#5A5A54]/15 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* Row 2: Vision, Mission & Pull Quote */}
        <div className="grid md:grid-cols-3 gap-10 mb-24 border-t border-[#5A5A54]/15 pt-16">
          <div className="md:col-span-2 space-y-8">
            <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/30">
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">Our Vision</h3>
              <p className="font-mono text-[11px] tracking-[0.04em] text-[#5A5A54] leading-[2]">
                To become Africa’s leading provider of innovative, sustainable and reliable energy and infrastructure solutions that drive economic growth and industrial transformation.
              </p>
            </div>
            <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/30">
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">Our Mission</h3>
              <p className="font-mono text-[11px] tracking-[0.04em] text-[#5A5A54] leading-[2]">
                To deliver high-quality engineering, procurement, renewable energy and infrastructure solutions that exceed client expectations while maintaining the highest standards of safety, professionalism and environmental responsibility.
              </p>
            </div>
          </div>
          
          {/* Pull Quote / Why We Exist Column */}
          <div className="flex flex-col justify-between p-8 border-l border-[#5A5A54]/15 bg-[#E2DFD4]/20 rounded-sm">
            <div>
              <h3 className="font-serif text-xl text-[#18181A] mb-3">Why We Exist</h3>
              <p className="font-mono text-[10px] tracking-[0.04em] text-[#5A5A54] leading-relaxed mb-6">
                Nigeria’s growing energy demand requires smarter, cleaner and more resilient infrastructure. KHA-RIZ ENERGY exists to bridge this gap by delivering intelligent engineering solutions that improve energy security, reduce operational costs and support sustainable development.
              </p>
            </div>
            <div className="pt-4 border-t border-[#5A5A54]/15">
              <h4 className="font-serif text-lg text-[#18181A] mb-2 font-semibold">Our Commitment</h4>
              <p className="font-mono text-[9px] tracking-[0.04em] text-[#5A5A54] leading-relaxed">
                We believe every organization deserves reliable energy infrastructure. Through engineering expertise and strategic partnerships, we create lasting value for our clients and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Core Values Grid */}
        <div className="border-t border-[#5A5A54]/15 pt-16">
          <h3 className="font-serif text-3xl text-[#18181A] mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/20 hover:bg-[#E2DFD4]/40 transition-colors">
                <h4 className="font-mono text-[11px] tracking-[0.15em] font-bold text-[#18181A] uppercase mb-2">
                  {v.name}
                </h4>
                <p className="font-mono text-[10px] tracking-[0.04em] text-[#5A5A54] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
