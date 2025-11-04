"use client";
import { useEffect, useState } from "react";

const skills = [
  {
    name: "React.js / Next.js / Redux",
    level: 90,
    description:
      "Experienced in building scalable SPAs and SSR apps using Next.js",
  },
  {
    name: "TypeScript & Tailwind CSS",
    level: 85,
    description: "Strongly typed code and modern responsive designs",
  },
  {
    name: "Responsive Design",
    level: 80,
    description: "Creating UI that works on mobile, tablet, and desktop",
  },
  {
    name: "Node.js & Express.js",
    level: 50,
    description: "Backend APIs, server-side rendering, and routing",
  },
  {
    name: "WordPress & SEO Optimization",
    level: 45,
    description: "Custom themes, plugins, and SEO-friendly code",
  },
  {
    name: "Git / GitHub Collaboration",
    level: 85,
    description: "Version control and collaborative development workflows",
  },
  {
    name: "Clean Code & Documentation",
    level: 90,
    description: "Maintainable code and clear documentation",
  },
];

const SkillsSection = () => {
  const [progress, setProgress] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    skills.forEach((skill, i) => {
      intervals[i] = setInterval(() => {
        setProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[i] < skill.level) newProgress[i] += 1;
          return newProgress;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="mb-16 pt-0 md:pt-20 lg:pt-28">
      <div className="container">
        <h2 className="mx-auto mb-12 mt-32 grid max-w-5xl grid-cols-1 gap-6 text-left text-3xl font-bold text-black dark:text-white md:mt-24 md:grid-cols-2">
          My Skills
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <p className="mb-1 text-lg font-medium text-black dark:text-white">
                {skill.name}
              </p>
              <div className="h-4 w-full rounded-full bg-gray-300 dark:bg-gray-700">
                <div
                  className="h-4 rounded-full bg-blue-500 transition-all duration-500 group-hover:bg-blue-400"
                  style={{ width: `${progress[i]}%` }}
                  title={skill.description}
                />
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Box 1 */}
          <div className="relative rounded-lg bg-white px-6 py-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-600">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
              Teamwork
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Collaborate effectively with team members, adapt in agile
              environments, and always support colleagues to achieve common
              goals.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative rounded-lg bg-white px-6 py-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-green-100 p-3 text-green-600">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm-4 2v6h8v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4z" />
                </svg>
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
              Mentorship
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Guide junior developers, create learning roadmaps, and share
              knowledge through tutorials and code reviews.
            </p>
          </div>

          {/* Box 3 */}
          <div className="relative rounded-lg bg-white px-6 py-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-slate-100 p-3 text-slate-600">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
                </svg>
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
              Continuous Learning
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Stay updated with latest technologies, improve skills
              continuously, and explore innovative solutions.
            </p>
          </div>

          {/* Box 4 */}
          <div className="relative rounded-lg bg-white px-6 py-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-purple-100 p-3 text-purple-600">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.81L15.19 9l4.41.64-3.19 3.11.75 4.37L12 16.9 7.83 21l.75-4.37-3.19-3.11 4.41-.64L12 4.81z" />
                </svg>
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-black dark:text-white">
              Problem Solving
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Analyze challenges, propose solutions, and implement efficient
              code to solve complex problems.
            </p>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default SkillsSection;
