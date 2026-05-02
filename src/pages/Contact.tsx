import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  MessageSquare,
  Zap,
  BarChart3,
  Search,
  Workflow
} from 'lucide-react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Section } from '@/src/components/ui/Section';
import { Button } from '@/src/components/ui/button';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Link } from 'react-router-dom';
import { SEO } from '@/src/components/ui/SEO';
import Antigravity from '@/src/components/ui/Antigravity';

interface ContactFormData {
  fullName: string;
  email: string;
  budget: string;
  services: string;
  websiteUrl: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyK50yHJ_WpBIRI-QmJxHSGecqrIfbQR4MGi3gVo3Nyp0l0WGjthRYIq8p8ZjtRzpZ0/exec";

      const payload = {
        form_type: "Contact Page Form",
        full_name: data.fullName,
        email: data.email,
        phone: data.phoneNumber || 'N/A',
        company: data.companyName || 'N/A',
        website: data.websiteUrl || 'N/A',
        budget: data.budget || 'N/A',
        service: data.services || 'N/A',
        message: data.message,
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

      setSubmitted(true);
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO
        title="Contact Codecubes | Growth Strategy & Automation Consultation"
        description="Book a call with Codecubes. Let’s discuss your digital growth strategy, web development needs, or n8n automation workflows. We bridge the gap between traffic and conversions."
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 blur-[150px] rounded-[5px] -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Let’s Architect Your <br /> <span className="text-gradient">Growth Engine</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans mb-12">
              Have a project in mind or looking to improve your current systems? Share your details, and our team will get back with a <span className="text-text-primary font-bold">bespoke scaling strategy</span> tailored to your business goals.
            </p>
          </motion.div>
        </Section>

        {/* CONTACT FORM SECTION */}
        <Section>
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            {/* INFO SIDE */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-8">What Happens <span className="text-gradient">Next</span></h2>
                <div className="space-y-8">
                  {[
                    { step: "Review", text: "We analyze your requirements and current setup.", icon: <Search /> },
                    { step: "Response", text: "Our team reaches out with initial insights and recommendations.", icon: <MessageSquare /> },
                    { step: "Discussion", text: "We schedule a detailed conversation to align on strategy.", icon: <Zap /> }
                  ].map((s) => (
                    <div key={s.step} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 bg-primary/10 rounded-[5px] flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                        {React.cloneElement(s.icon as React.ReactElement<{size?: number}>, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="font-black text-xl mb-1">{s.step}</h4>
                        <p className="text-text-secondary font-sans leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-10 rounded-[5px] border-primary/20 bg-primary/5">
                <h4 className="text-2xl font-black mb-4">Why Reach Out?</h4>
                <ul className="space-y-4">
                  {[
                    "Get expert guidance tailored to your business",
                    "Identify gaps in your current systems",
                    "Explore scalable solutions for growth",
                    "Understand how automation can improve efficiency"
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-center font-bold text-text-primary text-sm">
                      <div className="w-5 h-5 bg-primary/20 rounded-[5px] flex items-center justify-center text-primary">
                        <CheckCircle2 size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border-y border-white/5 space-y-6">
                <div className="flex items-center gap-4 text-text-primary">
                  <Mail className="text-primary" />
                  <div>
                    <div className="text-xs uppercase font-black tracking-widest text-text-muted">Email Us</div>
                    <div className="font-bold">hello@codecubes.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-text-primary">
                  <Clock className="text-primary" />
                  <div>
                    <div className="text-xs uppercase font-black tracking-widest text-text-muted">Response Time</div>
                    <div className="font-bold">Within 24–48 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="lg:col-span-7">
              <GlassCard className="p-10 md:p-12 border-primary/20 bg-background/50 backdrop-blur-3xl shadow-strong-glow">
                {!submitted ? (
                  <>
                    <h3 className="text-3xl font-black mb-4">Get in Touch</h3>
                    <p className="text-text-secondary mb-10 font-sans">
                      Fill out the form below with your requirements. The more details you provide, the better we can understand your goals and suggest the right solution.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Full Name</Label>
                        <Input
                          id="name"
                          {...register('fullName', { required: 'Name is required' })}
                          placeholder="John Doe"
                          className="h-14 bg-surface/50 border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Email Address</Label>
                        <Input
                          id="email"
                          {...register('email', { required: 'Email is required' })}
                          type="email"
                          placeholder="john@company.com"
                          className="h-14 bg-surface/50 border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50"
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
                            className="h-14 bg-surface/50 border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Company Name</Label>
                          <Input
                            id="company"
                            {...register('companyName')}
                            placeholder="Acme Corp"
                            className="h-14 bg-surface/50 border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Website URL (Optional)</Label>
                        <Input
                          id="website"
                          {...register('websiteUrl')}
                          placeholder="https://..."
                          className="h-14 bg-surface/50 border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Budget</Label>
                          <select
                            id="budget"
                            {...register('budget', { required: 'Budget is required' })}
                            className="w-full h-14 bg-surface/50 border border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select Budget</option>
                            <option value="<50k">&lt; Rs 50,000</option>
                            <option value="50k-100k">Rs 50,000 - Rs 100,000</option>
                            <option value="100k-200k">Rs 100,000 - Rs 200,000</option>
                            <option value="200k+">Rs 200,000+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-2 shadow-none">Services</Label>
                          <select
                            id="services"
                            {...register('services', { required: 'Service is required' })}
                            className="w-full h-14 bg-surface/50 border border-white/10 rounded-[5px] px-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
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
                          className="w-full h-32 bg-surface/50 border border-white/10 rounded-[5px] p-6 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                        ></textarea>
                      </div>
                      <Button type="submit" size="lg" className="w-full h-18 text-xl font-black shadow-glow group">
                        SEND STRATEGY REQUEST <Send size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Button>
                      <p className="text-center text-text-muted text-xs font-sans leading-relaxed">
                        Our team will review your submission and respond with relevant insights.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 bg-primary/10 rounded-[5px] flex items-center justify-center mx-auto mb-8 shadow-glow">
                      <CheckCircle2 size={48} className="text-primary animate-pulse" />
                    </div>
                    <h3 className="text-4xl font-black mb-4">Transmission Sent</h3>
                    <p className="text-text-secondary text-lg font-sans max-w-sm mx-auto">Our growth specialists will review your details and respond within 24-48 hours.</p>
                  </div>
                )}
              </GlassCard>
            </div>
          </div>
        </Section>

        {/* FINAL SECTION */}
        <Section className="pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-24 text-center rounded-[5px] relative overflow-hidden bg-primary/5 border-primary/20 shadow-strong-glow"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Start Building a <br /> <span className="text-gradient">Smarter System</span></h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              Whether you're starting from scratch or improving existing systems, we’re here to help you move forward with clarity and confidence.
            </p>
            <Link to="/free-audit">
              <Button size="lg" className="h-20 px-16 text-xl font-black shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                GET FREE AUDIT
              </Button>
            </Link>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
