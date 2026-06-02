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
  ArrowRight, BarChart3, ShoppingCart, Package, Globe, MessageSquare,
} from 'lucide-react';

const metrics = [
  { label: 'Products Listed', value: '100+', icon: <Package size={22} />, desc: 'Structured & categorized catalog' },
  { label: 'Mobile Responsive', value: '100%', icon: <Smartphone size={22} />, desc: 'Optimized for all devices' },
  { label: 'Performance', value: 'Fast', icon: <Zap size={22} />, desc: 'Lightweight & optimized' },
  { label: 'Conversion Focus', value: 'High', icon: <Target size={22} />, desc: 'CTA-driven page layout' },
];

const techStack = [
  { name: 'Shopify', desc: 'Core e-commerce platform', color: 'from-green-500/20 to-green-600/5' },
  { name: 'Premium Theme', desc: 'Custom UI/UX design', color: 'from-primary/20 to-primary/5' },
  { name: 'WhatsApp', desc: 'Instant chat support', color: 'from-emerald-500/20 to-emerald-600/5' },
  { name: 'Social Integration', desc: 'Brand visibility & traffic', color: 'from-blue-500/20 to-blue-600/5' },
];

const approachSteps = [
  { num: '01', title: 'Store Architecture', desc: 'Structured 100+ products with advanced categorization, filtering, and clean navigation to simplify product discovery.' },
  { num: '02', title: 'Conversion Design', desc: 'Homepage, product, and checkout pages designed to reduce friction and maximize add-to-cart and purchase rates.' },
  { num: '03', title: 'Performance & UX', desc: 'Mobile-first, fast-loading store with seamless browsing and an abandoned-cart-friendly structure.' },
  { num: '04', title: 'Communication Layer', desc: 'Integrated WhatsApp chat, social media, and real-time notification system for instant customer engagement.' },
];

const outcomes = [
  { icon: <Package size={18} />, text: '100+ products structured with advanced categorization & filtering' },
  { icon: <Smartphone size={18} />, text: '100% mobile-first responsive design across all devices' },
  { icon: <ShoppingCart size={18} />, text: 'Secure & streamlined checkout experience' },
  { icon: <MessageSquare size={18} />, text: 'WhatsApp chat integration for instant customer support' },
  { icon: <Globe size={18} />, text: 'Social media integration for brand visibility and traffic' },
  { icon: <Zap size={18} />, text: 'Fast-loading, lightweight store structure' },
  { icon: <BarChart3 size={18} />, text: 'Real-time order & customer notification system' },
  { icon: <TrendingUp size={18} />, text: 'Scalable architecture ready for future product expansion' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function ImportsPkCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Imports.pk Case Study | Shopify E-commerce Store | Codecubes"
        description="How Codecubes built a scalable, high-converting Shopify store for Imports.pk — 100+ products, mobile-first design, WhatsApp integration, and a conversion-focused architecture."
      />
      <Navbar />
      <main className="pt-32">

        {/* HERO */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-none -z-10" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <Link to="/work" className="inline-flex items-center gap-2 text-text-muted text-sm font-sans hover:text-primary transition-colors mb-8 group">
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> All Case Studies
            </Link>
            <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-6 font-sans bg-primary/10 px-4 py-2 rounded-none">
              E-commerce · Shopify Development
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Imports.pk —{' '}<span className="text-gradient">High-Converting</span> Shopify E-commerce Store
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A scalable, performance-optimized Shopify store for a multi-product brand — built to deliver a seamless
              shopping experience, improve conversions, and support long-term growth.
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
            className="relative rounded-none overflow-hidden border border-white/10 shadow-strong-glow">
            <img src="/images/imports.png" alt="Imports.pk Shopify store" className="w-full h-[500px] object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['Shopify', 'Premium Theme', 'WhatsApp Integration'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-none text-sm font-bold text-primary font-sans">{tag}</span>
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
                    <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary mx-auto mb-4">{m.icon}</div>
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
                  Imports.pk needed a scalable Shopify store that could handle a large multi-product catalog, deliver a seamless shopping experience, and convert visitors into buyers.
                </p>
                <div className="space-y-4">
                  {[
                    'Showcase a large product catalog in a structured, browsable format',
                    'Enhance user experience with intuitive navigation and filtering',
                    'Increase customer engagement and purchase intent',
                    'Build a foundation for future digital marketing and scaling',
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-primary font-bold">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="glass p-12 rounded-none border-primary/20 bg-primary/5">
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Business Impact</span>
                <div className="space-y-6">
                  {[
                    { title: 'Brand Credibility', desc: 'A professional Shopify store that positions Imports.pk as a trustworthy, established online retailer.' },
                    { title: 'Conversion-Ready', desc: 'CTA-driven product pages and a streamlined checkout designed to maximize purchase completions.' },
                    { title: 'Scale-Ready', desc: 'Scalable architecture that supports new product additions, marketing campaigns, and future growth.' },
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
              Every decision was made to guide users from product discovery → trust building → purchase action.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approachSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-none group hover:bg-primary/5 transition-all text-left relative overflow-hidden">
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
              A modern e-commerce stack built for conversion, performance, and customer engagement.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
            <p className="text-xl text-text-secondary mb-16 font-sans">Every deliverable was built for conversion, scalability, and customer retention.</p>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {outcomes.map((out, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 p-6 glass rounded-none text-left border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary flex-shrink-0">{out.icon}</div>
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
              <h2 className="text-4xl md:text-5xl font-black mb-8">Built as a Full E-commerce Growth Engine</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">The store isn't just a product list — it's a complete digital sales channel designed to scale.</p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['Ads drive traffic', 'Store converts sales', 'Analytics guides growth'].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center border border-white/20"><ArrowRight /></div>
                    <span className="font-bold text-lg">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl font-sans italic opacity-80">
                Every product page, CTA, and integration was intentionally built to support Meta Ads and performance marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 pb-40">
          <div className="container mx-auto px-6">
            <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-none -z-10" />
              <h2 className="text-5xl font-black mb-6">Ready to Launch Your E-commerce Store?</h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                Whether you need a Shopify store or a full e-commerce platform, we build digital storefronts that convert visitors into loyal customers.
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
