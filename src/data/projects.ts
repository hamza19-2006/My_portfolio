import { WebProject } from "../types/portfolio";

export const webProjects: WebProject[] = [
  {
    id: "web-2",
    title: "Dr. Rahat’s Maternal Health Clinic",
    image: "https://i.ibb.co/VpLR3TNQ/Dr-Rahat.png",
    link: "https://clinic.hamza-systems.tech/",
    category: "Healthcare",
    valueStatement: "Empathetic Patient Acquisition Hub with Clinical Guardrails.",
    explanation: "Focused on an empathetic, accessible UI/UX designed specifically for Gynaecology and Obstetrics patients. Utilizes a Symptom-Aware AI Assistant acting as an intelligent receptionist with clinical safety guardrails. Serves as a centralized multi-facility appointment routing portal managing patient intake across major tertiary hospitals.",
    techStack: ["React", "Node.js", "Tailwind CSS", "AI Guardrails", "Multi-Hospital Routing"],
    isFeatured: true
  },
  {
    id: "web-3",
    title: "AI Study Assistant SaaS",
    image: "https://i.ibb.co/MDsJzvCt/Screenshot-2026-04-17-185314.png",
    link: "https://aistudy.hamza-systems.tech/",
    category: "SaaS & EdTech",
    valueStatement: "Full-stack pedagogical engine transforming unstructured materials into active study modules.",
    explanation: "Built with a modern Next.js frontend and cloud persistence layer. Implements secure multi-tenant authentication and an intelligent file ingestion pipeline for PDFs, audio lectures, and diagrams. Features four AI study modes—including an unassisted Socratic Deep Study mode powered by Gemini 1.5 Pro.",
    techStack: ["Next.js", "TypeScript", "Gemini 1.5 Pro", "Supabase", "Tailwind CSS", "PDF Parser"],
    isFeatured: true
  },
  {
    id: "web-4",
    title: "University Merit Calculator",
    image: "https://i.ibb.co/wN2tdNxT/merit.png",
    link: "https://merit-calculator-by-hamza.streamlit.app/",
    category: "Utilities",
    valueStatement: "Dynamic aggregate forecasting utility processing multi-tier academic criteria.",
    explanation: "A high-performance calculation utility built with Python and Streamlit that simplifies university admission aggregate forecasting. Prospective students input historical board examination and national entry test scores to instantly compute aggregate standing with historical cutoff benchmarks.",
    techStack: ["Python", "Streamlit", "Data Modeling", "Algorithm Optimization"],
    isFeatured: false
  }
];
