import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

// Live Google Sheet endpoint (Google Apps Script)
export const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbypj3VHHM19h_PVbR-NO7jcLvbvXl0Y0G_-0WSFZobIu2peHRm0MjiJetegklvCbU242g/exec"; 

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "n8n Workflow Automation",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    if (GOOGLE_SHEET_WEBHOOK_URL.trim()) {
      try {
        const payload = {
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          submittedAt: new Date().toLocaleString()
        };

        await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        setIsSubmitted(true);
      } catch (err) {
        console.error("Form Submission Error:", err);
        const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:hn955779@gmail.com?subject=${subject}&body=${body}`, "_blank");
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:hn955779@gmail.com?subject=${subject}&body=${body}`, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Let's Work Together"
          subheadline="Ready to automate your workflows, build a new app, or connect your business systems? Send a message and let's talk."
          badge="Contact"
          icon={Mail}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach Channels with Staggered Spring Physics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I am active on WhatsApp, email, and LinkedIn. If you have an urgent question or want a quick chat, WhatsApp is the fastest way to reach me.
            </p>

            {/* Outreach Links */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923032172766?text=Hello%20Hamza,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card shimmer-card rounded-2xl p-4 flex items-center justify-between hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      WhatsApp
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">+92 303 2172766</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:hn955779@gmail.com"
                className="glass-card shimmer-card rounded-2xl p-4 flex items-center justify-between hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      Email
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">hn955779@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card shimmer-card rounded-2xl p-4 flex items-center justify-between hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      LinkedIn
                    </h4>
                    <span className="text-xs text-zinc-400">Professional Profile</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hamza19-2006"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card shimmer-card rounded-2xl p-4 flex items-center justify-between hover:border-zinc-500/40 hover:bg-zinc-800/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                      GitHub
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">@hamza19-2006</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel shimmer-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Tell me about your project and I will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    Thank you! Your message has been received. I will review your requirements and reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "n8n Workflow Automation",
                        message: ""
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      What do you need help with?
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="n8n Workflow Automation">n8n Workflow Automation</option>
                      <option value="AI Assistant or Integration">AI Assistant or Integration</option>
                      <option value="Web Application or Landing Page">Web Application or Landing Page</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="CRM and API Integration">CRM and API Integration</option>
                      <option value="Consulting or Workflow Audit">Consulting or Workflow Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a little about what you want to build or automate, your timeline, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
