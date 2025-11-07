import AboutSectionOne from "@/components/pages/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Faezeh Esna_ashari ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
