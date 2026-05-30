import { motion } from "motion/react";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "facebook-ads-campaign-analysis",
    title: "Facebook Ads Campaign Analysis: A Data-Driven Marketing Strategy",
    description:
      "A detailed analysis of Facebook Ads campaigns targeting Bangladesh and USA markets for accounting software, dredger business, and e-commerce software. Learn about ROI, audience targeting, and scaling strategies.",
    image: "/assets/usaecommercead.png",
    date: "January 2025",
    readTime: "8 min read",
    author: "Arafat Hossain",
    category: "Marketing",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog - Shopify Development Insights & Ecommerce Tips"
        description="Expert insights on Shopify development, ecommerce strategy, digital marketing, and technical tips to grow your online store."
        canonical="https://shopifyheroesagency.com/blog"
      />

      {/* Header */}
      <section className="bg-black pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest block mb-4">
              Expert Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Our Blog.
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Insights on Shopify development, ecommerce strategy, digital marketing, and how technical excellence drives real growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-black/40 mb-4">No articles yet</h2>
              <p className="text-black/30">Check back soon for new insights and articles.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-white rounded-sm overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">
                        <span className="bg-brand-red/10 text-brand-red px-2 py-1 rounded-sm">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-black mb-3 group-hover:text-brand-red transition-colors leading-tight uppercase tracking-tighter">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-black/60 leading-relaxed flex-grow mb-6">
                        {post.description}
                      </p>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-black/5 mt-auto">
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                          By {post.author}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-bold text-brand-red group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-black/40 hover:text-brand-red transition-colors font-bold uppercase tracking-tighter group"
          >
            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
