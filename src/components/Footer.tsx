import React from "react";
import { ArrowUp, Github, Linkedin, MessageSquare, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#030305] border-t border-white/5 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px]">
            <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center font-bold text-white text-xs">
              MH
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-white tracking-tight">
              Muhammad Hamza
            </p>
            <p className="text-[11px] text-zinc-500 font-medium">
              n8n Automation Specialist and Developer
            </p>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/hamza19-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hamza-a57a7642b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/923032172766?text=Hello%20Hamza,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href="mailto:hn955779@gmail.com"
            className="hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Muhammad Hamza. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
