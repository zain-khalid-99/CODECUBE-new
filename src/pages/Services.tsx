import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Search,
  BarChart3,
  Zap,
  Globe,
  Database,
  Workflow,
  Cpu,
  Target
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { SEO } from '@/src/components/ui/SEO';
import Antigravity from '@/src/components/ui/Antigravity';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const servicesBreakdown = [
    {
      id: "web-dev",
      title: "1. Web Development",
      subtitle: "High-Performance Websites Built for Conversions",
      icon: <Monitor size={32} />,
      intro: "We design and develop modern websites that are fast, responsive, and optimized for user experience and business outcomes.",
      listTitle: "Our Web Development Services Include:",
      items: [
        { name: "Custom Web Development", desc: "Tailored solutions designed to meet your unique business requirements.", href: "/services/custom-web" },
        { name: "WordPress Development", desc: "Scalable and easy-to-manage websites built using industry best practices.", href: "/services/wordpress" },
        { name: "Shopify Store Development", desc: "Conversion-focused e-commerce stores optimized for performance.", href: "/services/shopify" }
      ],
      benefits: ["Fast loading and optimized performance", "Mobile-responsive design", "Conversion-focused layouts", "Scalable and secure architecture"],
      outcome: "Websites that not only look professional but actively contribute to lead generation and revenue growth."
    },
    {
      id: "seo",
      title: "2. Search Engine Optimization (SEO)",
      subtitle: "Increase Visibility and Drive Organic Traffic",
      icon: <Search size={32} />,
      intro: "Our SEO strategies are designed to improve your rankings on search engines and help your business attract consistent, high-quality traffic.",
      listTitle: "Our SEO Services Include:",
      items: [
        { name: "Technical SEO optimization", desc: "Ensuring your site is crawlable and recognized by search engines.", href: "/services/seo" },
        { name: "On-page SEO", desc: "Optimizing content, structure, and keywords for maximum relevance.", href: "/services/seo" },
        { name: "Keyword research and strategy", desc: "Identifying the terms your customers are actually searching for.", href: "/services/seo" },
        { name: "Performance tracking and reporting", desc: "Regular updates on your growth and search visibility.", href: "/services/seo" }
      ],
      benefits: ["Improved search engine rankings", "Increased organic traffic", "Better visibility for target keywords", "Long-term, sustainable growth"],
      outcome: "A strong online presence that consistently brings in qualified leads without relying solely on paid advertising."
    },
    {
      id: "marketing",
      title: "3. Performance Marketing (Meta & Google Ads)",
      subtitle: "Data-Driven Campaigns Focused on ROI",
      icon: <BarChart3 size={32} />,
      intro: "We create and manage targeted advertising campaigns that generate measurable results across platforms like Meta Ads and Google Ads.",
      listTitle: "Our Performance Marketing Services Include:",
      items: [
        { name: "Campaign strategy and setup", desc: "Foundational planning for your advertising success.", href: "/services/marketing" },
        { name: "Audience targeting and segmentation", desc: "Reaching the right people at the right time.", href: "/services/marketing" },
        { name: "Ad creatives and copy optimization", desc: "High-performing visual and written assets.", href: "/services/marketing" },
        { name: "Conversion tracking and analytics", desc: "Measuring every dollar to ensure maximum ROI.", href: "/services/marketing" }
      ],
      benefits: ["Higher return on ad spend (ROAS)", "Improved lead quality", "Scalable advertising campaigns", "Continuous optimization based on data"],
      outcome: "Efficient ad campaigns that generate leads, drive sales, and support scalable business growth."
    },
    {
      id: "automation",
      title: "4. Automation (n8n Workflows)",
      subtitle: "Streamline Operations with Smart Automation Systems",
      icon: <Workflow size={32} />,
      intro: "We build custom n8n automation workflows that connect your tools, automate repetitive tasks, and improve overall efficiency.",
      listTitle: "Our Automation Services Include:",
      items: [
        { name: "Lead capture and routing automation", desc: "Instant response to new opportunities." },
        { name: "Email follow-up sequences", desc: "Nurturing leads without manual intervention." },
        { name: "CRM integrations", desc: "Seamless data flow between your business tools." },
        { name: "Workflow automation", desc: "Custom processes across multiple platforms." }
      ],
      benefits: ["Reduced manual workload", "Faster response times", "Improved operational efficiency", "Better data flow between systems"],
      outcome: "A connected system where your business processes run smoothly, saving time and enabling you to focus on growth."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO 
        title="Web Development, SEO, & n8n Automation Services | Codecubes" 
        description="Scalable digital solutions including custom web development, structured SEO strategies, ROI-focused performance marketing, and advanced n8n workflow automation."
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              High-Performance <br /> <span className="text-gradient">Digital Growth Services</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans mb-12">
              At Codecubes, we deliver structured, performance-driven solutions. Our expertise spans <span className="text-text-primary font-bold">bespoke web development</span>, <span className="text-text-primary font-bold">technical SEO</span>, and <span className="text-text-primary font-bold">automated processes</span> designed for efficiency.
            </motion.p>
          </motion.div>
        </Section>

        {/* SERVICES LIST */}
        <Section className="bg-surface/30">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Services</span></h2>
            <p className="text-text-secondary text-lg font-sans">Comprehensive Solutions Designed for Performance, Efficiency, and Growth</p>
          </div>

          <div className="space-y-32">
            {servicesBreakdown.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                id={service.id}
              >
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-8 shadow-glow">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-2">{service.title}</h3>
                    <h4 className="text-xl md:text-2xl font-bold text-primary mb-6">{service.subtitle}</h4>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed font-sans">
                      {service.intro}
                    </p>
                    
                    <h5 className="text-[10px] uppercase font-black tracking-widest text-text-muted mb-6">{service.listTitle}</h5>
                    <div className="space-y-6 mb-12">
                      {service.items.map(item => (
                        <Link 
                          key={item.name} 
                          to={item.href || '#'}
                          className="flex gap-4 group/item hover:bg-primary/5 p-4 rounded-none transition-all"
                        >
                          <div className="mt-1.5 shrink-0 w-2 h-2 rounded-none bg-primary" />
                          <div>
                            <div className="font-bold text-text-primary text-lg group-hover/item:text-primary transition-colors">{item.name}</div>
                            <div className="text-text-secondary text-sm font-sans">{item.desc}</div>
                          </div>
                          <ArrowRight size={16} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all text-primary" />
                        </Link>
                      ))}
                    </div>

                    <div className="p-8 glass border-primary/20 bg-primary/5 rounded-none">
                      <h5 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Outcome</h5>
                      <p className="text-lg font-sans text-text-primary font-bold italic leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="lg:sticky lg:top-32">
                    <GlassCard className="p-10 border-primary/10">
                      <h4 className="text-xl font-bold mb-8">Key Benefits:</h4>
                      <div className="space-y-4">
                        {service.benefits.map(benefit => (
                          <div key={benefit} className="flex items-center gap-4 p-4 rounded-none bg-white/5 border border-white/5 group hover-border-dark transition-all">
                            <div className="w-8 h-8 bg-primary/10 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                              <CheckCircle2 size={16} />
                            </div>
                            <span className="font-bold text-text-primary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12">
                        <Link to="/contact">
                          <Button className="w-full h-16 text-lg font-black shadow-glow">GET IN TOUCH</Button>
                        </Link>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROCESS SECTION */}
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-20 text-text-primary">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Process</span></h2>
            <p className="text-text-secondary text-lg font-sans">A Structured Approach to Delivering Results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1.", title: "Audit", desc: "We assess your current systems, website, and marketing performance to identify gaps and opportunities.", icon: <Search /> },
              { step: "2.", title: "Strategy", desc: "We develop a clear and actionable plan aligned with your business goals.", icon: <Target /> },
              { step: "3.", title: "Execution", desc: "We implement solutions with a focus on quality, performance, and scalability.", icon: <Cpu /> },
              { step: "4.", title: "Optimization & Scale", desc: "We continuously refine and improve systems to maximize results over time.", icon: <Zap /> }
            ].map((p, i) => (
              <div key={i} className="relative p-10 glass rounded-none group transition-all hover:bg-primary/[0.02] hover-border-dark">
                <div className="text-4xl font-black text-primary/10 mb-6">{p.step}</div>
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-black mb-4 h-12 flex items-center">{p.title}</h3>
                <p className="text-text-secondary font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* WHY CHOOSE US */}
        <Section className="bg-surface/50 border-y border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Choose <span className="text-gradient">Codecubes</span></h2>
            <p className="text-text-secondary text-lg font-sans underline underline-offset-8">A Reliable Partner for Long-Term Growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Integrated approach', desc: 'Seamlessly connecting development, marketing, and automation.' },
              { title: 'Data-driven decisions', desc: 'No guesswork. Every strategy is backed by performance metrics.' },
              { title: 'Measurable results', desc: 'We focus on KPIs that actually drive business value.' },
              { title: 'Scalable solutions', desc: 'Systems that grow as your business reaches new milestones.' }
            ].map((item, i) => (
              <GlassCard key={item.title} className="p-8 flex gap-6 items-start translate-y-0 hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-sans">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-24 text-center rounded-none relative overflow-hidden bg-primary/5 border-primary/20"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10" />
            <h2 className="text-4xl md:text-7xl font-black mb-8">Let’s Build a System That <br /> <span className="text-gradient">Works for Your Business</span></h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              If you’re looking to improve your website, marketing, or operations, we’re here to help. Share your requirements, and our team will provide a tailored strategy designed to support your growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="h-20 px-16 text-xl font-black shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                START YOUR GROWTH PLAN
              </Button>
            </Link>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
