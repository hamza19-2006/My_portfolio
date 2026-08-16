import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "AI Study and Notes Assistant",
    tagline: "Mobile study companion that turns audio lectures and PDFs into practice quizzes and flashcards.",
    description: "A fast and lightweight mobile app designed to help students study smarter. It transcribes audio voice notes, summarizes textbook chapters, and generates flashcard decks for quick review.",
    packageName: "com.hamza.aistudyassistant",
    playStoreUrl: "https://play.google.com/store/apps",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
    bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Education and Productivity",
    version: "2.1.0",
    rating: 4.9,
    ratingCount: "120 Reviews",
    downloads: "5,000+",
    highlights: [
      "Upload and study from PDFs, audio, and images",
      "Step by step problem breakdown and explanation",
      "Flashcards for active review and memorization",
      "Fast cloud sync across your devices"
    ],
    techStack: ["Flutter", "Dart", "Google Gemini", "Supabase"]
  }
];
