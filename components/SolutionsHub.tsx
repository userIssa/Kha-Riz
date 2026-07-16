'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'renewable', label: 'RENEWABLE ENERGY' },
  { id: 'epc', label: 'SOLAR EPC SERVICES' },
  { id: 'hybrid', label: 'HYBRID POWER' },
  { id: 'bess', label: 'BATTERY STORAGE (BESS)' },
  { id: 'smart', label: 'SMART INFRASTRUCTURE' },
  { id: 'advisory', label: 'ENERGY ADVISORY' }
];

const capacityGuide = [
  { type: 'Office Buildings', range: '50–200 kW' },
  { type: 'Hotels & Hospitality', range: '100–500 kW' },
  { type: 'Hospitals', range: '100–750 kW' },
  { type: 'Manufacturing Plants', range: '200 kW–2 MW' },
  { type: 'Tank Farms', range: '100 kW–1 MW' },
  { type: 'Industrial Estates', range: '500 kW–10 MW' },
  { type: 'Oil & Gas Facilities', range: '250 kW–10 MW+' }
];

const epcSteps = [
  { name: 'Energy Assessment', desc: 'Detailed load audit & requirements analysis' },
  { name: 'Engineering', desc: 'FEED, detailed system designs & specifications' },
  { name: 'Procurement', desc: 'Quality sourcing from certified global OEMs' },
  { name: 'Construction', desc: 'Civil, mechanical & electrical installation' },
  { name: 'Testing', desc: 'Rigorous validation & safety compliance checks' },
  { name: 'Commissioning', desc: 'Performance optimization & site handover' },
  { name: 'O & M Support', desc: 'Continuous preventive maintenance & support' }
];

export default function SolutionsHub() {
  const [activeTab, setActiveTab] = useState('renewable');

  const content = {
    renewable: {
      title: 'Renewable Energy Solutions',
      subtitle: 'Designing Smarter Power Systems for Sustainable Growth',
      description: 'Reliable and affordable energy has become a critical requirement for sustainable economic growth and business continuity. As organizations seek alternatives to rising fuel costs and grid instability, renewable energy delivers long-term financial, operational and environmental value.',
      listTitle: 'Solutions Include',
      listItems: [
        'Commercial & Industrial Solar PV Systems',
        'Residential Solar Power Systems',
        'Hybrid Solar-Diesel Energy Systems',
        'Utility-Scale Solar Installations',
        'Smart Energy Monitoring Solutions',
        'Grid-Tied & Off-Grid Systems',
        'Operations & Maintenance Services'
      ],
      infobox: 'Every system is engineered to maximize performance, improve energy resilience and reduce total cost of ownership. We combine technical analysis, intelligent design and premium OEM hardware to ensure optimum performance throughout its operational lifecycle.'
    },
    epc: {
      title: 'Commercial & Industrial Solar EPC',
      subtitle: 'Engineered for Performance. Built for Reliability.',
      description: 'Successful energy projects require disciplined planning, quality procurement, precise execution and effective lifecycle support. KHA-RIZ ENERGY delivers integrated Engineering, Procurement and Construction (EPC) services that provide clients with a single point of accountability.',
      listTitle: 'EPC Scope of Delivery',
      listGroups: [
        {
          title: 'Engineering',
          items: ['Feasibility Studies & Energy Audits', 'Load Profiling & Demand Analysis', 'FEED & Detailed Structural Designs']
        },
        {
          title: 'Procurement & Construction',
          items: ['OEM Equipment Sourcing & QA', 'Civil, Electrical & Mechanical Works', 'Equipment Integration & Site Supervision']
        }
      ],
      showEpcFlow: true,
      showCapacityGuide: true
    },
    hybrid: {
      title: 'Hybrid Power Systems',
      subtitle: 'Reliable Power Through Intelligent Energy Integration',
      description: 'For organizations where uninterrupted power is essential, hybrid energy systems provide an intelligent balance between renewable energy, battery storage, utility supply and conventional backup generation. We optimize multiple energy sources into a single coordinated ecosystem.',
      listTitle: 'Typical System Components',
      listItems: [
        'Solar PV Generation integration',
        'Utility Grid Synchronization',
        'Battery Energy Storage Systems (BESS)',
        'Backup Generator Synchronization & Auto-Start',
        'Automatic Energy Management (EMS)',
        'Intelligent Load Shedding & Control',
        'Remote Performance Monitoring & SCADA'
      ],
      infobox: 'Reduces diesel fuel consumption significantly, improves power reliability, lowers operating costs, extends backup generator equipment life, and enhances carbon reduction scores.'
    },
    bess: {
      title: 'Battery Energy Storage Systems (BESS)',
      subtitle: 'Intelligent Energy Storage for Mission-Critical Operations',
      description: 'BESS has become an essential component of modern energy infrastructure, enabling organizations to maximize renewable energy utilization while improving operational flexibility and power reliability. Our scalable battery storage solutions provide backup power, peak demand management, and load shifting.',
      listTitle: 'Applications & Use Cases',
      listItems: [
        'Peak Shaving to avoid demand charges',
        'Load Shifting for cheaper energy arbitrage',
        'Seamless Backup Power for commercial properties',
        'Grid Stabilization & power factor correction',
        'Generator Runtime & fuel optimization',
        'Integration with large C&I Solar PV arrays'
      ],
      infobox: 'Ideal for Commercial Offices, Data Centres, Healthcare Facilities, Manufacturing Plants, Telecommunications Infrastructure, Financial Institutions, and large industrial facilities.'
    },
    smart: {
      title: 'Smart Infrastructure & Energy Management',
      subtitle: 'Transforming Buildings into Intelligent Energy Ecosystems',
      description: 'Energy efficiency is no longer achieved through isolated improvements but through intelligent systems that continuously monitor, analyse and optimise building performance. We integrate advanced monitoring and automation technologies for real-time visibility.',
      listTitle: 'Solutions Include',
      listItems: [
        'Smart Energy Monitoring & Dashboards',
        'Building Energy Analytics & Reports',
        'Sub-metering & Load Monitoring',
        'HVAC & Lighting Control Optimization',
        'Occupancy-Based Automation',
        'Data-Driven Decision Support'
      ],
      infobox: 'Expected Outcomes include improved energy visibility, optimized building operations, reduced operational waste, better asset utilization, data-driven decisions, and enhanced sustainability ESG reporting.'
    },
    advisory: {
      title: 'Energy Advisory & Performance Optimisation',
      subtitle: 'Delivering Better Energy Decisions',
      description: 'Every successful energy project begins with understanding how energy is currently used. KHA-RIZ ENERGY provides professional energy advisory services that help organizations evaluate existing infrastructure, identify improvement opportunities, and develop practical transition strategies.',
      listTitle: 'Advisory Capabilities',
      listGroups: [
        {
          title: 'Assessments',
          items: ['Energy Audits & Load Profiling', 'Power Quality Assessment', 'Generator Performance Evaluation']
        },
        {
          title: 'Strategic Planning',
          items: ['Renewable Energy Feasibility Studies', 'ROI & Lifecycle Cost Analysis', 'Carbon Reduction Roadmap']
        }
      ],
      infobox: 'Every recommendation is guided by rigorous engineering analysis, operational requirements and long-term business value—ensuring that clients invest in solutions aligned with their technical and commercial objectives.'
    }
  };

  const activeContent = content[activeTab as keyof typeof content];

  return (
    <section id="solutions" className="bg-[#ECEAE0] text-[#18181A] py-28 px-8 md:px-16 border-t border-[#5A5A54]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8">
            OUR CAPABILITIES <span className="mx-2"></span>
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8">
            Integrated Energy Solutions.
          </h2>
          <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
            We bring together multidisciplinary engineering expertise to provide comprehensive energy solutions through a single, integrated delivery model spanning the complete project lifecycle: from assessment to commissioning and operations.
          </p>
        </div>

        {/* Dynamic Navigation Tabs (Minimalist Serenite Style) */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-[#5A5A54]/15 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full font-mono text-[9px] tracking-wider font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#18181A] text-[#ECEAE0]'
                    : 'bg-transparent text-[#5A5A54] border border-[#5A5A54]/25 hover:text-[#18181A] hover:border-[#18181A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content (Cream Card with Thin Borders) */}
        <div className="p-8 md:p-12 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/25 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* Left Column: Descriptive Text & Scope List */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl text-[#18181A] mb-1">
                    {activeContent.title}
                  </h3>
                  <p className="font-mono text-[10px] tracking-wider text-[#9A9A90] uppercase font-bold mb-6">
                    {activeContent.subtitle}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.05em] text-[#5A5A54] leading-[2] mb-8">
                    {activeContent.description}
                  </p>

                  {/* List / Groups */}
                  <div className="border-t border-[#5A5A54]/15 pt-8 mb-8">
                    <h4 className="font-mono text-[10px] tracking-[0.15em] font-bold text-[#18181A] uppercase mb-4">
                      {activeContent.listTitle}
                    </h4>

                    {'listItems' in activeContent && (
                      <ul className="grid sm:grid-cols-2 gap-3.5">
                        {activeContent.listItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 font-mono text-[10px] text-[#5A5A54] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#18181A] mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {'listGroups' in activeContent && (
                      <div className="grid sm:grid-cols-2 gap-8">
                        {activeContent.listGroups.map((group, idx) => (
                          <div key={idx} className="space-y-3">
                            <h5 className="font-mono text-[9px] tracking-wider font-extrabold text-[#9A9A90] uppercase">
                              {group.title}
                            </h5>
                            <ul className="space-y-2">
                              {group.items.map((item, idx2) => (
                                <li key={idx2} className="flex items-start gap-2 font-mono text-[10px] text-[#5A5A54] leading-relaxed">
                                  <span className="w-1 h-1 rounded-full bg-[#5A5A54] mt-1.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Infobox Callout */}
                {'infobox' in activeContent && (
                  <div className="p-6 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#ECEAE0] text-[10px] font-mono text-[#5A5A54] leading-relaxed">
                    <span className="font-bold text-[#18181A] block uppercase mb-1.5">Note:</span>
                    {activeContent.infobox}
                  </div>
                )}
              </div>

              {/* Right Column: Custom Graphics or Guides */}
              <div className="lg:col-span-5 flex flex-col justify-center border-l-0 lg:border-l border-[#5A5A54]/15 lg:pl-12">
                
                {/* 1. EPC Flow Process Diagram */}
                {'showEpcFlow' in activeContent && activeContent.showEpcFlow && (
                  <div className="space-y-5">
                    <h4 className="font-mono text-[10px] tracking-[0.15em] font-bold text-[#18181A] uppercase mb-4">
                      EPC Delivery Roadmap
                    </h4>
                    <div className="relative pl-6 border-l border-[#5A5A54]/15 space-y-4">
                      {epcSteps.map((step, idx) => (
                        <div key={idx} className="relative">
                          <span className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-[#18181A] border border-[#ECEAE0] flex items-center justify-center text-[8px] font-bold text-[#ECEAE0]">
                            {idx + 1}
                          </span>
                          <h5 className="font-mono text-[10px] font-bold text-[#18181A] leading-none mb-1">
                            {step.name}
                          </h5>
                          <p className="font-mono text-[9px] text-[#9A9A90]">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. C&I Solar Capacity Guide */}
                {'showCapacityGuide' in activeContent && activeContent.showCapacityGuide && (
                  <div className="mt-8 border-t border-[#5A5A54]/15 pt-8">
                    <h4 className="font-mono text-[10px] tracking-[0.15em] font-bold text-[#18181A] uppercase mb-4">
                      Commercial Capacity Guide
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {capacityGuide.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#ECEAE0] flex flex-col justify-between h-20">
                          <div>
                            <h5 className="font-mono text-[9px] font-extrabold text-[#9A9A90] uppercase tracking-wide truncate">{item.type}</h5>
                            <p className="font-serif text-sm font-bold text-[#18181A] mt-1">{item.range}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fallback layout */}
                {!('showEpcFlow' in activeContent) && (
                  <div className="rounded-sm overflow-hidden h-[340px] relative ring-1 ring-[#5A5A54]/15 shadow-sm">
                    <img
                      src="/images/WhatsApp Image 2026-07-15 at 9.57.31 AM (2).jpeg"
                      alt="Energy project detail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
