"use client";

import { ProjectType } from "@/types/project";
import Link from "next/link";
import { useState } from "react";
import { projectsData } from "../../data/projects";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative transform transition-all duration-700 ${
        hover ? "z-10" : ""
      }`}
      style={{ transitionDelay: `${100}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30`}
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/70">
        {/* Image Section */}
        <div className="relative h-[180px] w-full overflow-hidden">
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:rotate-1 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Play Button for Videos */}
          {project.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-125 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-1 text-gray-800 group-hover:text-white"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </div>
            </div>
          )}

          {/* Floating Particles */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute right-8 top-8 h-2 w-2 animate-ping rounded-full bg-blue-400" />
            <div
              className="absolute bottom-12 left-12 h-1.5 w-1.5 animate-ping rounded-full bg-purple-400"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="absolute right-16 top-24 h-1 w-1 animate-ping rounded-full bg-pink-400"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="h-[290px] p-6">
          <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent dark:text-white">
            {project.title}
          </h3>

          <p className="mb-16 min-h-[48px] text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100">
            {project.shortDescription || "—"}
          </p>

          {/* Footer */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                {project.extra?.type ?? "Project"}
              </span>
              {project.extra?.note && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {project.extra.note}
                </span>
              )}
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </button>
          </div>
        </div>

        {/* Corner Decoration */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-28 px-5 sm:px-10 lg:px-32">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-full text-center pt-5">
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-extrabold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 sm:text-5xl md:text-6xl">
            Projects
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Here are some of my notable projects. Click any card to see full
            details and media (images or videos). Fill each project's
            description/image/video in the data array above.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.slice(0, 6).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
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
    </section>
  );
};

export default ProjectsSection;
