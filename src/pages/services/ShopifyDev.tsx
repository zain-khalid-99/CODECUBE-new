import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const ShopifyPage = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Shopify Store Development | Conversion Optimized | Codecubes"
      seoDescription="Shopify stores built to convert—not just look good. We optimize your store structure to turn traffic into sales."
      hero={{
        title: <>Shopify Stores Built to <span className="text-gradient">Convert</span> — Not Just Look Good</>,
        subtitle: "We design and develop Shopify stores that are fast, structured, and optimized for conversions—so your store supports real sales.",
        ctaLabel: "OPTIMIZE MY STORE"
      }}
      problem={{
        title: "Why Many Shopify Stores Don’t Perform",
        description: "Setting up a Shopify store is easy—but making it profitable is where most struggle.",
        points: [
          "Poor product page structure",
          "Confusing navigation and user flow",
          "Slow loading speeds affecting conversions",
          "No clear strategy behind the store layout"
        ],
        truth: "Traffic alone doesn’t generate sales. Your store structure does."
      }}
      approach={{
        title: "How We Approach Shopify Development",
        subtitle: "We focus on building structured e-commerce systems that support the entire buying journey.",
        steps: [
          { title: "Store Planning", desc: "Defining store structure, product organization, and user flow." },
          { title: "Design & Development", desc: "Building clean, modern, and mobile-friendly Shopify stores." },
          { title: "Conversion Opt.", desc: "Optimizing product pages, checkout flow, and experience." },
          { title: "Testing & Launch", desc: "Ensuring smooth operation across all devices before going live." }
        ]
      }}
      services={{
        title: "Shopify Development Services",
        items: [
          {
            title: "Custom Store Setup",
            desc: "Built tailored to your model and product type.",
            bulletPoints: ["Store navigation structure", "Product page setup", "Collection organization"]
          },
          {
            title: "Theme Customization",
            desc: "Matching your brand and improving usability.",
            bulletPoints: ["Clean/Modern UI", "Mobile optimization", "Improved UX"]
          },
          {
            title: "Product Page Optimization",
            desc: "Designing pages that help users decide faster.",
            bulletPoints: ["Clear product info", "Structured layouts", "Conversion design"]
          },
          {
            title: "App Integration",
            desc: "Integrating essential apps to enhance functionality.",
            bulletPoints: ["Payment gateways", "Email marketing", "Analytics & tracking"]
          }
        ]
      }}
      outcomes={{
        title: "Practical Outcomes",
        subtitle: "A well-built Shopify store reduces friction and increases output.",
        items: [
          "Improved user experience",
          "Higher conversion rates",
          "Faster loading speeds",
          "Better product visibility"
        ]
      }}
      system={{
        title: "Your Store Is the Center of Your Strategy",
        subtitle: "Your Shopify store connects everything.",
        points: ["Ads bring traffic", "SEO drives organic visitors", "Your store converts them"],
        conclusion: "If your store is not optimized, your marketing efforts lose effectiveness."
      }}
      insight={{
        title: "What We Often See",
        points: [
          "Businesses focus on design instead of structure",
          "Product pages lack clarity and detail",
          "Checkout flow creates unnecessary friction"
        ],
        conclusion: "By fixing these issues, stores often see better results without increasing traffic."
      }}
      faqs={[
        { question: "Why should I choose Shopify for my store?", answer: "Shopify is reliable, scalable, and easy to manage, making it a strong choice for e-commerce businesses." },
        { question: "How long does it take to build a Shopify store?", answer: "Most stores can be built within a few weeks, depending on complexity and number of products." },
        { question: "Can I manage the store after launch?", answer: "Yes. Shopify is user-friendly, and we ensure you can manage products and orders easily." },
        { question: "Do you help with conversion optimization?", answer: "Yes, we focus on improving product pages and user flow to increase conversions." }
      ]}
    />
  );
};

export default ShopifyPage;
