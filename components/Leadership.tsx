'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Obichukwu Mike Tumunuya',
    role: 'Managing Director / Chief Executive Officer',
    initials: 'OMT',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Obichukwu Mike Tumunuya is the Managing Director and Chief Executive Officer of KHA-RIZ ENERGY LTD, providing strategic leadership for the company’s growth and operations across renewable energy, engineering, procurement, sustainable infrastructure and integrated energy solutions.',
      'He holds a Bachelor’s degree in Mechanical Engineering and a Master’s degree in Agriculture, bringing a rare multidisciplinary perspective that combines engineering innovation with sustainable development. His professional experience spans renewable energy, engineering project delivery, procurement, infrastructure development, business strategy and operational leadership.',
      'Over the years, he has led the successful execution of engineering and energy projects for both public and private sector clients, building a reputation for delivering practical, cost-effective and sustainable solutions. His leadership philosophy is centred on technical excellence, innovation, integrity and the creation of long-term value for clients and stakeholders.',
      'Under his direction, KHA-RIZ ENERGY continues to strengthen its position as a trusted provider of renewable energy, electric mobility, EPC and smart infrastructure solutions, supporting Nigeria’s transition towards a cleaner and more resilient energy future.'
    ]
  },
  {
    name: 'Adaezechukwu Benita Azaka',
    role: 'Chief Operating Officer',
    initials: 'ABA',
    image: '/images/Benita.png',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Adaezechukwu Benita Azaka serves as the Chief Operating Officer of KHA-RIZ ENERGY LTD, where she oversees corporate operations, project execution, strategic partnerships and business development.',
      'She possesses extensive experience in project management, procurement coordination, stakeholder engagement, contract administration and renewable energy implementation. Her ability to translate strategic objectives into efficient operational processes has contributed significantly to the successful delivery of engineering and infrastructure projects.',
      'Working closely with clients, government institutions, development partners and industry stakeholders, she plays a critical role in ensuring projects are delivered on schedule, within budget and to the highest standards of quality and professionalism.',
      'Her commitment to operational excellence, continuous improvement and customer satisfaction continues to strengthen KHA-RIZ ENERGY’s reputation as a dependable engineering and sustainable energy partner.'
    ]
  },
  {
    name: 'Nwokoye George',
    role: 'General Manager',
    initials: 'NG',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Nwokoye George is the General Manager of KHA-RIZ ENERGY LTD, responsible for overseeing business operations, coordinating project delivery and ensuring organisational performance aligns with the company’s strategic objectives.',
      'With extensive experience in operations management, engineering support services, project coordination and business administration, he provides effective leadership across multidisciplinary teams while maintaining a strong focus on quality, efficiency and client satisfaction.',
      'He plays an important role in driving operational performance, strengthening internal processes and supporting the successful execution of renewable energy and engineering projects across diverse sectors.'
    ]
  },
  {
    name: 'Obunaonye Chidozie Ndubuisi',
    role: 'Operations Manager',
    initials: 'OCN',
    image: '/images/Dozie.png',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Obunaonye Chidozie Ndubuisi serves as the Operations Manager of KHA-RIZ ENERGY LTD, where he leads the planning, coordination and execution of the company’s operational activities across engineering, renewable energy, procurement and project delivery.',
      'He is responsible for coordinating field operations, optimising resource allocation, managing project logistics and ensuring every project is delivered in accordance with established quality, safety and performance standards.',
      'Known for his strong organisational and analytical capabilities, he works closely with technical teams, suppliers, clients and management to improve operational efficiency, minimise project risks and enhance overall service delivery.',
      'His disciplined approach to operations supports KHA-RIZ ENERGY’s commitment to engineering excellence and customer satisfaction.'
    ]
  },
  {
    name: 'Awaji Alex',
    role: 'Chief Technician',
    initials: 'AA',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Awaji Alex is the Chief Technician at KHA-RIZ ENERGY LTD, leading the company’s technical installation, testing, commissioning and maintenance activities across renewable energy and engineering projects.',
      'With extensive field experience in electrical installations, solar photovoltaic systems, equipment maintenance and technical troubleshooting, he ensures that every installation is executed in accordance with recognised engineering standards and client specifications.',
      'He supervises field teams, oversees quality assurance during installation and commissioning, and plays a vital role in ensuring the long-term reliability, safety and performance of the systems delivered by the company.'
    ]
  },
  {
    name: 'Nkem Anthonia',
    role: 'Human Resources Manager',
    initials: 'NA',
    image: '/images/Nkem.png',
    color: 'border-[#5A5A54]/20 text-[#18181A]',
    bio: [
      'Nkem Anthonia serves as the Human Resources Manager of KHA-RIZ ENERGY LTD, providing leadership for the company’s human capital strategy and workforce development.',
      'She oversees talent acquisition, employee relations, performance management, organisational development and policy implementation, ensuring the company attracts, develops and retains highly skilled professionals.',
      'Committed to fostering a culture of collaboration, professionalism and continuous learning, she supports the development of a capable workforce that enables KHA-RIZ ENERGY to consistently deliver engineering excellence and outstanding client service.'
    ]
  }
];

export default function Leadership() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState<number | null>(null);

  const openBio = (idx: number) => setActiveLeaderIndex(idx);
  const closeBio = () => setActiveLeaderIndex(null);

  return (
    <section id="leadership" className="bg-[#ECEAE0] text-[#18181A] py-28 px-8 md:px-16 border-t border-[#5A5A54]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#9A9A90] mb-8">
            EXECUTIVE LEADERSHIP <span className="mx-2"></span>
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.08] mb-8">
            Experienced Management
          </h2>
          <p className="font-mono text-[11px] tracking-[0.06em] text-[#5A5A54] leading-[2]">
            KHA-RIZ ENERGY is led by a multidisciplinary management team committed to delivering innovative energy solutions with professionalism, integrity, and technical excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="p-5 md:p-6 rounded-sm ring-1 ring-[#5A5A54]/15 bg-[#E2DFD4]/25 flex flex-col justify-between items-center text-center shadow-sm relative group hover:bg-[#E2DFD4]/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Portrait Placeholder Emblem or Image */}
                <div className="w-14 h-14 rounded-full border border-[#5A5A54]/30 bg-[#ECEAE0] flex items-center justify-center font-mono font-bold text-xs tracking-widest text-[#18181A] mb-4 shadow-inner relative overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    member.initials
                  )}
                </div>

                <h3 className="font-serif text-base text-[#18181A] mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-[8px] text-[#9A9A90] font-extrabold tracking-wider uppercase mb-4">
                  {member.role}
                </p>
              </div>

              <button
                onClick={() => openBio(idx)}
                className="w-full py-2.5 rounded-sm border border-[#5A5A54]/35 bg-transparent font-mono text-[8px] tracking-wider font-bold text-[#18181A] hover:bg-[#18181A] hover:text-[#ECEAE0] hover:border-transparent transition-all duration-300"
              >
                READ EXECUTIVE BIO
              </button>
            </div>
          ))}
        </div>

        {/* Closing Slogan quote */}
        <div className="mt-20 max-w-2xl mx-auto text-center p-6 border-l border-[#5A5A54]/15 bg-[#E2DFD4]/20">
          <p className="font-serif text-xs text-[#5A5A54] italic">
            “Engineering solutions that perform today. Building energy systems that sustain tomorrow.”
          </p>
        </div>

      </div>

      {/* Leadership Bio Modal Overlay */}
      <AnimatePresence>
        {activeLeaderIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#18181A]/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#ECEAE0] border border-[#5A5A54]/15 rounded-sm p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              {/* Close Button */}
              <button 
                onClick={closeBio} 
                className="absolute top-4 right-4 p-2 text-[#9A9A90] hover:text-[#18181A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#5A5A54]/15 pb-8 mb-8">
                <div className="w-16 h-16 rounded-full border border-[#5A5A54]/30 bg-[#E2DFD4] flex items-center justify-center font-mono font-bold text-xs tracking-widest text-[#18181A] relative overflow-hidden">
                  {team[activeLeaderIndex].image ? (
                    <Image
                      src={team[activeLeaderIndex].image}
                      alt={team[activeLeaderIndex].name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    team[activeLeaderIndex].initials
                  )}
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-2xl text-[#18181A] mb-1">
                    {team[activeLeaderIndex].name}
                  </h3>
                  <p className="font-mono text-[9px] text-[#9A9A90] font-extrabold tracking-wider uppercase mb-1">
                    {team[activeLeaderIndex].role}
                  </p>
                  <p className="font-mono text-[8px] text-[#5A5A54] uppercase tracking-[0.2em] font-bold">
                    KHA-RIZ ENERGY LTD
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 font-mono text-[10px] tracking-[0.05em] text-[#5A5A54] leading-[2]">
                {team[activeLeaderIndex].bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#5A5A54]/15 flex flex-col sm:flex-row gap-4 justify-between items-center font-mono text-[9px] text-[#9A9A90]">
                <span className="flex items-center gap-1.5 uppercase font-semibold">
                  <Briefcase className="w-4 h-4 text-[#18181A]" /> Executive Board
                </span>
                <button
                  onClick={closeBio}
                  className="px-5 py-2.5 rounded-sm border border-[#5A5A54]/30 text-[#18181A] hover:bg-[#18181A] hover:text-[#ECEAE0] transition-colors font-bold"
                >
                  CLOSE
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
