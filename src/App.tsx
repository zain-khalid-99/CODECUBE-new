import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { WhatsAppWidget } from './components/ui/WhatsAppWidget';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const DemoFloatingHeader = lazy(() => import('./pages/DemoFloatingHeader'));
const DemoGridPattern = lazy(() => import('./pages/DemoGridPattern'));
const Services = lazy(() => import('./pages/Services'));
const Automations = lazy(() => import('./pages/Automations'));
const Contact = lazy(() => import('./pages/Contact'));
const FreeAudit = lazy(() => import('./pages/FreeAudit'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Service pages
const SEOPage = lazy(() => import('./pages/services/SEO'));
const MarketingPage = lazy(() => import('./pages/services/PerformanceMarketing'));
const WordpressPage = lazy(() => import('./pages/services/WordpressDev'));
const CustomWebPage = lazy(() => import('./pages/services/CustomWebDev'));
const ShopifyPage = lazy(() => import('./pages/services/ShopifyDev'));

// Case Study pages
const CaseStudies = lazy(() => import('./pages/work/CaseStudies'));
const AccessoryBooth = lazy(() => import('./pages/work/AccessoryBooth'));
const DecoraNest = lazy(() => import('./pages/work/DecoraNest'));
const RlowTyres = lazy(() => import('./pages/work/RlowTyres'));
const ImportsPk = lazy(() => import('./pages/work/ImportsPk'));
const Fabtion = lazy(() => import('./pages/work/Fabtion'));
const LegacyByDecora = lazy(() => import('./pages/work/LegacyByDecora'));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className="w-12 h-12 bg-primary rounded-[5px] shadow-strong-glow"
    />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><PageWrapper><Home /></PageWrapper></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><PageWrapper><About /></PageWrapper></Suspense>} />
        <Route path="/demo-header" element={<Suspense fallback={<PageLoader />}><DemoFloatingHeader /></Suspense>} />
        <Route path="/demo-grid" element={<Suspense fallback={<PageLoader />}><PageWrapper><DemoGridPattern /></PageWrapper></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><PageWrapper><Services /></PageWrapper></Suspense>} />
        <Route path="/automations" element={<Suspense fallback={<PageLoader />}><PageWrapper><Automations /></PageWrapper></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><PageWrapper><Contact /></PageWrapper></Suspense>} />
        <Route path="/free-audit" element={<Suspense fallback={<PageLoader />}><PageWrapper><FreeAudit /></PageWrapper></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={<PageLoader />}><PageWrapper><FAQ /></PageWrapper></Suspense>} />

        {/* Service routes */}
        <Route path="/services/seo" element={<Suspense fallback={<PageLoader />}><PageWrapper><SEOPage /></PageWrapper></Suspense>} />
        <Route path="/services/marketing" element={<Suspense fallback={<PageLoader />}><PageWrapper><MarketingPage /></PageWrapper></Suspense>} />
        <Route path="/services/wordpress" element={<Suspense fallback={<PageLoader />}><PageWrapper><WordpressPage /></PageWrapper></Suspense>} />
        <Route path="/services/custom-web" element={<Suspense fallback={<PageLoader />}><PageWrapper><CustomWebPage /></PageWrapper></Suspense>} />
        <Route path="/services/shopify" element={<Suspense fallback={<PageLoader />}><PageWrapper><ShopifyPage /></PageWrapper></Suspense>} />

        {/* Case Study routes */}
        <Route path="/work" element={<Suspense fallback={<PageLoader />}><PageWrapper><CaseStudies /></PageWrapper></Suspense>} />
        <Route path="/work/accessory-booth" element={<Suspense fallback={<PageLoader />}><PageWrapper><AccessoryBooth /></PageWrapper></Suspense>} />
        <Route path="/work/decoranest" element={<Suspense fallback={<PageLoader />}><PageWrapper><DecoraNest /></PageWrapper></Suspense>} />
        <Route path="/work/rlow-tyres" element={<Suspense fallback={<PageLoader />}><PageWrapper><RlowTyres /></PageWrapper></Suspense>} />
        <Route path="/work/imports-pk" element={<Suspense fallback={<PageLoader />}><PageWrapper><ImportsPk /></PageWrapper></Suspense>} />
        <Route path="/work/fabtion" element={<Suspense fallback={<PageLoader />}><PageWrapper><Fabtion /></PageWrapper></Suspense>} />
        <Route path="/work/legacy-by-decora" element={<Suspense fallback={<PageLoader />}><PageWrapper><LegacyByDecora /></PageWrapper></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      role="main"
      id="main-content"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <WhatsAppWidget />
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
