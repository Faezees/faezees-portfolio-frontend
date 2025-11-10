import { FishSymbolIcon } from "lucide-react";
import { FiCode, FiGitBranch, FiHeadphones, FiPhone, FiSmartphone, FiType } from "react-icons/fi";

export const skills = [
  // 💎 Advanced Level
  {
    name: "CSS3 / HTML5",
    level: 90,
    description: `Mastered advanced layouts, animations, Flexbox, Grid, and semantic HTML.
      Built complex NFT dashboards and Web3-integrated pages in Seed.Photo,
      implementing SSR, responsive designs, and optimized performance.`,
    color:
      "from-blue-400 via-sky-500 to-indigo-600 dark:from-blue-600 dark:via-sky-700 dark:to-indigo-800",
    icon: <FiCode color="blue" />,
    category: "advanced",
  },
  {
    name: "JavaScript / TypeScript",
    level: 80,
    description: `Strong knowledge of ES6+, async/await, closures, and modular architecture.
    Applied JavaScript in Seed.Photo and Dynamo100
    Applied TypeScript in Portfolio for reusable components and API layers,`,
    color:
      "from-amber-400 via-amber-500 to-orange-500 dark:from-amber-500 dark:via-amber-600 dark:to-orange-700",
    icon: <FiType color="orange" />,
    category: "advanced",
  },
  {
    name: "React.js / Next.js / Redux",
    level: 85,
    description: `Built scalable apps using React & Next.js with SSR/SSG and state management via Redux.
      Optimized performance for NFT dashboards, implemented reusable components, and enhanced UX.`,
    color:
      "from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-600 dark:via-blue-700 dark:to-indigo-800",
    icon: "⚛️",
    category: "advanced",
  },
  {
    name: "Responsive Design",
    level: 83,
    description: `Created pixel-perfect, mobile-first designs using media queries and flexible layouts.
      Ensured seamless UI across devices for projects like Dynamo100 and Seed.Photo.`,
    color:
      "from-pink-400 via-rose-500 to-red-500 dark:from-pink-600 dark:via-rose-700 dark:to-red-700",
    icon: "📱",
    category: "advanced",
  },
  {
    name: "Bootstrap / Sass (SCSS)",
    level: 75,
    description: `Developed custom components, grid systems, and scalable preprocessor-based styling.
    Used in Seed.Photo panel admin to speed up UI development while maintaining consistency.`,
    color:
      "from-purple-500 via-violet-500 to-purple-700 dark:from-purple-700 dark:via-violet-700 dark:to-purple-900",
    icon: "🅱️",
    category: "advanced",
  },

  // ⚙️ Intermediate Level
  {
    name: "Git & GitHub",
    level: 70,
    description: `Collaborated in team projects using Git for version control, branch strategies, and code reviews.
      Ensured smooth workflow and high-quality releases.`,
    color:
      "from-orange-400 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-700 dark:to-orange-800",
    icon: <FiGitBranch color="red" />,
    category: "intermediate",
  },
  {
    name: "Tailwind CSS",
    level: 60,
    description: `Designed scalable and responsive interfaces using Tailwind’s utility classes.
      Achieved fast development cycles while maintaining pixel-perfect layouts.`,
    color:
      "from-teal-400 via-cyan-500 to-sky-500 dark:from-teal-600 dark:via-cyan-700 dark:to-sky-700",
    icon: "🌊",
    category: "intermediate",
  },
  {
    name: "SEO & Performance",
    level: 40,
    description: `Optimized Core Web Vitals, accessibility, and meta configurations.
      Improved page load times by 40% and boosted Lighthouse scores from 40 → 75.`,
    color:
      "from-green-400 via-emerald-500 to-green-600 dark:from-green-600 dark:via-emerald-700 dark:to-green-800",
    icon: "🔍",
    category: "intermediate",
  },
  {
    name: "Flutter",
    level: 30,
    description: `Contributed to the OneUpFit app using Flutter — implemented UI and page logic alongside the main Flutter team lead.
    Focused on building responsive layouts, managing widget trees, and connecting UI logic efficiently.`,
    color:
      "from-sky-400 via-blue-500 to-indigo-600 dark:from-sky-600 dark:via-blue-700 dark:to-indigo-800",
    icon: <FiSmartphone size={20} />,
    category: "intermediate",
  },
  {
    name: "React Native",
    level: 40,
    description: `Explored React Native for cross-platform mobile development.
    Built small prototypes to understand component structure, navigation, and styling differences from React web.`,
    color:
      "from-indigo-400 via-purple-500 to-violet-600 dark:from-indigo-600 dark:via-purple-700 dark:to-violet-800",
    icon: "📲",
    category: "intermediate",
  },

  {
    name: "WordPress",
    level: 45,
    description: `Customized themes, integrated plugins, and optimized CMS for client projects.
      Gained experience bridging front-end logic with WordPress backends.`,
    color:
      "from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-700 dark:via-indigo-800 dark:to-blue-900",
    icon: "📝",
    category: "intermediate",
  },
  {
    name: "Python",
    level: 60,
    description: `Created automation scripts, parsed data, and built basic backend utilities.
      Used for rapid prototyping and small-scale backend tasks.`,
    color:
      "from-amber-400 via-lime-500 to-green-500 dark:from-amber-600 dark:via-lime-700 dark:to-green-700",
    icon: "🐍",
    category: "intermediate",
  },
  {
    name: "Clean Code & Documentation",
    level: 70,
    description: `Followed best practices to write readable and maintainable code.
      Documented projects clearly for team collaboration and scalability.`,
    color:
      "from-violet-400 via-purple-500 to-indigo-500 dark:from-violet-600 dark:via-purple-700 dark:to-indigo-700",
    icon: "📋",
    category: "intermediate",
  },
  {
    name: "Node.js / Express / MongoDB",
    level: 25,
    description: `Used Node.js and Express to build backend logic for Chrome extensions and bots.
    Implemented basic REST APIs and MongoDB for lightweight data storage`,
    color:
      "from-green-500 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-800 dark:to-teal-800",
    icon: "🟢",
    category: "intermediate",
  },

  // 🧪 Beginner Level
  {
    name: "Testing (Jest / Cypress)",
    level: 28,
    description: `Learned unit testing, E2E testing, and test-driven development fundamentals.
      Applied basic tests in personal and small team projects.`,
    color:
      "from-red-400 via-rose-500 to-red-600 dark:from-red-600 dark:via-rose-700 dark:to-red-800",
    icon: "🧪",
    category: "beginner",
  },
  {
    name: "Docker / Kubernetes",
    level: 20,
    description: `Familiar with containerization, images, and orchestration basics.
      Explored Docker workflows for small projects and local development.`,
    color:
      "from-blue-400 via-sky-500 to-cyan-600 dark:from-blue-600 dark:via-sky-700 dark:to-cyan-800",
    icon: "🐳",
    category: "beginner",
  },
];

export const softSkills = [
  {
    title: "Teamwork",
    description: `Effectively collaborated with developers and designers in agile teams.
      Coordinated tasks, conducted code reviews, and ensured smooth communication
      to deliver Seed.Photo and Dynamo100 features on time.`,
    icon: "👥",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Mentorship",
    description: `Trained a junior front-end developer for 2 months,
      creating a learning roadmap, reviewing code, and guiding through React, TypeScript,
      and best practices in real project workflows.`,
    icon: "🎓",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    title: "Learning",
    description: `Continuously explore and apply new technologies like Node.js,
      Express, MongoDB, Next.js, TypeScript, Framer Motion,
      and Tailwind CSS in personal projects and production apps to improve skills and
      create innovative solutions.`,
    icon: "📚",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Problem Solving",
    description: `Analyzed complex challenges in NFT dashboards and Web3 integrations,
      proposed efficient solutions, and implemented optimized, scalable front-end code
      for better performance and user experience.`,
    icon: "🧩",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];
