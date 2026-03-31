'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function StatsSection() {
  return (
    <section className="py-20 bg-neutral-carbon/20 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="px-4 py-8 md:py-0 text-center flex flex-col items-center justify-center group"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter flex items-baseline">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  enableScrollSpy 
                  scrollSpyOnce 
                  useEasing 
                />
                <span className="text-accent-metal ml-1 text-4xl md:text-5xl">{stat.suffix}</span>
              </div>
              <p className="font-body text-sm text-white/50 tracking-[0.2em] uppercase group-hover:text-white/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
