'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-2 text-white">
            EDUCATION &lt;DATABASE&gt;
          </h3>
          <p className="font-body text-white/50 tracking-widest text-xs uppercase">Academic History</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-[-10px] w-20 h-20 bg-accent-metal/10 rounded-full blur-2xl group-hover:bg-accent-metal/20 transition-colors" />
              
              <h4 className="font-heading text-lg text-white mb-2 leading-tight">
                {edu.degree}
              </h4>
              <h5 className="font-body text-sm text-white/50 tracking-widest uppercase mb-4">
                {edu.institution}
              </h5>
              
              <div className="mt-auto flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white/20" />
                <span className="font-body text-xs text-accent-metal tracking-[0.2em]">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
