import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const MarketingPage = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Performance Marketing | Google & Meta Ads | Codecubes"
      seoDescription="Data-driven ad campaigns designed to generate leads, increase conversions, and maximize ROI. We focus on results, not just clicks."
      hero={{
        title: <>Performance Marketing Focused on <span className="text-gradient">Measurable Results</span></>,
        subtitle: "We run data-driven Meta and Google Ads campaigns designed to generate leads, increase conversions, and maximize return on investment.",
        ctaLabel: "AUDIT MY ADS"
      }}
      problem={{
        title: "Why Most Ad Campaigns Fail",
        description: "Many businesses invest in paid advertising but struggle to see consistent returns.",
        points: [
          "Poor targeting and audience selection",
          "Inefficient budget allocation",
          "Weak landing pages that don't convert",
          "Lack of proper tracking and data analysis"
        ],
        truth: "Ad spend without strategy leads to wasted budget."
      }}
      approach={{
        title: "How We Approach Performance Marketing",
        subtitle: "We don’t just run ads—we build structured campaigns connected to your overall growth system.",
        steps: [
          { title: "Audit & Analysis", desc: "Reviewing existing campaigns, audience data, and performance metrics." },
          { title: "Strategy Development", desc: "Defining targeting, messaging, and funnel structure based on goals." },
          { title: "Campaign Execution", desc: "Launching and managing campaigns across Meta and Google Ads." },
          { title: "Optimization & Scaling", desc: "Refining campaigns to improve performance and scale what works." }
        ]
      }}
      services={{
        title: "Performance Marketing Services",
        items: [
          {
            title: "Meta Ads",
            desc: "Facebook & Instagram campaigns that reach the right audience.",
            bulletPoints: ["Audience research & targeting", "Creative & ad copy optimization", "Funnel alignment", "Performance monitoring"]
          },
          {
            title: "Google Ads",
            desc: "Capturing high-intent users actively searching for your services.",
            bulletPoints: ["Search and display campaigns", "Keyword targeting & bidding", "Conversion tracking setup", "Continuous optimization"]
          },
          {
            title: "Landing Page Alignment",
            desc: "Ensuring ads lead to pages designed to convert.",
            bulletPoints: ["Clear messaging", "Optimized user flow", "Conversion-focused structure"]
          },
          {
            title: "Tracking & Analytics",
            desc: "Implementing systems to measure performance accurately.",
            bulletPoints: ["Conversion tracking", "Campaign analytics", "Data-driven insights"]
          }
        ]
      }}
      outcomes={{
        title: "Realistic Outcomes from Performance Marketing",
        subtitle: "Performance marketing is about consistent improvement, not instant success.",
        items: [
          "Better control over ad spend",
          "Improved lead quality",
          "Higher conversion rates over time",
          "Scalable campaigns based on real data"
        ]
      }}
      system={{
        title: "Advertising Works Best Within a Structured System",
        subtitle: "Running ads alone is not enough.",
        points: ["High-converting website", "Clear offer and messaging", "Proper tracking and analytics"],
        conclusion: "We ensure your campaigns are aligned with these elements."
      }}
      insight={{
        title: "What We Often See",
        points: [
          "Businesses increase budget before fixing fundamentals",
          "Campaigns run without proper tracking",
          "Landing pages are not optimized for conversions"
        ],
        conclusion: "By correcting these areas first, performance typically improves without increasing spend."
      }}
      faqs={[
        { question: "How long does it take to see results from ads?", answer: "Some results can be seen quickly, but consistent performance usually improves over a few weeks as data is collected and optimized." },
        { question: "What budget do I need to start?", answer: "Budget depends on your industry and goals. We recommend starting with a realistic amount that allows proper testing and optimization." },
        { question: "Do you guarantee results?", answer: "No agency can guarantee results. We focus on improving performance through structured strategy and continuous optimization." },
        { question: "Which platform is better—Meta Ads or Google Ads?", answer: "It depends on your business. Meta Ads are strong for awareness and targeting, while Google Ads capture high-intent users." }
      ]}
    />
  );
};

export default MarketingPage;
