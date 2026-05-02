import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { SEO } from '@/src/components/ui/SEO';
import Antigravity from '@/src/components/ui/Antigravity';

const faqs = [
  {
    question: "What exactly is an 'AI Growth System'?",
    answer: "Unlike traditional web agencies that just build static sites, we engineer autonomous systems. This means your website is integrated with AI tools that handle lead scoring, customer support, and automated follow-ups—effectively working as a 24/7 sales team."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Most high-performance systems take 4 to 8 weeks from audit to launch. This includes architecture design, AI model training, and integration with your existing marketing stack."
  },
  {
    question: "Do you only work with tech companies?",
    answer: "No. We work with any service-based business, e-commerce brand, or logistics company that is ready to scale. If you have manual processes or a website that isn't generating predictable revenue, we can help."
  },
  {
    question: "How do you measure ROI?",
    answer: "We focus on 'North Star' metrics: customer acquisition cost (CAC) reduction, lead-to-close ratio improvement, and total revenue growth. Every system we build includes a real-time dashboard so you can see your performance 24/7."
  },
  {
    question: "What happens after the system is built?",
    answer: "We don't just 'hand over' the keys. We provide 3 months of hyper-care support and optimization to ensure the AI models are performing correctly and the growth engines are properly tuned."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Frequently Asked Questions | Codecubes ROI Systems" 
        description="Everything you need to know about AI-powered growth systems, implementation timelines, and measuring ROI."
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <Antigravity
            count={400}
            magnetRadius={8}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              The Knowledge Base
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl mb-6"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg max-w-2xl mx-auto"
            >
              Everything you need to know about our AI-powered growth systems and how we scale businesses.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-[5px] overflow-hidden border border-white/5"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                  <div className="bg-primary/10 p-2 rounded-[5px] text-primary">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-text-secondary text-lg leading-relaxed border-t border-white/5 bg-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-12 glass rounded-[5px] text-center border-primary/20 bg-primary/5"
          >
            <h3 className="text-2xl md:text-3xl mb-4">Still have questions?</h3>
            <p className="text-text-secondary mb-8">
              We're ready to engineer your growth system. Let's talk strategy.
            </p>
            <a 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center px-10 bg-primary text-white rounded-[5px] font-bold shadow-strong-glow hover:scale-105 transition-transform"
            >
              Contact Strategy Team
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
