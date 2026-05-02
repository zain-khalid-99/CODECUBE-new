import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "923194931082";

  const prefaqs = [
    "I want to request a free audit.",
    "I need custom web development.",
    "I'm interested in n8n automation.",
    "I'd like to discuss performance marketing."
  ];

  const handleSend = (text: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] max-w-[calc(100vw-2rem)] glass border-primary/20 bg-background/95 backdrop-blur-3xl rounded-[5px] shadow-strong-glow overflow-hidden"
          >
            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
              <div className="font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 .4C7.4.4.5 7.3.5 15.9c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.1c2.3 1.3 4.9 2 7.6 2 8.6 0 15.5-6.9 15.5-15.5S24.6.4 16 .4z"/>
                </svg>
                Chat with Codecubes
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-hover p-1 rounded-[5px] transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-text-secondary mb-4 font-sans">Hi there! How can we help your business scale today?</p>
              <div className="space-y-2">
                {prefaqs.map((faq, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(faq)}
                    className="w-full text-left p-3 text-sm bg-surface/50 hover:bg-primary/10 border border-white/5 rounded-[5px] transition-colors flex items-center justify-between group text-text-primary"
                  >
                    <span className="font-sans">{faq}</span>
                    <Send size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        className="w-[60px] h-[60px] bg-linear-to-br from-[#25D366] to-[#1ebe5d] text-white border-[5px] border-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all relative focus:outline-none"
      >
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-background animate-pulse" />
        )}
        {isOpen ? (
          <X size={26} fill="currentColor" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 .4C7.4.4.5 7.3.5 15.9c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.1c2.3 1.3 4.9 2 7.6 2 8.6 0 15.5-6.9 15.5-15.5S24.6.4 16 .4z"/>
          </svg>
        )}
      </motion.button>
    </div>
  );
};
