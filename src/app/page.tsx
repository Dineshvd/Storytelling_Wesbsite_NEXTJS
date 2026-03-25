'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import Navbar from '@/components/showcase/Navbar';
import TransformerScrollCanvas from '@/components/showcase/TransformerScrollCanvas';
import TransformerExperience from '@/components/showcase/TransformerExperience';
import { transformerData, portfolioData } from '@/data/showcase/transformerData';

export default function TransformerPage() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-base-dark text-white min-h-screen selection:bg-accent-metal selection:text-white">
      <Navbar />

      <section ref={containerRef} className="relative w-full" style={{ height: transformerData.scrollLength }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* z-0 for background canvas */}
          <div className="absolute inset-0 z-0">
            <TransformerScrollCanvas 
              scrollYProgress={scrollYProgress} 
              totalFrames={transformerData.totalFrames}
              imageFolderPath={transformerData.imageFolder}
              onLoadComplete={() => setIsLoaded(true)}
            />
          </div>
          
          {/* z-10 for HUD over canvas */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <TransformerExperience scrollYProgress={scrollYProgress} isLoaded={isLoaded} />
          </div>
        </div>
      </section>

      {/* PORTFOLIO CONTENT */}
      <div className="relative z-20 bg-base-dark pt-32 pb-32 px-6 sm:px-12 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-5xl mx-auto space-y-32">
          
          {/* ABOUT SECTION */}
          <section>
            <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-8 text-accent-metal border-b border-white/10 pb-4 break-words">
              ABOUT &lt;SYSTEM.IDENTITY&gt;
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                  {portfolioData.personal.about}
                </p>
                <p className="font-body text-white/50 tracking-widest text-xs sm:text-sm uppercase">
                  {portfolioData.personal.tagline}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.skills.map((skillGroup, idx) => (
                  <div key={idx} className="p-4 border border-white/10 bg-white/[0.02]">
                    <h4 className="font-heading text-accent-metal text-xs tracking-widest mb-3 uppercase">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-1">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="font-body text-sm text-white/60">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section>
            <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-8 text-accent-metal border-b border-white/10 pb-4 break-words">
              EXPERIENCE &lt;SYSTEM.LOGS&gt;
            </h3>
            <div className="space-y-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-12 group">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 bg-base-dark border border-white/50 rounded-full group-hover:bg-accent-metal group-hover:border-accent-metal transition-colors duration-300" />
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1 sm:gap-4">
                    <h4 className="font-heading text-lg sm:text-xl text-white/90">{exp.role}</h4>
                    <span className="font-body text-xs sm:text-sm text-accent-metal tracking-widest shrink-0">{exp.duration}</span>
                  </div>
                  <h5 className="font-body text-xs sm:text-sm text-white/50 tracking-widest uppercase mb-4">{exp.company}</h5>
                  <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section>
            <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-8 text-accent-metal border-b border-white/10 pb-4 break-words">
              PROJECTS &lt;CORE.MODULES&gt;
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, idx) => (
                <div key={idx} className="group p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-metal/50 transition-all duration-500 flex flex-col h-full cursor-crosshair">
                  <div className="mb-4 flex justify-between items-start">
                    <h4 className="font-heading text-lg text-white group-hover:text-accent-metal transition-colors">{project.name}</h4>
                    <span className="text-[10px] font-body tracking-[0.2em] px-2 py-1 bg-white/5 border border-white/10 text-white/50">{project.type}</span>
                  </div>
                  <p className="font-body text-sm text-white/60 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center space-x-2 text-xs font-body tracking-widest text-white/30 group-hover:text-white/80 transition-colors">
                    <span>ACCESS_MODULE</span>
                    <div className="flex-1 h-[1px] bg-white/20 group-hover:bg-accent-metal transition-colors" />
                    <span>&gt;</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* FOOTER / CONTACT */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-xl sm:text-2xl tracking-widest text-white mb-2">{portfolioData.personal.name}</h2>
            <p className="font-body text-white/50 tracking-widest text-xs sm:text-sm uppercase">{portfolioData.personal.role}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${portfolioData.contact.email}`} className="font-body text-xs sm:text-sm tracking-widest text-white/60 hover:text-accent-metal transition-colors">EMAIL</a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="font-body text-xs sm:text-sm tracking-widest text-white/60 hover:text-accent-metal transition-colors">LINKEDIN</a>
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="font-body text-xs sm:text-sm tracking-widest text-white/60 hover:text-accent-metal transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
