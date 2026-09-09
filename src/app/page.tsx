"use client";

import { useState } from "react";
import {
  ShieldAlert,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  X,
  PlayCircle,
  Calculator,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { ScenarioPreview } from "@/components/ScenarioPreview";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Illustrative calculator inputs.
  // This is a planning aid, not a guaranteed financial forecast.
  const [employees, setEmployees] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(20);
  const [hoursSaved, setHoursSaved] = useState(2);

  const estimatedSaving = employees * hourlyRate * hoursSaved;

  const handleHeroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Prototype enquiry confirmation */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-black/80 backdrop-blur-md">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative border border-brand-cyan/20">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close confirmation"
              className="absolute top-4 right-4 text-gray-400 hover:text-industrial-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>

            <h3 className="text-3xl font-heading font-bold text-industrial-black mb-3">
              Enquiry Captured
            </h3>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              This academic prototype currently demonstrates the enquiry
              interaction locally. A production version could connect this form
              to a secure backend service.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full py-4 bg-brand-cyan text-industrial-black font-bold rounded uppercase tracking-widest hover:bg-brand-cyan-dark transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')",
        }}
      >
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-industrial-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/90 via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 mt-16 pb-32">
          <div className="flex-1 text-left text-white">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
                SafeTech Solutions • Academic Prototype
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-tight uppercase">
                Safety Training
                <br />
                Built for the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">
                  Real World.
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed border-l-4 border-brand-cyan pl-5 bg-industrial-black/30 py-4 pr-4 rounded-r-lg">
                SafeWork is an interactive health and safety training concept
                designed around logistics and warehouse scenarios.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/solution"
                  className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-cyan text-industrial-black font-bold rounded-full hover:bg-brand-cyan-dark transition-all uppercase tracking-wider text-sm group"
                >
                  Explore SafeWork
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <a
                  href="#scenario-preview"
                  className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/30 uppercase tracking-wider text-sm group"
                >
                  <PlayCircle
                    size={20}
                    className="text-brand-yellow group-hover:scale-110 transition-transform"
                  />
                  Try It Yourself
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Enquiry Prototype */}
          <div className="lg:w-[420px] w-full mt-8 lg:mt-0">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-1 mx-auto max-w-md">
                <div className="bg-white rounded-xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-cyan to-brand-yellow" />

                  <h3 className="text-3xl font-bold font-heading mb-2 text-industrial-black">
                    Request Information
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 font-medium">
                    Explore the SafeWork training concept.
                  </p>

                  <form className="space-y-4" onSubmit={handleHeroSubmit}>
                    <div>
                      <label
                        htmlFor="hero-name"
                        className="sr-only"
                      >
                        Your name
                      </label>
                      <input
                        id="hero-name"
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hero-phone"
                        className="sr-only"
                      >
                        Phone number
                      </label>
                      <input
                        id="hero-phone"
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="block w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-bold rounded-lg uppercase tracking-widest hover:brightness-110 transition-all mt-4"
                    >
                      Submit Enquiry
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <span className="text-xs text-gray-500">
                      Prototype interaction • No external submission yet
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Project status bar */}
        <div className="absolute bottom-0 left-0 w-full bg-industrial-black/85 backdrop-blur-md border-t border-white/10 z-20 hidden md:block">
          <div className="container mx-auto px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-3 gap-4 md:gap-8 py-6 text-white text-center divide-x divide-white/10">
              <StaggerItem className="px-2">
                <div className="flex justify-center mb-2">
                  <BookOpen className="text-brand-cyan" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Interactive Training Concept
                </div>
              </StaggerItem>

              <StaggerItem className="px-2">
                <div className="flex justify-center mb-2">
                  <ShieldAlert className="text-brand-yellow" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Safety Scenario Focus
                </div>
              </StaggerItem>

              <StaggerItem className="px-2">
                <div className="flex justify-center mb-2">
                  <LayoutDashboard className="text-brand-cyan" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Web Prototype
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Real interactive scenario — not a mock-up */}
      <section id="scenario-preview" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="text-sm font-bold text-brand-cyan uppercase tracking-widest">
                Working prototype
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mt-3 mb-5">
                This Part Actually Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Below is a real, functioning piece of the SafeWork training
                loop — not a screenshot or a video placeholder. Tap the
                loading bay to find three hazards and see the feedback the
                full system would give a trainee.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-xl mx-auto">
              <ScenarioPreview />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who is SafeWork for? */}
      <section className="py-16 md:py-20 bg-industrial-light border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn direction="up">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-sm font-bold text-brand-cyan uppercase tracking-widest">
                User-focused design
              </span>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mt-3">
                Designed Around the Training Journey
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto mt-5">
                SafeWork focuses on clear interactions, understandable
                navigation and role-relevant training information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <Users className="text-brand-cyan mb-5" size={34} />
                <h3 className="text-xl font-bold font-heading text-industrial-black mb-3">
                  Warehouse Operatives
                </h3>
                <p className="text-gray-600">
                  Primary learners who interact with training scenarios and
                  safety decisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <TrendingUp className="text-brand-yellow mb-5" size={34} />
                <h3 className="text-xl font-bold font-heading text-industrial-black mb-3">
                  Supervisors
                </h3>
                <p className="text-gray-600">
                  Users who may need to review training progress and support
                  operational safety activities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <LayoutDashboard className="text-brand-cyan mb-5" size={34} />
                <h3 className="text-xl font-bold font-heading text-industrial-black mb-3">
                  Administrators
                </h3>
                <p className="text-gray-600">
                  Future system users who could manage training content,
                  permissions and reporting.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Illustrative calculator */}
      <section className="py-24 bg-industrial-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-sm font-bold tracking-widest uppercase mb-6">
                <Calculator size={16} />
                Planning Calculator
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Explore an Illustrative Saving
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Adjust the values to explore a simple example of how training
                time could translate into an estimated labour-value saving.
              </p>
            </div>
          </FadeIn>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">
                      Number of Employees
                    </label>
                    <span className="text-brand-cyan font-bold">
                      {employees}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={employees}
                    onChange={(e) =>
                      setEmployees(Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    aria-label="Number of employees"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">
                      Illustrative Hourly Rate (£)
                    </label>
                    <span className="text-brand-cyan font-bold">
                      £{hourlyRate}/hr
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    aria-label="Illustrative hourly rate"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-gray-300">
                      Hours Saved per Employee
                    </label>
                    <span className="text-brand-cyan font-bold">
                      {hoursSaved} hrs
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={hoursSaved}
                    onChange={(e) =>
                      setHoursSaved(Number(e.target.value))
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    aria-label="Hours saved per employee"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-cyan/20 to-brand-cyan-dark/20 p-8 rounded-2xl border border-brand-cyan/30 text-center">
                <h4 className="text-gray-300 font-bold tracking-widest uppercase mb-4">
                  Illustrative Value
                </h4>

                <div className="text-5xl md:text-7xl font-heading font-bold text-white mb-2">
                  £{estimatedSaving.toLocaleString()}
                </div>

                <p className="text-brand-yellow font-medium mt-4">
                  Example calculation based only on the values entered above.
                </p>

                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                  This calculator is an educational prototype feature and does
                  not represent a guaranteed business saving or financial
                  forecast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn direction="left">
                <span className="text-sm font-bold text-brand-cyan uppercase tracking-widest">
                  The design problem
                </span>

                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-industrial-black leading-tight mt-3">
                  Make Safety Training
                  <span className="text-gray-400">
                    {" "}
                    More Engaging.
                  </span>
                </h2>

                <div className="w-20 h-2 bg-gradient-to-r from-brand-cyan to-brand-yellow mb-8 rounded-full" />

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Traditional training materials can make it difficult to
                  create an engaging experience where learners actively
                  identify hazards and make safety decisions.
                </p>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-industrial-black">
                  SafeWork explores an interactive approach using scenario-based
                  training, clear interface design and immediate feedback.
                </p>

                <Link
                  href="/solution"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-industrial-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors group"
                >
                  See the SafeWork concept
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform text-brand-cyan"
                  />
                </Link>
              </FadeIn>
            </div>

            <div className="lg:w-1/2 relative group w-full">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-industrial-gray p-8 md:p-12 rounded-2xl text-white relative z-10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert className="text-brand-yellow" size={36} />
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                      SafeWork Prototype
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight">
                    Learn Through Interaction
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Users can explore a safety scenario, identify hazards and
                    receive immediate feedback on their decisions.
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="font-bold text-white">
                        SafeTech Solutions
                      </p>
                      <p className="text-sm text-brand-cyan">
                        CET257 Enterprise Project
                      </p>
                    </div>

                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center px-6 py-2 bg-white/10 rounded-full font-bold text-sm hover:bg-white/20 transition-all border border-white/20 text-brand-yellow"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Project status */}
      <section className="py-16 bg-industrial-light border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-5">
              Prototype Status
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-industrial-black mb-5">
              Developed as an Academic Prototype
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              SafeWork is being developed as an interactive training prototype
              for the CET257 Enterprise Project. Some capabilities shown on the
              site represent planned future development rather than completed
              production functionality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom brand strip */}
      <div className="w-full h-3 flex mt-auto">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${
              i % 2 === 0 ? "bg-brand-cyan" : "bg-industrial-black"
            }`}
          />
        ))}
      </div>
    </div>
  );
}