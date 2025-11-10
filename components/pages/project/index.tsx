"use client";

import { ProjectType } from "@/types/project";
import Link from "next/link";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
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
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-500 to-pink-500 opacity-0 blur transition-all duration-500 ${hover ? "opacity-20" : ""}`}
      />
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
            />

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

          {/* Badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
              {project.extra?.type}{" "}
            </span>
            {project.status === "coming-soon" ? (
              <span className="rounded-full bg-violet-200 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm dark:bg-violet-800 dark:text-gray-200">
                coming soon
              </span>
            ) : null}
            {project.extra?.note && (
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-3 py-1 text-xs font-semibold text-white">
                {project.extra.note}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 dark:bg-gray-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            View Details
            <FiChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <section className="relative px-5 py-20 sm:px-10 lg:px-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 mt-12 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore my portfolio of innovative solutions combining AI, web
            development, and creative design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
