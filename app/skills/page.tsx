import SkillsSection from "@/components/Skills/Skillspage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Page ",
  description: "This is Skill Page ",
  // other metadata
};

const SkillPage = () => {
  return (
    <>
      <SkillsSection />
    </>
  );
};

export default SkillPage;
