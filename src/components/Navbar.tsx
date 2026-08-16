import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["web-deployments", "app-showcase", "automations", "certificates", "skills", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Web Apps", href: "#web-deployments" },
    { label: "Mobile Apps", href: "#app-showcase" },
    { label: "Automations", href: "#automations" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090c]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => scrollToSection(e, "#")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-black text-white text-base tracking-wider group-hover:bg-transparent transition-colors">
                MH
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white tracking-tight text-base group-hover:text-blue-400 transition-colors">
                  Muhammad Hamza
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[11px] text-zinc-400 font-medium">
                n8n Specialist and Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Direct CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/hamza19-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-blue-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923097719166?text=Hello%20M.Hamza%20!%20I%20want%20Your%20Help"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="WhatsApp Message"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-zinc-200 hover:text-blue-400 hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/hamza19-2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-zinc-300 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-zinc-300 hover:text-blue-400"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/923097719166?text=Hello%20M.Hamza%20!%20I%20want%20Your%20Help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-zinc-300 hover:text-emerald-400"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm tracking-wide"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
