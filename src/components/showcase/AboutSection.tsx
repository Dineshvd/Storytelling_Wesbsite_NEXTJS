'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/showcase/portfolioData';
import TerminalIdentity from './TerminalIdentity';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-12 text-accent-metal border-b border-white/10 pb-4">
            ABOUT &lt;SYSTEM.IDENTITY&gt;
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
            {/* The new "Terminal Interface" Identity component */}
            <div className="shrink-0 z-20 w-full lg:w-auto flex justify-center">
              <TerminalIdentity />
            </div>

            <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-xl backdrop-blur-sm relative overflow-hidden group flex-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-metal/10 blur-[80px] rounded-full group-hover:bg-accent-metal/20 transition-all duration-700 pointer-events-none" />
              
              <p className="font-body text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light max-w-2xl relative z-10">
                {portfolioData.personal.about}
              </p>
              
              <p className="font-heading text-white/50 tracking-[0.2em] text-xs sm:text-sm uppercase flex items-center gap-4 relative z-10">
                <span className="w-12 h-[1px] bg-accent-metal hidden sm:block" />
                {portfolioData.personal.tagline}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
