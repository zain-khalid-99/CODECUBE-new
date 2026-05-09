import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO title="Privacy Policy | CodeCubes" description="Privacy Policy for CodeCubes Digital Agency" />
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[5px] border-primary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
            <p className="text-text-secondary font-sans mb-8">Last Updated: May 2025</p>

            <div className="space-y-8 font-sans text-text-primary leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p>Welcome to CodeCubes. We are a digital agency offering web development, e-commerce design, performance marketing, and search engine optimization services to clients worldwide. Your privacy is important to us, and we are committed to being transparent about how we collect, use, and protect your information.</p>
                <p className="mt-4">This Privacy Policy explains what data we collect when you visit our website, how we use it, and what rights you have over it. By using our website, you agree to the practices described in this policy.</p>
                <p className="mt-4">If you have any questions, you can reach us at any time through our contact page.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Who We Are</h2>
                <p>CodeCubes is a digital agency. Our website is codecubesdigital.vercel.app. We work with clients locally and internationally, providing professional digital services to businesses of all sizes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">What Information We Collect</h2>
                <p>We collect two types of information from visitors to our website.</p>
                <p className="mt-4">The first is information you give us directly. When you fill out a contact form on our website, we collect your name and email address, along with any message or project details you choose to share. We use this information solely to respond to your inquiry and communicate with you about our services. We do not sell this information to anyone.</p>
                <p className="mt-4">The second is information collected automatically. When you visit our website, certain data is collected automatically through cookies and tracking technologies. This includes your approximate location, the pages you visit, how long you spend on each page, the device and browser you are using, and how you arrived at our website. This data is collected in aggregate and is used to understand how our website is being used so we can improve it.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Cookies</h2>
                <p>Our website uses cookies. Cookies are small text files stored on your device when you visit a website. We use them to analyze website traffic and understand visitor behavior.</p>
                <p className="mt-4">You can control and manage cookies through your browser settings at any time. Please note that disabling certain cookies may affect how our website functions for you.</p>
                <p className="mt-4">We use the following types of cookies on our website:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-text-secondary">
                  <li><strong className="text-white">Essential cookies</strong> keep the website functioning correctly and cannot be switched off.</li>
                  <li><strong className="text-white">Analytics cookies</strong> allow us to measure traffic and understand how visitors interact with our website. We use Google Analytics for this purpose. The data collected is anonymous and does not identify you personally.</li>
                  <li><strong className="text-white">Marketing cookies</strong> are used to track the effectiveness of our advertising campaigns. We use the Meta Pixel to understand how visitors from our Facebook and Instagram ads behave on our website. This helps us make our advertising more relevant and efficient.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Tools We Use</h2>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary">
                  <li><strong className="text-white">Google Analytics</strong> — We use Google Analytics to collect anonymous data about how visitors use our website. Google may process this data on servers located outside your country. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.</li>
                  <li><strong className="text-white">Meta Pixel</strong> — We use the Meta Pixel, a tool provided by Meta Platforms Inc., to measure the performance of our advertising on Facebook and Instagram. The Meta Pixel may collect data about your activity on our website and connect it to your Facebook or Instagram profile if you are logged in. You can manage your ad preferences through your Facebook settings.</li>
                  <li><strong className="text-white">WhatsApp</strong> — Our website includes a WhatsApp chat button for direct communication. Clicking this button will open WhatsApp, either in your browser or app. Any conversation you begin through WhatsApp is subject to WhatsApp's own Privacy Policy. We do not store WhatsApp conversations on our website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 mt-4 mb-4 space-y-2 text-text-secondary">
                  <li>To respond to your inquiries and provide the services you have requested.</li>
                  <li>To improve our website based on how visitors use it.</li>
                  <li>To measure the performance of our marketing campaigns and make them more effective.</li>
                  <li>To communicate with you about your project, our services, or any updates relevant to your inquiry.</li>
                </ul>
                <p>We do not use your data for automated decision-making. We do not build personal profiles for advertising purposes using information you submit through our contact form.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">How We Store and Protect Your Information</h2>
                <p>We take the security of your information seriously. Your contact form submissions are handled through secure channels and are only accessible to authorized members of our team. We do not store payment information of any kind on our website.</p>
                <p className="mt-4">We retain your contact information only for as long as is necessary to respond to your inquiry or fulfill any ongoing engagement. If you would like your information removed, you can request this at any time by contacting us directly.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Sharing Your Information</h2>
                <p>We do not sell, rent, or trade your personal information to third parties. We only share data with the third-party tools described above — Google Analytics, Meta Pixel, and WhatsApp — solely for the purposes outlined in this policy.</p>
                <p className="mt-4">If we are ever required by law to disclose your information, we will do so only to the extent required and will notify you where legally permitted.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">International Visitors</h2>
                <p>Our website is accessible globally and we serve clients from multiple countries. If you are visiting from the European Union, United Kingdom, or any region with specific data protection regulations, please note the following.</p>
                <p className="mt-4">For visitors from the EU and UK, your data is processed in accordance with the General Data Protection Regulation (GDPR) and UK GDPR where applicable. You have the right to access the personal data we hold about you, request corrections to inaccurate data, request deletion of your data, object to how we process your data, and withdraw consent at any time where consent is the basis for processing.</p>
                <p className="mt-4">For visitors from the United States, we comply with applicable state privacy laws. We do not sell personal information as defined under US privacy legislation.</p>
                <p className="mt-4">To exercise any of these rights, please contact us directly through our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
                <p>Our website and services are intended for businesses and adults. We do not knowingly collect personal information from anyone under the age of 16. If you believe a minor has submitted information to us, please contact us and we will delete it promptly.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Links to Other Websites</h2>
                <p>Our website may contain links to external websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices or content of any third-party websites you may visit through links on our site. We encourage you to read the privacy policy of any website you visit.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, we will update the date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or how we handle your data, we would be happy to hear from you.</p>
                <p className="mt-4">You can reach us through the contact form on our website at codecubesdigital.vercel.app/contact or email us at codecubesdigital@gmail.com. You can also call or WhatsApp us at +923194931082.</p>
                <p className="mt-4 font-bold text-primary">CodeCubes — Built for businesses that mean business.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
