import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/MainProjects";
import MainSkills from "@/components/MainSkills";
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
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
