import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        scale: 1.01,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'glass rounded-3xl p-6 relative overflow-hidden group will-change-transform hover-border-dark',
        className
      )}
    >
      {/* Accent Glow */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500 rounded-full" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
