/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  Battery, 
  SignalHigh, 
  Globe, 
  Clock, 
  Calendar, 
  ChevronRight,
  Menu,
  X,
  Search,
  Bell,
  ShoppingBag,
  DollarSign,
  Star,
  Trophy,
  Check
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { db } from "./lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";

// --- Components ---

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "",
    calendarLink: "",
    services: [] as string[],
    other: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "New Store", "Theme Customization", "SEO", "Migration",
    "Maintenance", "Consultation", "CRO Audit", "Shopify Plus B2B",
    "App Integration", "Creative Branding", "Content Writing", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        createdAt: serverTimestamp(),
      };
      
      // 1. Save to Firebase
      await addDoc(collection(db, "leads"), payload);
      
      // 2. Call API endpoint for automations
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          website: "",
          budget: "",
          calendarLink: "",
          services: [],
          other: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl p-8 md:p-12 shadow-2xl no-scrollbar"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="text-center py-20 flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="w-10 h-10 stroke-[3px]" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Request Received!</h2>
                <p className="text-black/50 font-sans max-w-sm">
                  The guide persona has been triggered. Check your inbox for a confirmation. I'll reach out personally within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="text-brand-red font-mono text-xs uppercase tracking-widest block mb-2">Let's Connect</span>
                  <h2 className="text-3xl md:text-5xl font-black text-black leading-none uppercase tracking-tighter">Become a <span className="text-brand-red">Hero.</span></h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Bruce Wayne"
                        className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all placeholder:text-black/20"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">Work Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="hero@batcave.com"
                        className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all placeholder:text-black/20"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Website & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">Store URL *</label>
                      <input
                        required
                        type="url"
                        placeholder="https://myshopify.com"
                        className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all placeholder:text-black/20"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">Monthly Budget *</label>
                      <select
                        required
                        className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select Range</option>
                        <option value="<$1k">&lt; $1,000</option>
                        <option value="$1k-$5k">$1,000 - $5,000</option>
                        <option value="$5k-$15k">$5,000 - $15,000</option>
                        <option value="$15k+">$15,000 +</option>
                      </select>
                    </div>
                  </div>

                  {/* Calendar/Booking Link Encouragement */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">
                      Calendar / Booking Link (Optional but Encouraged)
                    </label>
                    <div className="bg-brand-red/5 p-4 rounded-[8px] border border-brand-red/10 mb-2">
                        <p className="text-[10px] font-bold text-brand-red uppercase tracking-wider mb-1">⚡️ Skip the back-and-forth!</p>
                        <p className="text-[11px] text-black/60 leading-relaxed italic">Provide your Calendly or booking link below so Arafat can schedule our free technical consultation instantly.</p>
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. calendly.com/your-brand"
                      className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all placeholder:text-black/20"
                      value={formData.calendarLink}
                      onChange={(e) => setFormData({ ...formData, calendarLink: e.target.value })}
                    />
                  </div>

                  {/* Services Checklist */}
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">What superpowers do you need? *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {servicesList.map((service) => (
                        <label key={service} className="flex items-center gap-3 group cursor-pointer">
                          <input
                            type="checkbox"
                            className="hidden peer"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                          />
                          <div className="w-5 h-5 rounded-[4px] border-2 border-black/5 flex items-center justify-center peer-checked:bg-brand-red peer-checked:border-brand-red transition-all group-hover:border-brand-red/50">
                            <Check className={`w-3 h-3 text-white transition-opacity ${formData.services.includes(service) ? "opacity-100" : "opacity-0"}`} />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-tight text-black/60 peer-checked:text-black transition-colors">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.services.includes("Other") && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-1">Please specify</label>
                      <textarea
                        className="w-full bg-slate-50 border border-black/5 rounded-[8px] px-4 py-3 text-sm focus:border-brand-red outline-none transition-all h-[100px] resize-none"
                        placeholder="Tell me more..."
                        value={formData.other}
                        onChange={(e) => setFormData({ ...formData, other: e.target.value })}
                      />
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-brand-red hover:bg-black text-white font-black py-4 rounded-sm text-lg uppercase tracking-tight transition-all active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Connecting..." : "Submit Request"}
                      {!isSubmitting && <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                    </button>

                    {/* How It Works Timeline */}
                    <div className="pt-8 border-t border-black/5">
                      <p className="text-[8px] font-black uppercase tracking-[0.3em] text-center text-black/20 mb-6">How it works</p>
                      <div className="flex items-center justify-between px-4">
                        {[
                          { n: "1", t: "Complete Form" },
                          { n: "2", t: "Free Consultation" },
                          { n: "3", t: "Get a Quote" }
                        ].map((step, idx, arr) => (
                          <div key={idx} className="flex-grow flex items-center">
                            <div className="flex flex-col items-center gap-2 relative">
                              <div className="w-8 h-8 rounded-full border-2 border-brand-red flex items-center justify-center text-xs font-black text-brand-red bg-white">
                                {step.n}
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-tighter whitespace-nowrap text-black/40">{step.t}</span>
                            </div>
                            {idx < arr.length - 1 && (
                              <div className="h-[2px] bg-brand-red/10 flex-grow mx-4 translate-y-[-10px]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-black text-[10px] font-mono px-4 h-[20px] flex items-center justify-between border-b border-white/5 uppercase tracking-widest text-white/60 shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>APR 18</span>
        </div>
        <Globe className="w-3 h-3" />
        <Bell className="w-3 h-3" />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="tabular-nums">1.2 MB/s</span>
          <SignalHigh className="w-3 h-3" />
        </div>
        <Wifi className="w-3 h-3" />
        <div className="flex items-center gap-1">
          <span>87%</span>
          <Battery className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Portfolio", "Solutions", "More", "Contact"];

  const moreSubLinks = [
    { label: "Screen Record", href: "https://screenrecord.shopifyheroesagency.com" },
  ];


  return (
    <nav className={`fixed top-[20px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md h-[60px] md:h-[70px] shadow-2xl" : "bg-white h-[70px] md:h-[80px]"}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12 overflow-hidden">
            <img 
              src="/assets/shopify_heroes.jpg" 
              alt="Shopify Heroes Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black">
            Shopify <span className="text-brand-red">Heroes</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link === "More" ? (
              <div
                key={link}
                className="relative group"
                onMouseEnter={() => setMoreMenuOpen(true)}
                onMouseLeave={() => setMoreMenuOpen(false)}
              >
                <a
                  href="#more"
                  className="text-sm font-medium text-black/70 hover:text-black transition-colors relative"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
                </a>
                <AnimatePresence>
                  {moreMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden"
                    >
                      {moreSubLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm font-medium text-black/70 hover:text-brand-red hover:bg-black/5 transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a 
                key={link} 
                href={link === "Contact" ? "#" : `#${link.toLowerCase()}`}
                onClick={(e) => {
                  if (link === "Contact") {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
              </a>
            )
          ))}
        </div>


        {/* CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-semibold text-black/70 hover:text-black transition-colors" onClick={onContactClick}>
            Sign In
          </button>
          <button 
            onClick={onContactClick}
            className="bg-brand-red hover:bg-black text-white font-bold py-2.5 px-6 rounded-full text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-y border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link === "More" ? (
                  <div key={link}>
                    <span className="text-lg font-bold text-black/70 block mb-2">{link}</span>
                    <div className="ml-4 flex flex-col gap-2 border-l-2 border-brand-red/20 pl-4">
                      {moreSubLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-black/50 hover:text-brand-red transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a 
                    key={link} 
                    href={link === "Contact" ? "#" : `#${link.toLowerCase()}`} 
                    className="text-lg font-bold text-black/70 hover:text-brand-red"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (link === "Contact") {
                        e.preventDefault();
                        onContactClick();
                      }
                    }}
                  >
                    {link}
                  </a>
                )
              ))}
              <hr className="border-black/5" />
              <div className="flex flex-col gap-4">
                <button onClick={() => { setMobileMenuOpen(false); onContactClick(); }} className="w-full text-left py-2 font-bold text-black/70">Sign In</button>
                <button onClick={() => { setMobileMenuOpen(false); onContactClick(); }} className="w-full bg-brand-red text-white py-3 rounded-xl font-bold">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

const GeometricAbstract = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-transparent overflow-hidden">
      {/* Dynamic feel using SVG and CSS */}
      <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </defs>
        
        <g filter="url(#goo)">
          {/* Vibrant Blobs */}
          <motion.circle 
            animate={{ cx: [200, 400, 200], cy: [200, 500, 200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            r="150" fill="#22C55E" opacity="0.6" // Green
          />
          <motion.circle 
            animate={{ cx: [600, 300, 600], cy: [300, 600, 300] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            r="180" fill="#F97316" opacity="0.6" // Orange
          />
          <motion.circle 
            animate={{ cx: [400, 700, 400], cy: [600, 200, 600] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            r="160" fill="#F20401" opacity="0.6" // Brand Red
          />
          <motion.circle 
            animate={{ cx: [100, 500, 100], cy: [700, 400, 700] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            r="140" fill="#EC4899" opacity="0.6" // Pink
          />
          <motion.circle 
            animate={{ cx: [700, 200, 700], cy: [100, 500, 100] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            r="170" fill="#EAB308" opacity="0.6" // Yellow
          />
        </g>

        {/* Sharp Geometric Shapes */}
        <motion.rect 
          animate={{ rotate: 360, x: [100, 150, 100], y: [100, 120, 100] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          x="100" y="100" width="80" height="80" fill="none" stroke="#000" strokeWidth="2" opacity="0.1" 
        />
        <motion.path 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          d="M400,100 L450,200 L350,200 Z" fill="none" stroke="#F20401" strokeWidth="4" opacity="0.2"
        />
      </svg>
      
      {/* Additional CSS-based geometric accents */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
    </div>
  );
};

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[700px] lg:min-h-screen bg-brand-red flex items-center overflow-hidden pt-[90px] md:pt-[100px]">
      {/* JavaScript-generated Abstract Background - Now truly part of the background layer */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-100 lg:opacity-100">
        <GeometricAbstract />
      </div>

      {/* Decorative Background Elements - Subtle */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-black/[0.02] skew-x-[-15deg] translate-x-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-0 py-12 md:py-20 lg:py-24">
        {/* Left Side (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-1 flex flex-col justify-center text-white py-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full w-fit mb-6 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">
              Shopify Heroes Agency — The Partner You Need
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] mb-8 uppercase tracking-tighter">
            Expert Shopify Developer <br />
            <span className="text-white">for Custom Setup & <br className="hidden md:block" /> Technical Fixes Online</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-sans text-balance font-medium">
            It's overwhelming for you to do everything yourself. My team and I handle your Shopify store setup and provide technical Shopify support personally, so you can stop fighting with your theme and get back to selling.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto bg-brand-dark hover:bg-black text-white font-black py-5 px-10 rounded-sm text-lg uppercase tracking-tight transition-all hover:scale-105 hover:-rotate-2 active:scale-95 shadow-2xl flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col text-xs font-mono uppercase tracking-widest text-white/60">
              <span>Next Cohort Begins</span>
              <span className="text-white font-bold underline">May 2026</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-red bg-zinc-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold block">Trusted by 500+ Heroes</span>
              <span className="text-white/60">Across the Shopify ecosystem</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-1 h-[400px] md:h-[500px] lg:h-full relative flex items-center justify-center"
        >
          {/* Overlaid Animated Text */}
          <div className="relative z-20 flex items-center justify-center w-full px-4">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-7xl lg:text-[4vw] xl:text-[4.5vw] font-black text-white uppercase leading-[0.85] text-center tracking-tightest drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] [text-stroke:3px_black] md:[text-stroke:6px_black] select-none"
            >
              Shopify <br />
              Store <br />
              Maintenance
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-4 outline-text text-black/20">PORTFOLIO</h2>
          <h3 className="text-3xl md:text-5xl font-black relative -top-8 md:-top-12">SUCCESS STORIES.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl bg-brand-dark aspect-video mb-6 relative">
                <img 
                  src={`https://picsum.photos/seed/work${i}/1200/800`} 
                  alt="Work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/20 transition-colors" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold uppercase">HERO PROJECT 0{i}</h4>
                  <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Shopify Plus • Headless Commerce</span>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main App ---

const ShopifyPlus = ({ onContactClick }: { onContactClick: () => void }) => {
  const stats = [
    { icon: <ShoppingBag className="w-5 h-5" />, value: "15+", label: "STORES SERVED" },
   
    { icon: <Star className="w-5 h-5" />, value: "15+", label: "FIVE STAR REVIEWS" },

  ];

  const mockupsColumn1 = [
    "/assets/mobile-screens/buytakescollablesite1.jpg",
    "/assets/mobile-screens/buytakescrollablesite2.jpg",
    "/assets/mobile-screens/buytakescrollablesite3.jpg",
    "/assets/mobile-screens/buytakescesite4.jpg",

  ];

  const mockupsColumn2 = [
    "/assets/mobile-screens/electricbingoscrollable1.jpg",
    "/assets/mobile-screens/electricbingoscrollable2.jpg",
    "/assets/mobile-screens/electricbingoscrollable3.jpg",
    
  
  ];

  const mockupsColumn3 = [
    "/assets/mobile-screens/miamifruitscrollable.gif",
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-16 md:gap-24 items-center">
        {/* Left Side (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-brand-red font-black text-sm uppercase tracking-widest bg-brand-red/5 w-fit px-4 py-1 rounded-sm">
              Premium Tier
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
              Shopify Plus <br />
              Development Agency <br />
              <span className="text-brand-red">You Can Trust</span>
            </h2>
            <p className="text-black/60 text-lg leading-relaxed max-w-lg">
              Unlock the full potential of high-volume commerce. Our team of Plus specialists provides enterprise-grade solutions that scale seamlessly with your growing brand. Experience technical excellence without the traditional agency overhead.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 p-6 bg-black/[0.02] border border-black/5 rounded-sm">
                <div className="text-brand-red">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-black">{stat.value}</span>
                  <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={onContactClick}
            className="w-fit bg-[#008060] hover:bg-[#004d3a] text-white font-black py-4 px-10 rounded-sm text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#008060]/20 flex items-center gap-2"
          >
            Get a Quote <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right Side (60%) - Vertical Scrolling Columns */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1, 2].map((colIndex) => {
            const columnMockups = colIndex === 0 ? mockupsColumn1 : 
                                 colIndex === 1 ? mockupsColumn3 : 
                                 mockupsColumn2;
            return (
              <div key={colIndex} className={`relative h-full overflow-hidden ${colIndex > 0 ? "hidden md:block" : "block"}`}>
                {colIndex === 1 ? (
                  // Second column (now third) - static GIF without scrolling
                  <div className="flex flex-col gap-4">
                    <div 
                      className="aspect-[9/16] w-full bg-slate-100 rounded-[2rem] border-[6px] border-slate-900 overflow-hidden shadow-2xl"
                    >
                      <img 
                        src={columnMockups[0]} 
                        alt="Miami Fruit Scrollable GIF" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : (
                  // First and third columns - with scrolling animation
                  <motion.div
                    animate={{ 
                      y: [0, -2000, 0]
                    }}
                    transition={{ 
                      duration: colIndex === 0 ? 70 : 90, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="flex flex-col gap-1"
                  >
                    {[...columnMockups, ...columnMockups].map((src, i) => (
                      <div 
                        key={i} 
                        className="aspect-[9/16] w-full bg-slate-100 overflow-hidden"
                      >
                        <img 
                          src={src} 
                          alt={`Mockup ${i}`} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const caseStudies = [
    {
      client: "EcoGlow Skincare",
      image: "https://picsum.photos/seed/skincare/800/600",
      quote: "Our store performance tripled in just 3 months.",
      metrics: "+310% Conversion Rate",
      text: "Shopify Heroes didn't just rebuild our theme; they transformed our business logic. Our mobile sales have skyrocketed since the launch.",
      author: "Sarah J., Founder"
    },
    {
      client: "AeroGear Tech",
      image: "https://picsum.photos/seed/techgear/800/600",
      quote: "The technical support is absolutely top-tier.",
      metrics: "99.9% Site Uptime",
      text: "We used to struggle with daily app conflicts. Now, our store is a lean, mean, high-speed sales machine with zero downtime.",
      author: "Mark V., CTO"
    }
  ];

  return (
    <section className="bg-[#f8f9fa] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] mb-4 block">Proof of Growth</span>
          <h2 className="text-4xl md:text-6xl font-black text-black">OUR CLIENTS GET RESULTS.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((caseStudy, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={caseStudy.image} alt={caseStudy.client} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-6 right-6 bg-yellow-400 text-black font-black px-4 py-2 text-sm uppercase skew-x-[-12deg] shadow-lg">
                  {caseStudy.metrics}
                </div>
              </div>
              
              <div className="p-8 md:p-12 relative">
                <div className="absolute top-0 left-12 -translate-y-1/2 bg-yellow-400 text-black px-6 py-3 font-black text-lg md:text-xl shadow-xl w-[80%] italic">
                  "{caseStudy.quote}"
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{caseStudy.client}</h3>
                  <p className="text-black/60 leading-relaxed mb-8">{caseStudy.text}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-black/5">
                    <span className="text-sm font-bold uppercase tracking-widest text-black/40">{caseStudy.author}</span>
                    <button className="flex items-center gap-2 font-black text-sm uppercase tracking-tighter hover:text-brand-red transition-colors group/btn">
                      Read Full Case Study
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Jessica Chen",
      role: "E-commerce Manager, Veloci",
      img: "https://picsum.photos/seed/jess/100/100",
      headline: "The best Shopify devs we've ever hired.",
      text: "They fixed bugs that three other agencies couldn't figure out. Highly recommended for technical shops."
    },
    {
      name: "David Ross",
      role: "Operations, TrailBlaze",
      img: "https://picsum.photos/seed/dave/100/100",
      headline: "Scalability is no longer a worry.",
      text: "Our Shopify Plus setup is now rock solid. We handled Black Friday with zero issues for the first time."
    },
    {
      name: "Emma Wright",
      role: "Founder, Bloom",
      img: "https://picsum.photos/seed/emma/100/100",
      headline: "A true partner in our success.",
      text: "They treat our store like it's their own. The personal touch they provide is rare in this industry."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-black/5 pb-12">
          <div>
            <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] mb-4 block">Social Proof</span>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">WHAT OUR CLIENTS <br /> ARE SAYING.</h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-6 h-6 ${s === 5 ? 'text-black/20 fill-black/20' : 'text-yellow-400 fill-yellow-400'}`} />
              ))}
            </div>
            <span className="text-3xl font-black">4.9/5</span>
            <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Based on 150+ Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#f8f9fa] rounded-sm relative flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-black uppercase leading-tight">{review.name}</h4>
                  <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest leading-none">{review.role}</span>
                </div>
              </div>

              <div className="bg-yellow-400 p-4 mb-6 relative">
                <div className="absolute -top-2 left-4 w-4 h-4 bg-yellow-400 rotate-45" />
                <h5 className="font-black text-black italic text-lg leading-tight">"{review.headline}"</h5>
              </div>

              <p className="text-black/60 text-sm leading-relaxed flex-grow italic">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const PartnerBrands = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Brands We've Helped Transform</h2>
          <p className="text-lg md:text-xl text-black/60">We're proud to have partnered with these innovative businesses</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Our Trusted Partners</h3>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Blue Mark DCS */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full h-48 flex items-center justify-center mb-4">
                <img 
                  src="/partner-logos/bluemark_logo1.png" 
                  alt="Blue Mark DCS Logo" 
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Blue Mark DCS</h4>
            </div>

            {/* Segun Bangla */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full h-48 flex items-center justify-center mb-4">
                <img 
                  src="/partner-logos/segunbangla.png" 
                  alt="Segun Bangla Logo" 
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Segun Bangla</h4>
            </div>

            {/* BuyTake */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full h-48 flex items-center justify-center mb-4">
                <img 
                  src="/partner-logos/buytake.logo.jpg" 
                  alt="BuyTake Logo" 
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2">BuyTake</h4>
            </div>

            {/* Elite Laundry Station */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full h-48 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">ELS</div>
                  <div className="text-gray-700 font-semibold">Elite Laundry Station</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-black mb-2">Elite Laundry Station</h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-black/60 mb-4">Ready to join our growing list of successful partners?</p>
          <button 
            onClick={() => {
              // This button will be wired to open the contact modal
              // The actual implementation will be handled by the parent component
              // For now, we'll use a simple alert
              alert("Contact us to become our next success story!");
            }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg"
          >
            Become Our Next Success Story
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};


const BlogSection = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12 md:mb-16">
          <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] mb-4 block">Expert Insights</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter">FROM OUR BLOG.</h2>
          <p className="text-black/50 max-w-2xl mx-auto text-lg">
            Our latest insights on Shopify development, ecommerce strategy, and how technical excellence can drive real growth.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 bg-black hover:bg-brand-red text-white font-black py-4 px-10 rounded-sm text-lg uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Explore All Articles
            <ChevronRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = ({ onContactClick }: { onContactClick: () => void }) => {
  const tiers = [
    {
      name: "Basic Maintenance",
      subtitle: "The 'Peace of Mind' Tier",
      price: "$350",
      focus: "Monthly technical health and security.",
      features: [
        "Instant Technical Fixs - Custom Code, Information Update",
        "Weekly Theme Backups",
        "App Health Check",
        "Weekly Speed Audit",
        "Products: Up to 10 Products to upload and optimize(You've to provide images)"
      ],
      cta: "Secure Your Store",
      recommended: false
    },
    {
      name: "Professional Support",
      subtitle: "The 'Growth' Tier",
      price: "$500",
      focus: "Scaling brands that need a dedicated technical partner.",
      features: [
        "Everything in Basic",
        "Highest Level of Bug Fixing Support, Everything on Us.",
        "Weekly Technical Audit: Speed,Optimization,Traffic,Conversion Numbers Report.",
        "Setting Up Apps,Full Support.",
        "4 Facebook Ads Setup",
        "4 Landing Pages Monthly & 2 Product Detail Pages",
        "Custom Image Enhancement Support",
        "Basic starter SEO from Semrush"
      ],
      cta: "Start Maintenance",
      recommended: true
    },
    {
      name: "Enterprise/Plus",
      subtitle: "The 'Scale' Tier",
      price: "$1,500",
      focus: "Shopify Plus & High-Volume International stores.",
      features: [
        "Everything in Professional",
        "Plus Checkout Extensibility Management",
        "Unlimited Minor Technical Tweaks",
        "Custom API & Third-party Integrations",
        "Daily Store Traffic,Conversion & Speed Report",
        "Setting Up Apps,Full Support",
        "12 Landing Pages and 4 PDP Designs",
        "12 Facebook Ads Optimization",
        "Custom Image Enhancement Support",
        "Full Website SEO Partnering with Semrush.",
        "Will Upload 40-100 Products with Optimization",
        "Will Write 4 Vlogs a Month with Proper SEO",
        "Will Share Blogs in Your Facebook,Instagram,Linkedin,TikTok"
      ],
      cta: "Secure Your Store",
      recommended: false
    }
  ];

  return (
    <section id="solutions" className="bg-[#f8f9fa] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-red font-mono text-sm uppercase tracking-[0.2em] mb-4 block">Pricing Plans</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter">Shopify Support Tiers.</h2>
          <p className="text-black/50 max-w-2xl mx-auto text-lg">
            Choose the level of technical excellence your brand requires. No hidden fees, just pure technical power.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-sm transition-all duration-500 ${
                tier.recommended 
                ? "bg-[#063216] text-white ring-4 ring-[#063216] ring-offset-4 ring-offset-[#f8f9fa] shadow-2xl scale-105 z-10" 
                : "bg-white text-black border border-black/5 shadow-sm hover:shadow-xl"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                  <span className="animate-pulse">🔥</span> Most Popular for Scaling Brands
                </div>
              )}

              <div className="mb-8">
                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${tier.recommended ? "text-green-300" : "text-black/40"}`}>
                  {tier.subtitle}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black">{tier.price}</span>
                  <span className={`text-sm font-bold ${tier.recommended ? "text-white/60" : "text-black/40"}`}>/mo</span>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-8 font-medium ${tier.recommended ? "text-white/80" : "text-black/60"}`}>
                {tier.focus}
              </p>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-0.5 shrink-0 ${tier.recommended ? "text-green-400" : "text-green-600"}`}>
                      <Check className="w-5 h-5 stroke-[3px]" />
                    </div>
                    <span className={`text-sm tracking-tight ${tier.recommended ? "text-white/90" : "text-black/80"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onContactClick}
                className={`w-full py-4 rounded-sm font-black uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  tier.recommended 
                  ? "bg-white text-[#063216] hover:bg-yellow-400 hover:text-black" 
                  : "bg-black text-white hover:bg-brand-red"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-brand-red overflow-x-hidden">
      <SEO
        title="Best Shopify Web Design Agency & Plus Developer"
        description="Expert Shopify developer providing custom store setup, technical fixes, and ongoing support. Stop fighting with your theme and get back to selling."
        canonical="https://shopifyheroesagency.com/"
      />
      <StructuredData />
      <StatusBar />
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <ShopifyPlus onContactClick={() => setIsModalOpen(true)} />
        <Results />
        <Testimonials />
        
        {/* Partner Brands Section */}
        <PartnerBrands />
        
        <Pricing onContactClick={() => setIsModalOpen(true)} />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Contact CTA */}
    
      </main>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-sm overflow-hidden">
                <img 
                  src="/assets/shopify_heroes.jpg" 
                  alt="Shopify Heroes Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Shopify <span className="text-brand-red">Heroes</span>
              </span>
            </div>
            <p className="text-white/40 max-w-xs leading-relaxed uppercase text-xs tracking-widest">
              The elite agency for high-growth commerce. We don't just build stores; we create legends.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-[0.2em] text-white">Navigation</h5>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-white/40">
              <li><a href="#home" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-brand-red transition-colors">Portfolio</a></li>
              <li><a href="#solutions" className="hover:text-brand-red transition-colors">Solutions</a></li>
              <li><Link to="/blog" className="hover:text-brand-red transition-colors">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-brand-red transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-brand-red transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-[0.2em] text-white">Connect</h5>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-white/40">
              <li><a href="#" className="hover:text-brand-red transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em] border-t border-white/5 pt-12">
          &copy; 2026 Shopify Heroes Agency. Built for Legends.
        </div>
      </footer>
    </div>
  );
}
