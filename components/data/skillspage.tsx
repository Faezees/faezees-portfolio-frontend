import { FiCode, FiGitBranch, FiType } from "react-icons/fi";

export const skills = [
  // 💎 Advanced Level
  {
    name: "CSS3 / HTML5",
    level: 90,
    description:
      "Advanced layouts, animations, Flexbox, Grid, and semantic HTML mastery.",
    color:
      "from-blue-400 via-sky-500 to-indigo-600 dark:from-blue-600 dark:via-sky-700 dark:to-indigo-800",
    icon: <FiCode color="blue" />,
    category: "advanced",
  },
  {
    name: "JavaScript / TypeScript",
    level: 80,
    description:
      "Deep understanding of ES6+, async/await, closures, and modular architecture.",
    color:
      "from-amber-400 via-amber-500 to-orange-500 dark:from-amber-500 dark:via-amber-600 dark:to-orange-700",
    icon: <FiType color="orange" />,
    category: "advanced",
  },
  {
    name: "React.js / Next.js / Redux",
    level: 85,
    description:
      "Hooks, Context API, SSR/SSG, and performance optimization for scalable apps.",
    color:
      "from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-600 dark:via-blue-700 dark:to-indigo-800",
    icon: "⚛️",
    category: "advanced",
  },
  {
    name: "Responsive Design",
    level: 83,
    description:
      "Pixel-perfect mobile-first design with media queries and flexible layouts.",
    color:
      "from-pink-400 via-rose-500 to-red-500 dark:from-pink-600 dark:via-rose-700 dark:to-red-700",
    icon: "📱",
    category: "advanced",
  },
  {
    name: "Bootstrap / Sass (SCSS)",
    level: 75,
    description:
      "Custom components, grid systems, and preprocessor-based styling.",
    color:
      "from-purple-500 via-violet-500 to-purple-700 dark:from-purple-700 dark:via-violet-700 dark:to-purple-900",
    icon: "🅱️",
    category: "advanced",
  },

  // ⚙️ Intermediate Level
  {
    name: "Git & GitHub",
    level: 70,
    description:
      "Version control, branching strategies, and collaborative workflows.",
    color:
      "from-orange-400 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-700 dark:to-orange-800",
    icon: <FiGitBranch color="red" />,
    category: "intermediate",
  },
  {
    name: "Tailwind CSS",
    level: 70,
    description:
      "Utility-first styling with responsive design and theme customization.",
    color:
      "from-teal-400 via-cyan-500 to-sky-500 dark:from-teal-600 dark:via-cyan-700 dark:to-sky-700",
    icon: "🌊",
    category: "intermediate",
  },
  {
    name: "SEO & Performance",
    level: 80,
    description:
      "Core Web Vitals optimization, accessibility, and meta configuration.",
    color:
      "from-green-400 via-emerald-500 to-green-600 dark:from-green-600 dark:via-emerald-700 dark:to-green-800",
    icon: "🔍",
    category: "intermediate",
  },
  {
    name: "WordPress",
    level: 45,
    description:
      "Theme customization, plugin integration, and CMS optimization.",
    color:
      "from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-700 dark:via-indigo-800 dark:to-blue-900",
    icon: "📝",
    category: "intermediate",
  },
  {
    name: "Python",
    level: 60,
    description: "Automation scripts, data parsing, and backend basics.",
    color:
      "from-amber-400 via-lime-500 to-green-500 dark:from-amber-600 dark:via-lime-700 dark:to-green-700",
    icon: "🐍",
    category: "intermediate",
  },
  {
    name: "Clean Code & Documentation",
    level: 70,
    description:
      "Readable, maintainable code following best practices and standards.",
    color:
      "from-violet-400 via-purple-500 to-indigo-500 dark:from-violet-600 dark:via-purple-700 dark:to-indigo-700",
    icon: "📋",
    category: "intermediate",
  },
  {
    name: "Node.js / Express / MongoDB",
    level: 30,
    description:
      "Basic backend development and REST API design with NoSQL databases.",
    color:
      "from-green-500 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-800 dark:to-teal-800",
    icon: "🟢",
    category: "intermediate",
  },

  // 🧪 Beginner Level
  {
    name: "Testing (Jest / Cypress)",
    level: 28,
    description:
      "Intro to unit testing, E2E testing, and test-driven development.",
    color:
      "from-red-400 via-rose-500 to-red-600 dark:from-red-600 dark:via-rose-700 dark:to-red-800",
    icon: "🧪",
    category: "beginner",
  },
  {
    name: "Docker / Kubernetes",
    level: 20,
    description:
      "Fundamentals of containerization, images, and orchestration basics.",
    color:
      "from-blue-400 via-sky-500 to-cyan-600 dark:from-blue-600 dark:via-sky-700 dark:to-cyan-800",
    icon: "🐳",
    category: "beginner",
  },
];

export const softSkills = [
  {
    title: "Teamwork",
    description:
      "Collaborate effectively with team members, adapt in agile environments, and always support colleagues to achieve common goals.",
    icon: "👥",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Mentorship",
    description:
      "Guide junior developers, create learning roadmaps, and share knowledge through tutorials and code reviews.",
    icon: "🎓",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay updated with latest technologies, improve skills continuously, and explore innovative solutions.",
    icon: "📚",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Problem Solving",
    description:
      "Analyze challenges, propose solutions, and implement efficient code to solve complex problems.",
    icon: "🧩",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];
