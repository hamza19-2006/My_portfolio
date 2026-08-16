import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "Brutal Fitness",
    tagline: "High-intensity workout companion, habit tracker, and personalized fitness coaching app.",
    description: "A fast, cross-platform mobile application engineered with Flutter. Features progressive overload logging, customizable workout routines, daily calorie & macro calculations, and streak analytics.",
    packageName: "com.hamza.brutalfitness",
    playStoreUrl: "https://play.google.com/store/apps",
    // 💡 Add your logo file in: public/apps/logo.png (or use an online image link)
    icon: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80",
    bannerImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    // 💡 Add your screenshots in: public/apps/screenshot1.png (or use online image links)
    screenshots: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
    ],
    category: "Health & Fitness",
    version: "1.0.0",
    rating: 4.9,
    ratingCount: "150+ Reviews",
    downloads: "1,000+",
    highlights: [
      "Workout routines and progressive overload tracker",
      "Macro and calorie calculator with meal planning",
      "Visual streak analytics and performance graphs",
      "Offline workout mode with cloud sync"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "REST API"]
  }
];
