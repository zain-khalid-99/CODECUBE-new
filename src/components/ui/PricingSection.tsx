import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './button';
import { GlassCard } from './GlassCard';
import { Link } from 'react-router-dom';

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  includes: string[];
  notIncluded: string[];
  timeline: string;
  revisions: string;
};

type PricingCategory = {
  title: string;
  id: string;
  description: string;
  plans: PricingPlan[];
};

const pricingData: PricingCategory[] = [
  {
    id: "wordpress",
    title: "WordPress Website Development",
    description: "We build professional, fast-loading WordPress websites that represent your business with confidence. Every website is mobile-friendly, easy to manage, and built to grow with you.",
    plans: [
      {
        name: "STARTER",
        price: "45,000",
        period: "One-Time",
        description: "Best for brand-new businesses who need a clean, professional website quickly.",
        includes: [
          "Up to 5 pages (Home, About, Services, Contact, Blog)",
          "Mobile-friendly, modern design",
          "Contact form so visitors can reach you",
          "Basic setup so Google can find you",
          "Free domain & hosting guidance"
        ],
        notIncluded: [
          "Custom design from scratch",
          "Online store / payments",
          "Post-launch support"
        ],
        timeline: "7–10 working days",
        revisions: "2 rounds included"
      },
      {
        name: "GROWTH",
        price: "95,000",
        period: "One-Time",
        popular: true,
        description: "For startups ready to make a strong impression and capture more leads.",
        includes: [
          "Up to 12 pages with unique layouts per page",
          "Fully custom design (your brand, your look)",
          "Online store with up to 30 products",
          "Fast loading & Google-ready setup",
          "Google Analytics — see your visitor data",
          "30 days of post-launch support",
          "WhatsApp chat button & social links"
        ],
        notIncluded: [
          "Multi-vendor or booking system"
        ],
        timeline: "14–18 working days",
        revisions: "3 rounds included"
      },
      {
        name: "PREMIUM",
        price: "185,000+",
        period: "One-Time",
        description: "A powerful, fully tailored website for businesses with bigger ambitions.",
        includes: [
          "Up to 25 pages with advanced layouts",
          "Booking, appointment, or membership system",
          "Full online store (products, payments, invoices)",
          "Multi-language support",
          "Speed & performance tuning",
          "60 days of post-launch support",
          "1-hour walkthrough — manage the site yourself",
          "Priority response time"
        ],
        notIncluded: [],
        timeline: "25–35 working days",
        revisions: "5 rounds included"
      }
    ]
  },
  {
    id: "shopify",
    title: "Shopify Store Design",
    description: "We design Shopify stores that look great and are built to convert visitors into paying customers. From a simple launch store to a fully branded experience — we handle it all.",
    plans: [
      {
        name: "LAUNCH",
        price: "40,000",
        period: "One-Time",
        description: "Get your Shopify store live with a clean, ready-to-sell design.",
        includes: [
          "Store setup on a quality free Shopify theme",
          "Up to 25 products added with images & descriptions",
          "Mobile-friendly storefront",
          "Payment method setup (bank transfer, COD, etc.)",
          "Homepage banner & basic branding applied"
        ],
        notIncluded: [
          "Custom store sections or layouts",
          "Email marketing or automation",
          "Post-launch support"
        ],
        timeline: "5–7 working days",
        revisions: "2 rounds included"
      },
      {
        name: "SCALE",
        price: "85,000",
        period: "One-Time",
        popular: true,
        description: "A polished, conversion-focused store designed to turn visitors into buyers.",
        includes: [
          "Up to 50 products with full setup",
          "Custom homepage, collection & product page designs",
          "Abandoned cart recovery setup",
          "Email subscriber capture (pop-up & footer)",
          "Upsell & discount app setup",
          "Speed optimization for faster checkout",
          "30 days post-launch support"
        ],
        notIncluded: [
          "Multi-language / multi-currency"
        ],
        timeline: "12–16 working days",
        revisions: "3 rounds included"
      },
      {
        name: "ENTERPRISE",
        price: "175,000+",
        period: "One-Time",
        description: "A premium Shopify experience built for high-volume, growing brands.",
        includes: [
          "Up to 100 products with bulk setup",
          "Fully bespoke storefront design",
          "Multi-language & multi-currency store",
          "Advanced analytics & sales reporting",
          "Full email marketing flow setup",
          "Loyalty & referral program setup",
          "60 days post-launch support",
          "1-hour handover walkthrough"
        ],
        notIncluded: [],
        timeline: "20–30 working days",
        revisions: "5 rounds included"
      }
    ]
  },
  {
    id: "marketing",
    title: "Performance Marketing",
    description: "We run targeted paid ad campaigns on Google and Meta that bring the right people to your business. Every rupee of your ad budget is tracked and optimised.",
    plans: [
      {
        name: "BOOST",
        price: "35,000",
        period: "Month",
        description: "For businesses running paid ads for the first time and wanting fast results.",
        includes: [
          "1 platform — Google Ads or Meta Ads",
          "Ad budget management up to PKR 200k/mo",
          "Campaign setup with audience targeting",
          "3 ad visuals & copy sets per month",
          "Monthly results report"
        ],
        notIncluded: [
          "A/B testing different ads",
          "Retargeting (ads shown to past visitors)",
          "Dedicated account manager"
        ],
        timeline: "Campaign live in 5 days",
        revisions: "Ad refreshes monthly"
      },
      {
        name: "ACCELERATE",
        price: "70,000",
        period: "Month",
        popular: true,
        description: "Multi-platform campaigns to maximise reach, leads, and conversions.",
        includes: [
          "2 platforms — Google + Meta Ads",
          "Ad budget management up to PKR 500k/mo",
          "A/B testing (find what works)",
          "Retargeting & look-alike audience setup",
          "6 ad visuals & copy sets per month",
          "Bi-weekly performance call with you",
          "Conversion tracking setup"
        ],
        notIncluded: [
          "TikTok or LinkedIn ads"
        ],
        timeline: "Campaign live in 5 days",
        revisions: "Ad refreshes bi-weekly"
      },
      {
        name: "DOMINATE",
        price: "130,000+",
        period: "Month",
        description: "Full-funnel marketing for businesses serious about aggressive growth.",
        includes: [
          "3 platforms — Google, Meta & TikTok/LinkedIn",
          "Ad budget management above PKR 700k/mo",
          "Dedicated account manager",
          "Weekly strategy & performance call",
          "12 ad visuals & copy sets per month",
          "Advanced audience segmentation & funnel",
          "Detailed weekly reporting dashboard",
          "Landing page feedback & suggestions"
        ],
        notIncluded: [],
        timeline: "Campaign live in 7 days",
        revisions: "Ad refreshes weekly"
      }
    ]
  },
  {
    id: "seo",
    title: "Search Engine Optimisation (SEO)",
    description: "We help your business show up on Google. Our SEO work is consistent, transparent, and focused on results that compound over time.",
    plans: [
      {
        name: "FOUNDATION",
        price: "28,000",
        period: "Month",
        description: "Get the SEO basics right so Google can find and rank your website.",
        includes: [
          "Full website SEO health check",
          "5 target keywords researched & optimised",
          "Page titles, descriptions & headings fixed",
          "Google Search Console & Analytics connected",
          "Monthly ranking progress report"
        ],
        notIncluded: [
          "Blog article writing",
          "Backlink building",
          "Competitor analysis"
        ],
        timeline: "Onboarding in 5 days",
        revisions: "Monthly report included"
      },
      {
        name: "AUTHORITY",
        price: "58,000",
        period: "Month",
        popular: true,
        description: "Steady SEO growth to bring in consistent traffic and quality leads every month.",
        includes: [
          "Up to 20 keywords tracked & optimised",
          "4 SEO blog articles written per month",
          "Competitor gap analysis",
          "5 quality backlinks built per month",
          "Technical fixes & site speed improvements",
          "Google Business Profile optimised",
          "Bi-weekly progress calls"
        ],
        notIncluded: [
          "Advanced outreach & digital PR"
        ],
        timeline: "Onboarding in 5 days",
        revisions: "Bi-weekly check-ins"
      },
      {
        name: "DOMINATE",
        price: "115,000+",
        period: "Month",
        description: "An aggressive SEO strategy to outrank competitors and own your niche.",
        includes: [
          "Up to 50 keywords tracked & optimised",
          "8 SEO blog articles written per month",
          "In-depth competitor analysis every quarter",
          "15 high-quality backlinks built per month",
          "Content topic cluster strategy",
          "Advanced technical SEO management",
          "Weekly reporting & strategy calls",
          "Dedicated SEO strategist"
        ],
        notIncluded: [],
        timeline: "Onboarding in 5 days",
        revisions: "Weekly reporting"
      }
    ]
  }
];

interface PricingSectionProps {
  categoryId?: "wordpress" | "shopify" | "marketing" | "seo";
}

export const PricingSection: React.FC<PricingSectionProps> = ({ categoryId }) => {
  const [activeTab, setActiveTab] = useState<string>(categoryId || pricingData[0].id);

  const displayData = categoryId 
    ? pricingData.filter(d => d.id === categoryId) 
    : pricingData;
    
  const activeCategory = displayData.find(d => d.id === activeTab) || displayData[0];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Service <span className="text-gradient">Packages</span></h2>
          <p className="text-xl text-text-secondary font-sans max-w-2xl mx-auto">
            Affordable packages for startups & small businesses. Built for performance and scalable growth. All prices in PKR.
          </p>
        </div>

        {!categoryId && (
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {displayData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-[5px] font-bold text-sm transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'bg-surface/50 text-text-secondary hover:bg-surface border border-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {categoryId && (
               <div className="text-center mb-12">
                 <p className="text-lg text-text-secondary font-sans max-w-3xl mx-auto leading-relaxed">
                   {activeCategory.description}
                 </p>
               </div>
            )}
            
            <div className="grid md:grid-cols-3 gap-8">
              {activeCategory.plans.map((plan, i) => (
                <GlassCard 
                  key={plan.name} 
                  className={`p-8 md:p-10 flex flex-col relative overflow-hidden group transition-all duration-300 ${
                    plan.popular ? 'border-primary/50 shadow-strong-glow bg-primary/5 -translate-y-4' : 'border-white/5'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-[5px] text-primary-foreground shadow-glow">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-black uppercase tracking-widest text-text-primary mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 text-text-primary">
                      <span className="text-lg font-bold">PKR</span>
                      <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                      <span className="text-text-muted font-sans font-bold">/{plan.period}</span>
                    </div>
                    <p className="text-text-secondary font-sans mt-6 text-sm leading-relaxed h-16">
                      {plan.description}
                    </p>
                  </div>

                  <Link to="/contact" className="w-full mt-auto mb-10 block">
                    <Button 
                      variant={plan.popular ? 'default' : 'outline'} 
                      className="w-full h-14 font-black tracking-wide group-hover:shadow-glow transition-all"
                    >
                      GET STARTED <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-text-muted mb-4">Includes</h4>
                      <ul className="space-y-3">
                        {plan.includes.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-sm font-sans text-text-primary items-start">
                            <Check size={16} className="text-primary shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-text-muted mb-4">Not Included</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-sm font-sans text-text-muted items-start">
                              <X size={16} className="shrink-0 mt-0.5 opacity-50" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-6 border-t border-white/5 space-y-3">
                      <div className="flex justify-between items-center text-sm font-sans">
                        <span className="text-text-muted font-bold">Timeline</span>
                        <span className="text-text-primary font-bold text-right">{plan.timeline}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-sans">
                        <span className="text-text-muted font-bold">Revisions</span>
                        <span className="text-text-primary font-bold text-right">{plan.revisions}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 text-center">
           <p className="text-text-muted text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-4">
             All prices are exclusive of Shopify or third-party app subscription fees. Ad spend / media budget is separate from our management fee. 
           </p>
           <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-[5px] border-primary/20 bg-primary/5 text-primary text-sm font-bold font-sans">
             ★ 15% bundle discount when you take 2 or more services together.
           </div>
        </div>
      </div>
    </section>
  );
};
