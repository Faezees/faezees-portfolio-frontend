export type ProjectType = {
  title: string;
  slug: string; // used for project detail route /projects/[slug]
  shortDescription?: string; // keep empty to fill later
  imageSrc?: string; // relative path in /public or external URL
  imageAlt?: string;
  videoUrl?: string; // YouTube URL or hosted MP4 (optional)
  status?: "live" | "coming-soon" | "project"; // for RAG course etc.
  longDescription?: string;
  extra?: {
    type?: "mobile" | "web" | "extension" | "course";
    note?: string;
  };
};
