'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, DatabaseZap, MessageSquareCode } from 'lucide-react';

export default function AITechSection() {
  const aiFeatures = [
    { title: "RAG Architecture", icon: DatabaseZap, desc: "Building scalable Retrieval-Augmented Generation workflows." },
    { title: "PDF Parsing & Chat", icon: MessageSquareCode, desc: "Extracting semantic meaning from dense documents via AI." },
    { title: "Gemini Embeddings", icon: Cpu, desc: "Transforming text into high-dimensional vectors for search." },
    { title: "Vector Databases", icon: BrainCircuit, desc: "Optimizing semantic search queries for real-time systems." }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-carbon/20">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-metal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-heading text-2xl sm:text-4xl tracking-widest mb-4 justify-center text-white flex items-center gap-4">
            <span className="text-accent-metal">&lt;</span> AI INNOVATION LAB <span className="text-accent-metal">/&gt;</span>
          </h3>
          <p className="font-body text-white/60 tracking-widest text-sm max-w-2xl mx-auto">
            Exploring the frontier of Generative AI, focusing on real-time performance optimization and intelligent system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/40 border border-white/5 p-6 rounded-2xl hover:border-accent-metal/40 transition-colors group text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-metal/10 flex items-center justify-center text-accent-metal group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="font-heading text-sm text-white tracking-wider uppercase mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="font-body text-xs text-white/50 leading-relaxed text-center">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
