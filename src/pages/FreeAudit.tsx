import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import {
  BarChart3,
  Search,
  Monitor,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Zap,
  Target
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { SEO } from '@/src/components/ui/SEO';
import Antigravity from '@/src/components/ui/Antigravity';

interface AuditFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  budget: string;
  services: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export default function FreeAudit() {
  const { register, handleSubmit, formState: { errors } } = useForm<AuditFormData>();
  const [complete, setComplete] = React.useState(false);

  const onSubmit = async (data: AuditFormData) => {
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyK50yHJ_WpBIRI-QmJxHSGecqrIfbQR4MGi3gVo3Nyp0l0WGjthRYIq8p8ZjtRzpZ0/exec";

      const payload = {
        form_type: "Free Audit Page Form",
        full_name: data.fullName,
        email: data.email,
        phone: data.phoneNumber || 'N/A',
        company: data.companyName || 'N/A',
        website: data.websiteUrl || 'N/A',
        budget: data.budget || 'N/A',
        service: data.services || 'N/A',
        message: data.message || 'N/A',
        page_url: window.location.href
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      setComplete(true);
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  const whatYouGet = [
    { icon: <Monitor size={24} />, title: "Website Analysis", desc: "Identify performance issues, UX gaps, and conversion bottlenecks." },
    { icon: <Search size={24} />, title: "Marketing Audit", desc: "Review your current SEO, Meta Ads, and Google Ads performance." },
    { icon: <Target size={24} />, title: "Funnel Breakdown", desc: "Understand how users move through your system—and where you’re losing opportunities." },
    { icon: <Workflow size={24} />, title: "Automation Opportunities (n8n)", desc: "Discover where automation can save time and improve efficiency." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO
        title="Free Website & Growth Audit | Codecubes SEO & n8n Agency"
        description="Get a comprehensive free growth audit. We analyze your website performance, SEO strategy, and workflow bottlenecks to provide actionable scaling recommendations."
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* HERO */}
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-primary/10 blur-[150px] rounded-none -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Unlock Your <span className="text-gradient">Growth Potential</span> with a Free Audit
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans mb-12">
              We perform a deep-dive analysis of your <span className="text-text-primary font-bold">digital infrastructure</span>, marketing channels, and manual workflows to identify exactly what is holding your business back.
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto italic">
              Receive clear, actionable insights on how to increase conversions, <span className="text-primary font-bold">outrank competitors</span>, and build a system that scales with n8n.
            </p>
          </motion.div>
        </Section>

        {/* WHAT YOU GET */}
        <Section className="bg-surface/30">
          <div className="text-center max-w-3xl mx-auto mb-20 text-text-primary">
            <h2 className="text-4xl md:text-6xl font-black mb-6">A Structured Review of Your <span className="text-gradient">Digital Systems</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatYouGet.map((item, i) => (
              <GlassCard key={i} className="p-10 border-primary/5 transition-all flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 h-16 flex items-center">{item.title}</h3>
                <p className="text-text-secondary font-sans leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* WHO THIS IS FOR */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">Designed for Businesses That <span className="text-gradient">Want to Grow</span></h2>
              <div className="space-y-6">
                {[
                  "Startups looking to build a strong digital foundation",
                  "Businesses struggling with low conversions",
                  "Brands running ads but not seeing results",
                  "Teams spending too much time on manual tasks"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center p-5 glass rounded-none border-white/5 bg-white/5">
                    <div className="w-8 h-8 bg-primary/10 rounded-none flex items-center justify-center text-primary">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg font-bold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] -z-10 rounded-none" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Growth Audit Analysis"
                className="rounded-none shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </Section>

        {/* AUDIT FORM */}
        <Section className="bg-background relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* FORM INFO */}
              <div className="lg:col-span-5 py-6">
                <h2 className="text-4xl font-black mb-8">Request Your <span className="text-gradient">Free Audit</span></h2>
                <p className="text-xl text-text-secondary font-sans leading-relaxed mb-12">
                  Please provide accurate details about your business, current challenges, and goals. This helps us deliver a more valuable and relevant audit.
                </p>

                <div className="space-y-8">
                  {[
                    { step: 1, title: "Analysis", text: "We review your website, marketing performance, and workflows." },
                    { step: 2, title: "Insights Preparation", text: "Our team prepares a structured breakdown with key findings." },
                    { step: 3, title: "Response", text: "You receive actionable recommendations tailored to your business." }
                  ].map((s) => (
                    <div key={s.step} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary font-black text-xl">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="font-black text-xl mb-2">{s.title}</h4>
                        <p className="text-text-secondary font-sans leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FORM */}
              <div className="lg:col-span-7">
                <GlassCard className="p-10 border-primary/20 bg-background/50 backdrop-blur-3xl shadow-strong-glow">
                  {complete ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-primary/10 rounded-none flex items-center justify-center mx-auto mb-8 shadow-glow">
                        <Rocket size={48} className="text-primary animate-bounce" />
                      </div>
                      <h3 className="text-3xl font-black mb-4">Request Received</h3>
                      <p className="text-text-secondary font-sans text-lg mb-10">We'll identify your growth gaps and reach out with your audit results within 48 hours.</p>
                      <Button variant="secondary" onClick={() => setComplete(false)}>Back to Form</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Full Name</Label>
                        <Input
                          id="name"
                          {...register('fullName', { required: 'Name is required' })}
                          placeholder="Code Cubes"
                          className="h-14 bg-surface/50 border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Email Address</Label>
                        <Input
                          id="email"
                          {...register('email', { required: 'Email is required' })}
                          type="email"
                          placeholder="codecubesdigital@gmail.com"
                          className="h-14 bg-surface/50 border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Phone Number</Label>
                          <Input
                            id="phone"
                            {...register('phoneNumber', { required: 'Phone is required' })}
                            type="tel"
                            placeholder="+1 234 567 890"
                            className="h-14 bg-surface/50 border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Company Name</Label>
                          <Input
                            id="company"
                            {...register('companyName')}
                            placeholder="Acme Corp"
                            className="h-14 bg-surface/50 border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Website URL (Optional)</Label>
                        <Input
                          id="website"
                          {...register('websiteUrl')}
                          placeholder="https://..."
                          className="h-14 bg-surface/50 border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Budget</Label>
                          <select
                            id="budget"
                            {...register('budget', { required: 'Budget is required' })}
                            className="w-full h-14 bg-surface/50 border border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select Budget</option>
                            <option value="<500">&lt; $500</option>
                            <option value="500-1500">$500 - $1,500</option>
                            <option value="1500-3000">$1,500 - $3,000</option>
                            <option value="3000+">$3,000+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Services</Label>
                          <select
                            id="services"
                            {...register('services', { required: 'Service is required' })}
                            className="w-full h-14 bg-surface/50 border border-white/10 rounded-none px-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select Service</option>
                            <option value="wordpress">Wordpress Web Development</option>
                            <option value="shopify">Shopify Store Designing</option>
                            <option value="custom_web">Custom Web Development</option>
                            <option value="seo">Search Engine Optimization(SEO)</option>
                            <option value="marketing">Performance Marketing(Meta & Google)</option>
                            <option value="audit">Free Audit / Consultation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Message</Label>
                        <textarea
                          id="message"
                          {...register('message', { required: 'Message is required' })}
                          placeholder="Tell us about your project..."
                          className="w-full h-32 bg-surface/50 border border-white/10 rounded-none p-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                        ></textarea>
                      </div>
                      <Button type="submit" size="lg" className="w-full h-18 text-xl font-black shadow-glow group">
                        CLAIM MY FREE AUDIT <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </form>
                  )}
                </GlassCard>
              </div>
            </div>
          </div>
        </Section>

        {/* WHY CODECUBES PARTIAL */}
        <Section className="bg-surface/50">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Choose <span className="text-gradient">Codecubes</span></h2>
            <p className="text-text-secondary text-lg font-sans">A System-Based Approach to Growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Performance focused", desc: "Focus on performance, not just design." },
              { title: "Data-driven insights", desc: "Hard insights and recommendations based on real data." },
              { title: "Integrated approach", desc: "Evolution of development, marketing, and automation." },
              { title: "Scalable solutions", desc: "Tailored to your business needs and future growth." }
            ].map((item, i) => (
              <div key={i} className="p-8 glass rounded-none text-center hover:bg-primary/[0.02] transition-colors border-white/5">
                <CheckCircle2 size={32} className="text-primary mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-text-secondary text-sm font-sans">{item.desc}</p>
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
            <h2 className="text-4xl md:text-7xl font-black mb-8">Take the First Step Toward <br /> <span className="text-gradient">Smarter Growth</span></h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              Your audit is completely free and designed to provide real value. Submit your details today and get a clearer path to improving your digital performance.
            </p>
            <Link to="#audit-form">
              <Button size="lg" className="h-20 px-16 text-xl font-black shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                GET STARTED NOW
              </Button>
            </Link>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
