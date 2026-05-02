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
  ArrowRight, BarChart3, Search, FileText, MessageSquare, MapPin,
} from 'lucide-react';

const metrics = [
  { label: 'Pages Developed', value: '20+', icon: <FileText size={22} />, desc: 'Fully optimized service pages' },
  { label: 'Mobile Responsive', value: '100%', icon: <Smartphone size={22} />, desc: 'All screen sizes covered' },
  { label: 'Inquiry Channels', value: 'Multi', icon: <MessageSquare size={22} />, desc: 'Forms, WhatsApp & email' },
  { label: 'Performance', value: 'LiteSpeed', icon: <Zap size={22} />, desc: 'High-speed web server' },
];

const techStack = [
  { name: 'WordPress', desc: 'Core CMS platform', color: 'from-blue-500/20 to-blue-600/5' },
  { name: 'Elementor', desc: 'Custom page builder', color: 'from-pink-500/20 to-pink-600/5' },
  { name: 'Yoast SEO', desc: 'Full SEO optimization', color: 'from-primary/20 to-primary/5' },
  { name: 'Fluent Forms', desc: 'Lead capture forms', color: 'from-green-500/20 to-green-600/5' },
  { name: 'Google Analytics', desc: 'User tracking & data', color: 'from-yellow-500/20 to-yellow-600/5' },
  { name: 'LiteSpeed', desc: 'High-speed web server', color: 'from-purple-500/20 to-purple-600/5' },
];

const approachSteps = [
  { num: '01', title: 'Service Architecture', desc: 'Built 20+ pages with service-specific keyword targeting, clear hierarchy, and intent-driven content structure.' },
  { num: '02', title: 'Design & UX', desc: 'Custom Elementor design with mobile-first layout, strong CTAs, and trust signals throughout.' },
  { num: '03', title: 'SEO & Performance', desc: 'Yoast SEO configuration, heading hierarchy, LiteSpeed optimization, and Google Search Console integration.' },
  { num: '04', title: 'Lead Integration', desc: 'WhatsApp, Fluent Forms, Google Maps, and Gmail integration for real-time multi-channel inquiry handling.' },
];

const outcomes = [
  { icon: <FileText size={18} />, text: '20+ fully optimized service and content pages' },
  { icon: <Smartphone size={18} />, text: '100% mobile-responsive design on all devices' },
  { icon: <Zap size={18} />, text: 'High-speed performance via LiteSpeed Web Server' },
  { icon: <MessageSquare size={18} />, text: 'WhatsApp & Gmail integration for real-time inquiries' },
  { icon: <MapPin size={18} />, text: 'Google Maps embedded for location accessibility' },
  { icon: <Search size={18} />, text: 'Keyword-targeted service pages for local SEO growth' },
  { icon: <BarChart3 size={18} />, text: 'Google Analytics & Search Console configured' },
  { icon: <CheckCircle2 size={18} />, text: 'Blog setup for long-term SEO content strategy' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function RlowTyresCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="R'Low Tyres Case Study | Automotive Website | Codecubes"
        description="How Codecubes built a high-converting automotive service website for R'Low Tyres — 20+ pages, WhatsApp integration, LiteSpeed performance, and local SEO optimization."
      />
      <Navbar />
      <main className="pt-32">

        {/* HERO */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-[5px] -z-10" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <Link to="/work" className="inline-flex items-center gap-2 text-text-muted text-sm font-sans hover:text-primary transition-colors mb-8 group">
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> All Case Studies
            </Link>
            <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-6 font-sans bg-primary/10 px-4 py-2 rounded-[5px]">
              Web Development · Automotive Services
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              R'Low Tyres —{' '}<span className="text-gradient">High-Converting</span> Automotive Website
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A professional, SEO-optimized automotive service website built to showcase tyre & vehicle services,
              improve customer accessibility, and generate real booking inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 shadow-strong-glow group">
                  Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline" className="h-14 px-10">View All Case Studies</Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* HERO IMAGE */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[5px] overflow-hidden border border-white/10 shadow-strong-glow">
            <img src="/images/Rlow Tyres.png" alt="R'Low Tyres automotive website" className="w-full h-[500px] object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['WordPress', 'Elementor', 'Yoast SEO', 'LiteSpeed'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-[5px] text-sm font-bold text-primary font-sans">{tag}</span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* METRICS */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center mb-16">
              <motion.h2 variants={itemVariants} className="text-4xl font-black mb-4">Performance <span className="text-gradient">Highlights</span></motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-text-secondary font-sans">Measurable outcomes from day one of launch.</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard className="p-8 text-center border-white/[0.06] hover:border-primary/30 transition-colors h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-[5px] flex items-center justify-center text-primary mx-auto mb-4">{m.icon}</div>
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
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-4xl font-black mb-6">The Objective</h2>
                <p className="text-xl text-text-secondary mb-8 font-sans leading-relaxed">
                  R'Low Tyres needed a professional online presence to stand out in local search, make services easy to find, and convert website visitors into booking inquiries.
                </p>
                <div className="space-y-4">
                  {[
                    'Clearly present tyre and vehicle services by category',
                    'Build customer trust with structured, professional pages',
                    'Generate appointment inquiries through optimized forms',
                    'Support long-term local SEO and digital marketing growth',
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-primary font-bold">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="glass p-12 rounded-[5px] border-primary/20 bg-primary/5">
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Business Impact</span>
                <div className="space-y-6">
                  {[
                    { title: 'Brand Credibility', desc: 'A professional 20+ page website that establishes authority in the local automotive market.' },
                    { title: 'Lead Generation', desc: 'Multi-channel inquiry system — WhatsApp, forms, and email — capturing customers at every touchpoint.' },
                    { title: 'SEO Foundation', desc: 'Keyword-targeted service pages provide a strong base for long-term organic search growth.' },
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
            <h2 className="text-4xl font-black mb-4">Conversion-Driven <span className="text-gradient">Approach</span></h2>
            <p className="text-xl text-text-secondary mb-20 font-sans max-w-2xl mx-auto">
              Structured to guide users from service discovery → trust building → inquiry action.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-[5px] group hover:bg-primary/5 transition-all text-left relative overflow-hidden">
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
              A proven, performance-focused stack built for speed, SEO, and lead generation.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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
            <p className="text-xl text-text-secondary mb-16 font-sans">Every deliverable was built to maximize local visibility and inquiry generation.</p>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {outcomes.map((out, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 p-6 glass rounded-[5px] text-left border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-[5px] flex items-center justify-center text-primary flex-shrink-0">{out.icon}</div>
                  <span className="font-bold text-text-primary">{out.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGY BAND */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Built for Long-Term Local Dominance</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">Every page, keyword, and CTA was planned to capture high-intent local searches and convert them into booked appointments.</p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['Local SEO drives traffic', 'Structured pages build trust', 'Multi-channel forms capture leads'].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-[5px] flex items-center justify-center border border-white/20"><ArrowRight /></div>
                    <span className="font-bold text-lg">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 pb-40">
          <div className="container mx-auto px-6">
            <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-[5px] -z-10" />
              <h2 className="text-5xl font-black mb-6">Ready to Build Your Service Website?</h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                Whether you're a local service business or a growing brand, we build websites that drive real inquiries and long-term growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/free-audit"><Button size="lg" className="h-14 px-10 shadow-strong-glow">Get Free Audit</Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline" className="h-14 px-10">Start Your Project</Button></Link>
              </div>
            </GlassCard>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
