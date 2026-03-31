'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function ContactSection() {
  const socialLinks = [
    { icon: Mail, label: "EMAIL", href: `mailto:${portfolioData.contact.email}` },
    { icon: Phone, label: "PHONE", href: `tel:${portfolioData.contact.phone}` },
    { icon: Linkedin, label: "LINKEDIN", href: portfolioData.contact.linkedin },
    { icon: Github, label: "GITHUB", href: portfolioData.contact.github },
    { icon: Globe, label: "PORTFOLIO", href: portfolioData.contact.portfolio }
  ];

  return (
    <section id="contact" className="py-32 relative border-t border-white/5 bg-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl sm:text-6xl text-white mb-6 uppercase tracking-wider drop-shadow-2xl">
            Let's build something <span className="text-accent-metal italic">amazing</span> together.
          </h2>
          
          <p className="font-body text-white/50 tracking-widest text-sm uppercase mb-12 max-w-lg mx-auto leading-relaxed">
            Ready to deploy your next big idea? Open for new opportunities and collaborations.
          </p>

          <a 
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-block px-12 py-5 bg-white text-black font-heading text-sm tracking-[0.3em] uppercase hover:bg-accent-metal hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(183,28,28,0.4)]"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
        >
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl tracking-widest text-white mb-2">{portfolioData.personal.name}</h3>
            <p className="font-body text-white/40 tracking-widest text-[10px] uppercase">
              // {portfolioData.personal.role}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a 
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-accent-metal group-hover:text-white group-hover:border-accent-metal transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <span className="font-body text-[8px] tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors uppercase">
                    {link.label}
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
