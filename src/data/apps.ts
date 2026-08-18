import { PlayStoreApp } from "../types/portfolio";

export const playStoreApps: PlayStoreApp[] = [
  {
    id: "app-1",
    title: "Brutl Fitness",
    tagline: "Redefining fitness tracking through real-time consistency scoring, intelligent macro analytics, and gamified community competition.",
    description: "Brutl Fitness is a high-performance Flutter mobile application engineered to turn daily workout and nutrition tracking into a dynamic, habit-building experience. Powered by custom algorithms and real-time cloud infrastructure, it empowers users to track health metrics while competing on global leaderboards.",
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
    rating: 4.9,
    ratingCount: "150+ Reviews",
    downloads: "1,000+",
    highlights: [
      "Proprietary Brutl Score (1–1000): Dynamically calculates a unified daily consistency metric based on step volume, completed workouts, and macro adherence.",
      "Precision Macro Analytics: Intuitive ring visualizer providing real-time tracking of daily caloric intake alongside granular protein, carb, and fat distributions.",
      "Gamified Arena & Leaderboards: Boosts user retention with milestone streak badges (First Pump, Hydro Hero, Step King) and real-time global rank competition.",
      "Multi-Week Training Manager: Flexible split planner built for structuring custom workout routines with seamless offline-first persistence and cloud synchronization."
    ],
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "REST APIs"]
  }
];
