'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React from 'react';
import { Github, Linkedin, ExternalLink, Terminal } from 'lucide-react';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function IdentityCard3D() {
  const css = `
  .term-parent { width: 290px; height: 300px; perspective: 1000px; margin: 0 auto; }
  .term-card {
    height: 100%; border-radius: 50px;
    background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
    transition: all 0.5s ease-in-out; transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }
  .term-glass {
    transform-style: preserve-3d; position: absolute; inset: 8px;
    border-radius: 55px; border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white; border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out; pointer-events: none;
  }
  .term-content { padding: 90px 40px 0px 30px; transform: translate3d(0, 0, 26px); }
  .term-content .title { display: block; color: #00894d; font-weight: 900; font-size: 26px; font-family: var(--font-heading); text-transform: uppercase; }
  .term-content .text { display: block; color: rgba(0, 137, 78, 0.9); font-size: 13px; margin-top: 10px; font-family: var(--font-body); font-weight: 600; line-height: 1.4; }
  .term-bottom {
    padding: 10px 12px; transform-style: preserve-3d; position: absolute;
    bottom: 20px; left: 20px; right: 20px; display: flex; align-items: center; justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }
  .term-bottom .view-more { display: flex; align-items: center; justify-content: flex-end; transition: all 0.2s ease-in-out; text-decoration: none; }
  .term-bottom .view-more:hover { transform: translate3d(0, 0, 10px); }
  .term-bottom .view-more-button { background: none; border: none; color: #00c37b; font-weight: 900; font-size: 12px; text-transform: uppercase; cursor: pointer; font-family: var(--font-heading); }
  .term-bottom .svg { stroke: #00c37b; stroke-width: 3px; width: 15px; margin-left: 5px; }
  .term-socials { display: flex; gap: 10px; transform-style: preserve-3d; }
  .term-social {
    width: 30px; aspect-ratio: 1; border-radius: 50%; background: white; border: none;
    display: grid; place-content: center; box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
    cursor: pointer; transition: all 0.2s ease-in-out; color: #00894d; text-decoration: none;
  }
  .term-social:first-child { transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s, background 0.2s, color 0.2s; }
  .term-social:nth-child(2) { transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s, background 0.2s, color 0.2s; }
  
  .term-social:hover { background: black; color: white; }
  .term-logo { position: absolute; right: 0; top: 0; transform-style: preserve-3d; pointer-events: none; }
  .term-circle {
    display: block; position: absolute; aspect-ratio: 1; border-radius: 50%; top: 0; right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px; backdrop-filter: blur(5px);
    background: rgba(0, 249, 203, 0.2); transition: all 0.5s ease-in-out; border: 1px solid rgba(0, 255, 214, 0.3);
  }
  .term-circle1 { width: 170px; transform: translate3d(0, 0, 20px); top: 8px; right: 8px; }
  .term-circle2 { width: 140px; transform: translate3d(0, 0, 40px); top: 10px; right: 10px; backdrop-filter: blur(1px); transition-delay: 0.1s; }
  .term-circle3 { width: 110px; transform: translate3d(0, 0, 60px); top: 17px; right: 17px; transition-delay: 0.2s; }
  .term-circle4 { width: 80px; transform: translate3d(0, 0, 80px); top: 23px; right: 23px; transition-delay: 0.3s; }
  .term-circle5 { width: 50px; transform: translate3d(0, 0, 100px); top: 30px; right: 30px; display: grid; place-content: center; transition-delay: 0.4s; color: white; }
  .term-parent:hover .term-card { transform: rotate3d(1, 1, 0, 30deg); box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px; }
  .term-parent:hover .term-social { transform: translate3d(0, 0, 50px); box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px; }
  .term-parent:hover .term-logo .term-circle2 { transform: translate3d(0, 0, 60px); }
  .term-parent:hover .term-logo .term-circle3 { transform: translate3d(0, 0, 80px); }
  .term-parent:hover .term-logo .term-circle4 { transform: translate3d(0, 0, 100px); }
  .term-parent:hover .term-logo .term-circle5 { transform: translate3d(0, 0, 120px); }
  `;

  return (
    <>
      {/* Scope the brutalist/hacker green CSS only to this active component block via React */}
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="term-parent group">
        <div className="term-card">
          <div className="term-logo">
            <span className="term-circle term-circle1"></span>
            <span className="term-circle term-circle2"></span>
            <span className="term-circle term-circle3"></span>
            <span className="term-circle term-circle4"></span>
            <span className="term-circle term-circle5">
              <Terminal size={20} strokeWidth={2.5} />
            </span>
          </div>
          <div className="term-glass"></div>
          <div className="term-content">
            <span className="title">{portfolioData.personal.name}</span>
            <span className="text">{portfolioData.personal.role}.<br /></span>
          </div>
          <div className="term-bottom">
            <div className="term-socials">
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="term-social">
                <Github size={16} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="term-social">
                <Linkedin size={16} />
              </a>
            </div>
            <a href="#projects" className="view-more">
              <button className="view-more-button">ACCESS</button>
              <ExternalLink size={14} className="svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
