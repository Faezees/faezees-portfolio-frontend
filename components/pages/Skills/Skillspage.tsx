"use client";
import { skills, softSkills } from "@/components/data/skillspage";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [progress, setProgress] = useState<number[]>(skills.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const intervals: NodeJS.Timeout[] = [];

    setTimeout(() => {
      skills.forEach((skill, i) => {
        intervals[i] = setInterval(() => {
          setProgress((prev) => {
            const newProgress = [...prev];
            if (newProgress[i] < skill.level) {
              newProgress[i] += 2;
            } else {
              clearInterval(intervals[i]);
            }
            return newProgress;
          });
        }, 20);
      });
    }, 300);

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="slg:px-32 relative mb-16 overflow-hidden px-5 pt-0 sm:px-10 md:pt-20 lg:pt-28">
      {/* Animated Mesh Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50 opacity-60 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>

      {/* Animated Blobs */}
      <div className="animate-blob pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-400/20 mix-blend-multiply blur-3xl filter dark:mix-blend-normal"></div>
      <div className="animation-delay-2000 animate-blob bg-yellow-400/20 pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full mix-blend-multiply blur-3xl filter dark:mix-blend-normal"></div>
      <div className="animation-delay-4000 animate-blob pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 rounded-full bg-pink-400/20 mix-blend-multiply blur-3xl filter dark:mix-blend-normal"></div>

      <div className="container relative">
        {/* Title with Gradient */}
        <div
          className={`} mx-auto mb-16 mt-32 max-w-5xl text-center transition-all duration-1000 md:mt-24`}
        >
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-extrabold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 sm:text-5xl md:text-6xl">
            My Skills
          </h2>
          <div className="mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        </div>

        {/* Skills Grid with 3D Cards */}
        <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card with Glassmorphism */}
              <div className="relative h-[185px] overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 h-[185px] rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                ></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon and Name */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
                        {skill.icon}
                      </span>
                      <p className="text-lg font-bold text-black dark:text-white">
                        {skill.name}
                      </p>
                    </div>
                    {/* Percentage Badge */}
                    <div
                      className={`rounded-full bg-gradient-to-r ${skill.color} px-3 py-1 text-sm font-bold text-white shadow-lg`}
                    >
                      {progress[i]}%
                    </div>
                  </div>

                  {/* Modern Progress Bar */}
                  <div className="relative mb-3 h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    {/* Background shimmer */}
                    <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Progress fill */}
                    <div
                      className={`relative h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg transition-all duration-1000 ease-out`}
                      style={{ width: `${progress[i]}%` }}
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 animate-pulse rounded-full bg-gradient-to-r ${skill.color} opacity-50 blur-sm`}
                      ></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200">
                    {skill.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section with Bento Grid Style */}
        <div className="mx-auto max-w-5xl pb-10">
          <h3 className="mb-10 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Soft Skills
            </span>
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl border border-white/20 ${skill.bgColor} p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:border-white/10`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Animated gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                ></div>

                {/* Floating particles */}
                <div
                  className={`absolute right-4 top-4 h-2 w-2 animate-ping rounded-full bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-75`}
                ></div>
                <div
                  className={`absolute left-8 top-12 h-1.5 w-1.5 animate-ping rounded-full bg-gradient-to-r ${skill.gradient} opacity-0 delay-200 group-hover:opacity-75`}
                  style={{ animationDelay: "0.2s" }}
                ></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon with glow */}
                  <div className="mb-4 inline-flex">
                    <span className="relative text-6xl transition-all duration-500 group-hover:scale-110">
                      {skill.icon}
                      <span
                        className={`absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r ${skill.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`}
                      ></span>
                    </span>
                  </div>

                  {/* Title with gradient on hover */}
                  <h4
                    className={`mb-3 text-xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r md:text-2xl group-hover:${skill.gradient} group-hover:bg-clip-text`}
                  >
                    {skill.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white md:text-base">
                    {skill.description}
                  </p>

                  {/* Animated arrow */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                    <svg
                      className={`h-4 w-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Corner glow */}
                <div
                  className={`pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-tl ${skill.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative SVGs with animation */}
      <div className="animate-float-slow">
        <span className="absolute left-0 top-0 z-[-1] opacity-30">
          <svg width="287" height="254" viewBox="0 0 287 254" fill="none">
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_skills)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_skills"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1] opacity-30">
          <svg width="628" height="258" viewBox="0 0 628 258" fill="none">
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_skills2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_skills2"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EC4899" />
                <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default SkillsSection;
