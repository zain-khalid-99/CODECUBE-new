import React from 'react';
import { ServiceDetailLayout } from '@/src/components/templates/ServiceDetailLayout';

const Automations = () => {
  return (
    <ServiceDetailLayout
      seoTitle="n8n Automation Systems | Custom Workflows | Codecubes"
      seoDescription="We design and implement custom n8n workflows that connect your tools, automate repetitive tasks, and improve efficiency."
      hero={{
        title: <>n8n Automation Systems That <span className="text-gradient">Reduce Manual Work</span> and Improve Efficiency</>,
        subtitle: "We design and implement custom n8n workflows that connect your tools, automate repetitive tasks, and help your business operate more efficiently.",
        ctaLabel: "DISCUSS AUTOMATION"
      }}
      problem={{
        title: "Why Manual Work Slows Down Growth",
        description: "As businesses grow, operations become more complex. Without proper systems, teams spend time on repetitive tasks instead of focusing on growth.",
        points: [
          "Manual data entry across multiple tools",
          "Delayed responses to leads or inquiries",
          "Disconnected systems that don’t communicate",
          "Time wasted on repetitive workflows"
        ],
        truth: "If your processes are manual, your growth is limited."
      }}
      approach={{
        title: "How We Approach Automation with n8n",
        subtitle: "We don’t automate everything—we automate what actually saves time and improves efficiency.",
        steps: [
          { title: "Workflow Analysis", desc: "Understanding current processes and identifying repetitive tasks." },
          { title: "System Design", desc: "Designing workflows based on your tools and business needs." },
          { title: "Implementation", desc: "Building and connecting workflows using n8n." },
          { title: "Testing & Optimization", desc: "Ensuring reliability and refining workflows over time." }
        ]
      }}
      services={{
        title: "n8n Automation Services",
        items: [
          {
            title: "Lead Management Automation",
            desc: "Automatically capture, organize, and respond to leads.",
            bulletPoints: ["Form submissions → CRM", "Auto email responses", "Lead routing"]
          },
          {
            title: "Marketing Automation",
            desc: "Streamline your marketing processes.",
            bulletPoints: ["Email follow-ups", "Campaign triggers", "Data synchronization"]
          },
          {
            title: "CRM & Tool Integrations",
            desc: "Connect your existing tools into one system.",
            bulletPoints: ["CRM platforms", "Email tools", "Analytics systems"]
          },
          {
            title: "Custom Workflow Automation",
            desc: "Build workflows specific to your business operations.",
            bulletPoints: ["Internal process automation", "Data processing", "Task management automation"]
          }
        ]
      }}
      outcomes={{
        title: "Practical Outcomes from Automation",
        subtitle: "A well-built automation system delivers measurable impact.",
        items: [
          "Reduced manual workload",
          "Faster response times",
          "Improved operational efficiency",
          "Better data consistency"
        ]
      }}
      system={{
        title: "Automation Supports Everything Else",
        subtitle: "Automation connects your entire system:",
        points: ["Website captures leads", "Marketing drives traffic", "Automation handles processes"],
        conclusion: "Without automation, your system depends on manual effort."
      }}
      insight={{
        title: "What We Often See",
        points: [
          "Teams use multiple tools but don’t connect them",
          "Leads are lost due to slow response times",
          "Manual tasks take up significant time"
        ],
        conclusion: "By implementing automation, these issues are reduced significantly."
      }}
      useCases={{
        title: "How n8n Automation Works in Practice",
        items: [
          {
            title: "Lead Capture to CRM",
            desc: "When a user fills out a form:",
            details: [
              "Data is automatically sent to your CRM",
              "A confirmation email is sent instantly",
              "Your team is notified"
            ]
          },
          {
            title: "Follow-Up Automation",
            desc: "After a lead is captured:",
            details: [
              "Automated email sequences are triggered",
              "Follow-ups are scheduled",
              "Engagement is tracked"
            ]
          },
          {
            title: "Tool Synchronization",
            desc: "Data flows between tools automatically:",
            details: [
              "CRM ↔ Email platform",
              "Website ↔ Analytics",
              "Internal systems"
            ]
          }
        ]
      }}
      faqs={[
        { question: "What is n8n automation?", answer: "n8n is a workflow automation tool that allows businesses to connect applications and automate tasks without manual intervention." },
        { question: "Do I need technical knowledge to use automation?", answer: "No. We set up the system for you and ensure it is easy to manage." },
        { question: "Can automation work with my existing tools?", answer: "In most cases, yes. n8n supports integrations with many tools and APIs." },
        { question: "Is automation only for large businesses?", answer: "No. Even small businesses can benefit by saving time and improving efficiency." }
      ]}
    />
  );
};

export default Automations;
