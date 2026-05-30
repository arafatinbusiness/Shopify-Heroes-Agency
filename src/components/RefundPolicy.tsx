import { motion } from "motion/react";
import { ChevronRight, DollarSign, Clock, CheckCircle, XCircle, AlertCircle, CreditCard } from "lucide-react";
import SEO from "./SEO";

const RefundPolicy = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO
        title="Refund Policy"
        description="Shopify Heroes Agency refund policy. Learn about our fair and transparent refund terms for project-based, retainer, and hourly services."
        canonical="https://shopifyheroesagency.com/refund"
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
              <DollarSign className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] block">Financial Policy</span>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">Refund Policy</h1>
            </div>
          </div>
          <p className="text-black/60 text-lg leading-relaxed max-w-3xl">
            Our refund policy is designed to be fair and transparent. Please read this policy carefully before making a purchase or engaging our services.
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
              <CheckCircle className="w-6 h-6 text-brand-red" />
              1. General Refund Policy
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Shopify Heroes Agency offers refunds under specific circumstances as outlined below. Due to the custom nature of our services, refunds are not available for work that has been completed or services that have been rendered.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-sm">
                <p className="text-green-800 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <strong>Important:</strong> All refund requests must be submitted in writing to billing@shopifyheroes.com within the specified timeframes.
                </p>
              </div>
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
              <Clock className="w-6 h-6 text-brand-red" />
              2. Service-Specific Refund Terms
            </h2>
            <div className="space-y-6 text-black/70 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black">A. Project-Based Services</h3>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Deposit Refunds:</strong> 50% deposits are non-refundable once project work has commenced.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Cancellation:</strong> If you cancel before work begins, you may receive a full refund of any deposit paid.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Partial Work:</strong> If work has partially commenced, refunds are calculated based on work completed versus work remaining.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black">B. Retainer/Monthly Services</h3>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Monthly Plans:</strong> Refunds are not available for partial months of service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Cancellation:</strong> You may cancel monthly services with 30 days written notice. No refunds for the current billing period.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Unused Hours:</strong> Unused development hours do not roll over to the next month and are not refundable.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black">C. Hourly Services</h3>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Pre-paid Hours:</strong> Unused pre-paid hours may be refunded if no work has been performed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Work Performed:</strong> Once work has been performed on an hourly basis, those hours are not refundable.</span>
                  </li>
                </ul>
              </div>
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
              <XCircle className="w-6 h-6 text-brand-red" />
              3. Non-Refundable Services
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                The following services and situations are explicitly non-refundable:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Completed work or delivered deliverables</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Third-party costs (apps, themes, plugins, licenses) that have been purchased on your behalf</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Services rendered beyond the scope of the original agreement without written approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Change of mind after work has commenced</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Services terminated due to breach of contract or violation of terms</span>
                </li>
              </ul>
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
              <AlertCircle className="w-6 h-6 text-brand-red" />
              4. Refund Request Process
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                To request a refund, please follow these steps:
              </p>
              <ol className="space-y-4 pl-6 list-decimal">
                <li className="pl-2">
                  <strong>Submit Written Request:</strong> Email your refund request to billing@shopifyheroes.com with the subject line "Refund Request - [Your Business Name]".
                </li>
                <li className="pl-2">
                  <strong>Include Details:</strong> Provide your full name, business name, invoice number, service date, and detailed reason for the refund request.
                </li>
                <li className="pl-2">
                  <strong>Timeline:</strong> Refund requests must be submitted within 14 days of the service date or invoice date, whichever is earlier.
                </li>
                <li className="pl-2">
                  <strong>Review Period:</strong> We will review your request within 7-10 business days and notify you of our decision.
                </li>
                <li className="pl-2">
                  <strong>Processing:</strong> Approved refunds will be processed within 14 business days using the original payment method.
                </li>
              </ol>
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
              <CreditCard className="w-6 h-6 text-brand-red" />
              5. Payment Disputes & Chargebacks
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We strive to resolve all payment issues amicably. However, please note:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> Initiating a chargeback or payment dispute without first contacting us to resolve the issue may result in:
                </p>
                <ul className="mt-2 space-y-1 pl-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Immediate termination of all services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Blacklisting from future services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Legal action to recover costs associated with the dispute</span>
                  </li>
                </ul>
              </div>
              <p>
                We encourage you to contact us directly at billing@shopifyheroes.com to resolve any payment issues before initiating formal disputes.
              </p>
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
              <Clock className="w-6 h-6 text-brand-red" />
              6. Refund Processing Timeline
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Once a refund is approved:
              </p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Credit Card Refunds:</strong> 5-10 business days to appear on your statement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Bank Transfer Refunds:</strong> 7-14 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span><strong>PayPal/Stripe Refunds:</strong> 3-5 business days</span>
                </li>
              </ul>
              <div className="bg-black/[0.02] p-4 rounded-sm border border-black/5">
                <p className="font-medium">
                  Note: The exact timing depends on your financial institution and may vary.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-black/[0.02] p-8 rounded-sm border border-black/5 mt-12"
          >
            <h3 className="text-xl font-black text-black mb-4">Questions About Refunds?</h3>
            <p className="text-black/70 mb-6">
              If you have questions about our refund policy or need assistance with a refund request, please contact our billing department:
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-black">Billing Department</p>
                <p className="text-sm text-black/50">Email: billing@shopifyheroes.com</p>
                <p className="text-sm text-black/50">Phone: +1 (555) 123-4567 (Mon-Fri, 9AM-5PM EST)</p>
              </div>
            </div>
          </motion.div>

          {/* Policy Updates */}
          <div className="pt-8 border-t border-black/5">
            <h4 className="font-bold text-black mb-4">Policy Updates</h4>
            <p className="text-black/60 text-sm">
              We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes constitutes acceptance of those changes.
            </p>
          </div>

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

export default RefundPolicy;