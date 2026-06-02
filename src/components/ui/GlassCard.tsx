import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'glass rounded-none p-6 relative overflow-hidden group will-change-transform',
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-none z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--glow-color), transparent 40%)`,
        }}
      />
      {/* Accent Glow Fallback for mobile/static */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500 rounded-none z-0 opacity-50 md:opacity-0" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
