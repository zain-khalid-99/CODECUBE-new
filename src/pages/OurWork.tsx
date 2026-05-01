import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  X, 
  ExternalLink, 
  TrendingUp, 
  Target, 
  Zap,
  Globe,
  Database,
  BarChart3
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Marketing' | 'Automation';
  image: string;
  overview: string;
  problem: string;
  solution: string;
  results: { label: string; value: string; icon: React.ReactNode }[];
}

const projects: Project[] = [
  {
    id: 'zenith',
    title: 'Aether Logistics',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    overview: 'Autonomous routing and fleet management engine for a regional logistics powerhouse.',
    problem: 'Manual route planning was causing 15% fuel wastage and required a team of 4 working full-time on scheduling.',
    solution: 'We engineered a unified autonomous revenue engine that syncs CRM data, categorizes leads using LLMs, and triggers personalized outreach sequences.',
    results: [
      { label: 'Fuel Costs', value: '-15%', icon: <Zap size={18} /> },
      { label: 'Time Saved', value: '400h/mo', icon: <TrendingUp size={18} /> },
      { label: 'Efficiency', value: '+22%', icon: <Target size={18} /> }
    ]
  },
  {
    id: 'nexus',
    title: 'Nexa Headless',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    overview: 'Headless commerce architecture for a premium sustainable fashion house.',
    problem: 'Legacy Shopify site had a 6-second load time and a 1.2% conversion rate, bleeding revenue on mobile devices.',
    solution: 'Rebuilt using a headless architecture (Next.js + Shopify Plus) with a focus on core web vitals and conversion-driven UX.',
    results: [
      { label: 'Mobile CVR', value: '+140%', icon: <TrendingUp size={18} /> },
      { label: 'Load Time', value: '0.8s', icon: <Zap size={18} /> },
      { label: 'Revenue', value: '3x Growth', icon: <Globe size={18} /> }
    ]
  },
  {
    id: 'vortex',
    title: 'Quantum ROI',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    overview: 'Multi-channel performance growth system for a fintech disruptor.',
    problem: 'Stagnant acquisition costs and poor attribution led to wasted ad spend and low quality leads.',
    solution: 'Implemented advanced server-side tracking and an AI-driven creative testing loop to optimize Meta and Google Ads.',
    results: [
      { label: 'CAC Reduction', value: '40%', icon: <Target size={18} /> },
      { label: 'Pipeline Val', value: '$4.2M', icon: <BarChart3 size={18} /> },
      { label: 'ROAS', value: '5.2x', icon: <TrendingUp size={18} /> }
    ]
  },
  {
    id: 'aether',
    title: 'Vesta Agents',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    overview: 'Custom AI agent fleet for 24/7 customer qualification and support.',
    problem: 'Support team was overwhelmed with high-volume, low-value queries, delaying actual sales conversations.',
    solution: 'Built a custom AI agent that autonomously aggregates, summarizes, and alerts the team on market-moving events.',
    results: [
      { label: 'Support Def', value: '82%', icon: <Zap size={18} /> },
      { label: 'Sales Booked', value: '+45%', icon: <Database size={18} /> },
      { label: 'Response', value: '< 30s', icon: <TrendingUp size={18} /> }
    ]
  }
];

import { SEO } from '@/src/components/ui/SEO';

export default function OurWork() {
  const [filter, setFilter] = useState<'All' | 'Web Development' | 'Marketing' | 'Automation'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Web Portfolio & Success Stories | Codecubes SEO & Automation Agency" 
        description="Explore our high-impact case studies. From conversion-driven e-commerce sites to autonomous n8n workflows, see how we deliver measurable scaling for businesses."
      />
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Section className="relative pt-24 pb-12 overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">Proven <span className="text-gradient">Success Stories</span></h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans">
              Real projects. Scalable results. We engineer digital systems that deliver <span className="text-text-primary font-bold">consistent business impact</span> through performance-driven design and execution.
            </p>
          </motion.div>
        </Section>

        {/* Filters */}
        <Section className="py-0">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Web Development', 'Marketing', 'Automation'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-pill font-medium transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-glow' 
                    : 'glass text-text-secondary hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full text-left group"
                  >
                    <GlassCard className="p-0 overflow-hidden h-full flex flex-col border-white/[0.04] group hover:border-primary/40 transition-colors">
                      <div className="aspect-video relative overflow-hidden">
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary shadow-glow scale-0 group-hover:scale-100 transition-transform duration-500">
                            <ExternalLink size={20} />
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block font-sans">
                          {project.category}
                        </span>
                        <h3 className="text-xl mb-0 transition-colors group-hover:text-primary">{project.title}</h3>
                      </div>
                    </GlassCard>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="pb-40">
          <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10" />
            <h2 className="mb-6">Want results like these?</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Your business is one system away from its next major breakthrough. Let's find it together.
            </p>
            <Link to="/free-audit">
              <Button size="lg" className="h-16 px-12 shadow-strong-glow">
                Get Free Audit
              </Button>
            </Link>
          </GlassCard>
        </Section>
      </main>

      <Footer />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative border-primary/20"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-text-secondary hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-10">
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block font-sans">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl md:text-5xl">{selectedProject.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                  <section>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm font-sans">Overview</h4>
                    <p className="text-text-secondary leading-relaxed text-lg">{selectedProject.overview}</p>
                  </section>
                  <section>
                    <h4 className="border-l-2 border-red-500/50 pl-4 text-white font-bold mb-4 uppercase tracking-wider text-sm font-sans">The Problem</h4>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.problem}</p>
                  </section>
                  <section>
                    <h4 className="border-l-2 border-green-500/50 pl-4 text-white font-bold mb-4 uppercase tracking-wider text-sm font-sans">Our Solution</h4>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.solution}</p>
                  </section>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm font-sans">Impact</h4>
                  {selectedProject.results.map((result, i) => (
                    <div key={i} className="glass p-6 border-primary/10 hover:border-primary/30 transition-all flex items-center justify-between">
                      <div>
                        <p className="text-text-muted text-xs uppercase mb-1 font-sans">{result.label}</p>
                        <p className="text-2xl font-heading font-bold text-white tracking-tight">{result.value}</p>
                      </div>
                      <div className="text-primary opacity-50">
                        {result.icon}
                      </div>
                    </div>
                  ))}
                  
                  <Link to="/free-audit" className="block pt-4">
                    <Button className="w-full h-14 shadow-glow">Start Your Project</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
