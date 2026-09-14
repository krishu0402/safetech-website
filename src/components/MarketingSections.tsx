const benefits = [
  {
    number: "01",
    title: "Interactive learning",
    description:
      "Move beyond passive information with learning experiences that encourage users to participate and make decisions.",
  },
  {
    number: "02",
    title: "Scenario-based practice",
    description:
      "Explore realistic workplace situations and consider appropriate responses to potential hazards.",
  },
  {
    number: "03",
    title: "Immediate feedback",
    description:
      "Help learners understand their decisions through clear and timely feedback.",
  },
  {
    number: "04",
    title: "Progress-focused",
    description:
      "Present completion and learning information in a way that supports continued development.",
  },
];

const trainingSteps = [
  {
    number: "01",
    title: "Select training",
    description:
      "Choose the relevant safety learning experience.",
  },
  {
    number: "02",
    title: "Explore the scenario",
    description:
      "Enter a workplace situation and understand the context.",
  },
  {
    number: "03",
    title: "Identify hazards",
    description:
      "Recognise potential hazards within the scenario.",
  },
  {
    number: "04",
    title: "Make a decision",
    description:
      "Select the response you believe is safest.",
  },
  {
    number: "05",
    title: "Receive feedback",
    description:
      "Understand why a response is appropriate or needs reconsideration.",
  },
  {
    number: "06",
    title: "Review progress",
    description:
      "Use completion and learning information to understand progress.",
  },
];

const modules = [
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
];

export function ProblemSolution() {
  return (
    <section
      aria-labelledby="challenge-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              The challenge
            </p>

            <h2
              id="challenge-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Safety learning should connect with the workplace
            </h2>

            <p className="mt-6 text-lg leading-8">
              Logistics and warehousing environments involve practical
              activities, equipment, movement and workplace hazards.
              SafeWork is designed around interactive learning experiences
              that help users explore these situations.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Connect safety guidance with practical situations.",
                "Provide focused learning experiences for operational staff.",
                "Give learners opportunities to consider safer decisions.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1"
                  >
                    •
                  </span>

                  <p className="leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              The SafeWork approach
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              From information to interaction
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Interactive workplace scenarios",
                "Hazard identification",
                "Decision-making activities",
                "Knowledge checks",
                "Immediate feedback",
                "Progress and completion information",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold">
                    {index + 1}
                  </span>

                  <p className="leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export function WhySafeWork() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Why SafeWork?
          </p>

          <h2
            id="why-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Designed around the people using safety training
          </h2>

          <p className="mt-6 text-lg leading-8">
            SafeWork brings together interactive learning, workplace
            scenarios and feedback in a structured training experience.
          </p>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          <article className="rounded-3xl border p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.15em]">
              Trainee / Worker
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Learn by participating
            </h3>

            <ul className="mt-7 space-y-4">
              {[
                "Explore interactive training scenarios",
                "Identify workplace hazards",
                "Complete knowledge checks",
                "Receive immediate feedback",
                "Review training progress",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7"
                >
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </article>

          <article className="rounded-3xl border p-8 sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.15em]">
              Trainer / Administrator
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Support training management
            </h3>

            <ul className="mt-7 space-y-4">
              {[
                "Manage training content",
                "Assign learning activities",
                "Review learner progress",
                "Review results and completion",
                "Support ongoing training development",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7"
                >
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </article>

        </div>

      </div>
    </section>
  );
}

export function TrainingJourney() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            How SafeWork works
          </p>

          <h2
            id="journey-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            A clear training journey
          </h2>

          <p className="mt-6 text-lg leading-8">
            The SafeWork concept follows a simple sequence from
            selecting training through scenario participation,
            feedback and progress review.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {trainingSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="text-sm font-bold">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7">
                {step.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export function TrainingModules() {
  return (
    <section
      aria-labelledby="modules-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Training areas
          </p>

          <h2
            id="modules-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Explore key safety topics
          </h2>

          <p className="mt-6 text-lg leading-8">
            SafeWork can support focused learning experiences around
            common safety themes relevant to logistics and warehousing.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-3xl border p-7 sm:p-8"
            >

              <h3 className="text-xl font-bold">
                {module.title}
              </h3>

              <p className="mt-4 leading-7">
                {module.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export function ProjectStatus() {
  return (
    <section
      aria-labelledby="status-heading"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="rounded-3xl border p-8 sm:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Project status
          </p>

          <h2
            id="status-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            SafeWork prototype development
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            SafeWork is being developed as an interactive health and
            safety training system for the CET257 Enterprise Project.
            This promotional website presents the product concept and
            selected interactive experiences.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-sm font-medium">
                Company
              </p>

              <p className="mt-1 font-semibold">
                SafeTech Solutions
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">
                Product
              </p>

              <p className="mt-1 font-semibold">
                SafeWork
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">
                Target sector
              </p>

              <p className="mt-1 font-semibold">
                Logistics &amp; Warehousing
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">
                Industry
              </p>

              <p className="mt-1 font-semibold">
                Automotive
              </p>
            </div>

          </div>

          <div className="mt-10 border-t pt-8">

            <h3 className="font-semibold">
              Current development focus
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              {[
                "Interactive safety learning",
                "Scenario-based activities",
                "Hazard identification",
                "Knowledge assessment",
                "Immediate feedback",
                "Progress tracking concepts",
              ].map((item) => (
                <p
                  key={item}
                  className="flex gap-3"
                >
                  <span aria-hidden="true">✓</span>
                  {item}
                </p>
              ))}

            </div>

          </div>

          <div className="mt-10 border-t pt-8">

            <h3 className="font-semibold">
              Future development
            </h3>

            <p className="mt-3 leading-7">
              Future iterations may extend the system with richer
              reporting, additional training content, enterprise
              capabilities and VR-oriented experiences.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}