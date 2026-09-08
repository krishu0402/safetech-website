"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, X } from "lucide-react";
import { FadeIn } from "@/components/animations";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"enquiry" | "feedback">("enquiry");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"enquiry" | "feedback">("enquiry");

  const handleSubmit = (e: React.FormEvent, type: "enquiry" | "feedback") => {
    e.preventDefault();
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-industrial-light overflow-hidden">
      
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
              {modalType === "enquiry" ? "Enquiry Sent!" : "Feedback Received!"}
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {modalType === "enquiry" 
                ? "Thank you for reaching out. A member of the SafeTech team will contact you shortly to schedule your demo." 
                : "Thank you for helping us improve SafeWork. Your insights are invaluable to our continuous development."}
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-4 bg-industrial-black text-white font-bold rounded uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-industrial-black text-white py-24 border-b-8 border-brand-cyan relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're looking to transform your warehouse training or you're an existing client with feedback, we're here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 flex-1 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Contact Details */}
            <div className="md:col-span-1 space-y-8">
              <FadeIn direction="left">
                <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-industrial-black hover:shadow-2xl transition-shadow duration-300 hover-lift">
                  <h3 className="text-3xl font-bold font-heading mb-8 text-industrial-black">Contact Details</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5 group">
                      <div className="bg-gray-50 p-4 rounded-xl text-industrial-black border border-gray-100 group-hover:bg-brand-yellow group-hover:text-industrial-black group-hover:border-brand-yellow transition-all shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                        <p className="font-bold text-industrial-black break-words">safetechsolutions02@<br/>gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5 group">
                      <div className="bg-gray-50 p-4 rounded-xl text-industrial-black border border-gray-100 group-hover:bg-brand-cyan group-hover:text-white group-hover:border-brand-cyan transition-all shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                        <p className="font-bold text-industrial-black">FLAT 12 WILDING HOUSE</p>
                        <p className="text-gray-600 text-sm mt-1">WICK ROAD, LONDON HACKNEY, E9 SAU</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Forms Section */}
            <div className="md:col-span-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab("enquiry")}
                      className={`flex-1 py-6 px-6 text-center font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                        activeTab === "enquiry"
                          ? "bg-brand-cyan text-industrial-black shadow-inner"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      New Client Enquiry
                    </button>
                    <button
                      onClick={() => setActiveTab("feedback")}
                      className={`flex-1 py-6 px-6 text-center font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                        activeTab === "feedback"
                          ? "bg-brand-yellow text-industrial-black shadow-inner"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      Client Feedback
                    </button>
                  </div>

                  {/* Form Content */}
                  <div className="p-8 md:p-12 relative overflow-hidden bg-white">
                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none -z-0 transition-colors duration-500 ${activeTab === 'enquiry' ? 'bg-brand-cyan' : 'bg-brand-yellow'}`}></div>
                    
                    {activeTab === "enquiry" ? (
                      <div className="animate-in slide-in-from-right-8 fade-in duration-500 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 bg-brand-cyan/20 rounded-xl group-hover:scale-110 transition-transform">
                            <Send className="text-brand-cyan-dark" size={32} />
                          </div>
                          <h2 className="text-4xl font-bold font-heading text-industrial-black">Book a Demo</h2>
                        </div>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">Ready to upgrade your warehouse safety training? Drop us your details and we'll be in touch to schedule a comprehensive demo.</p>
                        
                        <form className="space-y-6" onSubmit={(e) => handleSubmit(e, "enquiry")}>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 group">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">Full Name</label>
                              <input required type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 outline-none transition-all shadow-sm font-medium hover:border-gray-300" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2 group">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">Phone Number</label>
                              <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 outline-none transition-all shadow-sm font-medium hover:border-gray-300" placeholder="+44 123 456 7890" />
                            </div>
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">Email Address</label>
                            <input required type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 outline-none transition-all shadow-sm font-medium hover:border-gray-300" placeholder="john@logistics.com" />
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-cyan transition-colors">How can we help?</label>
                            <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 outline-none transition-all resize-none shadow-sm font-medium hover:border-gray-300" placeholder="Tell us about your warehouse training needs..."></textarea>
                          </div>
                          <button type="submit" className="w-full py-5 bg-gradient-to-r from-industrial-black to-gray-800 text-white font-bold rounded-xl uppercase tracking-widest hover:brightness-150 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(0,203,247,0.3)] hover:-translate-y-1 mt-8">
                            Send Enquiry
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="animate-in slide-in-from-left-8 fade-in duration-500 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 bg-brand-yellow/20 rounded-xl">
                            <MessageSquare className="text-brand-yellow-dark" size={32} />
                          </div>
                          <h2 className="text-4xl font-bold font-heading text-industrial-black">Client Feedback</h2>
                        </div>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">Your feedback shapes SafeWork. Let us know what's working well, or suggest features you'd like to see in the next agile sprint.</p>
                        
                        <form className="space-y-6" onSubmit={(e) => handleSubmit(e, "feedback")}>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-yellow-dark transition-colors">Company Name</label>
                            <input required type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition-all shadow-sm font-medium hover:border-gray-300" placeholder="Your Company" />
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-yellow-dark transition-colors">Feedback Type</label>
                            <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition-all appearance-none cursor-pointer shadow-sm font-medium hover:border-gray-300">
                              <option>Feature Request</option>
                              <option>Usability Feedback</option>
                              <option>Bug Report</option>
                              <option>General Comment</option>
                            </select>
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-yellow-dark transition-colors">Your Message</label>
                            <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 outline-none transition-all resize-none shadow-sm font-medium hover:border-gray-300" placeholder="What's on your mind?"></textarea>
                          </div>
                          <button type="submit" className="w-full py-5 bg-gradient-to-r from-brand-yellow to-brand-yellow-dark text-industrial-black font-bold rounded-xl uppercase tracking-widest hover:brightness-110 transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(255,207,64,0.4)] hover:-translate-y-1 mt-8">
                            Submit Feedback
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
