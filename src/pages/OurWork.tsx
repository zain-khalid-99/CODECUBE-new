import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Database,
  BarChart3,
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { SEO } from '@/src/components/ui/SEO';

interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Marketing' | 'Automation';
  image: string;
  overview: string;
  problem: string;
  solution: string;
  results: { label: string; value: string; icon: React.ReactNode }[];
  liveUrl?: string;
  detailUrl?: string;
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
      { label: 'Efficiency', value: '+22%', icon: <Target size={18} /> },
    ],
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
      { label: 'Revenue', value: '3x Growth', icon: <Globe size={18} /> },
    ],
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
      { label: 'ROAS', value: '5.2x', icon: <TrendingUp size={18} /> },
    ],
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
      { label: 'Response', value: '< 30s', icon: <TrendingUp size={18} /> },
    ],
  },
  {
    id: 'accessory-booth',
    title: 'Accessory Booth',
    category: 'Web Development',
    image: '/images/accessoryboothstore.png',
    overview:
      'High-converting WooCommerce store for a mobile accessories brand — 100+ products, premium UI/UX, and a scalable architecture built for paid ad campaigns.',
    problem:
      'The brand had no digital presence and needed a professional, conversion-ready store to launch online sales and support Meta Ads campaigns.',
    solution:
      'Built a complete e-commerce store on WordPress + WooCommerce with WoodMart theme, structured product categories, multi-level navigation, and optimized product pages with clear CTAs.',
    results: [
      { label: 'Products Live', value: '100+', icon: <Globe size={18} /> },
      { label: 'Responsive', value: '100%', icon: <TrendingUp size={18} /> },
      { label: 'Architecture', value: 'Scalable', icon: <BarChart3 size={18} /> },
    ],
    liveUrl: 'https://accessorybooth.com/',
    detailUrl: '/work/accessory-booth',
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Portal Modal
   Rendered directly into document.body via createPortal — this bypasses
   the `will-change: transform` on <body> that breaks `position: fixed`.
───────────────────────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '70%', height: '85vh' }}
        className="relative bg-background border border-white/10 rounded-[5px] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Hero image — top 40% ── */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '40%' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/60 backdrop-blur-md rounded-[5px] flex items-center justify-center text-white hover:text-primary border border-white/10 hover:border-primary/50 transition-all z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Category + title overlaid at image bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-6">
            <span className="inline-block text-primary text-xs font-bold tracking-widest uppercase mb-2 font-sans bg-black/50 backdrop-blur-sm px-3 py-1 rounded-[5px] border border-primary/20">
              {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
              {project.title}
            </h2>
          </div>
        </div>

        {/* ── Scrollable content body ── */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Left — text content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs font-sans border-b border-white/10 pb-3">
                  Overview
                </h4>
                <p className="text-text-secondary leading-relaxed text-base font-sans">
                  {project.overview}
                </p>
              </section>
              <section>
                <h4 className="border-l-2 border-red-500/60 pl-4 text-white font-bold mb-3 uppercase tracking-widest text-xs font-sans">
                  The Problem
                </h4>
                <p className="text-text-secondary leading-relaxed font-sans">
                  {project.problem}
                </p>
              </section>
              <section>
                <h4 className="border-l-2 border-green-500/60 pl-4 text-white font-bold mb-3 uppercase tracking-widest text-xs font-sans">
                  Our Solution
                </h4>
                <p className="text-text-secondary leading-relaxed font-sans">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Right — metrics + CTAs */}
            <div className="space-y-3">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs font-sans border-b border-white/10 pb-3">
                Impact
              </h4>
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="glass p-4 rounded-[5px] border-primary/10 hover:border-primary/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-text-muted text-xs uppercase mb-1 font-sans">{result.label}</p>
                    <p className="text-xl font-heading font-black text-white tracking-tight">{result.value}</p>
                  </div>
                  <div className="text-primary opacity-60">{result.icon}</div>
                </div>
              ))}

              <div className="pt-3 space-y-2">
                {project.detailUrl && (
                  <Link to={project.detailUrl} onClick={onClose} className="block">
                    <Button variant="outline" className="w-full h-11 text-sm">
                      View Full Case Study
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full h-11 gap-2 text-sm">
                      <ExternalLink size={14} /> View Live Website
                    </Button>
                  </a>
                )}
                <Link to="/free-audit" onClick={onClose} className="block">
                  <Button className="w-full h-12 shadow-glow">Start Your Project</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────────────────── */
export default function OurWork() {
  const [filter, setFilter] = useState<'All' | 'Web Development' | 'Marketing' | 'Automation'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Web Portfolio & Success Stories | Codecubes SEO & Automation Agency"
        description="Explore our high-impact case studies. From conversion-driven e-commerce sites to autonomous n8n workflows, see how we deliver measurable scaling for businesses."
      />
      <Navbar />

      <main className="flex-grow pt-20">
        <Section className="relative pt-24 pb-12 overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-[5px] -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6">
              Proven <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans">
              Real projects. Scalable results. We engineer digital systems that deliver{' '}
              <span className="text-text-primary font-bold">consistent business impact</span>{' '}
              through performance-driven design and execution.
            </p>
          </motion.div>
        </Section>

        {/* Filters */}
        <Section className="py-0">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(['All', 'Web Development', 'Marketing', 'Automation'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-[5px] font-medium transition-all ${
                  filter === f
                    ? 'bg-primary text-white shadow-glow'
                    : 'glass text-text-secondary hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  className="break-inside-avoid hover:-translate-y-2 transition-transform duration-500"
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full text-left group"
                  >
                    <GlassCard className="p-0 overflow-hidden h-full flex flex-col border-white/[0.04] group hover:border-primary/40 transition-colors">
                      <div className="relative overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          src={project.image}
                          alt={project.title}
                          className={`w-full object-cover object-top grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-700 ${
                            index % 2 === 0 ? 'h-[300px]' : 'h-[450px]'
                          }`}
                        />
                        <motion.div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 glass rounded-[5px] flex items-center justify-center text-primary shadow-glow scale-0 group-hover:scale-100 transition-transform duration-500">
                            <ExternalLink size={20} />
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block font-sans">
                          {project.category}
                        </span>
                        <h3 className="text-xl mb-0 transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
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
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-[5px] -z-10" />
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

      {/* Modal — rendered via portal directly into document.body */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
