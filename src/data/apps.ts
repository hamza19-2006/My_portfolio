import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "Brutl Fitness & Arena",
    tagline: "Gamified workout tracker, macro nutrition planner, and competitive fitness arena.",
    description: "A fast, cross-platform mobile app engineered with Flutter. Features structured multi-week workout routines, dynamic calorie and macronutrient rings, hydration tracking, and a gamified Brutl Arena with streak badges and global leaderboards.",
    packageName: "com.hamza.brutlfitness",
    playStoreUrl: "https://play.google.com/store/apps",
    icon: "/apps/logo.png",
    bannerImage: "/apps/ss2.jpeg",
    screenshots: [
      "/apps/ss2.jpeg",
      "/apps/ss3.jpeg",
      "/apps/ss1.jpeg"
    ],
    category: "Health & Fitness",
    version: "1.0.0",
    rating: 4.9,
    ratingCount: "150+ Reviews",
    downloads: "1,000+",
    highlights: [
      "Brutl Score tracking for workout frequency and consistency",
      "Macro and calorie calculator with daily nutrition targets",
      "Structured workout splits for chest, back, and arms",
      "Gamified Arena with streak badges and leaderboards"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs"]
  }
];
