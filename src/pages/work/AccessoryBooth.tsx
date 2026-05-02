import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Section } from '@/src/components/ui/Section';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Smartphone,
  Zap,
  Globe,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  LayoutGrid,
  ShieldCheck,
  BarChart3,
  Package,
} from 'lucide-react';

const metrics = [
  { label: 'Products Launched', value: '100+', icon: <Package size={22} />, desc: 'Fully organized product listings' },
  { label: 'Responsive Design', value: '100%', icon: <Smartphone size={22} />, desc: 'Mobile, tablet & desktop optimized' },
  { label: 'Navigation Levels', value: 'Multi-Level', icon: <LayoutGrid size={22} />, desc: 'Structured for improved UX' },
  { label: 'Store Architecture', value: 'Scalable', icon: <TrendingUp size={22} />, desc: 'Built for future expansion' },
];

const techStack = [
  { name: 'WordPress', desc: 'Core CMS platform', color: 'from-blue-500/20 to-blue-600/5' },
  { name: 'WooCommerce', desc: 'Full e-commerce engine', color: 'from-purple-500/20 to-purple-600/5' },
  { name: 'WoodMart', desc: 'Premium UI/UX theme', color: 'from-primary/20 to-primary/5' },
];

const approachSteps = [
  { num: '01', title: 'Domain & Hosting Setup', desc: 'Configured the live deployment environment with full domain, DNS, and optimized hosting for performance.' },
  { num: '02', title: 'Design & Branding', desc: 'Implemented WoodMart premium theme with brand-consistent colors, typography, and visual hierarchy.' },
  { num: '03', title: 'Product Architecture', desc: 'Structured 100+ products across organized categories with clear user journeys and navigation paths.' },
  { num: '04', title: 'Conversion Optimization', desc: 'Built optimized product pages with prominent CTAs, streamlined cart, and frictionless checkout.' },
];

const outcomes = [
  { icon: <ShoppingCart size={18} />, text: 'Conversion-ready product pages with clear CTAs' },
  { icon: <Smartphone size={18} />, text: 'Mobile-first responsive design across all devices' },
  { icon: <Globe size={18} />, text: 'Live deployment with full domain & hosting' },
  { icon: <ShieldCheck size={18} />, text: 'Secure, streamlined cart & checkout experience' },
  { icon: <BarChart3 size={18} />, text: 'Scalable store ready for Meta Ads campaigns' },
  { icon: <Zap size={18} />, text: 'Fast-loading, lightweight performance design' },
  { icon: <Target size={18} />, text: 'Multi-level navigation for improved user journey' },
  { icon: <CheckCircle2 size={18} />, text: 'Organized categorization for 100+ product listings' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AccessoryBoothCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Accessory Booth Case Study | E-commerce Success | Codecubes"
        description="How Codecubes built a high-converting WooCommerce store for Accessory Booth — 100+ products, mobile-first design, and a scalable architecture ready for paid ad campaigns."
      />
      <Navbar />

      <main className="pt-32">
        {/* HERO */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-[5px] -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/work" className="inline-flex items-center gap-2 text-text-muted text-sm font-sans hover:text-primary transition-colors mb-8 group">
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Link>
            <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-6 font-sans bg-primary/10 px-4 py-2 rounded-[5px]">
              Web Development · E-commerce
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Accessory Booth —{' '}
              <span className="text-gradient">High-Converting</span> E-commerce Store
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A conversion-focused WooCommerce store for a mobile accessories brand, built from the ground up
              with premium UI/UX, organized product structure, and a scalable architecture designed for paid ad campaigns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://accessorybooth.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-10 shadow-strong-glow group">
                  View Live Website
                  <Globe className="ml-2 group-hover:rotate-12 transition-transform" size={18} />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="h-14 px-10 group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* HERO IMAGE */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[5px] overflow-hidden border border-white/10 shadow-strong-glow"
          >
            <img
              src="/images/accessoryboothstore.png"
              alt="Accessory Booth e-commerce store"
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['WordPress', 'WooCommerce', 'WoodMart'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-[5px] text-sm font-bold text-primary font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* KEY METRICS */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-black mb-4">
                Performance <span className="text-gradient">Highlights</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-text-secondary font-sans">
                Measurable outcomes from day one of launch.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((m, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard className="p-8 text-center border-white/[0.06] hover:border-primary/30 transition-colors h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-[5px] flex items-center justify-center text-primary mx-auto mb-4">
                      {m.icon}
                    </div>
                    <p className="text-3xl font-black text-white mb-2 font-heading">{m.value}</p>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider font-sans mb-2">{m.label}</p>
                    <p className="text-text-muted text-sm font-sans">{m.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROBLEM + OBJECTIVE */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-black mb-6">The Objective</h2>
                <p className="text-xl text-text-secondary mb-8 font-sans leading-relaxed">
                  Accessory Booth needed a professional, scalable online store to take their mobile accessories brand digital — with zero compromises on user experience or conversion potential.
                </p>
                <div className="space-y-4">
                  {[
                    'Showcase mobile accessories in a structured, browsable format',
                    'Maximize user navigation and engagement throughout the store',
                    'Enable a smooth and secure purchasing experience',
                    'Build a strong foundation ready for paid ads & digital marketing',
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-primary font-bold">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass p-12 rounded-[5px] border-primary/20 bg-primary/5"
              >
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Business Impact</span>
                <div className="space-y-6">
                  {[
                    { title: 'Brand Credibility', desc: 'A polished, professional storefront that builds instant trust with first-time visitors.' },
                    { title: 'Customer Experience', desc: 'Frictionless browsing, clear product discovery, and a seamless checkout path.' },
                    { title: 'Marketing-Ready', desc: 'Architecture and page structure optimized to support Meta Ads & performance campaigns.' },
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-primary/40 pl-4">
                      <p className="font-black text-white mb-1">{item.title}</p>
                      <p className="text-text-secondary text-sm font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-24 bg-surface/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-4">
              Conversion-Driven <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-text-secondary mb-20 font-sans max-w-2xl mx-auto">
              Every element was aligned to increase user retention and maximize conversions — from technical setup to design execution.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-[5px] group hover:bg-primary/5 transition-all text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-primary/5">{step.num}</div>
                  <h3 className="text-xl font-black mb-4 relative z-10">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-sans text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black mb-4 text-center">Technologies Used</h2>
              <p className="text-xl text-text-secondary mb-16 font-sans text-center">
                An industry-proven stack chosen for flexibility, performance, and ease of management.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <GlassCard className={`p-10 text-center bg-linear-to-br ${tech.color} border-white/10 hover:border-primary/30 transition-colors`}>
                      <p className="text-3xl font-black text-white mb-2">{tech.name}</p>
                      <p className="text-text-secondary font-sans text-sm">{tech.desc}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES / OUTCOMES */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-4">What Was Delivered</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans">Every deliverable was built with conversion and scalability as the primary goals.</p>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {outcomes.map((out, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 p-6 glass rounded-[5px] text-left border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-[5px] flex items-center justify-center text-primary flex-shrink-0">
                    {out.icon}
                  </div>
                  <span className="font-bold text-text-primary">{out.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM / SCALABILITY */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Built as the Core of a Growth Strategy
              </h2>
              <p className="text-xl opacity-90 mb-16 font-sans">
                The store isn't just an online catalogue — it's the foundation of a full digital marketing ecosystem.
              </p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['SEO brings traffic', 'Ads drive visitors', 'Store converts sales'].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-[5px] flex items-center justify-center border border-white/20">
                      <ArrowRight />
                    </div>
                    <span className="font-bold text-lg">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl font-sans italic opacity-80">
                Every page, product, and CTA on this store was intentionally built to support future Meta Ads and performance marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 pb-40">
          <div className="container mx-auto px-6">
            <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-[5px] -z-10" />
              <h2 className="text-5xl font-black mb-6">Ready to Launch Your Store?</h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                Whether you're starting from scratch or improving an existing store, we build e-commerce experiences that convert.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/free-audit">
                  <Button size="lg" className="h-14 px-10 shadow-strong-glow">
                    Get Free Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-10">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
