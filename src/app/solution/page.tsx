"use client";

import { useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  CheckCircle,
  Settings,
  HardHat,
  FileWarning,
  Eye,
  ShieldAlert,
  Users,
  ChevronDown,
  Target,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  Check,
  Clock3,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

import { ScenarioPreview } from "@/components/ScenarioPreview";

export default function SolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is SafeWork customizable for a specific warehouse?",
      answer:
        "The proposed SafeWork platform is designed to support site-specific training content, hazards and procedures. The current prototype demonstrates the interactive training approach rather than a completed customisation system.",
    },
    {
      question: "How does the system track progress?",
      answer:
        "Progress tracking is part of the proposed SafeWork platform requirements. The current prototype demonstrates scenario progress within the training interaction, while persistent learner records and reporting are planned system functionality.",
    },
    {
      question: "Can workers access training on different devices?",
      answer:
        "The website and prototype use a responsive interface designed for desktop, tablet and mobile viewing. The current prototype focuses on demonstrating the training interaction rather than a completed native mobile application.",
    },
    {
      question: "What is currently demonstrated?",
      answer:
        "The current prototype demonstrates an interactive warehouse safety scenario where a learner identifies hazards, receives immediate feedback, sees scenario progress and can replay the activity.",
    },
  ];

  const modules = [
    {
      title: "Login & Access",
      description:
        "A proposed role-based access layer for workers, trainers and administrators.",
      icon: Users,
      type: "Proposed",
      accent: "cyan",
    },
    {
      title: "Dashboard",
      description:
        "A proposed dashboard for showing training activities, outstanding tasks and learner progress.",
      icon: LayoutDashboard,
      type: "Proposed",
      accent: "yellow",
    },
    {
      title: "Interactive Training",
      description:
        "Scenario-based training designed to let learners identify hazards and engage with realistic workplace situations.",
      icon: BookOpen,
      type: "Demonstrated",
      accent: "cyan",
    },
    {
      title: "Assessment",
      description:
        "A proposed assessment component for checking learner understanding and providing immediate feedback.",
      icon: CheckCircle,
      type: "Proposed",
      accent: "yellow",
    },
    {
      title: "Progress Tracking",
      description:
        "The prototype demonstrates scenario-level progress. Persistent learner records and reporting are proposed platform functionality.",
      icon: ShieldAlert,
      type: "Partially demonstrated",
      accent: "cyan",
    },
    {
      title: "Admin Management",
      description:
        "A proposed administration layer for managing training content and monitoring learner activity.",
      icon: Settings,
      type: "Proposed",
      accent: "yellow",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Select Training",
      description:
        "The learner accesses the relevant health and safety training activity.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Explore Scenario",
      description:
        "The learner interacts with a realistic workplace situation.",
      icon: Target,
    },
    {
      number: "03",
      title: "Identify Hazards",
      description:
        "The learner looks for unsafe conditions and makes decisions.",
      icon: Eye,
    },
    {
      number: "04",
      title: "Receive Feedback",
      description:
        "The system provides immediate feedback explaining the safety issue.",
      icon: ClipboardCheck,
    },
    {
      number: "05",
      title: "Review Progress",
      description:
        "The proposed platform can use training activity to support learner progress.",
      icon: BarChart3,
    },
    {
      number: "06",
      title: "Continue Learning",
      description:
        "Learners can repeat activities and progress through additional training.",
      icon: ArrowRight,
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="py-24 md:py-32 bg-industrial-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-brand-cyan/30 text-brand-cyan font-bold text-sm tracking-widest uppercase mb-7">
                <HardHat size={16} />
                SafeWork Solution
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-7">
                Interactive safety training for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">
                  real workplaces
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                SafeWork is a proposed interactive health and safety training
                system for logistics and warehousing environments, combining
                scenario-based learning with immediate feedback.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          PROBLEM
      ========================================================== */}
      <section className="py-24 bg-industrial-light relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-500 font-bold text-sm uppercase tracking-widest mb-5">
                The Challenge
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-industrial-black">
                The Compliance{" "}
                <span className="text-red-500">Gap</span>
              </h2>

              <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full" />

              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Warehouse and logistics environments involve forklifts, heavy
                machinery, moving loads, tight aisles and other workplace
                hazards. SafeWork is designed around making safety training
                more interactive and easier to engage with.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <FileWarning size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading">
                Printed Handbooks
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Static materials can be difficult to engage with and may not
                provide opportunities for learners to practise identifying
                workplace hazards.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <Eye size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading">
                One-off Inductions
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Training can become less memorable when learners have limited
                opportunities to revisit workplace situations and apply safety
                knowledge.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-red-50 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all shadow-inner">
                <HardHat size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-industrial-black font-heading">
                Limited Feedback
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Traditional training approaches may not immediately show
                learners why a workplace decision is unsafe or how it could be
                improved.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          HOW SAFEWORK WORKS
      ========================================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-sm uppercase tracking-widest mb-5">
                Training Workflow
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                How SafeWork works
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The proposed training experience follows a simple learning
                loop designed around realistic workplace scenarios.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem
                  key={item.number}
                  className="relative bg-industrial-light rounded-2xl p-7 border border-gray-200 hover:border-brand-cyan/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-industrial-black text-brand-yellow flex items-center justify-center">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-heading font-bold text-gray-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          PLATFORM MODULES
      ========================================================== */}
      <section className="py-24 bg-industrial-black text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="down">
            <div className="text-center mb-16">
              <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-brand-cyan/30 text-brand-cyan font-bold text-sm tracking-widest uppercase mb-6">
                Proposed Platform
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Inside{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">
                  SafeWork
                </span>
              </h2>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                The project requirements describe a wider platform around
                interactive training. The current prototype demonstrates the
                training interaction, while the other platform components
                represent proposed functionality.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;

              const isYellow = module.accent === "yellow";

              return (
                <StaggerItem
                  key={module.title}
                  className={`bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 group shadow-2xl hover:-translate-y-2 ${
                    isYellow
                      ? "hover:border-brand-yellow"
                      : "hover:border-brand-cyan"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-7 shadow-lg group-hover:scale-110 transition-transform ${
                      isYellow
                        ? "bg-brand-yellow text-industrial-black"
                        : "bg-brand-cyan text-white"
                    }`}
                  >
                    <Icon size={30} />
                  </div>

                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white font-heading">
                      {module.title}
                    </h3>

                    <span
                      className={`shrink-0 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                        module.type === "Demonstrated"
                          ? "bg-green-500/10 text-green-300 border border-green-500/20"
                          : module.type === "Partially demonstrated"
                            ? "bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20"
                            : "bg-white/10 text-gray-300 border border-white/10"
                      }`}
                    >
                      {module.type}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {module.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE SCENARIO
      ========================================================== */}
      <section className="py-24 bg-industrial-light">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-sm uppercase tracking-widest mb-5">
                <Target size={16} />
                Working Prototype
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                Try a SafeWork scenario
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Identify workplace hazards in an interactive warehouse
                scenario and receive immediate safety feedback.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ScenarioPreview />
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-cyan" />
                Interactive hazard identification
              </div>

              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-cyan" />
                Immediate feedback
              </div>

              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-cyan" />
                Scenario progress
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          PROTOTYPE STATUS
      ========================================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow-dark font-bold text-sm uppercase tracking-widest mb-5">
                <Clock3 size={16} />
                Development Status
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                Prototype today. Platform tomorrow.
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                SafeWork is being developed progressively. This distinction
                keeps the prototype transparent about what is currently
                demonstrated and what remains part of the proposed system.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-green-200 bg-green-50 p-8">
                <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center mb-5">
                  <Check size={22} />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-4">
                  Demonstrated
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Interactive warehouse scenario</li>
                  <li>• Hazard identification</li>
                  <li>• Immediate feedback</li>
                  <li>• Scenario progress</li>
                  <li>• Replay functionality</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-8">
                <div className="w-11 h-11 rounded-full bg-brand-cyan text-white flex items-center justify-center mb-5">
                  <LayoutDashboard size={21} />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-4">
                  Proposed
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Role-based access</li>
                  <li>• Training modules</li>
                  <li>• Assessments</li>
                  <li>• Persistent progress tracking</li>
                  <li>• Administration and reporting</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-full rounded-2xl border border-brand-yellow/30 bg-brand-yellow/5 p-8">
                <div className="w-11 h-11 rounded-full bg-brand-yellow text-industrial-black flex items-center justify-center mb-5">
                  <ArrowRight size={21} />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-4">
                  Future Direction
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Expanded scenario library</li>
                  <li>• Advanced reporting</li>
                  <li>• Site-specific content</li>
                  <li>• Wider system integration</li>
                  <li>• Future VR extensibility</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="py-24 bg-industrial-light">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-industrial-black">
                Frequently Asked Questions
              </h2>

              <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full" />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <FadeIn key={faq.question} delay={index * 0.1}>
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-5 p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-cyan transition-colors ${
                        isOpen ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <span className="font-bold text-lg text-industrial-black">
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-brand-cyan text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <ChevronDown size={20} aria-hidden="true" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="p-6 pt-0 text-gray-600 bg-gray-50 leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}