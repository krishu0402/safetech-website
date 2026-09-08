"use client";

import { useState } from "react";
import { ShieldAlert, Users, TrendingUp, CheckCircle, ArrowRight, X, Star, Quote, PlayCircle, Calculator } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  // ROI Calculator State
  const [employees, setEmployees] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(20);
  const [hoursSaved, setHoursSaved] = useState(2);
  const annualSavings = employees * hourlyRate * hoursSaved;

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-[0_0_50px_rgba(0,203,247,0.3)] max-w-md w-full p-8 text-center relative animate-in zoom-in-95 duration-300 border border-brand-cyan/20">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-industrial-black transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-industrial-black mb-3">
              Request Confirmed!
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Excellent choice. A logistics training specialist will be in touch within 24 hours to schedule your personalized SafeWork demo.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-4 bg-brand-cyan text-industrial-black font-bold rounded uppercase tracking-widest hover:bg-brand-cyan-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Video Modal Placeholder */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl relative shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-brand-cyan transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-industrial-gray/20">
              <div className="w-20 h-20 bg-brand-cyan text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,203,247,0.5)]">
                <PlayCircle size={40} className="ml-1" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white tracking-widest uppercase">SafeWork Overview</h3>
              <p className="text-gray-400 mt-2">Promotional Video Placeholder</p>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Hero Section */}
      <section 
        className="relative min-h-[90vh] flex flex-col justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')" }}
      >
        {/* Complex Gradient Overlays for Premium Feel */}
        <div className="absolute inset-0 bg-industrial-black/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/90 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 mt-16 pb-32">
          
          {/* Left Side Content */}
          <div className="flex-1 text-left text-white">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-pulse"></span>
                v2.0 Now Available for Automotive Logistics
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-tight uppercase drop-shadow-2xl">
                Safety Training <br/> Built for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow drop-shadow-sm">Real World.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed border-l-4 border-brand-cyan pl-5 bg-industrial-black/30 py-4 pr-4 rounded-r-lg backdrop-blur-sm shadow-inner">
                From local warehouses to global logistics, our seamless interactive training solutions ensure genuine, secure, and hassle-free compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/solution" className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-cyan text-industrial-black font-bold rounded-full hover:bg-brand-cyan-dark hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,203,247,0.4)] uppercase tracking-wider text-sm group">
                  Explore SafeWork <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button onClick={() => setShowVideo(true)} className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all border border-white/30 backdrop-blur-md uppercase tracking-wider text-sm group shadow-lg">
                  <PlayCircle size={20} className="text-brand-yellow group-hover:scale-110 transition-transform" /> Watch Demo
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Side Glassmorphism Widget */}
          <div className="lg:w-[420px] w-full mt-8 lg:mt-0">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-1 shadow-2xl relative hover-lift mx-auto max-w-md">
                <div className="bg-white rounded-xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-cyan to-brand-yellow"></div>
                  
                  <h3 className="text-3xl font-bold font-heading mb-2 text-industrial-black">Book a Demo</h3>
                  <p className="text-gray-500 text-sm mb-6 font-medium">See how SafeWork can transform your operations.</p>
                  
                  <form className="space-y-4" onSubmit={handleHeroSubmit}>
                    <div className="relative group">
                      <input required type="text" placeholder="Your Name" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 outline-none transition-all shadow-sm group-hover:border-gray-300" />
                    </div>
                    <div className="relative group">
                      <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 outline-none transition-all shadow-sm group-hover:border-gray-300" />
                    </div>
                    <button type="submit" className="block w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white text-center font-bold rounded-lg uppercase tracking-widest hover:brightness-110 transition-all shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1 mt-4">
                      Get Started Now
                    </button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center gap-4">
                     <div className="flex items-center gap-2 text-xs text-gray-500 font-bold bg-gray-50 px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                       <ShieldAlert size={16} className="text-green-500" /> End-to-End Encrypted
                     </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-industrial-black/85 backdrop-blur-md border-t border-white/10 z-20 hidden md:block">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-6 text-white text-center divide-x divide-white/10">
              <StaggerItem className="px-2 group">
                <div className="text-2xl md:text-4xl font-heading font-bold text-brand-cyan mb-1 group-hover:scale-110 transition-transform origin-bottom">900+</div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold group-hover:text-white transition-colors">Employees Trained</div>
              </StaggerItem>
              <StaggerItem className="px-2 group">
                <div className="text-2xl md:text-4xl font-heading font-bold text-white mb-1 group-hover:scale-110 group-hover:text-brand-yellow transition-all origin-bottom">100%</div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold group-hover:text-white transition-colors">Compliance Rate</div>
              </StaggerItem>
              <StaggerItem className="px-2 group">
                <div className="text-2xl md:text-4xl font-heading font-bold text-white mb-1 group-hover:scale-110 group-hover:text-brand-cyan transition-all origin-bottom">6+</div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold group-hover:text-white transition-colors">Interactive Modules</div>
              </StaggerItem>
              <StaggerItem className="px-2 group">
                <div className="text-2xl md:text-4xl font-heading font-bold text-white mb-1 group-hover:scale-110 group-hover:text-brand-yellow transition-all origin-bottom">24/7</div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold group-hover:text-white transition-colors">Platform Access</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-16 md:py-20 bg-industrial-light border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn direction="up">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Trusted By Industry Leaders</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-xl md:text-2xl font-heading font-bold flex items-center gap-2 hover:text-brand-cyan transition-colors"><div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-sm"></div> AUTO LOGISTICS</div>
                <div className="text-xl md:text-2xl font-heading font-bold flex items-center gap-2 hover:text-brand-yellow transition-colors"><div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full"></div> PRIME WAREHOUSING</div>
                <div className="text-xl md:text-2xl font-heading font-bold flex items-center gap-2 hover:text-brand-cyan transition-colors"><div className="w-6 h-6 md:w-8 md:h-8 bg-black transform rotate-45"></div> NEXUS SUPPLY</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NEW: Interactive ROI Calculator */}
      <section className="py-24 bg-industrial-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
                <Calculator size={16} /> ROI Calculator
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Calculate Your Savings</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">See how much time and money SafeWork can save your organization by replacing outdated manual inductions with automated training.</p>
            </div>
          </FadeIn>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">Number of Employees</label>
                    <span className="text-brand-cyan font-bold">{employees}</span>
                  </div>
                  <input 
                    type="range" min="10" max="500" step="10" 
                    value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">Average Hourly Rate (£)</label>
                    <span className="text-brand-cyan font-bold">£{hourlyRate}/hr</span>
                  </div>
                  <input 
                    type="range" min="10" max="50" step="1" 
                    value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">Admin Hours Saved per Employee</label>
                    <span className="text-brand-cyan font-bold">{hoursSaved} hrs/yr</span>
                  </div>
                  <input 
                    type="range" min="1" max="10" step="0.5" 
                    value={hoursSaved} onChange={(e) => setHoursSaved(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-cyan-dark/20 p-8 rounded-2xl border border-brand-cyan/30 text-center relative overflow-hidden group hover:border-brand-cyan/50 transition-colors duration-500">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-gray-300 font-bold tracking-widest uppercase mb-4">Estimated Annual Savings</h4>
                <div className="text-5xl md:text-7xl font-heading font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(0,203,247,0.8)]">
                  £{annualSavings.toLocaleString()}
                </div>
                <p className="text-brand-yellow font-medium mt-4">Plus immeasurable savings from reduced accident rates and compliance fines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser: The Problem / Solution */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-cyan to-brand-yellow opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn direction="left">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-industrial-black leading-tight">
                  Stop relying on <span className="text-gray-400 line-through decoration-brand-yellow decoration-4">printed handbooks.</span>
                </h2>
                <div className="w-20 h-2 bg-gradient-to-r from-brand-cyan to-brand-yellow mb-8 rounded-full"></div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Warehouse environments are high-risk, yet safety training often relies on easily forgotten one-off inductions and untrackable paperwork.
                </p>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-industrial-black shadow-sm">
                  We saw this as a genuine design problem. SafeWork is our answer: a system that treats workers as people who deserve engaging training, with robust tracking for your peace of mind.
                </p>
                <Link href="/solution" className="inline-flex items-center gap-3 px-8 py-4 bg-industrial-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors group shadow-lg hover:shadow-xl">
                  See how SafeWork solves this 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-cyan" />
                </Link>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2 relative group w-full">
              <FadeIn direction="right" delay={0.2}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-brand-yellow rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 opacity-80 shadow-2xl"></div>
                <div className="bg-industrial-gray p-8 md:p-12 rounded-2xl text-white relative z-10 shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  <Quote size={40} className="text-white/10 absolute right-8 top-8" />
                  
                  <div className="flex items-center gap-1 mb-6 text-brand-yellow">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight">"SafeWork fundamentally changed our compliance culture."</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10 font-light">
                    Developed through direct collaboration with a real logistics company, SafeWork ensures your safety procedures are always up-to-date, engaging, and genuinely accessible.
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="font-bold text-white">Automotive Logistics Partner</p>
                      <p className="text-sm text-brand-cyan">UK Operations</p>
                    </div>
                    <Link href="/about" className="inline-flex items-center justify-center px-6 py-2 bg-white/10 rounded-full font-bold text-sm hover:bg-white/20 transition-all border border-white/20 hover:shadow-lg backdrop-blur-sm text-brand-yellow">
                      Read Our Story
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Strip Pattern Bottom */}
      <div className="w-full h-3 flex mt-auto">
        {[...Array(40)].map((_, i) => (
          <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-brand-cyan' : 'bg-industrial-black'}`}></div>
        ))}
      </div>
    </div>
  );
}
