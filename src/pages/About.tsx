import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight,
  Target,
  Zap,
  Globe,
  Database,
  Workflow,
  Cpu,
  Users,
  Eye,
  Rocket,
  Monitor,
  BarChart3
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { SEO } from '@/src/components/ui/SEO';
import Antigravity from '@/src/components/ui/Antigravity';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO 
        title="About our Agency | Growth-Focused Systems & n8n Experts" 
        description="Codecubes is a dedicated performance agency. We bridge the gap between web development, technical SEO, and n8n automation to build integrated systems that scale businesses."
      />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <Section className="relative pt-24 pb-12 overflow-hidden text-center">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 blur-[150px] rounded-none -z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              A Performance Team <br /> <span className="text-gradient">Engineered for Growth</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans mb-12">
              Codecubes isn't just another agency. We are a results-driven team specializing in <span className="text-text-primary font-bold">advanced web development</span>, <span className="text-text-primary font-bold">high-impact SEO</span>, and <span className="text-text-primary font-bold">n8n automation</span>. Our systems are built to eliminate friction and maximize output.
            </p>
          </motion.div>
        </Section>

        {/* WHO WE ARE */}
        <Section className="bg-surface/30">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">Who <span className="text-gradient">We Are</span></h2>
              <h3 className="text-2xl font-bold mb-6 italic">A Growth-Focused Digital Partner</h3>
              <div className="space-y-6 text-lg text-text-secondary font-sans leading-relaxed">
                <p>
                  Codecubes was built with a clear vision—to move beyond traditional services and create integrated systems that deliver measurable results.
                </p>
                <p>
                  We work with businesses that want more than just a website or marketing campaign. They want a system that supports long-term growth, improves efficiency, and generates consistent results.
                </p>
              </div>
              <div className="mt-12 flex gap-10">
                 <div>
                   <div className="text-4xl font-black text-primary mb-1">80+</div>
                   <div className="text-xs uppercase font-black tracking-widest text-text-muted">Projects Done</div>
                 </div>
                 <div>
                   <div className="text-4xl font-black text-primary mb-1">12+</div>
                   <div className="text-xs uppercase font-black tracking-widest text-text-muted">AI Integrations</div>
                 </div>
                 <div>
                   <div className="text-4xl font-black text-primary mb-1">100%</div>
                   <div className="text-xs uppercase font-black tracking-widest text-text-muted">Commitment</div>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] -z-10 rounded-none" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="rounded-none shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </Section>

        {/* OUR APPROACH */}
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Approach</span></h2>
            <p className="text-xl text-text-secondary font-bold">Systems Over Services</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
               <GlassCard className="p-10 border-primary/20 bg-primary/[0.02]">
                 <p className="text-xl leading-relaxed text-text-secondary font-sans mb-8">
                   Most businesses struggle because their website, marketing, and operations are disconnected. At Codecubes, we take a different approach.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 items-center p-4 rounded-none bg-white/5 border border-white/5">
                      <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary"><Monitor size={20} /></div>
                      <span className="font-bold">High-performance web development</span>
                    </div>
                    <div className="flex gap-4 items-center p-4 rounded-none bg-white/5 border border-white/5">
                      <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary"><BarChart3 size={20} /></div>
                      <span className="font-bold">Data-driven SEO and marketing strategies</span>
                    </div>
                    <div className="flex gap-4 items-center p-4 rounded-none bg-white/5 border border-white/5">
                      <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary"><Workflow size={20} /></div>
                      <span className="font-bold">Custom n8n automation workflows</span>
                    </div>
                 </div>
                 <p className="mt-8 text-lg font-bold text-text-primary italic">
                   This allows us to build complete digital systems where every part works together to support growth.
                 </p>
               </GlassCard>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-black mb-6">Why It Works</h3>
              <p className="text-lg text-text-secondary font-sans leading-relaxed mb-6">
                By integrating every aspect of your digital presence, we eliminate data silos and friction. Your website isn't just a brochure; it's a lead magnet connected to your CRM via automated n8n workflows, while your marketing drives high-intent traffic validated by real-time data.
              </p>
              <Button variant="outline" size="lg" className="h-14 px-8">EXPLORE OUR TECH STACK</Button>
            </div>
          </div>
        </Section>

        {/* WHAT WE DO */}
        <Section className="bg-surface/50 border-y border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-20 text-text-primary">
            <h2 className="text-4xl md:text-6xl font-black mb-6">What <span className="text-gradient">We Do</span></h2>
            <p className="text-text-secondary text-lg font-sans">Focused on Performance and Scalability</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Build conversion-ready websites", desc: "Crafting digital experiences that turn visitors into loyal customers." },
              { title: "Improve search visibility", desc: "Structured SEO strategies to help you dominate your search landscape." },
              { title: "Run ROI-focused ads", desc: "Targeted campaigns that maximize your return on ad spend." },
              { title: "Automate manual effort", desc: "Custom n8n workflows that free up your team to focus on high-impact work." }
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-none flex gap-6 hover:bg-primary/[0.02] transition-colors group">
                <div className="w-14 h-14 bg-primary/10 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-text-secondary font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-text-muted font-sans italic">Every solution we deliver is designed to align with business goals and deliver practical outcomes.</p>
          </div>
        </Section>

        {/* MISSION & VISION */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            <GlassCard className="p-12 border-primary/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-none blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-black mb-6">Our <span className="text-primary">Mission</span></h2>
              <h3 className="text-xl font-bold mb-6">To Simplify Growth Through Smart Systems</h3>
              <p className="text-lg text-text-secondary font-sans leading-relaxed mb-8">
                Our mission is to help businesses scale efficiently by replacing complexity with structured, automated, and performance-focused solutions.
              </p>
              <ul className="space-y-4">
                {['Reliable', 'Scalable', 'Easy to manage', 'Focused on results'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-text-primary">
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-12 border-primary/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-none blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-4xl font-black mb-6">Our <span className="text-primary">Vision</span></h2>
              <h3 className="text-xl font-bold mb-6">Redefining Digital Growth</h3>
              <p className="text-lg text-text-secondary font-sans leading-relaxed mb-8">
                We believe the future of digital growth lies in intelligent systems that combine development, marketing, and automation.
              </p>
              <div className="p-6 bg-white/5 rounded-none border border-white/5 italic font-sans text-text-primary">
                "Our vision is to help businesses transition from fragmented efforts to fully connected systems that drive consistent and predictable results."
              </div>
            </GlassCard>
          </div>
        </Section>

        {/* WHY CHOOSE PARTIAL */}
        <Section className="bg-surface/30">
          <div className="text-center max-w-3xl mx-auto mb-20 text-text-primary">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Choose <span className="text-gradient">Codecubes</span></h2>
            <p className="text-text-secondary text-lg font-sans underline underline-offset-8">A Partner Focused on Long-Term Value</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Database />, title: "Strategic approach", desc: "Backed by real data and analytics." },
              { icon: <Target />, title: "Performance focused", desc: "Obsessed with conversions and results." },
              { icon: <Workflow />, title: "Custom n8n", desc: "Automations designed specifically for you." },
              { icon: <Rocket />, title: "Scalable future", desc: "Built for long-term compounding value." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 glass rounded-none flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement<{size?: number}>, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-text-secondary text-sm font-sans px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-24 text-center rounded-none relative overflow-hidden bg-primary/5 border-primary/20 shadow-strong-glow"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Let’s Work <br /> <span className="text-gradient">Together</span></h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              If you’re looking to improve your website, marketing, or operations, Codecubes can help you create a system designed for performance and scalability.
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-20 px-16 text-xl font-black shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                START BUILDING YOUR SYSTEM
              </Button>
            </Link>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
