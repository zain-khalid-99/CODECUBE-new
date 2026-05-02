import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube,
  MessageCircle
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Custom Web Development', href: '/services/custom-web-development' },
    { name: 'WordPress Development', href: '/services/wordpress-web-development' },
    { name: 'Shopify Store Development', href: '/services/shopify-store-development' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Performance Marketing', href: '/services/performance-marketing' },
    { name: 'Automation (n8n)', href: '/automations' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/our-work' },
    { name: 'Free Audit', href: '/free-audit' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]
};

const socialLinks = [
  { icon: <Mail size={18} />, href: 'mailto:hello@codecubes.com', label: 'Email' },
  { icon: <Twitter size={18} />, href: 'https://twitter.com/codecubes', label: 'Twitter' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/codecubes', label: 'Instagram' },
  { icon: <MessageCircle size={18} />, href: 'https://wa.me/923000000000', label: 'WhatsApp' },
  { icon: <Facebook size={18} />, href: 'https://facebook.com/codecubes', label: 'Facebook' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/company/codecubes', label: 'LinkedIn' },
  { icon: <Youtube size={18} />, href: 'https://youtube.com/@codecubes', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-16 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Intro */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-black tracking-tighter text-white">
                Codecubes
              </span>
            </Link>
            <p className="text-text-secondary font-sans leading-relaxed max-w-sm">
              Codecubes builds websites, marketing systems, and automation workflows designed to drive real business growth.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-text-secondary hover:text-primary transition-all duration-200 font-sans text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-text-secondary hover:text-primary transition-all duration-200 font-sans text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-text-secondary hover:text-primary transition-all duration-200 font-sans text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-text-secondary hover:text-primary transition-all duration-200 font-sans text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Social Icons Section */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-[5px] border border-white/10 bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 hover:border-primary/50 hover:scale-105 transition-all duration-200 group"
              >
                <div className="group-hover:drop-shadow-[0_0_8px_rgba(123,97,255,0.8)] transition-all [&>svg]:group-hover:fill-current [&>svg]:transition-all">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm font-sans mb-1">
              © 2026 Codecubes. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs font-sans tracking-wide uppercase">
              Built for performance, not just design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
