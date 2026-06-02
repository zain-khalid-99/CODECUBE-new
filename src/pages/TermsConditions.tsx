import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { SEO } from '@/src/components/ui/SEO';

export default function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <SEO title="Terms and Conditions | CodeCubes" description="Terms and Conditions for CodeCubes Digital Agency" />
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-none border-primary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6">Terms and Conditions</h1>
            <p className="text-text-secondary font-sans mb-8">Last Updated: May 2025</p>

            <div className="space-y-8 font-sans text-text-primary leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p>These Terms and Conditions govern your use of the CodeCubes website and the purchase of any services we offer. By accessing our website or engaging us for any service, you confirm that you have read, understood, and agreed to these terms in full.</p>
                <p className="mt-4">CodeCubes is a digital agency providing web development, e-commerce design, performance marketing, and search engine optimization services to clients locally and internationally.</p>
                <p className="mt-4">If you do not agree with any part of these terms, please do not use our website or engage our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Services</h2>
                <p>CodeCubes offers the following services as outlined on our website:</p>
                <p className="mt-4">WordPress Web Development, Shopify Store Design, Performance Marketing, and Search Engine Optimization.</p>
                <p className="mt-4">The scope, deliverables, timeline, and pricing for each engagement are confirmed at the time of booking. Any work outside the agreed scope will be discussed separately and may be subject to additional charges. We reserve the right to decline any project at our discretion before work has commenced.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Payments</h2>
                <p>We operate on a 50/50 payment structure. A deposit of 50% of the total project fee is required before any work begins. The remaining 50% is due upon project completion and before final delivery, handover, or launch.</p>
                <p className="mt-4">For monthly retainer services such as Performance Marketing and Search Engine Optimization, payment is due at the beginning of each billing cycle before work for that month commences. Failure to make payment on time may result in a pause or suspension of services until the outstanding balance is cleared.</p>
                <p className="mt-4">All prices are listed in US Dollars unless otherwise agreed in writing. CodeCubes reserves the right to update its pricing at any time. Any price changes will not affect engagements already confirmed and in progress.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Refund Policy</h2>
                <p>All payments made to CodeCubes are non-refundable once work has commenced. This applies to both the initial deposit and any subsequent payments.</p>
                <p className="mt-4">By paying the deposit, you confirm that you understand and accept this policy. We invest significant time, resources, and expertise from the moment a project begins, and refunds are not issued for work already undertaken regardless of the reason for cancellation.</p>
                <p className="mt-4">If you wish to cancel a project before work has started, please contact us immediately. In such cases, we will review the situation on a case by case basis and communicate our position in writing.</p>
                <p className="mt-4">For monthly retainer services, cancellation must be communicated in writing before the next billing cycle begins. No refunds will be issued for a billing period that has already been charged and for which work has commenced.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Revisions</h2>
                <p>Each service package includes a defined number of revision rounds as stated on our pricing page. Revisions must be requested within the scope of the original brief. Requests that represent a change in direction, new requirements, or additions beyond the original scope are not considered revisions and will be quoted separately.</p>
                <p className="mt-4">Revision requests must be submitted in a single consolidated list per round. Piecemeal revision requests submitted after a round has been addressed may count as a new revision round.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Client Responsibilities</h2>
                <p>The success of your project depends on timely and clear communication from your side. As a client, you agree to provide all necessary materials, content, credentials, and feedback within a reasonable timeframe. Delays caused by late content submission, unresponsiveness, or unclear feedback may result in timeline extensions. CodeCubes is not responsible for project delays caused by the client.</p>
                <p className="mt-4">You confirm that any content, images, logos, or materials you provide to us are either owned by you or that you have the legal right to use them. CodeCubes will not be held liable for any copyright infringement arising from client-supplied materials.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Timelines</h2>
                <p>Project timelines provided on our website and during the proposal stage are estimates based on prompt client communication and timely feedback. These timelines begin from the date the deposit is received and all required materials have been submitted by the client.</p>
                <p className="mt-4">CodeCubes will make every reasonable effort to deliver within the estimated timeline. However, we do not guarantee specific delivery dates and are not liable for delays caused by factors outside our control, including but not limited to third-party platforms, hosting providers, domain registrars, or delayed client feedback.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
                <p>Upon receipt of final payment in full, all rights to the completed deliverables are transferred to you, the client. Until final payment is received, all work produced by CodeCubes remains our intellectual property and may not be used, published, or distributed in any form.</p>
                <p className="mt-4">CodeCubes reserves the right to display completed work in our portfolio, case studies, and marketing materials unless you request otherwise in writing at the time of engagement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Platforms and Tools</h2>
                <p>Certain services we provide involve third-party platforms such as WordPress, Shopify, Google Ads, Meta Ads, and others. CodeCubes is not affiliated with, endorsed by, or responsible for these platforms. We are not liable for any changes, outages, policy updates, or decisions made by these platforms that may affect your website, store, or campaigns.</p>
                <p className="mt-4">Any costs associated with third-party platforms, plugins, themes, apps, or subscriptions are the sole responsibility of the client unless explicitly stated otherwise in your service agreement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Confidentiality</h2>
                <p>Both parties agree to keep confidential any sensitive information shared during the engagement. CodeCubes will not disclose your business information, strategies, or materials to any third party without your explicit consent, except where required by law or necessary to deliver the agreed services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
                <p>CodeCubes provides all services with professional care and expertise. However, we do not guarantee specific business outcomes, revenue growth, search engine rankings, or advertising results. Digital results are influenced by many variables outside our control, including market conditions, platform algorithm changes, and competitor activity.</p>
                <p className="mt-4">To the fullest extent permitted by law, CodeCubes shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website, including but not limited to loss of revenue, loss of data, or business interruption.</p>
                <p className="mt-4">Our total liability in any circumstances shall not exceed the total amount paid by the client for the specific service in question.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Website Use</h2>
                <p>By using our website, you agree not to use it for any unlawful purpose, to attempt to gain unauthorized access to any part of the site, to transmit harmful or malicious content of any kind, or to misrepresent your identity or affiliation in any way.</p>
                <p className="mt-4">We reserve the right to restrict access to our website at any time without notice.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Changes to These Terms</h2>
                <p>CodeCubes reserves the right to update these Terms and Conditions at any time. Changes will be reflected by updating the date at the top of this page. Continued use of our website or services after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with applicable international commercial law principles. As we serve clients globally, any disputes will be resolved through good-faith negotiation in the first instance. If a resolution cannot be reached, both parties agree to pursue mediation before any formal legal proceedings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions or any aspect of working with us, we are happy to help.</p>
                <p className="mt-4">Reach us through our contact page at codecubesdigital.vercel.app/contact or email us at codecubesdigital@gmail.com. You can also call or WhatsApp us at +923194931082.</p>
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
