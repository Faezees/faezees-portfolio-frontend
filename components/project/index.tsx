// app/components/ProjectsSection.tsx  (or components/ProjectsSection.tsx)
// Usage: import ProjectsSection from "@/components/ProjectsSection";

"use client";

import { ProjectType } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectsData } from "../data/projects";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block transform rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 dark:bg-gray-800"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700">
            <span className="text-gray-500 dark:text-gray-300">No image</span>
          </div>
        )}

        {/* status badge */}
        {/* <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${
            project.status === "coming-soon"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {project.status === "coming-soon" ? "Coming soon" : "Live"}
        </span> */}

        {/* play overlay if video exists */}
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-transform group-hover:scale-110">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                className="text-blue-600"
              >
                <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
          {project.title}
        </h3>
        <p className="mb-12 min-h-[48px] text-sm leading-loose text-gray-600 dark:text-gray-300">
          {project.shortDescription || "—"} {/* keep empty to fill later */}
        </p>

        <div className="absolute bottom-3 w-full pe-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-xs font-medium dark:bg-slate-700">
                {project.extra?.type ?? "project"}
              </span>
              {project.extra?.note && (
                <span className="text-xs text-gray-400">
                  • {project.extra.note}
                </span>
              )}
            </div>

            <button className="text-block rounded-md border-blue-50 bg-blue-300 p-2 text-sm font-medium dark:bg-blue-800 dark:text-white">
              View details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-full text-left">
          <h2 className="mb-3 mt-20 text-3xl font-bold text-black dark:text-white">
            Projects
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
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
