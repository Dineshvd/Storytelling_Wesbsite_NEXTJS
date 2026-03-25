'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CURRENT_MODULE = "showcase"; // enforce user rule

import React, { useEffect, useRef, useState } from 'react';
import { MotionValue } from 'framer-motion';

interface TransformerScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function TransformerScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath
}: TransformerScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  // Preload Images
  useEffect(() => {
    let isMounted = true;
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      // Load progressively to not block the main thread
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `${imageFolderPath}${i}.jpg`;
        await new Promise<void>((resolve) => {
          img.onload = () => {
            if (isMounted) setLoaded(prev => prev + 1);
            resolve();
          };
          img.onerror = () => resolve(); // Ignore missing initially
        });
        loadedImages.push(img);
      }
      if (isMounted) setImages(loadedImages);
    };
    preloadImages();
    return () => { isMounted = false; };
  }, [totalFrames, imageFolderPath]);

  // Resize handler & Draw function
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // Reset scale
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // object-fit: cover logic
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(
        img, 
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Initial render
    renderFrame(0);

    // Subscribe to scroll value
    const unsubscribe = scrollYProgress.on('change', (val) => {
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(val * totalFrames)
      );
      requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Handle Resize
    const handleResize = () => {
      const val = scrollYProgress.get();
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(val * totalFrames)
      );
      requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, scrollYProgress, totalFrames]);

  return (
    <div className="absolute inset-0 w-full h-full bg-base-dark flex items-center justify-center isolate">
      {loaded < totalFrames && images.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-base-dark">
          <p className="font-heading text-sm tracking-[0.3em] text-white/50 animate-pulse">
            LOADING SEQUENCE [{loaded}/{totalFrames}]
          </p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
      {/* Accessibility DOM description */}
      <div className="sr-only">
        A cinematic transformation sequence over {totalFrames} frames mapping the scroll to visual evolution.
      </div>
    </div>
  );
}
