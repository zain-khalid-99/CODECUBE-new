import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-[6.5rem] right-8 z-50 p-3 bg-gray-900 text-white border-[5px] border-white/20 rounded-full shadow-lg hover:shadow-2xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 hover:-translate-y-1 transition-all"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

