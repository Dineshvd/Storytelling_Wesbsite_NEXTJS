'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useState } from 'react';
import { Check, Copy, TerminalSquare } from 'lucide-react';
import { portfolioData } from '@/data/showcase/portfolioData';

export default function TerminalIdentity() {
  const [copied, setCopied] = useState(false);
  const command = "execute-dinesh@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(`npx ${command}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const css = `
  .termUI-card {
    padding: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(8px);
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  .termUI-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 10;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  .termUI-terminal {
    display: flex;
    flex-direction: column;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  .termUI-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 40px;
    padding-inline: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #121212;
  }
  .termUI-title {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 2.5rem;
    user-select: none;
    font-weight: 600;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #8e8e8e;
  }
  .termUI-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem;
    border: 1px solid rgba(255,255,255,0.1);
    margin-left: auto;
    border-radius: 6px;
    background-color: #1a1a1a;
    color: #8e8e8e;
    cursor: pointer;
    transition: all 0.2s;
  }
  .termUI-copy:hover {
    background-color: #2a2a2a;
    color: white;
  }
  .termUI-body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 2rem 1rem;
    line-height: 19px;
    color: white;
    background-color: #050505;
    white-space: nowrap;
  }
  .termUI-pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    background-color: transparent;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 16px;
  }
  .termUI-pre code:nth-child(1) { color: #575757; }
  .termUI-pre code:nth-child(2) { color: #b71c1c; font-weight: bold; }
  .termUI-cmd {
    height: 19px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .termUI-cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    animation: inputs 8s steps(22) infinite;
  }
  .termUI-cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #b71c1c;
    animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;
  }
  @keyframes blinking { 20%, 80% { transform: scaleY(1); } 50% { transform: scaleY(0); } }
  @keyframes cursor { 50% { border-right-color: transparent; } }
  @keyframes inputs {
    0%, 100% { width: 0; }
    10%, 90% { width: 58px; }
    30%, 70% { width: 215px; max-width: max-content; }
  }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="termUI-card hover:border-accent-metal/30 transition-all duration-500">
        <div className="termUI-wrap">
          <div className="termUI-terminal">
            <hgroup className="termUI-head border-b border-white/5">
              <p className="termUI-title font-body tracking-wider uppercase">
                <TerminalSquare size={16} className="text-accent-metal" />
                Dinesh V
              </p>
              <button className="termUI-copy" onClick={handleCopy} title="Copy command">
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
            </hgroup>
            <div className="termUI-body">
              <pre className="termUI-pre">
                <code>$&nbsp;</code>
                <code>npx&nbsp;</code>
                <code className="termUI-cmd text-white/90" data-cmd={command}></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
