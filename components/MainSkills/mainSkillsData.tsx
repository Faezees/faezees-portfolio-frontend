import { Feature } from "@/types/feature";
import {
  SiCss3,
  SiGit,
  SiGoogleanalytics,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const mainSkillsData: Feature[] = [
  {
    id: 1,
    icon: <SiNextdotjs className="text-4xl text-gray-900 dark:text-white" />,
    title: "Next.js & React",
    paragraph:
      "Building fast, SEO-friendly, and scalable web applications using React and Next.js. Experienced with SSR, API routes, and component-based design.",
  },
  {
    id: 2,
    icon: (
      <div className="flex items-center space-x-2">
        <SiTailwindcss className="text-4xl text-cyan-500" />
      </div>
    ),
    title: "CSS, Sass & Tailwind",
    paragraph:
      "Crafting beautiful, responsive, and maintainable UI using Tailwind CSS, SCSS, and modern CSS3 animations for perfect cross-device layouts.",
  },
  {
    id: 3,
    icon: (
      <div className="flex items-center space-x-2">
        <SiRedux className="text-4xl text-purple-600" />

      </div>
    ),
    title: "Redux & TypeScript",
    paragraph:
      "State management and type-safe code using Redux Toolkit and TypeScript, ensuring scalable and bug-free frontend architecture.",
  },
  {
    id: 4,
    icon: (
      <div className="flex items-center space-x-2">
        <SiNodedotjs className="text-4xl text-green-600" />
      </div>
    ),
    title: "Node.js & Express.js",
    paragraph:
      "Developing REST APIs using Node.js and Express.js, integrating MongoDB and creating efficient full-stack applications.",
  },
  {
    id: 5,
    icon: <SiGoogleanalytics className="text-4xl text-orange-500" />,
    title: "SEO & Performance",
    paragraph:
      "Improving website visibility and performance using technical SEO, structured metadata, and Core Web Vitals optimization.",
  },
  {
    id: 6,
    icon: (
      <div className="flex items-center space-x-2">
        <SiGit className="text-4xl text-red-500" />
        {/* <SiCodereview className="text-yellow-500 text-4xl" /> */}
      </div>
    ),
    title: "Git & Clean Code",
    paragraph:
      "Version control and collaboration with Git. Writing clean, maintainable, and reusable code following best practices and code reviews.",
  },
];

export default mainSkillsData;
