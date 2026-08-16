import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";

// 💡 PASTE YOUR N8N WEBHOOK OR GOOGLE APPS SCRIPT URL HERE:
// When empty, it falls back to preparing an instant email to hamzanoorallah@gmail.com
export const GOOGLE_SHEET_WEBHOOK_URL = ""; 

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI Automation / n8n Workflow",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    // If an n8n webhook or Google Apps Script URL is provided, send the query directly:
    if (GOOGLE_SHEET_WEBHOOK_URL.trim()) {
      try {
        const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            message: formData.message,
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error("Failed to post to webhook");
        }

        setIsSubmitted(true);
      } catch (err) {
        console.error("Form Submission Error:", err);
        // Fallback: If webhook fails, open email client so inquiry is never lost
        const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:hamzanoorallah@gmail.com?subject=${subject}&body=${body}`, "_blank");
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default: Direct email client preparation
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:hamzanoorallah@gmail.com?subject=${subject}&body=${body}`, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Let's Build Something Intelligent"
          subheadline="Ready to eliminate manual bottlenecks, integrate AI agents, or launch a modern web platform? Reach out directly."
          badge="Direct Contact & Inquiries"
          icon={Mail}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Connect Directly
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I am active across email, WhatsApp, and LinkedIn. For urgent project discussions or quick discovery chats, WhatsApp is fastest.
            </p>

            {/* Outreach Links */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923097719166?text=Hello%20M.Hamza%20!%20I%20want%20Your%20Help"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center justify-between hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      WhatsApp Instant Chat
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">+92 309 7719166</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a
                href="mailto:hamzanoorallah@gmail.com"
                className="glass-card rounded-2xl p-4 flex items-center justify-between hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      Email Inbox
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">hamzanoorallah@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 flex items-center justify-between hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      LinkedIn Network
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
                className="glass-card rounded-2xl p-4 flex items-center justify-between hover:border-zinc-500/40 hover:bg-zinc-800/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                      GitHub Repositories
                    </h4>
                    <span className="text-xs text-zinc-400 font-mono">@hamza19-2006</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the project scope below for a prompt reply within 12-24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    Thank you! Your project query has been recorded. I will review your requirements and reach out promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "AI Automation / n8n Workflow",
                        message: ""
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Project Area / Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="AI Automation / n8n Workflow">AI Automation / n8n Workflow</option>
                      <option value="Custom LLM Agent / Multi-Modal System">Custom LLM Agent / Multi-Modal System</option>
                      <option value="Full-Stack Web App / SaaS Platform">Full-Stack Web App / SaaS Platform</option>
                      <option value="Mobile App Development (Play Store)">Mobile App Development (Play Store)</option>
                      <option value="CRM Integration (GoHighLevel / WhatsApp API)">CRM Integration (GoHighLevel / WhatsApp API)</option>
                      <option value="Consulting / Workflow Audit">Consulting / Workflow Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're trying to automate or build, your timeline, and current bottlenecks..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Query...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
