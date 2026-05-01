import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export const Section = ({ children, className, containerClassName, id }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn('py-24 md:py-32 overflow-hidden', className)}
    >
      <div className={cn('container mx-auto px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
