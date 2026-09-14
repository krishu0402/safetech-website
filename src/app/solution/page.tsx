"use client";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

export default function SolutionPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative bg-industrial-black text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="up">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-sm font-bold uppercase tracking-widest mb-7">
                <ShieldCheck size={16} aria-hidden="true" />
                SafeWork Solution
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-7">
                Interactive safety training for{" "}
                <span className="text-brand-cyan">
                  modern workplaces.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
                SafeWork is an interactive health and safety training concept
                designed for logistics and warehousing environments. It brings
                together structured learning, workplace scenarios, assessments
                and feedback to create a more engaging training experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow text-industrial-black font-bold hover:brightness-95 transition-all"
                >
                  Discuss SafeWork
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                >
                  About SafeTech
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          WHAT IS SAFEWORK
      ========================================================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">
                  The SafeWork approach
                </p>

                <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black leading-tight mb-6">
                  Move safety training from passive learning to active
                  participation.
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  SafeWork is designed to make workplace health and safety
                  training more interactive and relevant to employees working
                  in logistics and warehousing environments.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  The concept combines training content with interactive
                  activities, scenario-based learning, assessment and
                  feedback. This gives users opportunities to recognise
                  hazards, make decisions and understand why safe workplace
                  practices matter.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-industrial-light rounded-3xl border border-gray-200 p-7 md:p-9">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureStat
                    icon={<BookOpen size={22} aria-hidden="true" />}
                    title="Learning"
                    text="Structured safety content"
                  />

                  <FeatureStat
                    icon={<Layers3 size={22} aria-hidden="true" />}
                    title="Scenarios"
                    text="Interactive workplace situations"
                  />

                  <FeatureStat
                    icon={<ClipboardCheck size={22} aria-hidden="true" />}
                    title="Assessment"
                    text="Knowledge and decision checks"
                  />

                  <FeatureStat
                    icon={<BarChart3 size={22} aria-hidden="true" />}
                    title="Progress"
                    text="Training progress and results"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="py-20 md:py-24 bg-industrial-light">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn>
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">
                How SafeWork works
              </p>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                A structured training journey
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                SafeWork is organised around a clear learning journey that
                guides users from safety information through practical
                interaction and assessment.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProcessCard
              number="01"
              icon={<Users size={21} aria-hidden="true" />}
              title="Access"
              text="Users access the training content that is relevant to their role and learning requirements."
            />

            <ProcessCard
              number="02"
              icon={<BookOpen size={21} aria-hidden="true" />}
              title="Learn"
              text="Training modules introduce important health and safety concepts relevant to the workplace."
            />

            <ProcessCard
              number="03"
              icon={<Zap size={21} aria-hidden="true" />}
              title="Interact"
              text="Users engage with workplace situations and identify potential hazards or safety concerns."
            />

            <ProcessCard
              number="04"
              icon={<ClipboardCheck size={21} aria-hidden="true" />}
              title="Assess"
              text="Quizzes and decision-based activities provide opportunities to check understanding."
            />

            <ProcessCard
              number="05"
              icon={<CheckCircle2 size={21} aria-hidden="true" />}
              title="Receive feedback"
              text="Immediate feedback helps users understand why a decision or answer is appropriate."
            />

            <ProcessCard
              number="06"
              icon={<BarChart3 size={21} aria-hidden="true" />}
              title="Track progress"
              text="The proposed system can support progress and assessment information for appropriate users."
            />
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          CORE CAPABILITIES
      ========================================================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">
                Core capabilities
              </p>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                Built around the needs of safety training
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                The SafeWork concept brings together the key functions
                identified during the requirements and solution design
                process.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard
              icon={<ShieldCheck size={23} aria-hidden="true" />}
              title="Safety Fundamentals"
              text="Structured training content covering essential workplace health and safety principles."
            />

            <ModuleCard
              icon={<Layers3 size={23} aria-hidden="true" />}
              title="Interactive Scenarios"
              text="Scenario-based activities that allow users to engage with workplace safety situations."
            />

            <ModuleCard
              icon={<ClipboardCheck size={23} aria-hidden="true" />}
              title="Assessments"
              text="Quizzes and decision activities designed to check understanding of safety content."
            />

            <ModuleCard
              icon={<CheckCircle2 size={23} aria-hidden="true" />}
              title="Feedback"
              text="Clear feedback helps learners understand the reasoning behind safety decisions."
            />

            <ModuleCard
              icon={<BarChart3 size={23} aria-hidden="true" />}
              title="Progress Tracking"
              text="The proposed system can support learner progress and assessment records."
            />

            <ModuleCard
              icon={<GraduationCap size={23} aria-hidden="true" />}
              title="Training Completion"
              text="Completion and certification functionality can support structured training journeys."
            />
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          USERS
      ========================================================== */}
      <section className="py-20 md:py-24 bg-industrial-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="left">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">
                  Designed for different users
                </p>

                <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
                  One solution with different responsibilities.
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  SafeWork is designed to support both people completing
                  training and those responsible for managing or delivering
                  safety learning.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-5">
              <UserCard
                icon={<Users size={22} aria-hidden="true" />}
                title="Trainees and workers"
                text="Access training, complete activities, identify hazards, complete assessments and receive feedback."
              />

              <UserCard
                icon={<BookOpen size={22} aria-hidden="true" />}
                title="Trainers and administrators"
                text="The proposed management functionality can support training content, assessment information and learner progress."
              />
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT AND FUTURE
      ========================================================== */}
      <section className="py-20 md:py-24 bg-industrial-light">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">
                  Development direction
                </p>

                <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                  Designed to grow beyond the initial solution
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  SafeWork distinguishes the interactive training experience
                  demonstrated in the current solution from functionality that
                  can be developed further.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn direction="left">
                <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full">
                  <div className="inline-flex px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-5">
                    Current focus
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-industrial-black mb-5">
                    Interactive training experience
                  </h3>

                  <ul className="space-y-3">
                    <StatusItem text="Safety-focused user experience" />
                    <StatusItem text="Interactive workplace scenarios" />
                    <StatusItem text="Hazard identification activities" />
                    <StatusItem text="Assessment and feedback concepts" />
                    <StatusItem text="Responsive web interface" />
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-industrial-black text-white rounded-2xl border border-gray-800 p-7 h-full">
                  <div className="inline-flex px-3 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-5">
                    Future direction
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-5">
                    Expanded training platform
                  </h3>

                  <ul className="space-y-3">
                    <StatusItem
                      text="Expanded learner progress and reporting"
                      dark
                    />

                    <StatusItem
                      text="Content management functionality"
                      dark
                    />

                    <StatusItem
                      text="Notifications and training administration"
                      dark
                    />

                    <StatusItem
                      text="Additional interactive scenarios"
                      dark
                    />

                    <StatusItem
                      text="Future extensibility toward immersive technologies"
                      dark
                    />
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn direction="up">
            <div className="relative overflow-hidden rounded-3xl bg-brand-cyan p-8 md:p-14 text-industrial-black">
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">
                  SafeTech Solutions
                </p>

                <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-5">
                  Explore the SafeWork solution.
                </h2>

                <p className="text-industrial-black/70 text-lg leading-relaxed mb-8 max-w-2xl">
                  Learn more about SafeTech Solutions and get in touch to
                  discuss the SafeWork training concept.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-industrial-black text-white font-bold hover:bg-gray-900 transition-all"
                >
                  Contact SafeTech
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   FEATURE STAT
============================================================= */

function FeatureStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-heading font-bold text-industrial-black mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}

/* =============================================================
   PROCESS CARD
============================================================= */

function ProcessCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <StaggerItem>
      <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
            {icon}
          </div>

          <span className="text-sm font-heading font-bold text-gray-300">
            {number}
          </span>
        </div>

        <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </StaggerItem>
  );
}

/* =============================================================
   MODULE CARD
============================================================= */

function ModuleCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <StaggerItem>
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 hover:border-brand-cyan/40 hover:shadow-lg transition-all">
        <div className="w-12 h-12 rounded-xl bg-industrial-black text-brand-yellow flex items-center justify-center mb-5">
          {icon}
        </div>

        <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </StaggerItem>
  );
}

/* =============================================================
   USER CARD
============================================================= */

function UserCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <StaggerItem>
      <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>

          <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </StaggerItem>
  );
}

/* =============================================================
   STATUS ITEM
============================================================= */

function StatusItem({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2
        size={18}
        className={`shrink-0 mt-0.5 ${
          dark ? "text-brand-yellow" : "text-brand-cyan"
        }`}
        aria-hidden="true"
      />

      <span
        className={`text-sm leading-relaxed ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {text}
      </span>
    </li>
  );
}