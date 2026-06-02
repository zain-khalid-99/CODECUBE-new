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
    title: "WordPress Web Development",
    description: "We build professional, fast-loading WordPress websites that represent your business with confidence. Every website is mobile-friendly, easy to manage, and built to grow with you.",
    plans: [
      {
        name: "STARTER",
        price: "349",
        period: "One-Time",
        description: "Most businesses launch with a template and wonder why no one takes them seriously. The Starter package changes that. You get a clean, professionally built WordPress website that signals credibility from the moment someone lands on your page — delivered fast, without compromise.",
        includes: [
          "5 core pages built and configured (Home, About, Services, Contact, Blog)",
          "Mobile-first design that looks sharp on every screen",
          "Inquiry-ready contact form so leads can reach you instantly",
          "SEO foundation laid correctly from day one",
          "Expert domain and hosting consultation included at no extra cost"
        ],
        notIncluded: [
          "Fully custom design from scratch",
          "E-commerce or online payment integration",
          "Post-launch support and maintenance"
        ],
        timeline: "7–10 working days",
        revisions: "2 rounds included"
      },
      {
        name: "GROWTH",
        price: "799",
        period: "One-Time",
        popular: true,
        description: "Your website is your most important salesperson. It works 24 hours a day, 7 days a week, and never asks for a commission. The Growth package gives you a fully custom-designed, high-performance website built around your brand — one that attracts the right clients and converts them without you lifting a finger.",
        includes: [
          "12 pages, each with a unique layout crafted around your content and goals",
          "100% custom design — your brand, your identity, your competitive edge",
          "E-commerce store built for up to 30 products, ready to sell from launch day",
          "Speed-optimized and structured for strong Google visibility",
          "Google Analytics installed so you always know who's visiting and why",
          "30 days of dedicated post-launch support — we stay until it's running perfectly",
          "WhatsApp chat integration and full social media connectivity"
        ],
        notIncluded: [
          "Multi-vendor marketplace or booking system functionality"
        ],
        timeline: "14–18 working days",
        revisions: "3 rounds included"
      },
      {
        name: "PREMIUM",
        price: "1,499+",
        period: "One-Time",
        description: "This is not a template. It is not a shortcut. The Premium package is a fully engineered digital asset — built for businesses that understand the difference between having a website and having a weapon. Scalable, fast, and designed to outperform every competitor in your space.",
        includes: [
          "25 pages with sophisticated, fully custom layouts built to your exact specifications",
          "Booking, appointment scheduling, or membership system integrated seamlessly",
          "Complete e-commerce infrastructure — products, payments, invoicing, and order management",
          "Multi-language support to serve customers across borders",
          "Advanced performance and speed engineering for elite load times",
          "60 days of post-launch priority support — comprehensive and hands-on",
          "Private 1-hour training session so you command your website with full confidence",
          "Priority response and dedicated communication throughout the entire engagement"
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
        price: "349",
        period: "One-Time",
        description: "Every successful store started somewhere. The Launch package is built for founders who want to enter the market with a store that looks professional, loads fast, and sells from day one — without the unnecessary complexity.",
        includes: [
          "Full Shopify store setup on a carefully selected, high-quality theme",
          "Up to 25 products uploaded, formatted, and ready for sale",
          "Mobile-optimized storefront designed for seamless shopping on any device",
          "Payment gateway configured and tested — bank transfer, COD, and more",
          "Homepage banner and brand identity applied for an immediate professional impression"
        ],
        notIncluded: [
          "Custom-coded sections or bespoke layouts",
          "Email marketing or automated flows",
          "Post-launch support"
        ],
        timeline: "5–7 working days",
        revisions: "2 rounds included"
      },
      {
        name: "SCALE",
        price: "699",
        period: "One-Time",
        popular: true,
        description: "A store that looks good is not enough. The Scale package is built around one metric — conversion. Every page, every section, and every touchpoint is engineered to move visitors forward and turn them into paying customers, repeatedly.",
        includes: [
          "Up to 50 products, fully configured with professional copy and imagery",
          "Custom-designed homepage, collection pages, and product pages — nothing generic",
          "Abandoned cart recovery system to recapture revenue that would otherwise be lost",
          "Email subscriber capture through strategic pop-ups and footer forms",
          "Upsell and discount app configuration to increase average order value",
          "Store speed optimization for a checkout experience that never loses a customer to slow loading",
          "30 days of post-launch support with a team that's invested in your results"
        ],
        notIncluded: [
          "Multi-language or multi-currency configuration"
        ],
        timeline: "12–16 working days",
        revisions: "3 rounds included"
      },
      {
        name: "ENTERPRISE",
        price: "1,399+",
        period: "One-Time",
        description: "For brands that are scaling aggressively and need a Shopify experience that matches their ambition. The Enterprise package is a fully bespoke, high-performance storefront built to handle volume, convert at scale, and represent a brand that means business.",
        includes: [
          "Up to 100 products with complete bulk setup and professional configuration",
          "Fully bespoke storefront — every pixel designed from your brand vision upward",
          "Multi-language and multi-currency support for seamless international selling",
          "Advanced analytics dashboards and sales reporting for data-driven decision making",
          "Complete email marketing automation — welcome flows, post-purchase sequences, and re-engagement campaigns",
          "Loyalty and referral program integrated to drive repeat revenue and word-of-mouth growth",
          "60 days of comprehensive post-launch support",
          "Private 1-hour handover session so your team is fully equipped to run and grow the store"
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
    description: "We run targeted paid ad campaigns on Google and Meta that bring the right people to your business. Every dollar of your ad budget is tracked and optimised.",
    plans: [
      {
        name: "BOOST",
        price: "299",
        period: "Month",
        description: "Most businesses waste their first ad budget on guesswork. The Boost plan eliminates that. Your campaigns are built with the right structure, the right audience, and the right message from the very beginning — so every dollar you invest is working with intent.",
        includes: [
          "Full campaign management on 1 platform — Google Ads or Meta Ads",
          "Ad spend management up to $1,500 per month",
          "Campaign architecture built around your target audience and goals",
          "3 professionally crafted ad creatives and copy sets per month",
          "Monthly performance report with clear, actionable insights"
        ],
        notIncluded: [
          "A/B split testing",
          "Retargeting and remarketing campaigns",
          "Dedicated account manager"
        ],
        timeline: "Live within 5 business days",
        revisions: "Ad Refreshes: Monthly"
      },
      {
        name: "ACCELERATE",
        price: "599",
        period: "Month",
        popular: true,
        description: "One platform is a start. Two platforms is a strategy. The Accelerate plan puts your brand in front of your audience at multiple touchpoints, tests what converts, and reinvests into what works — creating a growth engine that compounds month over month.",
        includes: [
          "Full campaign management across 2 platforms — Google Ads and Meta Ads",
          "Ad spend management up to $4,000 per month",
          "A/B split testing to identify and scale winning creatives and audiences",
          "Retargeting campaigns and lookalike audience setup to maximize reach and ROI",
          "6 professionally produced ad creatives and copy sets per month",
          "Bi-weekly strategy and performance call — you always know exactly what's happening and why",
          "Full conversion tracking and attribution setup for accurate reporting"
        ],
        notIncluded: [
          "TikTok or LinkedIn Ads"
        ],
        timeline: "Live within 5 business days",
        revisions: "Ad Refreshes: Bi-weekly"
      },
      {
        name: "DOMINATE",
        price: "1,099+",
        period: "Month",
        description: "This is not ad management. This is a full-funnel growth operation. The Dominate plan is reserved for businesses that are ready to invest seriously and expect serious returns — with a dedicated team, multi-platform execution, and a strategy built around one outcome: dominant, measurable growth.",
        includes: [
          "Full campaign management across 3 platforms — Google, Meta, and TikTok or LinkedIn",
          "Ad spend management above $5,000 per month",
          "Dedicated account manager who owns your growth as if it were their own",
          "Weekly live strategy and performance review — full transparency, every step",
          "12 premium ad creatives and copy sets per month, refreshed and tested continuously",
          "Advanced audience segmentation and full-funnel architecture built for scale",
          "Detailed weekly reporting dashboard — every metric that matters, in one place",
          "Landing page audit and optimization recommendations to maximize conversion after the click"
        ],
        notIncluded: [],
        timeline: "Live within 7 business days",
        revisions: "Ad Refreshes: Weekly"
      }
    ]
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "We help your business show up on Google. Our SEO work is consistent, transparent, and focused on results that compound over time.",
    plans: [
      {
        name: "FOUNDATION",
        price: "249",
        period: "Month",
        description: "Before you rank, Google needs to trust you. The Foundation plan ensures your website is technically sound, properly structured, and correctly indexed — so that every piece of content you publish has the strongest possible chance of ranking. Most agencies skip this step. We begin here.",
        includes: [
          "Comprehensive website SEO audit covering technical health, structure, and visibility gaps",
          "5 high-intent keywords researched, selected, and precisely optimized",
          "All page titles, meta descriptions, and heading structures corrected and strengthened",
          "Google Search Console and Google Analytics connected and configured correctly",
          "Monthly ranking and visibility report to track progress with complete transparency"
        ],
        notIncluded: [
          "Blog content writing and publishing",
          "Backlink acquisition and outreach",
          "Competitor analysis"
        ],
        timeline: "Onboarding within 5 business days",
        revisions: "Reporting: Monthly"
      },
      {
        name: "AUTHORITY",
        price: "499",
        period: "Month",
        popular: true,
        description: "Paid ads stop the moment you stop paying. SEO compounds. The Authority plan builds your organic presence methodically and relentlessly — driving qualified traffic, generating consistent leads, and growing your rankings month after month without paying per click.",
        includes: [
          "Up to 20 keywords tracked, refined, and continuously optimized based on performance data",
          "4 authoritative SEO blog articles written and published per month — built to rank and built to convert",
          "Competitor gap analysis to identify exactly where your rankings can be captured",
          "5 high-quality backlinks acquired per month from relevant, credible sources",
          "Ongoing technical SEO fixes and site speed improvements to maintain a healthy foundation",
          "Google Business Profile fully optimized for maximum local and organic visibility",
          "Bi-weekly strategy calls to review progress, adjust priorities, and stay ahead of changes"
        ],
        notIncluded: [
          "Large-scale digital PR or advanced outreach campaigns"
        ],
        timeline: "Onboarding within 5 business days",
        revisions: "Reporting: Bi-weekly"
      },
      {
        name: "DOMINATE",
        price: "999+",
        period: "Month",
        description: "For businesses that are done competing and ready to lead. The Dominate plan is a full-scale SEO operation — aggressive, data-driven, and built around one objective: making your brand the undisputed authority in your industry, for the keywords that matter most.",
        includes: [
          "Up to 50 keywords tracked, prioritized, and aggressively optimized across your entire site",
          "8 long-form, expertly written SEO articles per month built around a deliberate content strategy",
          "Quarterly in-depth competitor analysis to identify shifts, threats, and new ranking opportunities",
          "15 high-authority backlinks acquired per month through targeted, editorial outreach",
          "Content topic cluster strategy that builds topical authority and dominates entire keyword categories",
          "Advanced technical SEO management — crawlability, indexation, structured data, and beyond",
          "Weekly live reporting and strategy calls — complete visibility into performance and next steps",
          "Dedicated SEO strategist assigned exclusively to your account, invested in your long-term success"
        ],
        notIncluded: [],
        timeline: "Onboarding within 5 business days",
        revisions: "Reporting: Weekly"
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
            Affordable packages for startups & small businesses. Built for performance and scalable growth. All prices in USD.
          </p>
        </div>

        {!categoryId && (
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {displayData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-none font-bold text-sm transition-all duration-300 ${
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
                    <div className="absolute top-4 right-4 bg-primary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-none text-primary-foreground shadow-glow">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-black uppercase tracking-widest text-text-primary mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 text-text-primary">
                      <span className="text-lg font-bold">$</span>
                      <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                      <span className="text-text-muted font-sans font-bold">/{plan.period}</span>
                    </div>
                    <p className="text-text-secondary font-sans mt-6 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <Link to="/contact" className="w-full mt-[20px] mb-12 block">
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
           <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-none border-primary/20 bg-primary/5 text-primary text-sm font-bold font-sans">
             ★ 15% bundle discount when you take 2 or more services together.
           </div>
        </div>
      </div>
    </section>
  );
};
