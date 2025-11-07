import {
  SiGit,
  SiGoogleanalytics,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export const mainSkillsData = [
  {
    id: 1,
    icon: <SiNextdotjs className="text-4xl" />,
    title: "Next.js & React",
    paragraph:
      "Building fast, SEO-friendly, and scalable web applications using React and Next.js. Experienced with SSR, API routes, and component-based design.",
    color: "from-gray-600 to-black",
    glow: "rgba(0, 0, 0, 0.5)",
  },
  {
    id: 2,
    icon: <SiTailwindcss className="text-4xl" />,
    title: "CSS, Sass & Tailwind",
    paragraph:
      "Crafting beautiful, responsive, and maintainable UI using Tailwind CSS, SCSS, and modern CSS3 animations for perfect cross-device layouts.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.5)",
  },
  {
    id: 3,
    icon: <SiRedux className="text-4xl" />,
    title: "Redux & TypeScript",
    paragraph:
      "State management and type-safe code using Redux Toolkit and TypeScript, ensuring scalable and bug-free frontend architecture.",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.5)",
  },
  {
    id: 4,
    icon: <SiNodedotjs className="text-4xl" />,
    title: "Node.js & Express.js",
    paragraph:
      "Developing REST APIs using Node.js and Express.js, integrating MongoDB and creating efficient full-stack applications.",
    color: "from-green-400 to-emerald-600",
    glow: "rgba(34, 197, 94, 0.5)",
  },
  {
    id: 5,
    icon: <SiGoogleanalytics className="text-4xl" />,
    title: "SEO & Performance",
    paragraph:
      "Improving website visibility and performance using technical SEO, structured metadata, and Core Web Vitals optimization.",
    color: "from-orange-400 to-red-500",
    glow: "rgba(249, 115, 22, 0.5)",
  },
  {
    id: 6,
    icon: <SiGit className="text-4xl" />,
    title: "Git & Clean Code",
    paragraph:
      "Version control and collaboration with Git. Writing clean, maintainable, and reusable code following best practices and code reviews.",
    color: "from-red-500 to-rose-600",
    glow: "rgba(239, 68, 68, 0.5)",
  },
];
