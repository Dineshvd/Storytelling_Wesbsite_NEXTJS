'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl sm:text-3xl tracking-widest mb-2 text-accent-metal">
            FEATURED_CORE &lt;PROJECTS&gt;
          </h3>
          <p className="font-body text-white/50 tracking-widest text-xs uppercase">Top Tier Deployments</p>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10 hover:border-accent-metal/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-metal/0 via-accent-metal/5 to-accent-metal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none" />

              <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="font-heading text-2xl text-white group-hover:text-amber-50 transition-colors">
                      {project.name}
                    </h4>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-body text-[10px] tracking-widest text-accent-metal">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-heading text-xs tracking-widest text-white/40 mb-3">KEY FEATURES:</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="font-body text-sm text-white/60 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-accent-metal" />
                           {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="font-body text-xs text-white/50 px-2 py-1 bg-black/40 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions aligned to bottom right on md+ screens */}
                <div className="md:w-1/3 flex md:flex-col justify-start md:justify-end gap-4 mt-4 md:mt-0">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-heading text-xs tracking-widest uppercase hover:bg-accent-metal hover:text-white transition-colors text-center justify-center rounded-sm"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-heading text-xs tracking-widest uppercase hover:bg-white/10 transition-colors text-center justify-center rounded-sm"
                  >
                    View Details
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
