'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-2 text-accent-metal">
            TIMELINE &lt;EXPERIENCE_LOGS&gt;
          </h3>
          <p className="font-body text-white/50 tracking-widest text-xs uppercase">Career Trajectory</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-6 md:ml-8 space-y-12 pb-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] bg-base-dark border-2 border-white/30 rounded-full group-hover:border-accent-metal group-hover:bg-accent-metal transition-colors duration-500 shadow-[0_0_10px_rgba(183,28,28,0)] group-hover:shadow-[0_0_10px_rgba(183,28,28,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h4 className="font-heading text-xl text-white group-hover:text-accent-metal transition-colors">
                  {exp.role}
                </h4>
                <span className="font-body text-sm font-bold tracking-widest text-white/50 md:text-accent-metal/80 mt-1 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              
              <h5 className="font-heading text-sm text-white/50 tracking-widest uppercase mb-4">
                @{exp.company}
              </h5>
              
              <p className="font-body text-white/70 leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
