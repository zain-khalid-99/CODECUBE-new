import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEO } from '../ui/SEO';
import { ChevronRight, HelpCircle, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetailLayoutProps {
  seoTitle: string;
  seoDescription: string;
  hero: {
    title: React.ReactNode;
    subtitle: string;
    ctaLabel?: string;
  };
  problem: {
    title: string;
    description: string;
    points: string[];
    truth: string;
  };
  approach: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  services: {
    title: string;
    items: { title: string; desc: string; bulletPoints: string[] }[];
  };
  outcomes: {
    title: string;
    subtitle: string;
    items: string[];
  };
  system: {
    title: string;
    subtitle: string;
    points: string[];
    conclusion: string;
  };
  insight: {
    title: string;
    points: string[];
    conclusion: string;
  };
  useCases?: {
    title: string;
    items: { title: string; desc: string; details: string[] }[];
  };
  faqs: FAQItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({
  seoTitle,
  seoDescription,
  hero,
  problem,
  approach,
  services,
  outcomes,
  system,
  insight,
  useCases,
  faqs
}) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} />
      <Navbar />
      
      <main className="pt-32">
        {/* HERO */}
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12">
              {hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="h-16 px-10 text-lg font-black shadow-strong-glow group">
                  {hero.ctaLabel || 'GET STARTED'}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <h2 className="text-4xl font-black mb-8">{problem.title}</h2>
                <p className="text-xl text-text-secondary mb-12 font-sans">{problem.description}</p>
                <div className="space-y-4">
                  {problem.points.map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <AlertCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-lg font-bold text-text-primary">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="glass p-12 rounded-[40px] border-primary/20 bg-primary/5">
                <p className="text-2xl font-sans text-text-primary italic leading-relaxed">
                  <span className="font-black text-primary block mb-4">Simple Truth:</span>
                  "{problem.truth}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">{approach.title}</h2>
            <p className="text-xl text-text-secondary mb-20 font-sans">{approach.subtitle}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-[40px] group hover:bg-primary/5 transition-all text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-primary/5">0{i+1}</div>
                  <h3 className="text-2xl font-black mb-6 relative z-10">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-sans">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 bg-surface/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-20 text-center">{services.title}</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {services.items.map((srv, i) => (
                <div key={i} className="p-12 glass rounded-[50px] border-white/10">
                  <h3 className="text-3xl font-black mb-6 text-primary">{srv.title}</h3>
                  <p className="text-xl text-text-secondary mb-8 font-sans">{srv.desc}</p>
                  <ul className="space-y-4">
                    {srv.bulletPoints.map((bp, j) => (
                      <li key={j} className="flex gap-3 items-center text-text-primary font-bold">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        {bp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">{outcomes.title}</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans">{outcomes.subtitle}</p>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {outcomes.items.map((out, i) => (
                <div key={i} className="flex items-center gap-4 p-8 glass rounded-3xl text-left border-primary/10">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-bold">{out}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM SECTION */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-10">{system.title}</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">{system.subtitle}</p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {system.points.map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <ChevronRight />
                    </div>
                    <span className="font-bold text-lg">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-sans italic opacity-80">{system.conclusion}</p>
            </div>
          </div>
        </section>

        {/* INSIGHT SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass p-16 rounded-[60px] border-primary/20 border-2">
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">!</div>
                {insight.title}
              </h2>
              <div className="space-y-6 mb-10">
                {insight.points.map((p, i) => (
                  <p key={i} className="text-xl text-text-secondary leading-relaxed font-sans">• {p}</p>
                ))}
              </div>
              <p className="text-xl font-bold text-text-primary border-t border-primary/10 pt-8">
                {insight.conclusion}
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION (OPTIONAL) */}
        {useCases && (
          <section className="py-24 bg-surface/50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-black mb-20 text-center">{useCases.title}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {useCases.items.map((useCase, i) => (
                  <div key={i} className="p-10 glass rounded-[40px] border-white/10 hover-border-dark transition-all">
                    <h3 className="text-2xl font-black mb-4">{useCase.title}</h3>
                    <p className="text-text-secondary mb-6 font-sans">{useCase.desc}</p>
                    <ul className="space-y-3">
                      {useCase.details.map((detail, j) => (
                        <li key={j} className="flex gap-2 items-start text-sm font-sans">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-text-primary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQS SECTION */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-black mb-16 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-white/10">
                  <h3 className="text-xl font-black mb-4 flex gap-3 items-start">
                    <HelpCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary font-sans leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SOFT CONVERSION */}
        <section className="py-24 pb-40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto rounded-[60px] bg-primary p-20 text-primary-foreground text-center shadow-strong-glow border-4 border-white/10">
              <h2 className="text-5xl font-black mb-8">Ready to Build Your Growth Engine?</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                If you're unsure where to start, share your current setup and we'll provide clear, actionable insights—not generic advice.
              </p>
              <Link to="/contact">
                <Button size="lg" className="h-18 px-12 text-xl font-black bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  BOOK A STRATEGY CALL
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
