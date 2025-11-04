import ProjectsSection from "@/components/project";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page ",
  description: "This is Projects Page ",
  // other metadata
};

const ProjectPage = () => {
  return (
    <>
      <ProjectsSection />
    </>
  );
};

export default ProjectPage;
