import { motion } from "motion/react";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

const FacebookAdsCampaignAnalysis = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Facebook Ads Campaign Analysis: A Data-Driven Marketing Strategy"
        description="A detailed analysis of Facebook Ads campaigns targeting Bangladesh and USA markets for accounting software, dredger business, and e-commerce software. Learn about ROI, audience targeting, and scaling strategies."
        canonical="https://shopifyheroesagency.com/blog/facebook-ads-campaign-analysis"
        ogImage="https://shopifyheroesagency.com/assets/usaecommercead.png"
        ogType="article"
      />

      {/* Article Header */}
      <section className="bg-black pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-widest mb-8 group"
            >
              <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">
              <span className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-sm">
                Marketing
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                January 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                8 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
              Facebook Ads Campaign Analysis: A Data-Driven Marketing Strategy
            </h1>

            <div className="flex items-center gap-3 text-white/60 text-sm">
              <User className="w-4 h-4" />
              <span className="font-bold">By Arafat Hossain</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-6 relative z-10">
        <div className="aspect-[2.55] bg-slate-200 rounded-sm overflow-hidden shadow-2xl">
          <img
            src="/assets/usaecommercead.png"
            alt="Facebook Ads Campaign Analysis"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introductory Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-medium">
                <strong>I need your advice.</strong> I've run several campaigns to promote Labinitial's products, and based on the results, I need to decide on the most effective path forward for future marketing efforts.
              </p>

              <p className="text-lg text-black/70 leading-relaxed">
                Below I describe my experience running Facebook Ads campaigns over 4 days, targeting audiences in Bangladesh and the United States. The first campaign targeted the Bangladeshi market with accounting software at a daily budget of ~155 BDT. Over 4 days, total spend was 620 BDT. Another campaign targeted Bangladeshi dredger and river excavation, brick-sand-stone supplier companies, running for 2 days at ~300 BDT total. The final campaign targeted the US market for 1 day, costing 1000 BDT.
              </p>
            </motion.div>

            {/* Campaign 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Campaign 1: Bangladesh Market — Accounting Software
              </h2>
              <div className="bg-black/[0.02] p-6 rounded-sm border border-black/5 mb-8">
                <p className="text-lg font-bold text-black mb-2">
                  Daily Budget: ~155 BDT | Total Spend (4 days): 620 BDT
                </p>
                <p className="text-lg font-bold text-brand-red">
                  Results: 1,000+ Impressions + 10 Direct Messages + 1 Conversion (Annual 10,000 BDT Subscription)
                </p>
              </div>

              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  If I run another campaign with the same configuration for one month, I'd allocate a budget of 4,650 BDT.
                </p>
                <p>
                  <strong>Expected Results (based on previous campaign comparison):</strong> 7,500 impressions + 75 direct messages + 7 conversions (each at annual 10,000 BDT subscription; 90% confidence, with 5 months free trial).
                </p>
                <p>
                  <strong>Expected Revenue:</strong> 10,000 BDT × 7 = 70,000 BDT (but after 5 months). If someone uses the software for 5 months and is dissatisfied, the likelihood of continued use decreases. If this works, I'll be motivated to run larger campaigns.
                </p>
              </div>
            </motion.section>

            {/* Campaign 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Campaign 2: Bangladesh Market — Dredger & Construction Suppliers
              </h2>
              <div className="bg-black/[0.02] p-6 rounded-sm border border-black/5 mb-8">
                <p className="text-lg font-bold text-black mb-2">
                  Total Spend (2 days): ~300 BDT
                </p>
                <p className="text-lg font-bold text-brand-red">
                  Results: 400 Impressions + 2 Direct Messages + 0 Confirmed Clients
                </p>
              </div>
            </motion.section>

            {/* Campaign 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Campaign 3: USA Market — E-commerce Software
              </h2>
              <div className="bg-black/[0.02] p-6 rounded-sm border border-black/5 mb-8">
                <p className="text-lg font-bold text-black mb-2">
                  Daily Budget: 1,000 BDT | Duration: 1 day
                </p>
                <p className="text-lg font-bold text-brand-red">
                  Results: 300 Impressions + 3 Page Visits + 0 Confirmed Clients
                </p>
              </div>

              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  If I ran another campaign with a 10,000 BDT budget and configured it well, I'm confident the expected results could be: 3,000 impressions + 30 landing page views + 3 Zoom meetings + 1 lead.
                </p>
              </div>
            </motion.section>

            {/* Analysis */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Analysis & Recommendations
              </h2>

              <div className="space-y-8">
                <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-r-sm">
                  <h3 className="text-sm font-black text-green-700 uppercase tracking-widest mb-3">
                    1. Why Campaign 1 Succeeded
                  </h3>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>High demand for accounting software in the Bangladesh market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Local language and currency offering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Attractive 5-month free trial offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Correct target audience (small & medium business owners)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-sm">
                  <h3 className="text-sm font-black text-yellow-700 uppercase tracking-widest mb-3">
                    2. Why Campaign 2 Had Limited Success
                  </h3>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Narrow target audience (limited number of dredger businesses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Need more market research for specialized software</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-sm">
                  <h3 className="text-sm font-black text-blue-700 uppercase tracking-widest mb-3">
                    3. Campaign 3: Experimental
                  </h3>
                  <ul className="space-y-2 text-black/70">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Higher competition in the USA market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Higher cost but potentially higher revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>More testing and optimization needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Recommendations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Strategic Recommendations
              </h2>

              <div className="space-y-6">
                <div className="p-6 md:p-8 bg-black text-white rounded-sm">
                  <h3 className="text-lg font-black mb-3">1. Scale Campaign 1</h3>
                  <p className="text-white/70 leading-relaxed">
                    With an outstanding ROI (15.1x) and strong market fit, scale this campaign. At a monthly budget of 4,650 BDT, the expected 7 conversions could generate 70,000 BDT in revenue potential.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-black text-white rounded-sm">
                  <h3 className="text-lg font-black mb-3">2. Reconsider Campaign 2</h3>
                  <p className="text-white/70 leading-relaxed">
                    Conduct more market research for the dredger segment. Offline marketing or referral programs might be more effective for this niche.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-black text-white rounded-sm">
                  <h3 className="text-lg font-black mb-3">3. Continue Small Tests in USA Market</h3>
                  <p className="text-white/70 leading-relaxed">
                    Run small tests with a 5,000-10,000 BDT monthly budget to discover which messages and offers resonate. The USA market has higher potential revenue, making long-term investment worthwhile.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-black text-white rounded-sm">
                  <h3 className="text-lg font-black mb-3">4. The 5-Month Free Trial Strategy</h3>
                  <p className="text-white/70 leading-relaxed">
                    This is an excellent strategy. Users become accustomed to the software and will be more willing to pay later. However, ensure the software quality is high so users remain satisfied throughout the trial period.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Conclusion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 pt-12 border-t border-black/5"
            >
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                Conclusion
              </h2>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Your approach is completely realistic. After achieving success in the Bangladesh market, expanding to the USA market is a logical next step. First build a strong foundation in the local market, then enter the international market.
              </p>
              <div className="bg-brand-red/5 p-6 rounded-sm border border-brand-red/10">
                <p className="text-lg font-bold text-brand-red">
                  Remember: "Think globally, act locally" — Your success in the Bangladesh market proves your product has market fit. Now scale that success and gradually enter new markets.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
            Need Help With Your Marketing Strategy?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Whether it's Facebook Ads, Shopify development, or ecommerce strategy — let's discuss how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-white hover:text-black text-white font-black py-4 px-10 rounded-sm text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
              <ChevronRight className="w-5 h-5" />
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold uppercase tracking-tighter"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacebookAdsCampaignAnalysis;
