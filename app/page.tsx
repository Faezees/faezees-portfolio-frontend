import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/MainProjects";
import MainSkills from "@/components/pages/home/MainSkills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "This is portfolio Home page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <MainSkills />
      <Projects />
      <Contact />
    </>
  );
}
