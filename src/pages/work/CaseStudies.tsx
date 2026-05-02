import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';
import { Section } from '@/src/components/ui/Section';
import { GlassCard } from '@/src/components/ui/GlassCard';
import { Button } from '@/src/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, ShoppingCart } from 'lucide-react';

const caseStudies = [
  {
    id: 'accessory-booth',
    title: 'Accessory Booth',
    subtitle: 'High-converting WooCommerce store for a mobile accessories brand — 100+ products, premium UI/UX, and scalable architecture built for paid ad campaigns.',
    category: 'E-commerce · Web Development',
    tags: ['WordPress', 'WooCommerce', 'WoodMart'],
    image: '/images/accessoryboothstore.png',
    liveUrl: 'https://accessorybooth.com/',
    detailUrl: '/work/accessory-booth',
    metrics: [
      { label: 'Products Live', value: '100+' },
      { label: 'Responsive', value: '100%' },
      { label: 'Architecture', value: 'Scalable' },
    ],
  },
  {
    id: 'decoranest',
    title: 'DecoraNest',
    subtitle: 'Lead-generation website for a flooring brand — SEO-optimized, fast-loading, and built to convert visitors into qualified inquiries.',
    category: 'Lead Generation · Web Development',
    tags: ['WordPress', 'Elementor', 'Floren Theme', 'Fluent Forms'],
    image: '/images/decoranest.png',
    detailUrl: '/work/decoranest',
    metrics: [
      { label: 'Pages Built', value: '5+' },
      { label: 'Mobile-Friendly', value: '100%' },
      { label: 'Core Web Vitals', value: 'Optimized' },
    ],
  },
  {
    id: 'rlow-tyres',
    title: "R'Low Tyres",
    subtitle: 'High-converting automotive service website for a tyre & vehicle service business — 20+ pages, WhatsApp integration, LiteSpeed performance, and local SEO optimization.',
    category: 'Automotive Services · Web Development',
    tags: ['WordPress', 'Elementor', 'Yoast SEO', 'LiteSpeed'],
    image: '/images/Rlow Tyres.png',
    detailUrl: '/work/rlow-tyres',
    metrics: [
      { label: 'Pages Developed', value: '20+' },
      { label: 'Mobile-Friendly', value: '100%' },
      { label: 'Inquiry Channels', value: 'Multi' },
    ],
  },
  {
    id: 'imports-pk',
    title: 'Imports.pk',
    subtitle: 'Scalable, high-converting Shopify e-commerce store for a multi-product brand — 100+ products, WhatsApp integration, and a conversion-focused shopping experience.',
    category: 'E-commerce · Shopify Development',
    tags: ['Shopify', 'Premium Theme', 'WhatsApp', 'Social Integration'],
    image: '/images/imports.png',
    detailUrl: '/work/imports-pk',
    metrics: [
      { label: 'Products Listed', value: '100+' },
      { label: 'Mobile-Friendly', value: '100%' },
      { label: 'Performance', value: 'Fast' },
    ],
  },
  {
    id: 'fabtion',
    title: 'Fabtion',
    subtitle: 'Data-driven Meta Ads campaign for a clothing brand — generated 165+ messaging conversations at PKR 20.64 CPR through audience segmentation and creative testing.',
    category: 'Performance Marketing · Meta Ads',
    tags: ['Meta Ads', 'Audience Research', 'Creative Testing'],
    image: '/images/fabtion.png',
    detailUrl: '/work/fabtion',
    metrics: [
      { label: 'Conversations', value: '165+' },
      { label: 'CPR', value: '₨20.64' },
      { label: 'Impressions', value: '12K+' },
    ],
  },
  {
    id: 'legacy-by-decora',
    title: 'Legacy by Decora',
    subtitle: 'Full-funnel Meta Ads strategy for a premium brand — delivered 330+ conversations, 1,000+ engagements, and 110,000+ impressions with high cost-efficiency.',
    category: 'Performance Marketing · Meta Ads',
    tags: ['Meta Ads', 'Full-Funnel', 'Engagement'],
    image: '/images/legacy by decora.png',
    detailUrl: '/work/legacy-by-decora',
    metrics: [
      { label: 'Conversations', value: '330+' },
      { label: 'Reach', value: '57K+' },
      { label: 'Engagements', value: '1,000+' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Case Studies | Real Projects & Results | Codecubes"
        description="Explore Codecubes case studies — conversion-driven e-commerce stores, lead generation websites, and digital platforms with measurable results."
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <Section className="relative pt-24 pb-16 overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-[5px] -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-6 font-sans bg-primary/10 px-4 py-2 rounded-[5px]">
              Our Work
            </span>
            <h1 className="mb-6">
              Real Projects,{' '}
              <span className="text-gradient">Measurable Results</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-sans">
              Every project is built with a clear goal — drive traffic, generate leads, and convert visitors into customers.
            </p>
          </motion.div>
        </Section>

        {/* CARDS */}
        <Section className="pb-24">
          <div className="space-y-16 max-w-6xl mx-auto">
            {caseStudies.map((cs, index) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <GlassCard className="overflow-hidden border-white/[0.06] hover:border-primary/20 transition-colors group p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>

                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                      <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-[320px] lg:h-full min-h-[320px] object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                        {cs.metrics.map((m, i) => (
                          <span key={i} className="glass px-3 py-1.5 rounded-[5px] text-xs font-sans">
                            <span className="text-primary font-black">{m.value}</span>{' '}
                            <span className="text-text-muted">{m.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center p-10 lg:p-14 ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <span className="text-primary text-xs font-black tracking-widest uppercase mb-4 font-sans">
                        {cs.category}
                      </span>
                      <h2 className="text-4xl font-black mb-4 group-hover:text-primary transition-colors">
                        {cs.title}
                      </h2>
                      <p className="text-text-secondary leading-relaxed font-sans mb-8">
                        {cs.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {cs.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-[5px] text-xs font-bold bg-primary/10 text-primary font-sans border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Link to={cs.detailUrl}>
                          <Button className="h-12 px-8 shadow-glow group/btn">
                            View Case Study
                            <ArrowUpRight size={16} className="ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                        {cs.liveUrl && (
                          <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="h-12 px-8 gap-2">
                              <Globe size={14} /> Live Website
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="pb-40">
          <GlassCard className="p-20 text-center relative overflow-hidden bg-primary/5 border-primary/20 max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-[5px] -z-10" />
            <ShoppingCart className="mx-auto mb-6 text-primary opacity-60" size={40} />
            <h2 className="mb-6">Want Results Like These?</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Your business is one well-built website away from consistent leads and sales. Let's build it together.
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
        </Section>
      </main>

      <Footer />
    </div>
  );
}
