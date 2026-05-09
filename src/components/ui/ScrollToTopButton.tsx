import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './button';

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      // Mobile first: bottom-24 right-6 to sit above WhatsApp widget (which is at bottom-6)
      className="fixed bottom-[100px] right-6 md:bottom-[110px] md:right-8 z-[90] pointer-events-auto"
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className="w-12 h-12 rounded-[5px] shadow-glow hover:shadow-strong-glow bg-surface/80 backdrop-blur-sm border border-primary/20 text-text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </Button>
    </motion.div>
  );
};
