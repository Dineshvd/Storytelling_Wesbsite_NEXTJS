'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

// External Existing Components
import Navbar from '@/components/showcase/Navbar';
import TransformerScrollCanvas from '@/components/showcase/TransformerScrollCanvas';
import TransformerExperience from '@/components/showcase/TransformerExperience';
import { transformerData } from '@/data/showcase/transformerData';

// New Portfolio Sections
import AboutSection from '@/components/showcase/AboutSection';
import SkillsSection from '@/components/showcase/SkillsSection';
import StatsSection from '@/components/showcase/StatsSection';
import FeaturedProjectsSection from '@/components/showcase/FeaturedProjectsSection';
import AllProjectsSection from '@/components/showcase/AllProjectsSection';
import ExperienceSection from '@/components/showcase/ExperienceSection';
import AITechSection from '@/components/showcase/AITechSection';
import EducationSection from '@/components/showcase/EducationSection';
import ContactSection from '@/components/showcase/ContactSection';

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

      {/* 1. HERO SECTION (Untouched Cinematic Sequence) */}
      <section ref={containerRef} className="relative w-full" style={{ height: transformerData.scrollLength }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* z-0 for background canvas */}
          <div className="absolute inset-0 z-0 bg-black">
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

      {/* PORTFOLIO CONTENT ENGINE */}
      <div className="relative z-20 bg-base-dark border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        {/* 2. About Section */}
        <AboutSection />
        
        {/* 3. Skills Section */}
        <SkillsSection />
        
        {/* 4. Stats Section */}
        <StatsSection />
        
        {/* 5. Featured Projects Section */}
        <FeaturedProjectsSection />
        
        {/* 6. All Projects Section (Filtering) */}
        <AllProjectsSection />
        
        {/* 7. Experience Timeline Section */}
        <ExperienceSection />
        
        {/* 8. AI Innovation Section */}
        <AITechSection />
        
        {/* 9. Education Section */}
        <EducationSection />
        
        {/* 10. Contact & Final CTA Section */}
        <ContactSection />
      </div>

    </main>
  );
}
