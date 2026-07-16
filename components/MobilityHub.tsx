'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const evCategories = [
  { name: 'Executive Electric Vehicles', desc: 'Premium executive saloons for corporate leadership fleets.' },
  { name: 'Electric SUVs', desc: 'Versatile, high-clearance utility vehicles for operations and executive travel.' },
  { name: 'Electric Pickup Trucks', desc: 'Rugged zero-emission utilities for industrial sites and logistics cargo.' },
  { name: 'Commercial Vans & Buses', desc: 'Staff shuttle buses and utility cargo vans designed for corporate transport.' },
  { name: 'Industrial Utility EVs', desc: 'Specialized off-highway electric vehicles for ports, factories, and warehouses.' }
];

const chargingSolutions = [
  { title: 'AC Charging Systems', desc: 'Destinations and overnight charging models for corporate office parking.' },
  { title: 'DC Fast Charging Stations', desc: 'High-power rapid chargers (30kW - 150kW+) for fast en-route turnaround.' },
  { title: 'Smart Charging Networks', desc: 'Cloud-managed load balancing networks to prevent building grid overloads.' },
  { title: 'Solar-Powered Charging Hubs', desc: 'Off-grid or grid-tied solar canopies providing true zero-emission mobility.' }
];

const transitionSteps = [
  { title: 'Current Fleet Audit', desc: 'Assess existing combustion vehicles, mileage, operational patterns, and lifecycle costs.' },
  { title: 'Operational Assessment', desc: 'Evaluate specific route demands, payload requirements, and site infrastructure limitations.' },
  { title: 'Energy & Grid Analysis', desc: 'Evaluate site electrical capacity, grid access, solar potential, and grid expansion needs.' },
  { title: 'Vehicle Selection', desc: 'Recommend suitable EV matches (SUVs, Pickups, Buses) based on range and cargo needs.' },
  { title: 'Charging Network Design', desc: 'Engineer optimal layouts for AC/DC chargers, smart load control, and solar integration.' },
  { title: 'Implementation & Launch', desc: 'Coordinate vehicle delivery, civil works, electrical chargers setup, and commissioning.' },
  { title: 'Monitoring & Optimization', desc: 'Audit fleet power consumption, Charger utilization, state-of-health, and driver training.' }
];

export default function MobilityHub() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="mobility" className="bg-[#ECEAE0] text-[#18181A] py-28 px-8 md:px-16 border-t border-[#5A5A54]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8">
            ELECTRIC MOBILITY <span className="mx-2">•</span> 03 / 06
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8">
            Electric Mobility Solutions
          </h2>
          <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
            By combining electric vehicles with renewable energy and intelligent charging technologies, we enable organizations to reduce fuel dependence while building more efficient and environmentally responsible transportation systems.
          </p>
        </div>

        {/* Grid: EV Solutions & Charging Infrastructure */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          {/* Left Panel: EV Fleet Procurement */}
          <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/25 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#18181A] mb-3">Corporate EV Procurement</h3>
              <p className="font-mono text-[10px] text-[#5A5A54] leading-relaxed mb-6">
                We supply end-to-end electric vehicles configured specifically for African roads and commercial operations, ensuring high build quality, spare parts support, and maintenance.
              </p>
              
              <div className="space-y-4">
                {evCategories.map((cat, idx) => (
                  <div key={idx} className="flex gap-4 p-3 rounded-sm hover:bg-[#E2DFD4]/50 transition-colors">
                    <span className="font-mono text-[10px] font-bold text-[#18181A] bg-[#ECEAE0] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border border-[#5A5A54]/20">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-mono text-[10px] font-bold text-[#18181A] mb-0.5">{cat.name}</h4>
                      <p className="font-mono text-[9px] text-[#5A5A54] leading-relaxed">{cat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#5A5A54]/15 flex items-center gap-2 font-mono text-[9px] text-[#9A9A90]">
              <span>Transition consulting included in fleet purchases.</span>
            </div>
          </div>

          {/* Right Panel: EV Charging Infrastructure */}
          <div className="p-8 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/25 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#18181A] mb-3">Charging Networks</h3>
              <p className="font-mono text-[10px] text-[#5A5A54] leading-relaxed mb-6">
                Reliable charging infrastructure is fundamental to the successful adoption of electric mobility. We design, supply, install and maintain scalable charging solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {chargingSolutions.map((sol, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-[#ECEAE0] ring-1 ring-[#5A5A54]/10 hover:ring-[#5A5A54]/30 transition-all">
                    <h4 className="font-mono text-[9px] font-extrabold text-[#18181A] tracking-wider uppercase mb-1">{sol.title}</h4>
                    <p className="font-mono text-[9px] text-[#5A5A54] leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>

              {/* Charging Ecosystem Flowchart */}
              <div className="p-5 rounded-sm bg-[#ECEAE0] ring-1 ring-[#5A5A54]/15 text-center">
                <h5 className="font-mono text-[9px] font-extrabold text-[#9A9A90] uppercase tracking-wider mb-4">
                  Charging Integration Flow
                </h5>
                <div className="flex flex-wrap justify-center items-center gap-2 font-mono text-[9px] font-bold text-[#18181A]">
                  <span className="px-2 py-1 bg-[#E2DFD4] rounded-sm">EV Fleet</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9A9A90]" />
                  <span className="px-2 py-1 bg-[#18181A] text-[#ECEAE0] rounded-sm">Charging Station</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9A9A90]" />
                  <span className="px-2 py-1 bg-[#E2DFD4] rounded-sm">Smart EMS</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9A9A90]" />
                  <span className="px-2 py-1 bg-[#18181A] text-[#ECEAE0] rounded-sm">Solar PV & BESS</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#5A5A54]/15 flex items-center justify-between font-mono text-[9px] text-[#9A9A90]">
              <span>Features Remote Monitoring & Load Balancing</span>
              <span className="text-[#18181A] font-bold uppercase">Solar EV Hubs</span>
            </div>
          </div>

        </div>

        {/* SECTION: FLEET ELECTRIFICATION JOURNEY */}
        <div className="border-t border-[#5A5A54]/15 pt-16">
          <div className="max-w-3xl mb-12">
            <h3 className="font-serif text-3xl text-[#18181A] mb-4">
              Fleet Electrification Journey
            </h3>
            <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
              Transitioning a corporate fleet is a strategic transformation. We work closely with clients to develop tailored electrification strategies that minimise operational disruption while maximising long-term value.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Steps Navigation list */}
            <div className="lg:col-span-5 space-y-2.5">
              {transitionSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-sm transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#18181A] text-[#ECEAE0] shadow-sm'
                        : 'bg-transparent text-[#5A5A54] hover:bg-[#E2DFD4]/50 border border-[#5A5A54]/25'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center border ${
                        isActive ? 'bg-[#ECEAE0] text-[#18181A] border-[#ECEAE0]' : 'bg-transparent text-[#5A5A54] border-[#5A5A54]/40'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="font-mono text-[9px] tracking-wider font-bold uppercase">{step.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/25 min-h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6 font-mono text-[9px] text-[#9A9A90]">
                    <span className="uppercase tracking-[0.2em]">PHASE 0{activeStep + 1} DETAILS</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#18181A] mb-4">
                    {transitionSteps[activeStep].title}
                  </h4>
                  <p className="font-mono text-[11px] tracking-[0.05em] text-[#5A5A54] leading-[2]">
                    {transitionSteps[activeStep].desc}
                  </p>
                </div>
                
                <div className="mt-8 border-t border-[#5A5A54]/15 pt-6 flex items-center justify-between font-mono text-[9px] text-[#9A9A90]">
                  <span>Methodical transition roadmap</span>
                  <span className="text-[#18181A] font-bold">KHA-RIZ METHODOLOGY</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
