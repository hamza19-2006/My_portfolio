import { WebProject } from "../types/portfolio";

export const webProjects: WebProject[] = [
  {
    id: "web-2",
    title: "Dr. Rahat Clinic Appointment Portal",
    image: "https://i.ibb.co/VpLR3TNQ/Dr-Rahat.png",
    link: "https://dental.hamza-systems.tech/",
    category: "Healthcare",
    valueStatement: "Patient booking and clinic website designed for maternal healthcare.",
    explanation: "A clean and accessible medical landing page created for maternal health consultations. It features an automated assistant to answer patient questions and guide them to the right clinic location across partner hospitals in Lahore.",
    techStack: ["React", "Node.js", "Tailwind CSS", "WhatsApp Routing"],
    isFeatured: true
  },
  {
    id: "web-3",
    title: "AI Study Assistant",
    image: "https://i.ibb.co/MDsJzvCt/Screenshot-2026-04-17-185314.png",
    link: "https://aistudy.hamza-systems.tech/",
    category: "SaaS & EdTech",
    valueStatement: "Interactive learning platform that turns study notes into quizzes and summaries.",
    explanation: "A web app built with Next.js and cloud storage. Students can upload PDFs, notes, and audio to quickly create practice tests, flashcards, and step by step concept explanations powered by Google Gemini.",
    techStack: ["Next.js", "TypeScript", "Google Gemini", "Supabase", "Tailwind CSS"],
    isFeatured: true
  },
  {
    id: "web-4",
    title: "University Merit Calculator",
    image: "https://i.ibb.co/wN2tdNxT/merit.png",
    link: "https://merit-calculator-by-hamza.streamlit.app/",
    category: "Utilities",
    valueStatement: "Fast online calculator to check university admission chances.",
    explanation: "A lightweight Python web app built with Streamlit. Students can enter their matric, intermediate, and entry test marks to instantly calculate their aggregate score and see how they compare to previous admission cutoffs.",
    techStack: ["Python", "Streamlit", "Data Logic"],
    isFeatured: false
  }
];
