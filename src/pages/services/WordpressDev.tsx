import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const WordpressPage = () => {
  return (
    <ServiceDetailLayout
      seoTitle="WordPress Development | Scalable & Fast | Codecubes"
      seoDescription="WordPress websites built for performance, flexibility, and growth. We build websites that support your business goals from day one."
      hero={{
        title: <>WordPress Websites Built for <span className="text-gradient">Performance</span> and Growth</>,
        subtitle: "We develop WordPress websites that are fast, scalable, and designed to convert—so your website becomes a real business asset.",
        ctaLabel: "PLAN MY WEBSITE"
      }}
      problem={{
        title: "Why Most WordPress Websites Underperform",
        description: "Many WordPress websites look fine on the surface but fail where it matters.",
        points: [
          "Slow loading speeds affecting user experience",
          "Poor structure that hurts SEO",
          "Overuse of plugins causing instability",
          "Designs that don’t convert visitors into leads"
        ],
        truth: "A website is only valuable if it supports your business growth."
      }}
      approach={{
        title: "How We Approach WordPress Development",
        subtitle: "We focus on building structured, performance-driven websites that are easy to manage and built to scale.",
        steps: [
          { title: "Planning & Structure", desc: "Defining layout, user flow, and content structure based on goals." },
          { title: "Design & Development", desc: "Building clean, modern interfaces with a focus on usability." },
          { title: "Optimization", desc: "Ensuring speed, responsiveness, and search engine optimization." },
          { title: "Testing & Launch", desc: "Testing across devices and browsers for a reliable experience." }
        ]
      }}
      services={{
        title: "WordPress Development Services",
        items: [
          {
            title: "Custom Development",
            desc: "Tailored solutions designed around your specific requirements.",
            bulletPoints: ["Custom layouts & functionality", "Clean and scalable code", "Flexible design systems"]
          },
          {
            title: "Theme Customization",
            desc: "Customizing themes to match brand and usability.",
            bulletPoints: ["UI/UX improvements", "Performance enhancements", "Mobile responsiveness"]
          },
          {
            title: "Plugin Integration",
            desc: "Careful integration to ensure stability and performance.",
            bulletPoints: ["Essential feature setup", "Avoiding plugin overload", "Security-focused config"]
          },
          {
            title: "Speed Optimization",
            desc: "Improving loading times and overall performance.",
            bulletPoints: ["Image optimization", "Code cleanup", "Caching & tuning"]
          }
        ]
      }}
      outcomes={{
        title: "Practical Outcomes",
        subtitle: "A well-built WordPress website delivers measurable impact.",
        items: [
          "Faster loading speeds",
          "Improved user experience",
          "Better SEO foundation",
          "Higher conversion potential"
        ]
      }}
      system={{
        title: "Your Website Is the Core of Your Strategy",
        subtitle: "Your website connects everything.",
        points: ["SEO brings traffic", "Ads drive visitors", "Automation manages leads"],
        conclusion: "If your website isn’t built properly, everything else becomes less effective."
      }}
      insight={{
        title: "What We Often See",
        points: [
          "Businesses focus on design before structure",
          "Too many plugins slow down the site",
          "No clear conversion path for users"
        ],
        conclusion: "By fixing these issues, performance improves significantly—even without increasing traffic."
      }}
      faqs={[
        { question: "Why should I choose WordPress for my website?", answer: "WordPress is flexible, scalable, and widely supported, making it a strong choice for most business websites." },
        { question: "How long does it take to build a WordPress website?", answer: "Timelines depend on complexity, but most projects are completed within a few weeks." },
        { question: "Will I be able to manage the website myself?", answer: "Yes. We build websites that are easy to manage and provide guidance where needed." },
        { question: "Do you use page builders like Elementor?", answer: "Yes, depending on project requirements, we use tools that balance flexibility and performance." }
      ]}
      pricingCategoryId="wordpress"
    />
  );
};

export default WordpressPage;
