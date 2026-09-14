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
  Target,
  MessageCircle,
  BarChart3,
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

  /*
   * Illustrative calculator inputs.
   * This is a planning/educational aid only and is not
   * a guaranteed financial forecast.
   */
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

      {/* =========================================================
          PROTOTYPE ENQUIRY CONFIRMATION
      ========================================================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-industrial-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-brand-cyan/20 bg-white p-8 text-center shadow-2xl">

            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close enquiry confirmation"
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-industrial-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <X size={24} />
            </button>

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CheckCircle size={40} />
            </div>

            <h2
              id="enquiry-title"
              className="mb-3 text-3xl font-heading font-bold text-industrial-black"
            >
              Enquiry Captured
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              This academic prototype currently demonstrates the enquiry
              interaction locally. A production version could connect the
              form to a secure backend service.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="w-full rounded uppercase bg-brand-cyan py-4 font-bold tracking-widest text-industrial-black transition-all hover:bg-brand-cyan-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative flex min-h-[90vh] flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')",
        }}
        aria-labelledby="hero-heading"
      >
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-industrial-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/90 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 pb-32 pt-16 md:px-6 lg:flex-row">

          {/* Hero content */}
          <div className="flex-1 text-left text-white">

            <FadeIn direction="left">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-brand-yellow"
                  aria-hidden="true"
                />

                SafeTech Solutions • Academic Prototype
              </div>

              <h1
                id="hero-heading"
                className="mb-6 text-5xl font-heading font-bold uppercase leading-tight tracking-tight md:text-7xl lg:text-8xl"
              >
                Safety Training
                <br />
                Built for the
                <br />
                <span className="bg-gradient-to-r from-brand-cyan to-brand-yellow bg-clip-text text-transparent">
                  Real World.
                </span>
              </h1>

              <p className="mb-8 max-w-lg rounded-r-lg border-l-4 border-brand-cyan bg-industrial-black/30 py-4 pl-5 pr-4 text-xl leading-relaxed text-gray-300">
                SafeWork is an interactive health and safety training system
                designed around practical logistics and warehousing scenarios,
                with a focus on hazard awareness, decision-making and feedback.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">

                <Link
                  href="/solution"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-cyan px-8 py-4 text-sm font-bold uppercase tracking-wider text-industrial-black transition-all hover:bg-brand-cyan-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-industrial-black"
                >
                  Explore SafeWork

                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#scenario-preview"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <PlayCircle
                    size={20}
                    className="text-brand-yellow transition-transform group-hover:scale-110"
                  />

                  Try It Yourself
                </a>

              </div>

            </FadeIn>

          </div>

          {/* =====================================================
              ENQUIRY PROTOTYPE
          ===================================================== */}
          <div className="mt-8 w-full lg:mt-0 lg:w-[420px]">

            <FadeIn direction="right" delay={0.2}>

              <div className="mx-auto max-w-md rounded-2xl bg-white/10 p-1 backdrop-blur-xl">

                <div className="relative overflow-hidden rounded-xl bg-white p-6 md:p-8">

                  <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-brand-cyan to-brand-yellow" />

                  <h2 className="mb-2 text-3xl font-heading font-bold text-industrial-black">
                    Request Information
                  </h2>

                  <p className="mb-6 text-sm font-medium text-gray-500">
                    Explore the SafeWork training concept.
                  </p>

                  <form
                    className="space-y-4"
                    onSubmit={handleHeroSubmit}
                  >

                    <div>
                      <label
                        htmlFor="hero-name"
                        className="sr-only"
                      >
                        Your name
                      </label>

                      <input
                        id="hero-name"
                        name="name"
                        required
                        type="text"
                        placeholder="Your Name"
                        autoComplete="name"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/30"
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
                        name="phone"
                        required
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all focus:border-brand-cyan focus:bg-white focus:ring-2 focus:ring-brand-cyan/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 block w-full rounded-lg bg-gradient-to-r from-brand-cyan to-brand-cyan-dark py-4 font-bold uppercase tracking-widest text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                    >
                      Submit Enquiry
                    </button>

                  </form>

                  <div className="mt-6 border-t border-gray-100 pt-6 text-center">
                    <span className="text-xs text-gray-500">
                      Prototype interaction • No external submission yet
                    </span>
                  </div>

                </div>

              </div>

            </FadeIn>

          </div>
        </div>

        {/* =====================================================
            HERO PROJECT STATUS BAR
        ===================================================== */}
        <div className="absolute bottom-0 left-0 z-20 hidden w-full border-t border-white/10 bg-industrial-black/85 backdrop-blur-md md:block">

          <div className="container mx-auto px-4 md:px-6">

            <StaggerContainer className="grid grid-cols-3 divide-x divide-white/10 py-6 text-center text-white">

              <StaggerItem className="px-2">

                <div className="mb-2 flex justify-center">
                  <BookOpen
                    className="text-brand-cyan"
                    aria-hidden="true"
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Interactive Training
                </div>

              </StaggerItem>

              <StaggerItem className="px-2">

                <div className="mb-2 flex justify-center">
                  <ShieldAlert
                    className="text-brand-yellow"
                    aria-hidden="true"
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Safety Scenarios
                </div>

              </StaggerItem>

              <StaggerItem className="px-2">

                <div className="mb-2 flex justify-center">
                  <LayoutDashboard
                    className="text-brand-cyan"
                    aria-hidden="true"
                  />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Web Prototype
                </div>

              </StaggerItem>

            </StaggerContainer>

          </div>
        </div>

      </section>

      {/* =========================================================
          INTERACTIVE SAFEWORK PREVIEW
      ========================================================= */}
      <section
        id="scenario-preview"
        className="scroll-mt-20 bg-white py-24"
        aria-labelledby="scenario-heading"
      >

        <div className="container mx-auto max-w-5xl px-4 md:px-6">

          <FadeIn direction="up">

            <div className="mb-12 text-center">

              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                Interactive product preview
              </span>

              <h2
                id="scenario-heading"
                className="mt-3 mb-5 text-3xl font-heading font-bold text-industrial-black md:text-5xl"
              >
                Experience SafeWork
              </h2>

              <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
                Explore a working example of the SafeWork training approach.
                Identify hazards within a warehouse scenario and receive
                immediate feedback on your decisions.
              </p>

            </div>

          </FadeIn>

          <FadeIn delay={0.15}>

            <div className="mx-auto max-w-xl">

              <ScenarioPreview />

            </div>

          </FadeIn>

          <FadeIn delay={0.25}>

            <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
              Promotional prototype preview. This demonstration illustrates
              the SafeWork interaction concept and does not replace formal
              workplace safety procedures or site-specific training.
            </p>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          WHO IS SAFEWORK FOR?
      ========================================================= */}
      <section
        className="border-b border-gray-200 bg-industrial-light py-16 md:py-20"
        aria-labelledby="users-heading"
      >

        <div className="container mx-auto max-w-6xl px-4 md:px-6">

          <FadeIn direction="up">

            <div className="mb-10 text-center md:mb-12">

              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                User-focused design
              </span>

              <h2
                id="users-heading"
                className="mt-3 text-3xl font-heading font-bold text-industrial-black md:text-5xl"
              >
                Designed Around the Training Journey
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
                SafeWork focuses on clear interactions, understandable
                navigation and role-relevant training information.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {/* Trainee */}
              <article className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <Users
                  className="mb-5 text-brand-cyan"
                  size={34}
                  aria-hidden="true"
                />

                <h3 className="mb-3 text-xl font-heading font-bold text-industrial-black">
                  Trainees / Workers
                </h3>

                <p className="leading-relaxed text-gray-600">
                  Primary learners who interact with training scenarios,
                  identify hazards and make safety-related decisions.
                </p>

              </article>

              {/* Trainer */}
              <article className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <TrendingUp
                  className="mb-5 text-brand-yellow"
                  size={34}
                  aria-hidden="true"
                />

                <h3 className="mb-3 text-xl font-heading font-bold text-industrial-black">
                  Trainers
                </h3>

                <p className="leading-relaxed text-gray-600">
                  Training staff who can support learning activities,
                  review outcomes and contribute to training management.
                </p>

              </article>

              {/* Administrator */}
              <article className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                <LayoutDashboard
                  className="mb-5 text-brand-cyan"
                  size={34}
                  aria-hidden="true"
                />

                <h3 className="mb-3 text-xl font-heading font-bold text-industrial-black">
                  Administrators
                </h3>

                <p className="leading-relaxed text-gray-600">
                  Users who can support training content, user management,
                  permissions and reporting in the wider SafeWork system.
                </p>

              </article>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          ILLUSTRATIVE TRAINING VALUE CALCULATOR
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-industrial-black py-24 text-white"
        aria-labelledby="calculator-heading"
      >

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-cyan/10 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 md:px-6">

          <FadeIn>

            <div className="mb-16 text-center">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-yellow">

                <Calculator size={16} aria-hidden="true" />

                Planning Calculator

              </div>

              <h2
                id="calculator-heading"
                className="mb-6 text-3xl font-heading font-bold md:text-5xl"
              >
                Explore an Illustrative Training Value
              </h2>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
                Adjust the values to explore a simple example of how
                training-time efficiency could translate into an
                illustrative labour-value calculation.
              </p>

            </div>

          </FadeIn>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-12">

            <div className="grid items-center gap-12 md:grid-cols-2">

              {/* Inputs */}
              <div className="space-y-8">

                {/* Employees */}
                <div>

                  <div className="mb-2 flex justify-between gap-4">

                    <label
                      htmlFor="employees"
                      className="font-bold text-gray-300"
                    >
                      Number of Employees
                    </label>

                    <span className="font-bold text-brand-cyan">
                      {employees}
                    </span>

                  </div>

                  <input
                    id="employees"
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={employees}
                    onChange={(e) =>
                      setEmployees(Number(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-brand-cyan"
                    aria-label="Number of employees"
                  />

                </div>

                {/* Hourly rate */}
                <div>

                  <div className="mb-2 flex justify-between gap-4">

                    <label
                      htmlFor="hourly-rate"
                      className="font-bold text-gray-300"
                    >
                      Illustrative Hourly Rate (£)
                    </label>

                    <span className="font-bold text-brand-cyan">
                      £{hourlyRate}/hr
                    </span>

                  </div>

                  <input
                    id="hourly-rate"
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(Number(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-brand-cyan"
                    aria-label="Illustrative hourly rate"
                  />

                </div>

                {/* Hours saved */}
                <div>

                  <div className="mb-2 flex justify-between gap-4">

                    <label
                      htmlFor="hours-saved"
                      className="font-bold text-gray-300"
                    >
                      Illustrative Hours Saved
                    </label>

                    <span className="font-bold text-brand-cyan">
                      {hoursSaved} hrs
                    </span>

                  </div>

                  <input
                    id="hours-saved"
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={hoursSaved}
                    onChange={(e) =>
                      setHoursSaved(Number(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-brand-cyan"
                    aria-label="Illustrative hours saved per employee"
                  />

                </div>

              </div>

              {/* Result */}
              <div className="rounded-2xl border border-brand-cyan/30 bg-gradient-to-br from-brand-cyan/20 to-brand-cyan-dark/20 p-8 text-center">

                <h3 className="mb-4 font-bold uppercase tracking-widest text-gray-300">
                  Illustrative Calculation
                </h3>

                <div
                  className="mb-2 text-5xl font-heading font-bold text-white md:text-7xl"
                  aria-live="polite"
                >
                  £{estimatedSaving.toLocaleString()}
                </div>

                <p className="mt-4 font-medium text-brand-yellow">
                  Example calculation based only on the values entered above.
                </p>

                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  This calculator is an educational prototype feature.
                  It does not represent a guaranteed business saving,
                  ROI figure or financial forecast.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROBLEM / SOLUTION
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-white py-24"
        aria-labelledby="challenge-heading"
      >

        <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">

          <div className="flex flex-col items-center gap-16 lg:flex-row">

            {/* Problem */}
            <div className="lg:w-1/2">

              <FadeIn direction="left">

                <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                  The safety training challenge
                </span>

                <h2
                  id="challenge-heading"
                  className="mb-6 mt-3 text-3xl font-heading font-bold leading-tight text-industrial-black md:text-5xl"
                >
                  Make Safety Training
                  <span className="text-gray-400">
                    {" "}
                    More Engaging.
                  </span>
                </h2>

                <div className="mb-8 h-2 w-20 rounded-full bg-gradient-to-r from-brand-cyan to-brand-yellow" />

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  Traditional training materials can make it difficult
                  to create an engaging experience where learners actively
                  identify hazards and consider appropriate safety decisions.
                </p>

                <p className="mb-10 rounded-lg border-l-4 border-industrial-black bg-gray-50 p-6 text-lg leading-relaxed text-gray-700">
                  SafeWork explores an interactive approach using
                  scenario-based training, clear interface design and
                  immediate feedback.
                </p>

                <Link
                  href="/solution"
                  className="group inline-flex items-center gap-3 rounded-full bg-industrial-black px-8 py-4 font-bold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  See the SafeWork Concept

                  <ArrowRight
                    size={20}
                    className="text-brand-cyan transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </FadeIn>

            </div>

            {/* Solution */}
            <div className="relative w-full lg:w-1/2">

              <FadeIn direction="right" delay={0.2}>

                <div className="relative z-10 rounded-2xl bg-industrial-gray p-8 text-white shadow-2xl md:p-12">

                  <div className="mb-6 flex items-center gap-3">

                    <ShieldAlert
                      className="text-brand-yellow"
                      size={36}
                      aria-hidden="true"
                    />

                    <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                      SafeWork Product Concept
                    </span>

                  </div>

                  <h3 className="mb-4 text-2xl font-heading font-bold leading-tight md:text-3xl">
                    Learn Through Interaction
                  </h3>

                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    Users can explore a safety scenario, identify hazards
                    and receive immediate feedback on their decisions.
                  </p>

                  <div className="space-y-4 border-t border-white/10 pt-6">

                    {[
                      {
                        icon: Target,
                        text: "Identify workplace hazards",
                      },
                      {
                        icon: MessageCircle,
                        text: "Receive immediate feedback",
                      },
                      {
                        icon: BarChart3,
                        text: "Review learning progress",
                      },
                    ].map((item) => {

                      const Icon = item.icon;

                      return (
                        <div
                          key={item.text}
                          className="flex items-center gap-4"
                        >

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">

                            <Icon
                              size={19}
                              className="text-brand-cyan"
                              aria-hidden="true"
                            />

                          </div>

                          <p className="font-medium text-gray-200">
                            {item.text}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                  <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="font-bold text-white">
                        SafeTech Solutions
                      </p>

                     <p className="text-sm text-brand-cyan">
                        Interactive Health & Safety Training
                     </p>

                    </div>

                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-bold text-brand-yellow transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
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

      {/* =========================================================
          HOW SAFEWORK WORKS
      ========================================================= */}
      <section
        className="bg-industrial-light py-24"
        aria-labelledby="journey-heading"
      >

        <div className="container mx-auto max-w-6xl px-4 md:px-6">

          <FadeIn direction="up">

            <div className="mb-14 text-center">

              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                Training journey
              </span>

              <h2
                id="journey-heading"
                className="mt-3 text-3xl font-heading font-bold text-industrial-black md:text-5xl"
              >
                How SafeWork Works
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
                SafeWork follows a clear learning journey from selecting
                training through scenario interaction, feedback and
                progress review.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Select Training",
                  description:
                    "Choose the relevant safety learning activity.",
                },
                {
                  number: "02",
                  title: "Explore the Scenario",
                  description:
                    "Enter a practical workplace situation and understand the context.",
                },
                {
                  number: "03",
                  title: "Identify Hazards",
                  description:
                    "Recognise potential hazards within the scenario.",
                },
                {
                  number: "04",
                  title: "Make a Decision",
                  description:
                    "Choose the response you believe is safest.",
                },
                {
                  number: "05",
                  title: "Receive Feedback",
                  description:
                    "Understand the outcome of the selected response.",
                },
                {
                  number: "06",
                  title: "Review Progress",
                  description:
                    "Use completion and learning information to support continued development.",
                },
              ].map((step) => (

                <article
                  key={step.number}
                  className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <span className="text-sm font-bold text-brand-cyan">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-heading font-bold text-industrial-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                </article>

              ))}

            </div>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          TRAINING MODULES
      ========================================================= */}
      <section
        className="bg-white py-24"
        aria-labelledby="modules-heading"
      >

        <div className="container mx-auto max-w-6xl px-4 md:px-6">

          <FadeIn direction="up">

            <div className="mb-14 text-center">

              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                Training areas
              </span>

              <h2
                id="modules-heading"
                className="mt-3 text-3xl font-heading font-bold text-industrial-black md:text-5xl"
              >
                Explore Key Safety Topics
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
                SafeWork can support focused learning experiences around
                safety themes relevant to logistics and warehousing.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {[
                {
                  title: "Forklift Safety",
                  description:
                    "Explore awareness of hazards associated with forklift operations and warehouse movement.",
                },
                {
                  title: "Manual Handling",
                  description:
                    "Develop awareness of safer approaches to lifting, movement and handling activities.",
                },
                {
                  title: "Personal Protective Equipment",
                  description:
                    "Understand the importance of appropriate PPE selection and workplace use.",
                },
                {
                  title: "Fire Safety",
                  description:
                    "Explore fire-related hazards and appropriate responses in workplace scenarios.",
                },
              ].map((module) => (

                <article
                  key={module.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-industrial-black text-brand-cyan">

                    <ShieldAlert
                      size={22}
                      aria-hidden="true"
                    />

                  </div>

                  <h3 className="text-xl font-heading font-bold text-industrial-black">
                    {module.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {module.description}
                  </p>

                </article>

              ))}

            </div>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          PROJECT STATUS
      ========================================================= */}
      <section
        className="border-t border-gray-200 bg-industrial-light py-20"
        aria-labelledby="status-heading"
      >

        <div className="container mx-auto max-w-5xl px-4 md:px-6">

          <FadeIn>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">

              <div className="text-center">

                <span className="mb-5 inline-flex items-center rounded-full bg-brand-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-cyan">
                  Prototype Status
                </span>

                <h2
                  id="status-heading"
                  className="mb-5 text-3xl font-heading font-bold text-industrial-black md:text-4xl"
                >
                  Developed as an Academic Prototype
                </h2>

                <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
                  SafeWork is being developed as an interactive health and
                  safety training system for the CET257 Enterprise Project.
                  This promotional website presents the product concept and
                  selected interactive experiences.
                </p>

              </div>

              {/* Project identity */}
              <div className="mt-10 grid gap-6 border-t border-gray-200 pt-10 sm:grid-cols-2">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Company
                  </p>

                  <p className="mt-2 font-heading font-bold text-industrial-black">
                    SafeTech Solutions
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Product
                  </p>

                  <p className="mt-2 font-heading font-bold text-industrial-black">
                    SafeWork
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Target Sector
                  </p>

                  <p className="mt-2 font-heading font-bold text-industrial-black">
                    Logistics &amp; Warehousing
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Industry
                  </p>

                  <p className="mt-2 font-heading font-bold text-industrial-black">
                    Automotive
                  </p>
                </div>

              </div>

              {/* Current focus */}
              <div className="mt-10 border-t border-gray-200 pt-10">

                <h3 className="font-heading text-xl font-bold text-industrial-black">
                  Current Development Focus
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {[
                    "Interactive safety learning",
                    "Scenario-based activities",
                    "Hazard identification",
                    "Knowledge assessment",
                    "Immediate feedback",
                    "Progress tracking concepts",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-brand-cyan"
                        aria-hidden="true"
                      />

                      <span className="text-gray-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Future */}
              <div className="mt-10 border-t border-gray-200 pt-10">

                <h3 className="font-heading text-xl font-bold text-industrial-black">
                  Future Development
                </h3>

                <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
                  Future iterations may extend the system with richer
                  reporting, additional training content, enterprise
                  capabilities and VR-oriented experiences.
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          FINAL CALL TO ACTION
      ========================================================= */}
      <section
        className="bg-industrial-black py-20 text-white"
        aria-labelledby="cta-heading"
      >

        <div className="container mx-auto max-w-5xl px-4 md:px-6">

          <FadeIn direction="up">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center md:p-12">

              <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                Explore the product
              </span>

              <h2
                id="cta-heading"
                className="mt-4 text-3xl font-heading font-bold md:text-5xl"
              >
                See SafeWork in More Detail
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
                Explore the SafeWork concept, understand the training
                approach and experience the interactive prototype preview.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/solution"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-cyan px-7 py-3.5 font-bold text-industrial-black transition-all hover:bg-brand-cyan-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Explore SafeWork

                  <ArrowRight
                    size={19}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Contact SafeTech
                </Link>

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================= */}
      <div
        className="mt-auto flex h-3 w-full"
        aria-hidden="true"
      >

        {[...Array(40)].map((_, i) => (

          <div
            key={i}
            className={`flex-1 ${
              i % 2 === 0
                ? "bg-brand-cyan"
                : "bg-industrial-black"
            }`}
          />

        ))}

      </div>

    </div>
  );
}