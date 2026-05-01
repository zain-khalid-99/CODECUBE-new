import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Cpu, 
  Target, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Users,
  BarChart3,
  Search,
  Monitor,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Globe,
  Database
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { SEO } from '@/src/components/ui/SEO';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { GridPattern } from '@/src/components/ui/grid-pattern';
import { cn } from '@/src/lib/utils';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`px-6 py-20 md:py-32 ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const stats = [
    { label: "Projects Delivered", value: "80+" },
    { label: "Approach", value: "Conversion-Focused" },
    { label: "Decision Making", value: "Data-Driven" }
  ];

  const services = [
    {
      title: "Web Development",
      desc: "We design and develop fast, responsive, and high-converting websites built to deliver real business outcomes.",
      icon: <Monitor />,
      link: "/services/custom-web"
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your visibility on search engines and attract consistent, high-quality organic traffic with structured SEO strategies.",
      icon: <Search />,
      link: "/services/seo"
    },
    {
      title: "Performance Marketing",
      desc: "We create and manage targeted campaigns on Meta and Google Ads, focusing on measurable ROI and scalable growth.",
      icon: <BarChart3 />,
      link: "/services/marketing"
    },
    {
      title: "Automation (n8n Workflows)",
      desc: "We build custom n8n automation systems to streamline operations, automate repetitive tasks, and improve business efficiency.",
      icon: <Workflow />,
      link: "/automations"
    }
  ];

  const faqs = [
    { q: "What services does Codecubes provide?", a: "We offer web development, SEO, performance marketing, and n8n-based automation solutions to help businesses grow online." },
    { q: "How long does a typical project take?", a: "Project timelines depend on complexity, but most websites and systems are delivered within a few weeks." },
    { q: "What is n8n automation?", a: "n8n is a workflow automation tool that allows businesses to connect applications, automate tasks, and streamline operations without manual intervention." },
    { q: "Do you work with startups and small businesses?", a: "Yes, we work with startups, small businesses, and growing companies looking to scale effectively." },
    { q: "How can I get started?", a: "You can start by filling out the contact form. Our team will review your requirements and get back with a tailored strategy." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO 
        title="AI Web Development, SEO & Automation Agency | Codecubes" 
        description="Codecubes builds high-converting websites, performance marketing campaigns, and AI-powered automation systems to help businesses grow faster."
      />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <Section className="relative pt-32 md:pt-48 lg:pt-40 overflow-hidden text-center min-h-[80vh] flex items-center bg-background">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
              "opacity-100 text-primary/10"
            )}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative z-10"
          >

            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-pill mb-8 border-primary/20 bg-primary/5">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase text-primary">SCALABLE DIGITAL SYSTEMS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
              AI-Powered Web Development, SEO & <span className="text-gradient">Performance Marketing</span> That Drives Real Growth
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed font-sans max-w-3xl mx-auto">
              We build high-performing digital systems that combine modern web development, data-driven marketing, and <span className="text-text-primary font-bold">advanced n8n automation workflows</span> to help businesses scale efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/free-audit">
                <Button size="lg" className="h-16 px-10 text-lg font-black shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                  GET A FREE GROWTH STRATEGY
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold">
                  BOOK A CALL
                </Button>
              </Link>
            </div>

            <p className="text-text-muted text-sm font-sans max-w-lg mx-auto">
              Share your business goals and current challenges. Our team will review your setup and provide practical, data-backed recommendations tailored to your growth.
            </p>

            <div className="mt-20 overflow-hidden relative">
              <div className="flex gap-4 absolute inset-0 -z-10 opacity-20 blur-3xl">
                <div className="w-full h-full bg-linear-to-r from-primary/20 via-transparent to-primary/20" />
              </div>
              <div className="py-8 border-y border-text-primary/10">
                <div className="flex whitespace-nowrap animate-scroll">
                  {/* First set of logos */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-20 items-center px-10">
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">AETHER</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">NEXA</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">QUANTUM</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">VESTA</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">CORE</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">LUMINA</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">VERTEX</div>
                      <div className="text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">ORION</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* SERVICES SECTION */}
        <Section className="pt-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Services</span></h2>
            <p className="text-text-secondary text-lg font-sans">Comprehensive Digital Solutions Designed for Growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <GlassCard key={i} className="p-8 group hover-border-dark hover:bg-primary/[0.02]">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-8 text-sm font-sans leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center text-primary font-black text-xs tracking-[0.2em] uppercase gap-2 hover:gap-4 transition-all">
                  EXPLORE <ArrowRight size={16} />
                </Link>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* CHALLENGES SECTION */}
        <Section className="bg-surface/50">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">Challenges <span className="text-gradient">We Solve</span></h2>
              <p className="text-xl text-text-secondary font-sans mb-12">Why Businesses Struggle to Scale Online</p>
              
              <div className="space-y-6">
                {[
                  "Websites that fail to convert visitors into customers",
                  "Advertising campaigns with low return on investment",
                  "Lack of a clear and structured growth strategy",
                  "Manual workflows that limit scalability"
                ].map((challenge, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-lg text-primary">
                      <AlertTriangle size={18} />
                    </div>
                    <p className="text-lg font-bold text-text-primary">{challenge}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-10 glass border-primary/20 bg-primary/5 rounded-[40px]">
                <p className="text-xl font-sans text-text-primary italic leading-relaxed">
                  "Codecubes addresses these challenges by <span className="font-bold text-primary">building integrated systems</span> designed for performance and growth."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] -z-10 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Growth Challenges" 
                className="rounded-[40px] shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </Section>

        {/* PROCESS SECTION */}
        <Section className="bg-surface/30">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Process</span></h2>
            <p className="text-text-secondary text-lg font-sans">A Structured Approach to Sustainable Growth</p>
          </div>

          <div className="max-w-6xl mx-auto relative px-4 py-20">
            {/* Desktop Progress Line */}
            <div className="absolute top-[88px] left-[15%] right-[15%] h-1 bg-primary/10 hidden md:block overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-primary"
               />
            </div>
            
            <div className="grid md:grid-cols-3 gap-20 relative z-10">
              {[
                { step: "01", title: "Audit", desc: "Evaluating your website, marketing, and workflows.", icon: <Search /> },
                { step: "02", title: "Build", desc: "Developing tailored solutions for your goals.", icon: <Cpu /> },
                { step: "03", title: "Scale", desc: "Optimizing strategies for consistent results.", icon: <Target /> }
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative mb-10">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="w-24 h-24 bg-background border-4 border-primary/20 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-xl"
                    >
                      {React.cloneElement(p.icon as React.ReactElement, { size: 36 })}
                    </motion.div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-xl text-sm font-black flex items-center justify-center border-4 border-background">
                      {p.step}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4">{p.title}</h3>
                  <p className="text-text-secondary text-lg font-sans leading-relaxed max-w-[280px]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* AUTOMATION (n8n) SECTION */}
        <Section className="bg-background relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] -z-10 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
                alt="n8n Automation" 
                className="rounded-[40px] shadow-2xl border border-white/10"
              />
              <GlassCard className="absolute -bottom-10 -right-10 p-8 hidden md:block max-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-widest text-primary">n8n Engine Active</span>
                </div>
                <p className="text-sm font-sans text-text-secondary">Connected 12+ API touchpoints autonomously.</p>
              </GlassCard>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black mb-8">Automation Systems <span className="text-gradient">(n8n)</span></h2>
              <h3 className="text-2xl font-bold mb-6">Smart Automation That Works Continuously</h3>
              <p className="text-lg text-text-secondary leading-relaxed font-sans mb-8">
                We implement n8n-based automation workflows to connect your tools, automate processes, and ensure smooth business operations.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed font-sans mb-10">
                From lead capture to follow-ups and internal workflows, our systems help reduce manual effort and increase productivity.
              </p>
              <Link to="/automations">
                <Button size="lg" className="h-16 px-10 rounded-pill">
                  LEARN ABOUT n8n <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        {/* REVIEWS SECTION */}
        <Section className="bg-surface/50 border-y border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Client <span className="text-gradient">Feedback</span></h2>
            <p className="text-text-secondary text-lg font-sans">What Our Clients Say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Codecubes significantly improved our website performance and conversion rates. The results were clear within a short time.",
                author: "Sarah J.",
                role: "E-commerce"
              },
              {
                text: "Our advertising campaigns became more structured and efficient, leading to better ROI across all channels.",
                author: "Michael R.",
                role: "Fintech"
              },
              {
                text: "The n8n automation workflows saved us hours of manual work every week. It's a total game-changer for our scale.",
                author: "David T.",
                role: "Startup Founder"
              }
            ].map((review, i) => (
              <GlassCard key={i} className="p-10">
                <div className="flex gap-1 mb-8 text-primary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl italic font-sans mb-10 leading-relaxed text-text-primary">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-xl">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="font-black text-text-primary">{review.author}</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-text-muted">{review.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* WHY CHOOSE SECTION */}
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Choose <span className="text-gradient">Codecubes</span></h2>
            <p className="text-text-secondary text-lg font-sans">A Growth Partner Focused on Results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Performance-Driven", desc: "Web development and marketing built for outcomes." },
              { title: "Data-Backed", desc: "Strategies informed by hard data and analysis." },
              { title: "Custom n8n", desc: "Tailored automation solutions for maximum efficiency." },
              { title: "Scalable Systems", desc: "Designed for sustainable, long-term business growth." }
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-[40px] border-primary/5 hover:border-primary/20 transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-text-secondary font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 p-12 glass border-primary/20 bg-primary/5 rounded-[40px] text-center max-w-4xl mx-auto">
            <p className="text-2xl font-sans text-text-primary italic leading-relaxed">
              We don’t focus on short-term wins. <span className="font-black text-primary">We focus on building systems that continue to deliver value over time.</span>
            </p>
          </div>
        </Section>

        {/* FAQ SECTION */}
        <Section className="bg-surface/30">
          <div className="text-center mb-20 text-text-primary">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-text-primary">
            {faqs.map((faq, i) => (
              <GlassCard key={i} className="p-0 overflow-hidden">
                <details className="group">
                  <summary className="p-8 list-none flex items-center justify-between cursor-pointer group-hover:bg-primary/5 transition-colors">
                    <span className="text-lg font-bold">{faq.q}</span>
                    <ChevronDown size={20} className="text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-8 pt-0 text-text-secondary leading-relaxed font-sans border-t border-white/5 bg-white/5">
                    {faq.a}
                  </div>
                </details>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* FINAL CONTACT SECTION */}
        <Section className="bg-background relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-surface/50 rounded-[48px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 -z-10" />
             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 blur-[150px] rounded-full -z-10" />
             
             <div>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Start Building a <span className="text-gradient">Smarter Growth System</span></h2>
               <p className="text-xl text-text-secondary leading-relaxed font-sans mb-12">
                 Tell us about your business and goals. We’ll help you identify the right strategy to improve performance and scale efficiently.
               </p>
               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4 text-text-primary">
                   <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary"><Zap size={24} /></div>
                   <div>
                     <div className="font-black">Expert Guidance</div>
                     <div className="text-sm text-text-muted font-sans">Tailored strategy for your business.</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 text-text-primary">
                   <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary"><Database size={24} /></div>
                   <div>
                     <div className="font-black">Clear Roadmap</div>
                     <div className="text-sm text-text-muted font-sans">Identifying gaps in current systems.</div>
                   </div>
                 </div>
               </div>
             </div>

             <GlassCard className="p-8 md:p-10 border-primary/20 bg-background/50 backdrop-blur-3xl shadow-strong-glow">
                {!formSubmitted ? (
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="space-y-2 text-text-primary">
                      <Label className="text-[10px] uppercase font-black text-text-muted tracking-[0.2em] px-2 shadow-none">Full Name</Label>
                      <Input type="text" placeholder="John Doe" className="h-14 bg-surface/50 border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-primary/50" required />
                    </div>
                    <div className="space-y-2 text-text-primary">
                      <Label className="text-[10px] uppercase font-black text-text-muted tracking-[0.2em] px-2 shadow-none">Email Address</Label>
                      <Input type="email" placeholder="john@company.com" className="h-14 bg-surface/50 border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-primary/50" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 text-text-primary">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-[0.2em] px-2 shadow-none">Business Type</Label>
                        <select className="w-full h-14 bg-surface/50 border border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer">
                          <option>SaaS / Tech</option>
                          <option>E-commerce</option>
                          <option>Service</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2 text-text-primary">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-[0.2em] px-2 shadow-none">Website (Opt)</Label>
                        <Input type="url" placeholder="https://..." className="h-14 bg-surface/50 border-white/10 rounded-2xl px-6 focus:ring-2 focus:ring-primary/50" />
                      </div>
                    </div>
                    <div className="space-y-2 text-text-primary">
                      <Label className="text-[10px] uppercase font-black text-text-muted tracking-[0.2em] px-2 shadow-none">Message</Label>
                      <textarea placeholder="Tell us about your challenges..." className="w-full h-32 bg-surface/50 border border-white/10 rounded-2xl p-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none" required></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full h-16 text-lg font-black shadow-glow group">
                      CLAIM MY GROWTH STRATEGY <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">Request Sent</h3>
                    <p className="text-text-secondary font-sans text-lg">Our scale specialists will review your submission and respond within 24 hours.</p>
                  </div>
                )}
             </GlassCard>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
