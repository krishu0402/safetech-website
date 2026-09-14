"use client";

import { FormEvent, useState } from "react";

import {
  ArrowRight,
  Check,
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setShowSuccess(true);
  }

  function closeSuccess() {
    setShowSuccess(false);

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  }

  return (
    <>
      <main className="flex flex-col overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative py-24 md:py-32 bg-industrial-black text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
            <FadeIn direction="up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-brand-cyan/30 text-brand-cyan font-bold text-sm tracking-widest uppercase mb-7">
                  <MessageSquare size={16} aria-hidden="true" />
                  Contact SafeTech
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-7">
                  Let&apos;s build safer{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-yellow">
                    workplaces
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Have a question about SafeWork or want to discuss an
                  interactive safety training solution? Get in touch with the
                  SafeTech Solutions team.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* =========================================================
            CONTACT CONTENT
        ========================================================== */}
        <section className="py-20 md:py-24 bg-industrial-light">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              {/* =====================================================
                  CONTACT INFORMATION
              ====================================================== */}
              <div className="lg:col-span-2">
                <FadeIn direction="left">
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-sm uppercase tracking-widest mb-5">
                      Get in touch
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-industrial-black mb-5">
                      Start a conversation
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      Whether you are interested in SafeWork, workplace safety
                      training, or the direction of the solution, use the
                      enquiry form to share your requirements.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Contact card */}
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                        <Mail size={20} aria-hidden="true" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-industrial-black mb-1">
                          Email
                        </p>

                        <p className="text-sm text-gray-500">
                          Send us an enquiry using the form.
                        </p>
                      </div>
                    </div>

                    {/* Location card */}
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <div className="w-11 h-11 rounded-xl bg-brand-yellow/15 text-brand-yellow-dark flex items-center justify-center shrink-0">
                        <MapPin size={20} aria-hidden="true" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-industrial-black mb-1">
                          SafeTech Solutions
                        </p>

                        <p className="text-sm text-gray-500">
                          Interactive technology and safety solutions.
                        </p>
                      </div>
                    </div>

                    {/* Response card */}
                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <div className="w-11 h-11 rounded-xl bg-industrial-black text-brand-yellow flex items-center justify-center shrink-0">
                        <Phone size={20} aria-hidden="true" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-industrial-black mb-1">
                          Enquiries
                        </p>

                        <p className="text-sm text-gray-500">
                          Tell us what you need and we&apos;ll review your
                          enquiry.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* =====================================================
                  CONTACT FORM
              ====================================================== */}
              <div className="lg:col-span-3">
                <FadeIn direction="right">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-7 md:p-10">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-cyan text-white flex items-center justify-center">
                          <Send size={18} aria-hidden="true" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-industrial-black">
                          Send an enquiry
                        </h2>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        Complete the form below and provide a little
                        information about your enquiry.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name + Email */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-industrial-black mb-2"
                          >
                            Full name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-industrial-black placeholder:text-gray-400 outline-none transition-all focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-industrial-black mb-2"
                          >
                            Email address
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-industrial-black placeholder:text-gray-400 outline-none transition-all focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                          />
                        </div>
                      </div>

                      {/* Company + Subject */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-bold text-industrial-black mb-2"
                          >
                            Company
                            <span className="font-normal text-gray-400">
                              {" "}
                              (optional)
                            </span>
                          </label>

                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company name"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-industrial-black placeholder:text-gray-400 outline-none transition-all focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-bold text-industrial-black mb-2"
                          >
                            Subject
                          </label>

                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-industrial-black placeholder:text-gray-400 outline-none transition-all focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-industrial-black mb-2"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your enquiry..."
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-industrial-black placeholder:text-gray-400 outline-none transition-all resize-none focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 bg-brand-cyan text-industrial-black font-bold tracking-wide py-4 px-6 rounded-xl hover:brightness-95 transition-all focus:outline-none focus:ring-4 focus:ring-brand-cyan/30"
                      >
                        Submit enquiry

                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </button>

                      <p className="text-xs text-gray-400 text-center leading-relaxed">
                        By submitting this form, you are providing information
                        for the purpose of your enquiry.
                      </p>
                    </form>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CONTACT SAFEWORK
        ========================================================== */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-block px-4 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow-dark font-bold text-sm uppercase tracking-widest mb-5">
                  SafeWork
                </div>

                <h2 className="text-3xl md:text-5xl font-heading font-bold text-industrial-black mb-5">
                  Designed around workplace safety
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  SafeWork focuses on making health and safety training more
                  interactive, understandable and relevant to logistics and
                  warehousing environments.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              <StaggerItem className="p-7 rounded-2xl bg-industrial-light border border-gray-200">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan text-white flex items-center justify-center mb-5">
                  <CheckCircle size={21} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
                  Interactive learning
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Scenario-based activities help learners engage with
                  workplace safety situations rather than relying only on
                  static information.
                </p>
              </StaggerItem>

              <StaggerItem className="p-7 rounded-2xl bg-industrial-light border border-gray-200">
                <div className="w-11 h-11 rounded-xl bg-brand-yellow text-industrial-black flex items-center justify-center mb-5">
                  <TargetIcon />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
                  Practical scenarios
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Training activities are designed around situations that
                  workers may encounter in real logistics and warehouse
                  environments.
                </p>
              </StaggerItem>

              <StaggerItem className="p-7 rounded-2xl bg-industrial-light border border-gray-200">
                <div className="w-11 h-11 rounded-xl bg-industrial-black text-brand-yellow flex items-center justify-center mb-5">
                  <MessageSquare size={21} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-heading font-bold text-industrial-black mb-3">
                  Immediate feedback
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  The SafeWork concept provides feedback during learning so
                  users can understand why a safety decision matters.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>

      {/* =========================================================
          SUCCESS MODAL
      ========================================================== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-success-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeSuccess}
                aria-label="Close enquiry confirmation"
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-industrial-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="px-7 py-10 md:px-10 md:py-12 text-center">
                {/* Success icon */}
                <div className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-7">
                  <CheckCircle size={42} strokeWidth={2} aria-hidden="true" />
                </div>

                <h2
                  id="enquiry-success-title"
                  className="text-3xl md:text-4xl font-heading font-bold text-industrial-black mb-5"
                >
                  Thank You for Your Enquiry
                </h2>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  Thank you for getting in touch with SafeTech Solutions. We
                  appreciate your interest and the information you have
                  provided.
                </p>

                <button
                  type="button"
                  onClick={closeSuccess}
                  className="w-full bg-brand-cyan text-industrial-black font-bold tracking-widest py-4 px-6 rounded-xl hover:brightness-95 transition-all focus:outline-none focus:ring-4 focus:ring-brand-cyan/30"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =============================================================
   Small icon component
============================================================= */

function TargetIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}