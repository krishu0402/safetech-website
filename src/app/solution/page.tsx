"use client";

import { LayoutDashboard, BookOpen, CheckCircle, Settings, HardHat, FileWarning, Eye, ShieldAlert, Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function SolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is SafeWork customizable for our specific warehouse layout?",
      answer: "Absolutely. The Admin Panel allows you to upload custom safety diagrams, site-specific hazards, and tailor the interactive modules to match your exact floor plan and procedures."
    },
    {
      question: "How does the system track compliance?",
      answer: "Every interaction, quiz attempt, and module completion is logged in real-time. Supervisors can view dashboards showing exactly who is compliant, who needs retraining, and generate audit-ready reports instantly."
    },
    {
      question: "Can workers access training on their phones?",
      answer: "Yes, SafeWork is fully responsive. It’s designed to be used on desktop terminals in the breakroom, warehouse tablets, or personal mobile devices to ensure training can happen anywhere."
    },
    {
      question: "How long does deployment usually take?",
      answer: "Because we built this specifically for logistics, deployment is rapid. Typical rollouts take less than 2 weeks from initial configuration to staff onboarding."
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* The Problem Section */}
      <section className="py-24 bg-industrial-light relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -z-0"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-industrial-black">
                The Compliance <span className="text-red-500 drop-shadow-sm">Gap</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Warehouse and logistics environments are among the highest-risk workplaces in any industry — forklifts, heavy machinery, moving loads, tight aisles, long shifts.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-8">
            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <FileWarning size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading group-hover:text-red-500 transition-colors">Printed Handbooks</h3>
              <p className="text-gray-600 leading-relaxed">Easily ignored, rarely updated, and completely ineffective at building real safety habits on the busy warehouse floor.</p>
            </StaggerItem>
            
            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading group-hover:text-red-500 transition-colors">One-off Inductions</h3>
              <p className="text-gray-600 leading-relaxed">Forgotten weeks later when real risks appear. Training that isn't engaging or continuously reinforced simply doesn't stick.</p>
            </StaggerItem>
            
            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <HardHat size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading group-hover:text-red-500 transition-colors">Untrackable Progress</h3>
              <p className="text-gray-600 leading-relaxed">A signature on a form can't prove understanding, making it impossible to ensure genuine compliance and protect your workforce.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* The Solution / Modules */}
      <section className="py-24 bg-industrial-black text-white relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="down">
            <div className="text-center mb-20">
              <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-brand-cyan/30 text-brand-cyan font-bold text-sm tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,203,247,0.2)]">
                The Platform
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">SafeWork</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                SafeWork is structured around six core modules, each engineered to solve a specific part of the training and compliance lifecycle.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-cyan hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,203,247,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors font-heading">Login & Access</h3>
              <p className="text-gray-400 leading-relaxed">
                A secure, role-based entry point ensuring every worker, supervisor, and administrator gets tailored access immediately.
              </p>
            </StaggerItem>

            {/* Module 2 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-yellow hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,207,64,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-yellow to-[#e6b800] text-industrial-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <LayoutDashboard size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-yellow transition-colors font-heading">Dashboard</h3>
              <p className="text-gray-400 leading-relaxed">
                A personalized mission control showing each user exactly where they stand: what's completed, outstanding, and upcoming.
              </p>
            </StaggerItem>

            {/* Module 3 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-cyan hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,203,247,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors font-heading">Interactive Training</h3>
              <p className="text-gray-400 leading-relaxed">
                Bite-sized health & safety content built to be completed in realistic time windows, maximizing retention.
              </p>
            </StaggerItem>

            {/* Module 4 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-yellow hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,207,64,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-yellow to-[#e6b800] text-industrial-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-yellow transition-colors font-heading">Live Assessment</h3>
              <p className="text-gray-400 leading-relaxed">
                Instant-feedback quizzes that verify genuine understanding as training happens, eliminating the guesswork.
              </p>
            </StaggerItem>

            {/* Module 5 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-cyan hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,203,247,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-cyan transition-colors font-heading">Progress Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Visual progress bars and historic tracking—motivating for workers, and an essential audit trail for management.
              </p>
            </StaggerItem>

            {/* Module 6 */}
            <StaggerItem className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-yellow hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,207,64,0.15)] transition-all duration-300 group shadow-2xl hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-yellow to-[#e6b800] text-industrial-black w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Settings size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-yellow transition-colors font-heading">Admin Command</h3>
              <p className="text-gray-400 leading-relaxed">
                A powerful management layer to oversee content, push critical updates, and monitor compliance across entire fleets.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Advanced Interactive FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-industrial-black">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className={`w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none transition-colors ${openFaq === index ? 'bg-gray-50' : ''}`}
                  >
                    <span className="font-bold text-lg text-industrial-black">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-brand-cyan text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-gray-600 bg-gray-50 leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
