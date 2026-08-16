import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "AI Study and Notes Assistant",
    tagline: "Mobile study app that turns audio lectures and PDFs into flashcards and quizzes.",
    description: "A fast and lightweight Flutter app built for students. It transcribes audio recordings, creates chapter summaries, and generates practice flashcards for exam review.",
    packageName: "com.hamza.aistudyassistant",
    playStoreUrl: "https://play.google.com/store/apps",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
    bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Education",
    version: "2.1.0",
    rating: 4.9,
    ratingCount: "120 Reviews",
    downloads: "5,000+",
    highlights: [
      "Process PDFs, lecture audio, and photos",
      "Step by step concept explanations",
      "Interactive flashcards for active review",
      "Real-time cloud sync across devices"
    ],
    techStack: ["Flutter", "Dart", "Google Gemini", "Supabase"]
  }
];
