import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageSquare, TrendingDown, Eye, BarChart3,
  Target, Users, Zap, CheckCircle2, TrendingUp,
} from 'lucide-react';

const metrics = [
  { label: 'Messaging Conversations', value: '165+', icon: <MessageSquare size={22} />, desc: 'Generated in a single campaign' },
  { label: 'Cost Per Result', value: '₨20.64', icon: <TrendingDown size={22} />, desc: 'Highly cost-efficient CPR' },
  { label: 'Users Reached', value: '6,000+', icon: <Users size={22} />, desc: 'Targeted audience segmentation' },
  { label: 'Total Impressions', value: '12,000+', icon: <Eye size={22} />, desc: 'Strong visibility across placements' },
];

const campaignResults = [
  { label: 'Campaign 1 Conversations', value: '165+', color: 'border-primary/40' },
  { label: 'Campaign 1 CPR', value: '₨20.64', color: 'border-green-500/40' },
  { label: 'Campaign 2 Conversations', value: '62+', color: 'border-primary/40' },
  { label: 'Average CPR', value: '~₨30.37', color: 'border-green-500/40' },
  { label: 'Users Reached', value: '6,000+', color: 'border-blue-500/40' },
  { label: 'Total Impressions', value: '12,000+', color: 'border-blue-500/40' },
];

const approachSteps = [
  { num: '01', title: 'Audience Research', desc: 'Deep audience segmentation targeting high-intent users based on interests, behaviors, and demographics.' },
  { num: '02', title: 'Creative Testing', desc: 'Launched multiple ad creatives with A/B testing to identify the highest-performing messaging angles.' },
  { num: '03', title: 'Campaign Optimization', desc: 'Continuous monitoring of ad sets, budget reallocation to winners, and real-time performance adjustments.' },
  { num: '04', title: 'Scale & Reduce CPR', desc: 'Scaled high-performing ad sets while implementing cost reduction strategies to maximize ROI.' },
];

const outcomes = [
  { icon: <MessageSquare size={18} />, text: '165+ messaging conversations from a single campaign' },
  { icon: <TrendingDown size={18} />, text: 'PKR 20.64 cost per result — highly cost-efficient' },
  { icon: <Target size={18} />, text: 'High-intent audience targeting with segmentation' },
  { icon: <BarChart3 size={18} />, text: 'A/B testing across creatives and messaging angles' },
  { icon: <Users size={18} />, text: '6,000+ users reached with targeted placements' },
  { icon: <Eye size={18} />, text: '12,000+ impressions ensuring strong brand visibility' },
  { icon: <Zap size={18} />, text: 'Consistent performance maintained across multiple ad sets' },
  { icon: <TrendingUp size={18} />, text: 'Scalable campaign foundation for future growth' },
];

const toolStack = [
  { name: 'Meta Ads Manager', desc: 'Full campaign management', color: 'from-blue-500/20 to-blue-600/5' },
  { name: 'AI Creative Tools', desc: 'Content & creative generation', color: 'from-primary/20 to-primary/5' },
  { name: 'Analytics & Reporting', desc: 'Performance tracking & insights', color: 'from-purple-500/20 to-purple-600/5' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function FabtionCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fabtion Case Study | Meta Ads Performance Marketing | Codecubes"
        description="How Codecubes generated 165+ messaging conversations at PKR 20.64 CPR for Fabtion — a data-driven Meta Ads campaign for a clothing brand."
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
              Performance Marketing · Meta Ads
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Fabtion —{' '}<span className="text-gradient">165+ Conversations</span> at ₨20.64 CPR
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A data-driven Meta Ads campaign for a clothing brand that generated consistent messaging inquiries
              at highly cost-efficient rates through audience segmentation, creative testing, and real-time optimization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 shadow-strong-glow group">
                  Start Your Campaign <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
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
            <img src="/images/fabtion.png" alt="Fabtion Meta Ads campaign results" className="w-full h-[500px] object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['Meta Ads Manager', 'Performance Marketing', 'Clothing Brand'].map((tag) => (
                <span key={tag} className="glass px-4 py-2 rounded-none text-sm font-bold text-primary font-sans">{tag}</span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* KEY METRICS */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center mb-16">
              <motion.h2 variants={itemVariants} className="text-4xl font-black mb-4">Campaign <span className="text-gradient">Results</span></motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-text-secondary font-sans">Real numbers from live campaigns — no estimations.</motion.p>
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

        {/* OBJECTIVE + DETAILED RESULTS */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-4xl font-black mb-6">The Objective</h2>
                <p className="text-xl text-text-secondary mb-8 font-sans leading-relaxed">
                  Fabtion needed a performance marketing strategy that could drive consistent messaging inquiries for their clothing brand at the lowest possible cost per result.
                </p>
                <div className="space-y-4">
                  {[
                    'Generate consistent messaging inquiries at low CPR',
                    'Reduce cost per result through continuous optimization',
                    'Improve audience targeting and engagement rates',
                    'Scale campaign performance efficiently across ad sets',
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-primary font-bold">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="glass p-10 rounded-none border-primary/20 bg-primary/5">
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Detailed Campaign Breakdown</span>
                <div className="space-y-4">
                  {campaignResults.map((r, i) => (
                    <div key={i} className={`border-l-2 ${r.color} pl-4 flex items-center justify-between`}>
                      <p className="text-text-secondary text-sm font-sans">{r.label}</p>
                      <p className="font-black text-white text-lg">{r.value}</p>
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
            <h2 className="text-4xl font-black mb-4">Data-Driven <span className="text-gradient">Strategy</span></h2>
            <p className="text-xl text-text-secondary mb-20 font-sans max-w-2xl mx-auto">
              Structured to guide users from ad engagement → interest → direct messaging conversion.
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

        {/* TOOLS */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-4 text-center">Tools & Technologies</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans text-center max-w-2xl mx-auto">
              Industry-leading tools used for campaign execution, creative testing, and performance tracking.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {toolStack.map((tool, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <GlassCard className={`p-10 text-center bg-linear-to-br ${tool.color} border-white/10 hover:border-primary/30 transition-colors`}>
                    <p className="text-2xl font-black text-white mb-2">{tool.name}</p>
                    <p className="text-text-secondary font-sans text-sm">{tool.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-24 bg-surface/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-4">What Was Achieved</h2>
            <p className="text-xl text-text-secondary mb-16 font-sans">Every result was driven by data, testing, and continuous optimization.</p>
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
              <h2 className="text-4xl md:text-5xl font-black mb-8">Built for Scalable, Cost-Efficient Growth</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">
                Every campaign decision was made to maximize conversations while minimizing cost per result.
              </p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['Targeted ads reach buyers', 'Creatives drive engagement', 'Optimization lowers CPR'].map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center border border-white/20"><ArrowRight /></div>
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
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-none -z-10" />
              <h2 className="text-5xl font-black mb-6">Ready to Scale Your Brand with Meta Ads?</h2>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                We build and optimize Meta Ads campaigns that generate real conversations and consistent leads at the lowest cost possible.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/free-audit"><Button size="lg" className="h-14 px-10 shadow-strong-glow">Get Free Audit</Button></Link>
                <Link to="/contact"><Button size="lg" variant="outline" className="h-14 px-10">Start Your Campaign</Button></Link>
              </div>
            </GlassCard>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
