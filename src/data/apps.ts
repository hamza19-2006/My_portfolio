import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "AI Study & Notes Assistant",
    tagline: "Intelligent study companion transforming audio, lectures, and PDFs into mastery quizzes & flashcards.",
    description: "An intuitive mobile application engineered to assist university and college students with deep active recall, voice memo transcription, Socratic questioning, and automated summary generators.",
    packageName: "com.hamza.aistudyassistant",
    playStoreUrl: "https://play.google.com/store/apps",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
    bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Education & Productivity",
    version: "2.1.0",
    rating: 4.9,
    ratingCount: "120+ Reviews",
    downloads: "5,000+",
    highlights: [
      "Multi-Modal Document Parsing (PDF, Audio, Images)",
      "Instant Socratic Reasoning & Concept Breakdown",
      "Offline Flashcard Generation with Spaced Repetition",
      "Cloud Sync & Zero-Latency Performance"
    ],
    techStack: ["React Native", "TypeScript", "Gemini 1.5 Flash", "Supabase", "Tailwind Native"]
  }
];
