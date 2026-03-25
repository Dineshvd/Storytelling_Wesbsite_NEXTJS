'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useEffect, useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { transformerData } from '@/data/showcase/transformerData';

interface TransformerExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function TransformerExperience({ scrollYProgress }: TransformerExperienceProps) {
  // Scroll Discovery Hint State
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) setShowHint(true);
    }, 3000); // Show powerful hint after 3 seconds of inactivity
    return () => clearTimeout(timer);
  }, [hasScrolled]);

  // Phase 1: 0 - 30%
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
  const phase1Y = useTransform(scrollYProgress, [0, 0.3], [20, -20]);

  // Phase 2: 30 - 75%
  const phase2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.7, 0.75], [0, 1, 1, 0]);
  const phase2Y = useTransform(scrollYProgress, [0.3, 0.75], [20, -20]);

  useEffect(() => {
    return scrollYProgress.on('change', (val) => {
      if (val > 0.005) {
        setHasScrolled(true);
        setShowHint(false);
      }
    });
  }, [scrollYProgress]);

  // Phase 3: 75 - 100%
  const phase3Opacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
  const phase3Y = useTransform(scrollYProgress, [0.75, 1], [20, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 z-10 w-full h-full max-w-screen-2xl mx-auto">
      
      {/* Top Gradient for Navbar Readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      {/* Top Left Layout - Diagnostics */}
      <motion.div 
        style={{ opacity: phase2Opacity, y: phase2Y }}
        className="mt-20 sm:mt-24 self-start text-[10px] sm:text-xs tracking-[0.2em] font-body text-white/70 bg-black/40 p-3 sm:p-4 rounded-sm backdrop-blur-sm border-l-2 border-accent-metal"
      >
        <p className="mb-1 text-accent-metal font-bold">[{transformerData.phases.transformation.systemText}]</p>
        <p className="opacity-80">{transformerData.phases.transformation.statusText}</p>
      </motion.div>

      {/* Center Layout for Hero Intro */}
      <motion.div 
        style={{ opacity: phase1Opacity, y: phase1Y }}
        className="absolute top-1/2 left-6 sm:left-12 pr-6 sm:pr-0 -translate-y-1/2 max-w-lg"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl mb-2 sm:mb-4 tracking-wider text-white drop-shadow-2xl leading-tight">
          {transformerData.phases.hero.title}
        </h1>
        <div className="h-[1px] w-8 sm:w-12 bg-accent-metal mb-3 sm:mb-4" />
        <p className="font-body text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.3em] text-white/70">
          // {transformerData.phases.hero.subtitle}
        </p>
      </motion.div>

      {/* Bottom Right Layout for Arrival */}
      <motion.div 
        style={{ opacity: phase3Opacity, y: phase3Y }}
        className="absolute bottom-16 sm:bottom-12 right-6 sm:right-12 pl-6 sm:pl-0 text-right z-10"
      >
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl mb-2 tracking-widest text-white drop-shadow-lg leading-tight">
          {transformerData.phases.arrival.finalText}
        </h2>
        <div className="h-[1px] w-8 sm:w-12 bg-accent-metal ml-auto mb-2" />
        <p className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-white/50 uppercase">
          {transformerData.phases.arrival.signature}
        </p>
      </motion.div>

      {/* Aggressive Scroll Hint (Triggers after 3s of no scroll) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showHint ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 bg-black/60 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-10 h-16 border-2 border-white/50 rounded-full flex justify-center pt-2 mb-6"
          >
            <motion.div 
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
              className="w-1.5 h-3 bg-accent-metal rounded-full"
            />
          </motion.div>
          <h2 className="font-heading text-xl sm:text-3xl tracking-[0.5em] text-white font-bold drop-shadow-xl">SCROLL TO EXPLORE</h2>
          <p className="font-body text-xs sm:text-sm tracking-widest text-white/60 mt-2">INITIATE SEQUENCE</p>
        </div>
      </motion.div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div 
        style={{ opacity: phase1Opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden mt-4">
          <motion.div 
            animate={{ y: [0, 32, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-accent-metal"
          />
        </div>
      </motion.div>
    </div>
  );
}
