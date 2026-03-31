'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/showcase/portfolioData';
import ProjectCard3D from '@/components/showcase/ProjectCard3D';

type FilterCategory = "All" | "AI" | "Fullstack" | "CRM" | "Frontend";

export default function AllProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  
  const categories: FilterCategory[] = ["All", "AI", "Fullstack", "CRM", "Frontend"];

  const filteredProjects = filter === "All" 
    ? portfolioData.allProjects 
    : portfolioData.allProjects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl tracking-widest text-accent-metal">
              ARCHIVE &lt;ALL_MODULES&gt;
            </h3>
          </motion.div>

          {/* Filtering Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-body text-xs tracking-widest uppercase transition-all duration-300 rounded-full border ${
                  filter === cat 
                    ? 'bg-accent-metal border-accent-metal text-white font-bold' 
                    : 'bg-transparent border-white/20 text-white/50 hover:border-white/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.name}
                  className="w-full flex justify-center py-4"
                >
                   <ProjectCard3D 
                      name={project.name}
                      tags={project.tags}
                      link={project.link}
                   />
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
