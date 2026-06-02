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
  Target, Users, Zap, CheckCircle2, TrendingUp, Heart,
} from 'lucide-react';

const metrics = [
  { label: 'Messaging Conversations', value: '330+', icon: <MessageSquare size={22} />, desc: 'Across all campaigns' },
  { label: 'Users Reached', value: '57,000+', icon: <Users size={22} />, desc: 'Across all campaigns' },
  { label: 'Total Impressions', value: '110,000+', icon: <Eye size={22} />, desc: 'Strong brand visibility' },
  { label: 'Post Engagements', value: '1,093+', icon: <Heart size={22} />, desc: 'At PKR 0.24 per result' },
];

const campaignResults = [
  { label: 'Total Messaging Conversations', value: '330+', color: 'border-primary/40' },
  { label: 'Cost Per Conversation', value: '~₨60.51', color: 'border-green-500/40' },
  { label: 'Post Engagements', value: '1,093+', color: 'border-blue-500/40' },
  { label: 'Cost Per Engagement', value: '₨0.24', color: 'border-green-500/40' },
  { label: 'Follows / Likes', value: '267+', color: 'border-purple-500/40' },
  { label: 'Secondary Campaign Conversations', value: '93', color: 'border-primary/40' },
  { label: 'Total Users Reached', value: '57,000+', color: 'border-blue-500/40' },
  { label: 'Total Ad Spend Managed', value: '₨35,857+', color: 'border-yellow-500/40' },
];

const approachSteps = [
  { num: '01', title: 'Full-Funnel Structure', desc: 'Built a 3-stage funnel: Top (Engagement & Reach) → Mid (Profile Visits) → Bottom (Messaging Conversions).' },
  { num: '02', title: 'Audience Segmentation', desc: 'Targeted users at different funnel stages with segmented audiences based on interests, behaviors, and brand interaction.' },
  { num: '03', title: 'Creative Testing & Scaling', desc: 'A/B tested creatives and messaging angles, then scaled winning combinations for maximum efficiency.' },
  { num: '04', title: 'Cost Control & Optimization', desc: 'Continuous budget reallocation, bid optimization, and performance monitoring to maintain low CPR at scale.' },
];

const outcomes = [
  { icon: <MessageSquare size={18} />, text: '330+ messaging conversations across all campaigns' },
  { icon: <Heart size={18} />, text: '1,093+ post engagements at PKR 0.24 per result' },
  { icon: <Users size={18} />, text: '57,000+ users reached with targeted segmentation' },
  { icon: <Eye size={18} />, text: '110,000+ total impressions for strong brand visibility' },
  { icon: <TrendingDown size={18} />, text: '~PKR 60.51 average cost per messaging conversion' },
  { icon: <Target size={18} />, text: 'Multi-objective campaign structure (engagement + conversion)' },
  { icon: <BarChart3 size={18} />, text: 'Data-driven decisions using real-time analytics' },
  { icon: <TrendingUp size={18} />, text: 'Scalable foundation for future paid marketing growth' },
];

const toolStack = [
  { name: 'Meta Ads Manager', desc: 'Full campaign management', color: 'from-blue-500/20 to-blue-600/5' },
  { name: 'AI Creative Tools', desc: 'Content & creative generation', color: 'from-primary/20 to-primary/5' },
  { name: 'Performance Dashboards', desc: 'Real-time tracking & reporting', color: 'from-purple-500/20 to-purple-600/5' },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function LegacyByDecoraCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Legacy by Decora Case Study | Meta Ads Campaign | Codecubes"
        description="How Codecubes generated 330+ conversations, 1,093+ engagements, and reached 57,000+ users for Legacy by Decora through a full-funnel Meta Ads strategy."
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
              Legacy by Decora —{' '}<span className="text-gradient">330+ Conversations</span> & 57K+ Reach
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-sans mb-12 max-w-3xl mx-auto">
              A full-funnel Meta Ads strategy for a premium brand that delivered multi-objective results —
              high engagement, strong messaging conversions, and 110,000+ impressions across all campaigns.
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
            <img src="/images/legacy by decora.png" alt="Legacy by Decora Meta Ads campaign results" className="w-full h-[500px] object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-3 flex-wrap">
              {['Meta Ads Manager', 'Full-Funnel Strategy', 'Premium Brand'].map((tag) => (
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
                  Legacy by Decora needed a comprehensive paid strategy that could simultaneously grow brand visibility, drive engagement, and generate messaging inquiries — all in a cost-efficient manner.
                </p>
                <div className="space-y-4">
                  {[
                    'Generate consistent messaging conversations across campaigns',
                    'Increase brand engagement and profile visibility',
                    'Drive profile visits and audience interaction',
                    'Maintain cost-efficient performance at scale',
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
                <span className="block text-primary font-black uppercase tracking-widest text-xs font-sans mb-6">Full Campaign Breakdown</span>
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
            <h2 className="text-4xl font-black mb-4">Full-Funnel <span className="text-gradient">Strategy</span></h2>
            <p className="text-xl text-text-secondary mb-20 font-sans max-w-2xl mx-auto">
              Multi-objective campaigns targeting users at every stage: awareness → engagement → conversion.
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
            <p className="text-xl text-text-secondary mb-16 font-sans">Every result was driven by structured strategy, creative testing, and continuous optimization.</p>
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
              <h2 className="text-4xl md:text-5xl font-black mb-8">Full-Funnel Marketing That Delivers at Every Stage</h2>
              <p className="text-xl opacity-90 mb-16 font-sans">
                Not just ads — a structured system that builds awareness, drives engagement, and converts it into real business inquiries.
              </p>
              <div className="grid sm:grid-cols-3 gap-10 mb-16">
                {['Reach builds awareness', 'Engagement builds trust', 'Messaging drives revenue'].map((p, i) => (
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
                We build and manage full-funnel Meta Ads campaigns that deliver engagement, reach, and real conversions — at the lowest possible cost.
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
