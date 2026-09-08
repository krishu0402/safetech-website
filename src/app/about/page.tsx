"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function AboutPage() {
  const team = [
    { name: "Pallawi Tamang Dong", role: "Project Manager / Tech Lead", desc: "Sets direction, sprint planning, tech architecture, and leads client presentations.", img: "PT" },
    { name: "Anushka GC", role: "Deputy Project Manager", desc: "Owns documentation, meeting minutes, and supports project management.", img: "AG" },
    { name: "Rashu Lama", role: "Communication Lead", desc: "Manages all client contact, ensuring feedback translates into design.", img: "RL" },
    { name: "Krishu Kandel", role: "Developer & UI Support", desc: "Leads technical design, data model, and interface wireframes.", img: "KK" },
    { name: "Ayusha Rayamajhi", role: "Presentation & ePortfolio", desc: "Shapes client presentations and manages team evidence.", img: "AR" },
    { name: "Laxmi Tamang", role: "Research & Quality Analyst", desc: "Handles QA, benchmarking, usability analysis, and documentation checks.", img: "LT" }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <section className="bg-industrial-black text-white py-24 border-b-8 border-brand-cyan relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              SafeTech Solutions is a dedicated enterprise team with one focus: making workplace safety training something people actually engage with.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <FadeIn direction="up">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-xl leading-relaxed text-industrial-black font-medium">
                We're not a generic software vendor bolting "safety" onto an existing product. <strong className="text-brand-cyan">SafeWork</strong> was designed from the ground up around one industry, one real client, and one real problem — because we believe safety software only works when it's built around how the people using it actually work, not around what's easiest to build.
              </p>
              <div className="w-20 h-1 bg-brand-yellow my-10"></div>
              <p className="mb-6 leading-relaxed">
                Our team came together for the CET257 Enterprise Project at the University of Sunderland. From day one, we established clear working rules and immediately connected with a real logistics and warehousing client in the automotive sector. 
              </p>
              <p className="leading-relaxed">
                Instead of guessing requirements in isolation, every stage of SafeWork's design has gone through a rigorous rhythm: gather requirements, check them against client feedback, refine, and then move forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-industrial-light relative border-t border-gray-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn direction="down">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center text-industrial-black uppercase tracking-wider">Meet the Team</h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <StaggerItem key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-cyan to-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="w-20 h-20 bg-industrial-black text-white font-bold rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,203,247,0.5)] transition-all shadow-md">
                  {member.img}
                </div>
                <h4 className="text-xl font-bold text-industrial-black mb-1 group-hover:text-brand-cyan transition-colors">{member.name}</h4>
                <p className="text-brand-yellow font-bold text-xs mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values & Timeline */}
      <section className="py-24 bg-industrial-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">Our Values & Process</h2>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <StaggerContainer className="space-y-10">
              <StaggerItem>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(0,203,247,0.1)] transition-all duration-300 group">
                  <h4 className="font-bold text-2xl text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded bg-brand-cyan text-white flex items-center justify-center shadow-lg font-heading group-hover:scale-110 transition-transform">1</span>
                    Safety-First
                  </h4>
                  <p className="text-gray-400 leading-relaxed ml-14 group-hover:text-gray-300 transition-colors">Every design decision gets measured against one question: does this make someone safer at work? If a feature doesn't serve that goal, it doesn't make the cut.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-brand-yellow/50 hover:shadow-[0_0_20px_rgba(255,207,64,0.1)] transition-all duration-300 group">
                  <h4 className="font-bold text-2xl text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded bg-brand-yellow text-industrial-black flex items-center justify-center shadow-lg font-heading group-hover:scale-110 transition-transform">2</span>
                    Client Driven
                  </h4>
                  <p className="text-gray-400 leading-relaxed ml-14 group-hover:text-gray-300 transition-colors">SafeWork is shaped by direct, ongoing conversation with a real logistics client — not by what we assume a warehouse needs.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group">
                  <h4 className="font-bold text-2xl text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded bg-white text-industrial-black flex items-center justify-center shadow-lg font-heading group-hover:scale-110 transition-transform">3</span>
                    Transparent
                  </h4>
                  <p className="text-gray-400 leading-relaxed ml-14 group-hover:text-gray-300 transition-colors">Trust matters more to us than a slicker-looking pitch. We communicate honestly about where our design and build stands at all times.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gradient-to-b from-white/10 to-white/5 p-10 rounded-2xl border border-white/10 shadow-2xl relative hover:border-brand-cyan/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-bl-full blur-2xl"></div>
                <h4 className="font-bold text-3xl mb-8 text-white font-heading">Agile Delivery</h4>
                <p className="text-gray-300 mb-8 text-lg">
                  We work in structured weekly sprints, ensuring rapid iteration based on real feedback.
                </p>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-industrial-black bg-brand-cyan text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:shadow-[0_0_15px_rgba(0,203,247,0.5)] transition-shadow">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/30 transition-colors">
                      <h4 className="font-bold text-white group-hover:text-brand-cyan transition-colors">Weekly Check-ins</h4>
                      <p className="text-sm text-gray-400">Continuous client dialogue.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-industrial-black bg-brand-yellow text-industrial-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:shadow-[0_0_15px_rgba(255,207,64,0.5)] transition-shadow">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10 group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/30 transition-colors">
                      <h4 className="font-bold text-white group-hover:text-brand-yellow transition-colors">Requirement Analysis</h4>
                      <p className="text-sm text-gray-400">UML & User Stories.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-industrial-black bg-white text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-colors">
                      <h4 className="font-bold text-white">Usability Testing</h4>
                      <p className="text-sm text-gray-400">PACT & Heuristic Eval.</p>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
