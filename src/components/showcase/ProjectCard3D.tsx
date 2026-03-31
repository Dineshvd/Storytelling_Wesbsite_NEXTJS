'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { ExternalLink, Github, Code, LayoutGrid, TerminalSquare } from 'lucide-react';

interface ProjectCard3DProps {
  name: string;
  tags: string[];
  link: string;
  description?: string;
  github?: string;
}

export default function ProjectCard3D({ name, tags, link, description, github }: ProjectCard3DProps) {
  const hasAI = tags.includes("AI");
  const hasCRM = tags.includes("CRM");
  const CenterIcon = hasAI ? TerminalSquare : hasCRM ? LayoutGrid : Code;

  return (
    <div className="p3d-parent w-full max-w-[340px] mx-auto md:max-w-none cursor-pointer">
      <div className="p3d-card">
        <div className="p3d-logo">
          <span className="p3d-circle p3d-circle1"></span>
          <span className="p3d-circle p3d-circle2"></span>
          <span className="p3d-circle p3d-circle3"></span>
          <span className="p3d-circle p3d-circle4"></span>
          <span className="p3d-circle p3d-circle5">
            <CenterIcon strokeWidth={2.5} size={20} className="text-white relative top-2 right-2" />
          </span>
        </div>
        
        <div className="p3d-glass"></div>
        
        <div className="p3d-content">
          <span className="title">{name}</span>
          <span className="text">
            {description ? description : "Explore the production deployment and technical architecture behind this module."}
          </span>
          
          <div className="tags">
             {tags.map((tag, i) => (
                <span key={i} className="font-body text-[10px] tracking-wider text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm uppercase mt-2">
                  #{tag}
                </span>
             ))}
          </div>
        </div>
        
        <div className="p3d-bottom">
          <div className="social-buttons-container">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="social-button">
                 <Github size={14} />
              </a>
            )}
            <a href={link} target="_blank" rel="noopener noreferrer" className="social-button">
                 <ExternalLink size={14} />
            </a>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-more group">
            <span className="view-more-button group-hover:text-white transition-colors">ACCESS</span>
            <ExternalLink size={14} className="ml-2 text-accent-metal group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
