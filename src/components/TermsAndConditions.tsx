import { motion } from "motion/react";
import { ChevronRight, Shield, FileText, Lock, AlertCircle, Check } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
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
              <Shield className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] block">Legal</span>
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">TERMS AND CONDITIONS</h1>
            </div>
          </div>
          <p className="text-black/60 text-lg leading-relaxed max-w-3xl">
            These Legal Terms constitute a legally binding agreement made between you and Shopify Heroes Agency, concerning your access to and use of our services.
          </p>
          <div className="mt-6 text-sm text-black/40 font-mono uppercase tracking-widest">
            Last Updated: April 20, 2026
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red" />
              AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We are <strong>Shopify Heroes Agency</strong> ("Company," "we," "us," "our"). We operate the website <strong>shopifyheroesagency.com</strong> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
              </p>
              <p>
                We offer Shopify stores technical support. We have upfront monthly payment way service, so we take payment and work for a month and continues.
              </p>
              <p>
                You can contact us by phone at <strong>+01330492979</strong>, email at <a href="mailto:arafatinbusiness@gmail.com" className="text-brand-red hover:underline">arafatinbusiness@gmail.com</a>.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
                <p className="text-yellow-800 text-sm flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <strong>IMPORTANT:</strong> IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 1: Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red" />
              1. OUR SERVICES
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
              </p>
              <p>
                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
            </div>
          </motion.div>

          {/* Section 2: Intellectual Property Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-red" />
              2. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
              </p>
              <p>
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
              </p>
            </div>
          </motion.div>

          {/* Section 3: User Representations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-red" />
              3. USER REPRESENTATIONS
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                By using the Services, you represent and warrant that:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>you have the legal capacity and you agree to comply with these Legal Terms;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>you are not a minor in the jurisdiction in which you reside;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>you will not access the Services through automated or non-human means;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>you will not use the Services for any illegal or unauthorized purpose; and</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>your use of the Services will not violate any applicable law or regulation.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 4: Purchases and Payment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red" />
              4. PURCHASES AND PAYMENT
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We accept the following forms of payment:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Visa</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Mastercard</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <span>Paddle</span>
                </li>
              </ul>
              <p>
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. All payments shall be in <strong>US dollars</strong>.
              </p>
            </div>
          </motion.div>

          {/* Section 5: Subscriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-red" />
              5. SUBSCRIPTIONS
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is monthly.
              </p>
              <p>
                You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.
              </p>
              <p>
                We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
              </p>
            </div>
          </motion.div>

          {/* Section 6: Return Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-brand-red" />
              6. RETURN POLICY
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                Please review our Return Policy posted on the Services prior to making any purchases.
              </p>
            </div>
          </motion.div>

          {/* Section 7: Prohibited Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand-red" />
              7. PROHIBITED ACTIVITIES
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p>
                As a user of the Services, you agree not to engage in activities that are illegal, harassing, harmful, or that interfere with the proper functioning of the Services.
              </p>
            </div>
          </motion.div>

          {/* Section 8: Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-brand-red" />
              8. PRIVACY POLICY
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms.
              </p>
              <p>
                The Services are hosted in the United States and Bangladesh. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States and Bangladesh, then through your continued use of the Services, you are transferring your data to the United States and Bangladesh.
              </p>
            </div>
          </motion.div>

          {/* Section 9: Term and Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red" />
              9. TERM AND TERMINATION
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services to any person for any reason or for no reason.
              </p>
              <p>
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party.
              </p>
            </div>
          </motion.div>

          {/* Section 10: Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-brand-red" />
              10. DISCLAIMER
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
              </p>
              <p>
                We make no warranties or representations about the accuracy or completeness of the Services' content or the content of any websites or mobile applications linked to the Services.
              </p>
            </div>
          </motion.div>

          {/* Section 11: Limitations of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-brand-red" />
              11. LIMITATIONS OF LIABILITY
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </div>
          </motion.div>

          {/* Section 12: Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="border-l-4 border-brand-red pl-6 py-2"
          >
            <h2 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red" />
              12. CONTACT US
            </h2>
            <div className="space-y-4 text-black/70 leading-relaxed">
              <p>
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <div className="bg-black/[0.02] p-4 rounded-sm border border-black/5">
                <p className="font-bold">Shopify Heroes Agency</p>
                <p>Phone: <strong>+01330492979</strong></p>
                <p>Email: <a href="mailto:arafatinbusiness@gmail.com" className="text-brand-red hover:underline">arafatinbusiness@gmail.com</a></p>
              </div>
            </div>
          </motion.div>

          {/* Acceptance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-black/[0.02] p-8 rounded-sm border border-black/5 mt-12"
          >
            <h3 className="text-xl font-black text-black mb-4">Acceptance of Terms</h3>
            <p className="text-black/70 mb-6">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-black">Your agreement is important to us.</p>
                <p className="text-sm text-black/50">For questions about these terms, contact us using the information above.</p>
              </div>
            </div>
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

export default TermsAndConditions;
