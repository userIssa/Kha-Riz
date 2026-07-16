'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'solar-epc',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: 'solar-epc',
        message: ''
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit request. Please try again.';
      setErrorMsg(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#18181A] text-[#ECEAE0] py-28 px-8 md:px-16 overflow-hidden relative">
      {/* Top transition gradient from light cream Leadership background to dark */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#ECEAE0] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Let's build the future together block */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8">
            PARTNER WITH US <span className="mx-2"></span>
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8">
            Let’s Build the Future <br />
            of Energy Together
          </h2>
          <p className="font-mono text-[11px] tracking-[0.06em] text-[#9A9A90] leading-[2]">
            Whether you are planning a renewable energy project, modernising existing infrastructure, deploying electric mobility solutions or pursuing long-term decarbonisation goals, our team is ready to partner with you every step of the way.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-sm ring-1 ring-[#5A5A54]/25 bg-black/25 shadow-sm h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <h3 className="font-serif text-2xl text-[#ECEAE0] mb-6">
                      Inquiry Submission
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-white transition-colors"
                          placeholder="e.g. Obinna Okafor"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-white transition-colors"
                          placeholder="e.g. obinna@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-white transition-colors"
                          placeholder="e.g. +234 803..."
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Company</label>
                        <input
                          id="company"
                          type="text"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-white transition-colors"
                          placeholder="Company Ltd"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="interest" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Service Required</label>
                      <select
                        id="interest"
                        value={formState.interest}
                        onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                        className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-[#9A9A90] focus:text-white transition-colors [&>option]:bg-[#18181A]"
                      >
                        <option value="solar-epc">Commercial & Industrial Solar EPC</option>
                        <option value="bess">Battery Energy Storage (BESS)</option>
                        <option value="hybrid">Hybrid Solar-Diesel Power Systems</option>
                        <option value="mobility">Electric Mobility & EV Charging</option>
                        <option value="smart-infra">Smart Building & Energy Management</option>
                        <option value="advisory">Energy Advisory & Audits</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-[8px] font-bold text-[#9A9A90] uppercase tracking-widest">Project Details</label>
                      <textarea
                        id="message"
                        required
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-transparent border-b border-[#5A5A54]/40 focus:border-[#ECEAE0] focus:outline-none py-2 text-xs font-mono text-white transition-colors resize-none"
                        placeholder="Please describe your facility's current power constraints..."
                      />
                    </div>

                    {errorMsg && (
                      <p className="font-mono text-[10px] text-red-400 mt-2 block">
                        Error: {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-[#ECEAE0] text-[#18181A] font-mono text-[9px] tracking-widest font-bold hover:bg-white hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-[#18181A] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>× SUBMIT REQUEST</span>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#ECEAE0] mb-6">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-3">
                      Request Logged
                    </h3>
                    <p className="font-mono text-[10px] text-[#9A9A90] max-w-sm leading-[2] mb-8">
                      Your consultation details have been logged. One of our engineers will reach out to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full border border-white/10 text-white font-mono text-[9px] tracking-wider hover:bg-white/5 transition-colors"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Corporate Information Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 md:p-10 rounded-sm ring-1 ring-[#5A5A54]/25 bg-black/25 shadow-sm space-y-10">
              
              <div>
                <span className="font-serif text-4xl text-[#9A9A90] opacity-35 leading-none">“</span>
                <p className="font-serif text-sm italic text-[#ECEAE0] leading-relaxed">
                  Engineering the Future of Energy Infrastructure — one project, one partnership and one innovative solution at a time.
                </p>
              </div>

              <div className="space-y-6 font-mono text-[10px]">
                {/* 1. Address */}
                <div>
                  <h4 className="font-extrabold text-[#9A9A90] uppercase tracking-widest mb-1.5">Registered Office</h4>
                  <p className="text-[#ECEAE0] leading-relaxed">
                    11 Makele Street, Rumuigbo, <br />
                    Port Harcourt, Rivers State, Nigeria.
                  </p>
                </div>

                {/* 2. Phone Lines */}
                <div>
                  <h4 className="font-extrabold text-[#9A9A90] uppercase tracking-widest mb-1.5">Telephone Hotlines</h4>
                  <p className="text-[#ECEAE0] leading-relaxed">
                    +234 707 036 1222 <br />
                    +234 806 004 1588
                  </p>
                </div>

                {/* 3. Email Address */}
                <div>
                  <h4 className="font-extrabold text-[#9A9A90] uppercase tracking-widest mb-1.5">Email Inquiry</h4>
                  <p className="text-[#ECEAE0] hover:text-[#9A9A90] transition-colors leading-relaxed">
                    <a href="mailto:info@kharizenergy.com">info@kharizenergy.com</a>
                  </p>
                </div>

                {/* 4. Registration Details */}
                <div>
                  <h4 className="font-extrabold text-[#9A9A90] uppercase tracking-widest mb-1.5">Corporate Registry</h4>
                  <p className="text-[#ECEAE0] leading-relaxed">
                    KHA-RIZ ENERGY LTD <br />
                    RC Number: <strong>9252950</strong>
                  </p>
                </div>


              </div>

            </div>

            {/* Disclaimer footer */}
            <div className="mt-8 font-mono text-[9px] text-[#9A9A90] leading-relaxed opacity-60">
              © 2026 KHA-RIZ ENERGY LTD. Powering Sustainable Growth Through Intelligent Energy Solutions. All rights reserved.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
