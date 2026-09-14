import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const trainingModules = [
  {
    icon: ShieldCheck,
    title: "Hazard Awareness",
    description:
      "Build awareness of common hazards found in logistics and warehouse environments.",
  },
  {
    icon: ClipboardCheck,
    title: "Scenario-Based Learning",
    description:
      "Use realistic workplace situations to help learners recognise hazards and make safer decisions.",
  },
  {
    icon: BookOpen,
    title: "Interactive Training",
    description:
      "Present safety information through clear, practical and engaging learning activities.",
  },
  {
    icon: CheckCircle2,
    title: "Knowledge Assessment",
    description:
      "Use quizzes and decision-based activities to reinforce understanding of safety procedures.",
  },
  {
    icon: Users,
    title: "Learner Progress",
    description:
      "Provide a structured approach for tracking learning progress and completed training.",
  },
  {
    icon: ShieldCheck,
    title: "Trainer Support",
    description:
      "Support administrators and trainers with organised training content and learner information.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Select Training",
    description:
      "Learners access the relevant health and safety training content.",
  },
  {
    number: "02",
    title: "Explore Scenarios",
    description:
      "Interactive workplace situations help learners identify potential risks.",
  },
  {
    number: "03",
    title: "Make Decisions",
    description:
      "Learners respond to safety situations and consider appropriate actions.",
  },
  {
    number: "04",
    title: "Receive Feedback",
    description:
      "Immediate feedback reinforces correct practice and explains potential risks.",
  },
  {
    number: "05",
    title: "Complete Assessment",
    description:
      "Knowledge checks help reinforce the key points covered during training.",
  },
  {
    number: "06",
    title: "Track Progress",
    description:
      "The proposed system provides a structured way to review learner progress.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-industrial-black">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-industrial-black">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-black via-industrial-gray to-industrial-black" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              SafeTech Solutions • SafeWork
            </div>

            <h1 className="font-heading text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              SAFETY TRAINING
              <br />
              BUILT FOR THE
              <br />
              <span className="text-brand-cyan">REAL WORLD.</span>
            </h1>

            <div className="mt-8 max-w-2xl border-l-4 border-brand-cyan pl-6">
              <p className="text-lg leading-8 text-gray-300">
                SafeWork is an interactive health and safety training system
                designed around practical logistics and warehousing scenarios,
                with a focus on hazard awareness, decision-making and feedback.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solution"
                className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-bold text-industrial-black transition-all hover:brightness-95"
              >
                EXPLORE SAFEWORK
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                ABOUT SAFETECH
              </Link>
            </div>
          </div>
        </div>

        {/* Hero feature strip */}
        <div className="relative border-t border-white/10 bg-industrial-black/70">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
            <HeroFeature
              icon={<BookOpen size={20} />}
              title="Interactive Training"
            />

            <HeroFeature
              icon={<ShieldCheck size={20} />}
              title="Safety Scenarios"
            />

            <HeroFeature
              icon={<ClipboardCheck size={20} />}
              title="Structured Assessment"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
                The challenge
              </p>

              <h2 className="font-heading text-4xl font-black leading-tight text-industrial-black sm:text-5xl">
                Safety knowledge needs to work where people work.
              </h2>
            </div>

            <div className="space-y-5 text-gray-600">
              <p className="text-lg leading-8">
                Logistics and warehouse environments involve moving equipment,
                vehicles, storage systems, manual handling and changing
                workplace conditions. Safety training therefore needs to be
                practical, understandable and relevant to everyday situations.
              </p>

              <p className="text-lg leading-8">
                SafeWork is designed around this principle by combining
                structured training content with workplace scenarios,
                assessments and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SAFEWORK SOLUTION
      ========================================================== */}
      <section className="bg-industrial-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
              SafeWork
            </p>

            <h2 className="font-heading text-4xl font-black leading-tight text-industrial-black sm:text-5xl">
              A practical approach to workplace safety training.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SafeWork brings training content, workplace scenarios,
              assessments and learner feedback together in one proposed
              interactive system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingModules.map((module) => (
              <ModuleCard
                key={module.title}
                icon={module.icon}
                title={module.title}
                description={module.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
              How it works
            </p>

            <h2 className="font-heading text-4xl font-black text-industrial-black sm:text-5xl">
              From training to safer decisions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              The proposed SafeWork experience follows a simple learning
              journey designed for warehouse and logistics users.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <WorkflowCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          USERS
      ========================================================== */}
      <section className="bg-industrial-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
                Designed for the workplace
              </p>

              <h2 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl">
                Different users.
                <br />
                One safety experience.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                SafeWork is structured around the needs of learners,
                trainers and administrators involved in workplace safety
                training.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <UserCard
                title="Trainees & Workers"
                description="Access training, explore scenarios and complete assessments."
              />

              <UserCard
                title="Trainers"
                description="Support learning activities and review learner outcomes."
              />

              <UserCard
                title="Administrators"
                description="Manage training content and oversee structured progress information."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT STATUS
      ========================================================== */}
      <section className="bg-brand-cyan py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-industrial-black/70">
                Project status
              </p>

              <h2 className="mt-2 font-heading text-3xl font-black text-industrial-black sm:text-4xl">
                SafeWork is being developed as an interactive prototype.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-industrial-black/75">
                The current website demonstrates the proposed product
                direction, user experience and selected interactive concepts.
                Additional features such as authentication, reporting,
                certificates, content management and wider system integration
                represent future development areas.
              </p>
            </div>

            <Link
              href="/solution"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-industrial-black px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-industrial-gray"
            >
              VIEW SAFEWORK
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">
            SafeTech Solutions
          </p>

          <h2 className="font-heading text-4xl font-black leading-tight text-industrial-black sm:text-5xl">
            Explore the SafeWork concept.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Discover the proposed training experience, system features and
            development direction behind SafeWork.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-bold text-industrial-black transition-all hover:brightness-95"
            >
              EXPLORE SAFEWORK
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===============================================================
   COMPONENTS
================================================================ */

function HeroFeature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3 px-6 py-5 text-center">
      <span className="text-brand-cyan">{icon}</span>

      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
        {title}
      </span>
    </div>
  );
}

function ModuleCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-lg">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
        <Icon size={24} />
      </div>

      <h3 className="font-heading text-xl font-bold text-industrial-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {description}
      </p>
    </article>
  );
}

function WorkflowCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-7">
      <span className="font-heading text-3xl font-black text-brand-cyan">
        {number}
      </span>

      <h3 className="mt-5 font-heading text-xl font-bold text-industrial-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {description}
      </p>
    </article>
  );
}

function UserCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow">
        <Users size={20} />
      </div>

      <h3 className="font-heading text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {description}
      </p>
    </article>
  );
}