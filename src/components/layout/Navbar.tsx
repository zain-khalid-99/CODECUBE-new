import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, Box, ChevronDown, Rocket, Zap, BarChart3, Globe, Shield, MessageSquare, HelpCircle, Monitor, Code, Search, LineChart, Workflow } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/src/components/ui/button';
import { ThemeToggle } from '@/src/components/ui/ThemeToggle';

const products = [
  { 
    category: 'Web Development', 
    items: [
      { name: 'Custom Web Development', description: 'Bespoke architectures built for extreme performance.', href: '/services/custom-web', icon: <Monitor size={18} /> },
      { name: 'WordPress Development', description: 'Enterprise-grade WordPress systems that scale.', href: '/services/wordpress', icon: <Code size={18} /> },
      { name: 'Shopify Store Development', description: 'High-converting headless commerce solutions.', href: '/services/shopify', icon: <Globe size={18} /> },
    ]
  },
  { 
    category: 'Marketing', 
    items: [
      { name: 'Search Engine Optimization', description: 'Semantic search dominance for consistent traffic.', href: '/services/seo', icon: <Search size={18} /> },
      { name: 'Performance Marketing', description: 'ROI-focused Meta & Google Ads optimization.', href: '/services/marketing', icon: <LineChart size={18} /> },
    ]
  },
  { 
    category: 'Automation', 
    items: [
      { name: 'n8n Automation', description: 'Custom workflow architectures for maximum efficiency.', href: '/automations', icon: <Workflow size={18} /> },
    ]
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  const isScrolled = useTransform(scrollY, [0, 50], [0, 1]);
  const navHeight = useTransform(scrollY, [0, 100], ['90px', '75px']);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'var(--glass-bg)']
  );

  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  return (
    <div className="sticky top-0 z-[100] flex justify-center w-full pointer-events-none px-4 pt-6 pb-2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ 
          backgroundColor, 
          backdropFilter: 'blur(16px)', 
        }}
        className="max-w-7xl w-full flex items-center justify-between px-6 h-18 rounded-[5px] border border-primary shadow-2xl pointer-events-auto relative transition-all"
      >
        <Link to="/" className="flex items-center gap-2 group cursor-pointer z-[101]">
          <div className="w-8 h-8 bg-primary rounded-[5px] flex items-center justify-center shadow-glow group-hover:shadow-strong-glow transition-all duration-300">
            <Box size={20} className="text-white" />
          </div>
          <span className="font-heading text-xl md:text-2xl font-black tracking-tight text-text-primary">Codecubes</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 z-[101]">
          <Link to="/" className="px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide">
            Home
          </Link>

          {/* Services Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('services')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className="flex items-center gap-1.5 px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide cursor-pointer">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {activeMegaMenu === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px] z-[110]"
                >
                  <div className="rounded-[5px] p-10 shadow-2xl border border-primary shadow-primary/5 bg-background">
                    <div className="grid grid-cols-3 gap-10">
                      {products.map((cat) => (
                        <div key={cat.category}>
                          <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-text-muted mb-6 px-2">{cat.category}</h4>
                          <div className="space-y-3">
                            {cat.items.map((item) => (
                                <Link 
                                  key={item.name} 
                                  to={item.href}
                                  className="group flex gap-4 p-3 rounded-[5px] hover:bg-surface/50 transition-all items-start"
                                >
                                  <div className="mt-1 text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="font-bold text-sm text-text-primary mb-1 group-hover:text-primary transition-colors">{item.name}</div>
                                    <div className="text-[11px] text-text-secondary leading-relaxed line-clamp-2">{item.description}</div>
                                  </div>
                                </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/automations" className="px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide">
            Automations
          </Link>

          <Link to="/work" className="px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide">
            Case Study
          </Link>

          <Link to="/about" className="px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide">
            About
          </Link>

          <Link to="/contact" className="px-5 py-2 text-text-secondary hover:text-primary transition-colors font-bold text-sm tracking-wide">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4 z-[101]">
          <ThemeToggle />
          
          <div className="hidden sm:block">
            <Link to="/free-audit">
              <Button size="sm" className="h-10 px-6 font-black shadow-glow hover:shadow-strong-glow hover:scale-105 active:scale-95 transition-all">
                FREE AUDIT
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-text-primary p-2 active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="lg:hidden absolute top-[110%] left-0 right-0 bg-background p-6 flex flex-col gap-2 rounded-[5px] border border-primary shadow-2xl origin-top overflow-y-auto max-h-[85vh] z-[150] pointer-events-auto"
            >
              <Link
                to="/"
                className="p-4 rounded-[5px] hover:bg-primary/10 transition-colors text-text-primary font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="h-px bg-white/5 my-2" />

              <div className="text-text-muted text-[10px] uppercase font-black tracking-widest mb-2 px-4">Services</div>
              {products.map((cat) => (
                <div key={cat.category} className="mb-4">
                  <div className="text-primary text-[10px] font-black uppercase tracking-widest px-4 mb-2">{cat.category}</div>
                  <div className="space-y-1">
                    {cat.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex flex-col p-4 rounded-[5px] hover:bg-primary/10 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-bold text-base text-text-primary">{item.name}</span>
                        <span className="text-xs text-text-muted">{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="h-px bg-white/5 my-2" />
              
              <Link
                to="/automations"
                className="p-4 rounded-[5px] hover:bg-primary/10 transition-colors text-text-primary font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Automations
              </Link>

              <Link
                to="/work"
                className="p-4 rounded-[5px] hover:bg-primary/10 transition-colors text-text-primary font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Case Study
              </Link>
              
              <Link
                to="/faq"
                className="p-4 rounded-[5px] hover:bg-primary/10 transition-colors text-text-primary font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                About / FAQ
              </Link>

              <Link
                to="/contact"
                className="p-4 rounded-[5px] hover:bg-primary/10 transition-colors text-text-primary font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link to="/free-audit" className="mt-4" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-16 text-lg font-black shadow-glow">GET FREE AUDIT</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
