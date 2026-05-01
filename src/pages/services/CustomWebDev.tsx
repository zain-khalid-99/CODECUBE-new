import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const CustomWebPage = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Custom Web Development | Built for Scale | Codecubes"
      seoDescription="Bespoke web solutions built around your business—not templates. We design fully custom websites tailored to your specific requirements."
      hero={{
        title: <>Custom Web Development Built Around <span className="text-gradient">Your Business</span></>,
        subtitle: "We design and develop fully custom websites tailored to your business needs, workflows, and growth goals—without relying on restrictive templates.",
        ctaLabel: "DISCUSS MY PROJECT"
      }}
      problem={{
        title: "Why Template-Based Websites Fall Short",
        description: "Templates can work for simple use cases—but they often become limiting as your business grows.",
        points: [
          "Limited flexibility for custom features",
          "Performance issues due to bloated code",
          "Difficult integrations with third-party tools",
          "Designs that look similar to many other websites"
        ],
        truth: "If your business has specific needs, a generic solution won’t be enough."
      }}
      approach={{
        title: "How We Approach Custom Web Development",
        subtitle: "We build websites from the ground up, focusing on structure, performance, and scalability.",
        steps: [
          { title: "Requirement Analysis", desc: "Understanding business model, workflows, and technical specs." },
          { title: "System Planning", desc: "Defining architecture, features, and user flow before coding." },
          { title: "Development", desc: "Building clean, efficient, and scalable solutions for your needs." },
          { title: "Testing & Deployment", desc: "Ensuring smooth operation across all devices/environments." }
        ]
      }}
      services={{
        title: "Custom Development Services",
        items: [
          {
            title: "Custom Website Development",
            desc: "Fully tailored websites designed for your exact needs.",
            bulletPoints: ["Unique layouts & interfaces", "Custom functionality", "Scalable architecture"]
          },
          {
            title: "Web Application Development",
            desc: "Systems that go beyond traditional websites.",
            bulletPoints: ["Dashboards & portals", "User-based systems", "Data-driven applications"]
          },
          {
            title: "API Integrations",
            desc: "Connecting your website with external tools.",
            bulletPoints: ["CRM integrations", "Payment gateways", "Third-party services"]
          },
          {
            title: "Performance Optimization",
            desc: "Ensuring custom solutions remain fast.",
            bulletPoints: ["Clean code structure", "Optimized loading", "Scalable backend"]
          }
        ]
      }}
      outcomes={{
        title: "Practical Outcomes",
        subtitle: "Custom development gives you full control and a scalable foundation.",
        items: [
          "Full control over features & functionality",
          "Better performance than templates",
          "Seamless integration with business tools",
          "Scalable foundation for future growth"
        ]
      }}
      system={{
        title: "Built for Businesses with Specific Needs",
        subtitle: "Custom development is ideal when:",
        points: ["Standard solutions are limiting", "You need unique workflows", "You want long-term scalability"],
        conclusion: "Custom development gives you the control to build exactly what your business needs."
      }}
      insight={{
        title: "What We Often See",
        points: [
          "Businesses start with templates and outgrow them quickly",
          "Workarounds create complexity and lag",
          "Integrations become difficult to manage"
        ],
        conclusion: "Custom development solves these problems by creating a system designed from the start."
      }}
      faqs={[
        { question: "How is custom development different from WordPress?", answer: "Custom development allows complete flexibility in design and functionality, whereas templates/CMS are often limited to predefined structures." },
        { question: "Is custom development more expensive?", answer: "It depends on scope, but it provides long-term value by reducing limitations and needing fewer future rebuilds." },
        { question: "How long does a custom project take?", answer: "Timelines vary, but custom projects typically take longer than standard website builds." },
        { question: "Can you integrate third-party tools?", answer: "Yes, we can integrate CRMs, payment systems, and other tools into your custom solution." }
      ]}
    />
  );
};

export default CustomWebPage;
