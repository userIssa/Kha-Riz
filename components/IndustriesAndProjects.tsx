'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const sectors = [
  { name: 'Oil & Gas', desc: 'Reliable power & smart EMS for flow stations, admin offices and refineries.' },
  { name: 'Manufacturing', desc: 'Large scale C&I solar PV and hybrid synchronization to reduce operational costs.' },
  { name: 'Marine & Offshore', desc: 'Heavy-duty infrastructure power systems engineered for ports and jetties.' },
  { name: 'Healthcare', desc: 'High-availability solar, BESS & UPS integration supporting mission-critical hospitals.' },
  { name: 'Financial Institutions', desc: 'Power backup systems engineered to protect data storage centers and banking operations.' },
  { name: 'Telecommunications', desc: 'Off-grid hybrid energy generators supporting remote telecom towers and hubs.' },
  { name: 'Education', desc: 'Campus-wide solar arrays and microgrid systems for academic research institutes.' },
  { name: 'Hospitality', desc: 'Integrated solar inverter systems for luxury hotels ensuring 24/7 guest comfort.' },
  { name: 'Government & Public Infrastructure', desc: 'Engineering procurement and installations supporting public facilities and street lighting.' },
  { name: 'Commercial Real Estate', desc: 'Smart building automation, solar canopies and integrated EV charger networks.' },
  { name: 'Construction', desc: 'Mobile temporary power plants and electrical site connections.' },
  { name: 'Mining', desc: 'Robust power installations engineered to withstand harsh mining conditions.' }
];

const projects = [
  {
    project: 'Solar Street Lighting Installation',
    client: 'Niger Delta Development Commission (NDDC)',
    location: 'South-South & South-East Nigeria'
  },
  {
    project: '300 kVA Solar Inverter System with 550 Panels',
    client: 'Federal Government',
    location: 'Bayelsa & Nasarawa States'
  },
  {
    project: '1 MW Solar Inverter Project (Ongoing)',
    client: 'State Government',
    location: 'Onitsha Main Market, Anambra State'
  },
  {
    project: 'Solar Water Project',
    client: 'Niger Delta Development Commission (NDDC)',
    location: 'Bayelsa State'
  },
  {
    project: '100 kVA Solar Inverter Installation',
    client: 'SMD Hotel',
    location: 'Port Harcourt, Rivers State'
  },
  {
    project: '40 kVA Solar Power System for Cold Room',
    client: 'Nourish Cold Room',
    location: 'Kwale, Delta State'
  }
];

const galleryImages = [
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.30 AM.jpeg', title: 'Solar PV Site Inspection' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.30 AM (1).jpeg', title: 'Inverter & Battery Cabinet Wiring' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.31 AM.jpeg', title: 'Commercial Solar Installation' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.31 AM (1).jpeg', title: 'Engineering Site Consultation' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.31 AM (2).jpeg', title: 'Rooftop Solar PV Array' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.31 AM (3).jpeg', title: 'On-site Project Assembly' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.32 AM.jpeg', title: 'Solar Powered Public Infrastructure' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.32 AM (1).jpeg', title: 'Rooftop Solar Panel Deployment' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.32 AM (2).jpeg', title: 'Engineering Team Reviewing Blueprint' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.32 AM (3).jpeg', title: 'Power Control & Synchronization panel' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.33 AM.jpeg', title: 'Completed Solar Street Lighting Site' },
  { src: '/images/WhatsApp Image 2026-07-15 at 9.57.33 AM (1).jpeg', title: 'Client Infrastructure Handover' }
];

export default function IndustriesAndProjects() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="projects" className="bg-[#ECEAE0] text-[#18181A] py-28 px-8 md:px-16 border-t border-[#5A5A54]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* INDUSTRIES SECTION */}
        <div className="mb-24">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8">
              SECTORS WE SERVE <span className="mx-2"></span>
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8">
              Critical Industries We Support
            </h2>
            <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
              Energy requirements differ across industries. Our multidisciplinary expertise enables us to develop tailored solutions that respond to the operational realities, regulatory requirements, and business priorities of each sector.
            </p>
          </div>

          {/* Sectors grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sec, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/20 hover:bg-[#E2DFD4]/40 transition-all duration-300 group flex flex-col justify-center min-h-[56px] hover:min-h-[110px]"
              >
                <div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="font-mono text-[10px] font-bold text-[#18181A] uppercase">{sec.name}</h4>
                    <span className="font-mono text-[9px] text-[#9A9A90] group-hover:rotate-45 transition-transform duration-300">＋</span>
                  </div>
                  <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
                    <p className="font-mono text-[9px] text-[#5A5A54] leading-relaxed border-t border-[#5A5A54]/10 pt-2">{sec.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REPRESENTATIVE PROJECTS SECTION */}
        <div className="mb-24 border-t border-[#5A5A54]/15 pt-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-3xl text-[#18181A]">
                Representative Project Experience
              </h3>
              <p className="font-mono text-[10px] tracking-[0.05em] text-[#5A5A54] leading-[2]">
                The leadership and technical team behind KHA-RIZ ENERGY draw upon years of practical engineering experience developed through projects previously delivered within the Kharis business ecosystem. This foundation enables the company to combine proven execution capability with a dedicated focus on clean energy solutions.
              </p>

              {/* Note callout */}
              <div className="p-6 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/35">
                <p className="font-mono text-[9px] text-[#5A5A54] leading-relaxed">
                  <strong>Notice:</strong> The representative projects listed were delivered under <strong>Kharis Engineering</strong>, the pioneer company within the Kharis business ecosystem, whose technical experience and engineering expertise form the foundation upon which KHA-RIZ ENERGY has been established.
                </p>
              </div>
            </div>

            {/* Projects Table */}
            <div className="lg:col-span-7 w-full overflow-x-auto">
              <table className="w-full text-left border-collapse font-mono text-[10px]">
                <thead>
                  <tr className="border-b border-[#5A5A54]/30 text-[#9A9A90] uppercase font-bold tracking-wider">
                    <th className="py-4 px-3">Project</th>
                    <th className="py-4 px-3">Client</th>
                    <th className="py-4 px-3">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5A5A54]/15">
                  {projects.map((proj, idx) => (
                    <tr key={idx} className="hover:bg-[#E2DFD4]/40 transition-colors">
                      <td className="py-4 px-3 font-bold text-[#18181A] max-w-xs">{proj.project}</td>
                      <td className="py-4 px-3 text-[#5A5A54]">{proj.client}</td>
                      <td className="py-4 px-3 text-[#9A9A90]">{proj.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CLIENT PROJECT IMAGES GALLERY */}
        <div className="border-t border-[#5A5A54]/15 pt-16">
          <div className="max-w-3xl mb-12">
            <h3 className="font-serif text-3xl text-[#18181A] mb-4">
              Real-World Installations & Field Activity
            </h3>
            <p className="font-mono text-[10px] text-[#5A5A54]">
              Take a look at the on-site activities, commissioning, and system deployments managed by our engineering teams. Click any photo to enlarge.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                onClick={() => openLightbox(index)}
                className="relative h-[220px] rounded-sm overflow-hidden cursor-pointer ring-1 ring-[#5A5A54]/15 group bg-[#E2DFD4]/10"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="font-mono text-[8px] text-[#ECEAE0]/60 uppercase tracking-widest font-bold mb-0.5">Project View</p>
                  <p className="font-mono text-[9px] font-bold text-[#ECEAE0] truncate">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#18181A]/95 flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 p-2 text-[#ECEAE0] hover:text-[#9A9A90] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button 
              onClick={prevImage} 
              className="absolute left-4 p-3 rounded-full bg-[#ECEAE0]/5 border border-[#5A5A54]/30 text-white hover:bg-[#ECEAE0]/15 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextImage} 
              className="absolute right-4 p-3 rounded-full bg-[#ECEAE0]/5 border border-[#5A5A54]/30 text-white hover:bg-[#ECEAE0]/15 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Enlarged Image container */}
            <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
              <img 
                src={galleryImages[activeImageIndex].src} 
                alt={galleryImages[activeImageIndex].title} 
                className="max-w-full max-h-full object-contain rounded-sm"
              />
            </div>

            {/* Image title */}
            <div className="mt-4 text-center">
              <p className="font-mono text-[9px] tracking-widest text-[#9A9A90] uppercase mb-1">
                KHA-RIZ ENERGY PORTFOLIO
              </p>
              <h4 className="font-serif text-lg text-[#ECEAE0]">
                {galleryImages[activeImageIndex].title}
              </h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
