'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-2 text-accent-metal">
            CAPABILITIES &lt;TECH.STACK&gt;
          </h3>
          <p className="font-body text-white/50 tracking-widest text-xs uppercase">Authorized Technologies</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            
            return (
              <motion.div 
                key={idx} 
                variants={itemAnim}
                className="group p-6 border border-white/10 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] hover:border-accent-metal/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/5 rounded-lg text-accent-metal group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-heading text-white text-sm tracking-widest uppercase">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="font-body text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md tracking-wider group-hover:border-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
