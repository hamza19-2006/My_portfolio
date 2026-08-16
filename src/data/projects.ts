import { WebProject } from "../types/portfolio";

export const webProjects: WebProject[] = [
  {
    id: "web-2",
    title: "Dr. Rahat Clinic Appointment Portal",
    image: "https://i.ibb.co/VpLR3TNQ/Dr-Rahat.png",
    link: "https://dental.hamza-systems.tech/",
    category: "Healthcare",
    valueStatement: "Patient booking portal and clinic website for dental healthcare.",
    explanation: "A responsive website built for a dental healthcare practice in Lahore. It helps patients check services, review clinic timings, and book consultations directly through WhatsApp.",
    techStack: ["React", "Node.js", "Tailwind CSS", "WhatsApp Routing"],
    isFeatured: true
  },
  {
    id: "web-3",
    title: "AI Study Assistant",
    image: "https://i.ibb.co/MDsJzvCt/Screenshot-2026-04-17-185314.png",
    link: "https://aistudy.hamza-systems.tech/",
    category: "EdTech",
    valueStatement: "Study platform that turns lecture notes and PDFs into interactive quizzes.",
    explanation: "A full-stack web application built with Next.js and cloud storage. Students can upload PDFs, notes, and audio recordings to generate study guides, summaries, and practice quizzes.",
    techStack: ["Next.js", "TypeScript", "Google Gemini", "Supabase", "Tailwind CSS"],
    isFeatured: true
  },
  {
    id: "web-4",
    title: "University Merit Calculator",
    image: "https://i.ibb.co/wN2tdNxT/merit.png",
    link: "https://merit-calculator-by-hamza.streamlit.app/",
    category: "Utilities",
    valueStatement: "Quick online calculator to estimate university admission scores.",
    explanation: "A lightweight Python web utility built with Streamlit that lets Pakistani students enter their academic marks and entry test scores to calculate admission merit scores against past closing cutoffs.",
    techStack: ["Python", "Streamlit", "Data Logic"],
    isFeatured: false
  }
];
