import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const SEOPage = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Search Engine Optimization (SEO) | Codecubes"
      seoDescription="Growth-focused SEO that brings the right traffic. We focus on relevance and conversion, ranking you for keywords that actually drive leads."
      hero={{
        title: <>SEO That Brings the <span className="text-gradient">Right Traffic</span> — Not Just More Traffic</>,
        subtitle: "We focus on helping your business rank for keywords that actually drive leads and revenue—not vanity metrics.",
        ctaLabel: "REVIEW MY SEO"
      }}
      problem={{
        title: "Why Most SEO Doesn’t Work",
        description: "A lot of businesses invest in SEO but see little to no real impact.",
        points: [
          "Targeting the wrong keywords",
          "Poor website structure and technical issues",
          "Content that doesn’t match user intent",
          "Traffic that doesn’t convert into leads"
        ],
        truth: "Ranking higher doesn’t matter if it doesn’t bring the right visitors."
      }}
      approach={{
        title: "How We Approach SEO at Codecubes",
        subtitle: "We don’t treat SEO as a standalone service. We treat it as part of a complete growth system.",
        steps: [
          { title: "Research & Audit", desc: "Analyzing current website, competitors, and keyword opportunities." },
          { title: "Structure & Optimization", desc: "Fixing technical issues and optimizing structure for search engines." },
          { title: "Content & Targeting", desc: "Aligning content with real search intent—not just keywords." },
          { title: "Tracking & Improvement", desc: "Continuously monitoring performance and refining based on data." }
        ]
      }}
      services={{
        title: "SEO Services We Provide",
        items: [
          {
            title: "Technical SEO",
            desc: "Backend issues that prevent your site from ranking.",
            bulletPoints: ["Site speed optimization", "Mobile responsiveness", "Indexing and crawlability", "Clean site structure"]
          },
          {
            title: "On-Page SEO",
            desc: "Optimization so search engines understand your content.",
            bulletPoints: ["Keyword optimization", "Meta titles & descriptions", "Internal linking structure", "Content optimization"]
          },
          {
            title: "Keyword Strategy",
            desc: "Identifying keywords that bring real business value.",
            bulletPoints: ["Buyer-intent keywords", "Competitor analysis", "Search volume vs difficulty balance"]
          },
          {
            title: "Performance Tracking",
            desc: "Monitoring what's working and what's not.",
            bulletPoints: ["Traffic growth", "Keyword rankings", "Conversion behavior"]
          }
        ]
      }}
      outcomes={{
        title: "Realistic Outcomes from SEO",
        subtitle: "SEO is not instant—but when done correctly, it compounds over time.",
        items: [
          "Gradual increase in organic traffic",
          "Better visibility for relevant keywords",
          "More qualified leads (not just clicks)",
          "Long-term, sustainable growth"
        ]
      }}
      system={{
        title: "SEO Works Best When It’s Connected",
        subtitle: "SEO alone is not enough.",
        points: ["High-converting website", "Clear user journey", "Proper tracking & analytics"],
        conclusion: "That’s why we integrate SEO with your overall growth system."
      }}
      insight={{
        title: "Example Insight",
        points: [
          "Traffic is already coming in",
          "But pages are not optimized for conversion"
        ],
        conclusion: "By fixing structure and intent alignment, businesses often see improvement without increasing traffic."
      }}
      faqs={[
        { question: "How long does SEO take to show results?", answer: "SEO typically takes a few months to show measurable improvements, depending on competition and current website condition." },
        { question: "Do you guarantee rankings?", answer: "No. SEO depends on multiple factors, including competition and search engine algorithms. We focus on sustainable growth, not shortcuts." },
        { question: "Is SEO better than paid ads?", answer: "Both serve different purposes. SEO provides long-term traffic, while ads deliver immediate results." },
        { question: "Do I need SEO if I’m already running ads?", answer: "Yes. SEO reduces long-term dependency on paid traffic and builds organic visibility." }
      ]}
      pricingCategoryId="seo"
    />
  );
};

export default SEOPage;
