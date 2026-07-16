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
  { name: 'Integrity', desc: 'We conduct our business with honesty, transparency and ethical responsibility.' },
  { name: 'Innovation', desc: 'We continuously embrace emerging technologies and engineering best practices.' },
  { name: 'Safety', desc: 'We maintain an uncompromising commitment to protecting people, assets and the environment.' },
  { name: 'Excellence', desc: 'We pursue excellence in planning, execution and service delivery.' }
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
        
        {/* Row 1: Intro Story & Main Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Text column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8"
            >
              ABOUT US <span className="mx-2">•</span> 01 / 06
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8"
            >
              <span className="text-[#18181A] block">The Energy Transition</span>
              <span className="text-[#9A9A90] block">Has Begun</span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2] mb-6"
            >
              Africa is entering a defining era in its energy journey. Across industries, organizations are rethinking how energy is generated, distributed, managed and consumed. Rising fuel costs, grid instability, rapid urbanization and operational resilience demand integrated systems designed for long-term performance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2] mb-8"
            >
              KHA-RIZ ENERGY LTD was established to meet this need. As a specialist energy company, we deliver integrated renewable energy, EPC, electric mobility and smart infrastructure solutions. Built upon engineering expertise developed through the Kharis ecosystem, we design and support intelligent energy networks.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-8 pt-4 border-t border-[#5A5A54]/15"
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
          <div className="md:col-span-2 space-y-10">
            <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/30">
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">Our Vision</h3>
              <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
                To become Africa’s leading integrated energy and infrastructure company, delivering innovative, sustainable and intelligent solutions that accelerate industrial growth, strengthen energy resilience and support long-term economic development.
              </p>
            </div>
            <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/30">
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">Our Mission</h3>
              <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
                To deliver world-class engineering, renewable energy and infrastructure solutions through technical excellence, innovation, strategic partnerships and disciplined project execution, creating lasting value for our clients.
              </p>
            </div>
          </div>
          
          {/* Pull Quote Column */}
          <div className="flex flex-col justify-center p-8 border-l border-[#5A5A54]/15">
            <span className="font-serif text-5xl text-[#9A9A90] opacity-35 leading-none">“</span>
            <p className="font-serif text-lg text-[#18181A] italic leading-relaxed mb-6">
              The future belongs to organizations that invest in intelligent energy infrastructure today. At KHA-RIZ ENERGY, we engineer the systems that power that future.
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] text-[#9A9A90] uppercase font-bold">
              — Executive board
            </p>
          </div>
        </div>

        {/* Row 3: Core Values & HSEQ/ESG details */}
        <div className="grid md:grid-cols-12 gap-12 border-t border-[#5A5A54]/15 pt-16">
          
          {/* Values (Left 7 Columns) */}
          <div className="md:col-span-7">
            <h3 className="font-serif text-3xl text-[#18181A] mb-8">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/20">
                  <h4 className="font-mono text-[11px] tracking-[0.15em] font-bold text-[#18181A] uppercase mb-2">
                    {i+1}. {v.name}
                  </h4>
                  <p className="font-mono text-[10px] tracking-[0.05em] text-[#5A5A54] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HSEQ & Sustainability (Right 5 Columns) */}
          <div className="md:col-span-5 space-y-8 pl-0 md:pl-8 border-l-0 md:border-l border-[#5A5A54]/15">
            <div>
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">HSEQ Commitment</h3>
              <p className="font-mono text-[10px] tracking-[0.06em] text-[#5A5A54] leading-relaxed mb-4">
                Safety is integral to everything we do. We protect people, assets and the environment through risk control, quality assurance (QA/QC), and strict engineering compliance.
              </p>
              <ul className="font-mono text-[9px] text-[#5A5A54] space-y-1.5 pl-3 list-disc">
                <li>Safety-First Workplace Culture</li>
                <li>Comprehensive Risk Assessments</li>
                <li>Continuous HSEQ System Training</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-[#5A5A54]/10">
              <h3 className="font-serif text-2xl text-[#18181A] mb-4">Sustainability Priorities</h3>
              <p className="font-mono text-[10px] tracking-[0.06em] text-[#5A5A54] leading-relaxed">
                Creating long-term ESG value. We promote renewable energy adoption, support carbon footprint reductions, and deliver reliable infrastructure that empowers local content and local workforces.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
