// app/projects/[slug]/page.tsx  (Next.js App Router example)

import { projectsData } from "@/components/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ app/projects/[slug]/page.tsx

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // find project - if you moved data into /data/projectsData.ts export default projects;
  const project = projectsData.find((p) => p.slug === slug);
  console.log("ProjectPage slug:", slug, "project:", project, projectsData);
  if (!project) return notFound();

  return (
    <main className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 mt-16 text-4xl font-bold text-black dark:text-white">
          {project.title}
        </h1>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {project.shortDescription || "Description coming soon."}
        </p>

        {/* Image / Video area */}
        <div className="mb-8">
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
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-300">
                No media yet
              </span>
            </div>
          )}
        </div>

        {/* More details - left for you to fill */}
        <section className="mb-8">
          <h3 className="mb-2 text-2xl font-semibold text-black dark:text-white">
            Project Details
          </h3>
          <div
            className="leading-loose text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: project.longDescription }}
          ></div>
        </section>
        {/*
        <section>
          <h3 className="mb-2 text-2xl font-semibold text-black dark:text-white">
            Media & Resources
          </h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
            <li>Source code / repo: —</li>
            <li>Design mockups: —</li>
            <li>Video demo: —</li>
          </ul>
        </section> */}
      </div>
    </main>
  );
}
