import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import {
  Smartphone, Zap, TrendingUp, Target, CheckCircle2,
  ArrowRight, BarChart3, Search, LayoutGrid, FileText,
} from 'lucide-react';

const metrics = [
  { label: 'Pages Developed', value: '5+', icon: <FileText size={22} />, desc: 'Fully structured service pages' },
  { label: 'Responsive Design', value: '100%', icon: <Smartphone size={22} />, desc: 'All screen sizes optimized' },
  { label: 'Core Web Vitals', value: 'Optimized', icon: <Zap size={22} />, desc: 'Fast-loading & stable' },
  { label: 'Lead Capture Points', value: 'Multiple', icon: <Target size={22} />, desc: 'Strategic CTA placement' },
];

const techStack = [
  { name: 'WordPress', desc: 'Core CMS platform', color: 'from-blue-500/20 to-blue-600/5' },
  { name: 'Elementor', desc: 'Custom page builder', color: 'from-pink-500/20 to-pink-600/5' },
  { name: 'Floren Theme', desc: 'Service business layout', color: 'from-primary/20 to-primary/5' },
  { name: 'Fluent Forms', desc: 'Lead generation forms', color: 'from-green-500/20 to-green-600/5' },
  { name: 'Google Analytics', desc: 'Performance tracking', color: 'from-yellow-500/20 to-yellow-600/5' },
  { name: 'Search Console', desc: 'SEO indexing visibility', color: 'from-purple-500/20 to-purple-600/5' },
];

const approachSteps = [
  { num: '01', title: 'Planning & Structure', desc: 'Defined page hierarchy, content structure, and user flows to guide visitors from awareness to action.' },
  { num: '02', title: 'Design & Development', desc: 'Built with Elementor on Floren Theme — a premium layout optimized for service businesses.' },
  { num: '03', title: 'SEO & Performance', desc: 'Configured heading hierarchy, clean URL structure, Core Web Vitals, and on-page SEO fundamentals.' },
  { num: '04', title: 'Analytics & Launch', desc: 'Integrated Google Analytics and Search Console for data-driven tracking and indexing visibility.' },
];

const outcomes = [
  { icon: <Smartphone size={18} />, text: '100% mobile-responsive across all devices' },
  { icon: <Zap size={18} />, text: 'High page speed with optimized Core Web Vitals' },
  { icon: <Search size={18} />, text: 'Google Analytics & Search Console configured' },
  { icon: <Target size={18} />, text: 'Multiple strategic lead capture points integrated' },
  { icon: <LayoutGrid size={18} />, text: 'Structured service sections for clear content hierarchy' },
  { icon: <TrendingUp size={18} />, text: 'SEO-friendly structure for long-term visibility' },
  { icon: <BarChart3 size={18} />, text: 'Data-driven decision-making enabled from day one' },
  { icon: <CheckCircle2 size={18} />, text: 'Clean navigation and user-friendly layout' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DecoraNestCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="DecoraNest Case Study | Flooring Website | Codecubes"
        description="How Codecubes built a high-performance, SEO-optimized lead generation website for DecoraNest — a flooring brand built to convert visitors into qualified inquiries."
      />
      <Navbar />

      <main className="pt-32">
        {/* HERO */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-none -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-6 font-sans bg-primary/10 px-4 py-2 rounded-none">
              Web Development · Lead Generation
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              DecoraNest —{' '}
              <span className="text-gradient">High-Performance</span> Flooring Website
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A conversion-focused, SEO-optimized website for a flooring brand — built to showcase services,
              improve online visibility, and convert visitors into qualified inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 shadow-strong-glow group">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline" className="h-14 px-10">
                  View All Case Studies
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
            className="relative rounded-none overflow-hidden border border-white/10 shadow-strong-glow"
          >
            <img
              src="/images/decoranest.png"
              alt="DecoraNest flooring website"
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['WordPress', 'Elementor', 'Floren Theme'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-none text-sm font-bold text-primary font-sans">
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
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={containerVariants} className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-black mb-4">
                Performance <span className="text-gradient">Highlights</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-text-secondary font-sans">
                Measurable outcomes from day one of launch.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((m, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard className="p-8 text-center border-white/[0.06] hover:border-primary/30 transition-colors h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary mx-auto mb-4">
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

        {/* OBJECTIVE + IMPACT */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-black mb-6">The Objective</h2>
                <p className="text-xl text-text-secondary mb-8 font-sans leading-relaxed">
                  DecoraNest needed a scalable, SEO-optimized business website that could present their
                  flooring solutions effectively, build credibility, and generate consistent leads.
                </p>
                <div className="space-y-4">
                  {[
                    'Present flooring solutions (vinyl, tiles, interior flooring) clearly',
                    'Build credibility and trust with potential customers',
                    'Generate consistent leads through optimized UX',
                    'Support long-term SEO and paid advertising strategies',
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-primary font-bold">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="glass p-12 rounded-none border-primary/20 bg-primary/5"
              >
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Business Impact</span>
                <div className="space-y-6">
                  {[
                    { title: 'Brand Authority', desc: 'A professional website that positions DecoraNest as a credible flooring specialist.' },
                    { title: 'Lead Generation', desc: 'Strategic CTAs and integrated forms that capture inquiries from every page.' },
                    { title: 'Data-Driven Growth', desc: 'Analytics and Search Console enable ongoing optimization and smart marketing decisions.' },
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
              Every element was structured to guide users from awareness → interest → action.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-none group hover:bg-primary/5 transition-all text-left relative overflow-hidden"
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
            <h2 className="text-4xl font-black mb-4 text-center">Technologies Used</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans text-center max-w-2xl mx-auto">
              A proven stack chosen for speed, flexibility, SEO performance, and ease of management.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className={`p-8 text-center bg-linear-to-br ${tech.color} border-white/10 hover:border-primary/30 transition-colors`}>
                    <p className="text-2xl font-black text-white mb-2">{tech.name}</p>
                    <p className="text-text-secondary font-sans text-sm">{tech.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-4">What Was Delivered</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans">Every deliverable was built with lead generation and long-term growth as the primary goals.</p>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {outcomes.map((out, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 p-6 glass rounded-none text-left border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary flex-shrink-0">
                    {out.icon}
                  </div>
                  <span className="font-bold text-text-primary">{out.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGY BAND */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Built as a Long-Term Growth Foundation</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">
                The website connects every part of the business's digital marketing strategy.
              </p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['SEO drives organic traffic', 'Forms capture leads', 'Analytics guides growth'].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center border border-white/20">
                      <ArrowRight />
                    </div>
                    <span className="font-bold text-lg">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl font-sans italic opacity-80">
                Every page and CTA was intentionally built to support future SEO growth and paid advertising campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 pb-40">
          <div className="container mx-auto px-6">
            <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-none -z-10" />
              <h2 className="text-5xl font-black mb-6">Ready to Build Your Website?</h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                Whether you need a lead generation website or a full e-commerce store, we build digital experiences that deliver results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/free-audit">
                  <Button size="lg" className="h-14 px-10 shadow-strong-glow">Get Free Audit</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-10">Start Your Project</Button>
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
