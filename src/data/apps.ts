import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "Brutl Fitness",
    tagline: "A mobile workout and nutrition tracking app published on Google Play, built with Flutter and Firebase.",
    description: "Engineered from scratch in Flutter & Dart with a Firebase backend. Brutl Fitness tracks daily steps, customized workout splits, and nutritional macros with offline support and live leaderboard sync.",
    packageName: "com.brutlapp.fitness",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brutlapp.fitness",
    icon: "/apps/logo.png",
    bannerImage: "/apps/ss1.jpeg",
    screenshots: [
      "/apps/ss1.jpeg",
      "/apps/ss2.jpeg",
      "/apps/ss3.jpeg",
      "/apps/ss4.jpeg",
      "/apps/ss5.jpeg"
    ],
    category: "Health & Fitness",
    version: "1.0.0",
    rating: 5.0,
    ratingCount: "Google Play",
    downloads: "Live App",
    highlights: [
      "Brutl Consistency Score (1–1000): A custom algorithm scoring daily steps, completed workout sets, and caloric goals.",
      "Visual Macro & Calorie Tracker: Real-time progress rings for tracking daily calories, protein, carbs, and fats.",
      "Leaderboards & Badges: Community streak challenges and unlockable achievements to keep users consistent.",
      "Offline-First Split Planner: Lets users build and log workout routines offline with automatic cloud sync when connected."
    ],
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs"]
  }
];
