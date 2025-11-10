import ProjectTabs from "@/components/Common/projectsTab";
import { projectsData } from "@/components/data/projects";
import { Lightbulb, Trophy, User } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative grid min-h-screen justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 px-5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-10 lg:px-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 animate-pulse rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900" />
        <div className="absolute -right-40 top-96 h-96 w-96 animate-pulse rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900" />
      </div>

      <div className="max-w-7xl py-12">
        {/* Hero Section */}
        <div className="mb-12 mt-20">
          <h1 className="mb-4 flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
            {project.title}{" "}
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
              {project.extra?.type}
            </span>
          </h1>

          <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
            {project.shortDescription}
          </p>
        </div>

        {/* Media Section */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {project.videoUrl ? (
              // If it's a YouTube URL we embed an iframe; otherwise you can use <video>
              project.videoUrl.includes("youtube") ||
              project.videoUrl.includes("youtu.be") ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={project.videoUrl.replace("watch?v=", "embed/")}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  controls
                  className="w-screen rounded-xl"
                  src={project.videoUrl}
                />
              )
            ) : project.imageSrc ? (
              <div className="relative h-[500px] w-auto overflow-hidden rounded-xl">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-96 items-center justify-center bg-gray-100 dark:bg-gray-800">
                {/* <CodeIcon /> */}
              </div>
            )}

            {/* Glow Effect */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-2xl" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center gap-2">
              <div className="mb-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <User className="h-3 w-3" />
              </div>
              <h3 className="mb-0 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Role
              </h3>
            </div>
            <p className="font-sm text-base text-gray-900 dark:text-white">
              {project.role}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 flex items-center gap-2">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <Lightbulb className="h-3 w-3" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Challenge
              </h3>
            </div>
            <p className="font-sm text-base text-gray-900 dark:text-white">
              {project.challenge}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 flex items-center gap-2">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <Trophy className="h-3 w-3" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Result
              </h3>
            </div>
            <p className="font-sm text-base text-gray-900 dark:text-white">
              {project.result}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <ProjectTabs
          longDescription={project.longDescription}
          technologies={project.technologies}
        />
      </div>
    </section>
  );
}
