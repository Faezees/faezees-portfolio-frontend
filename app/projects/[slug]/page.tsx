import { projectsData } from "@/components/data/projects";
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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Project Header */}
          <div className="mb-12">
            <div className="mb-6 mt-10 flex flex-wrap items-center gap-3">
              {/* {project.extra?.note && (
                <span className="rounded-full bg-green-500 px-4 py-1.5 text-sm font-semibold text-white">
                  {project.extra.note}
                </span>
              )} */}
            </div>

            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text pb-6 text-3xl font-extrabold text-transparent md:text-4xl">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
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
                <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
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

          {/* Project Details */}
          <div className="mb-12 overflow-hidden rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                {/* <LayersIcon /> */}
              </div>
              Project Details
            </h2>

            <div
              className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
