'use client';

const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-500 ${
        isScrolled ? 'bg-base-dark/50 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-accent-metal rounded-full animate-pulse shrink-0" />
        <span className="font-heading tracking-widest text-xs sm:text-sm text-white/90 truncate max-w-[150px] sm:max-w-none">DINESH V</span>
      </div>
      
      <a href="mailto:dineshviyasar@gmail.com" className="font-body tracking-wider text-[10px] sm:text-xs px-3 sm:px-4 py-2 border border-white/20 hover:border-white/60 transition-colors uppercase cursor-pointer relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent-metal shrink-0">
        <span className="relative z-10 transition-colors group-hover:text-black whitespace-nowrap">GET IN TOUCH</span>
        <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
      </a>
    </motion.nav>
  );
}
