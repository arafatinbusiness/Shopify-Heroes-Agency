import { motion } from "motion/react";
import { ChevronRight, Shield, Lock, Eye, Database, UserCheck, Mail, Globe } from "lucide-react";
import SEO from "./SEO";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO
        title="Privacy Policy"
        description="Learn how Shopify Heroes Agency collects, uses, and protects your personal information. Our commitment to data privacy and security."
        canonical="https://shopifyheroesagency.com/privacy"
      />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] block">Data Protection</span>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-black/60 text-lg leading-relaxed max-w-3xl">
            Your privacy is critically important to us. This Privacy Policy explains how Shopify Heroes Agency collects, uses, and protects your personal information.
          </p>
          <div className="mt-6 text-sm text-black/40 font-mono uppercase tracking-widest">
            Effective Date: April 18, 2026
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-brand-red" />
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Contact Information:</strong> Name, email address, phone number, business name</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Business Information:</strong> Store URL, budget range, services requested</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Communication Data:</strong> Emails, chat messages, and other correspondence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Technical Data:</strong> IP address, browser type, device information, usage data</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-brand-red" />
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We use the information we collect to:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Respond to your comments, questions, and requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Send technical notices, updates, security alerts, and support messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Monitor and analyze trends, usage, and activities in connection with our services</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-red" />
              3. Data Security
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-black/[0.02] p-4 rounded-sm border border-black/5">
                <p className="font-medium">
                  All data is encrypted in transit using TLS/SSL and at rest using industry-standard encryption methods.
                </p>
              </div>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-brand-red" />
              4. Third-Party Services
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We may employ third-party companies and individuals to facilitate our services ("Service Providers"), to provide the service on our behalf, or to assist us in analyzing how our service is used.
              </p>
              <p>
                These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Our services may contain links to other sites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-brand-red" />
              5. Your Rights
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Access:</strong> Request access to your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Objection:</strong> Object to processing of your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Portability:</strong> Request transfer of your data to another organization</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-brand-red" />
              6. Contact Us
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-black/[0.02] p-6 rounded-sm border border-black/5">
                <p className="font-bold text-black mb-2">Shopify Heroes Agency</p>
                <p className="text-sm text-black/60 mb-1">Email: privacy@shopifyheroes.com</p>
                <p className="text-sm text-black/60">Address: 123 Commerce Street, Wilmington, DE 19801</p>
              </div>
              <p>
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-black/[0.02] p-8 rounded-sm border border-black/5 mt-12"
          >
            <h3 className="text-xl font-black text-black mb-4">Policy Updates</h3>
            <p className="text-black/70 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
            </p>
            <p className="text-black/70">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </motion.div>

          {/* Back to Home */}
          <div className="pt-8 border-t border-black/5">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-brand-red hover:text-black transition-colors font-bold uppercase tracking-tighter group"
            >
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;