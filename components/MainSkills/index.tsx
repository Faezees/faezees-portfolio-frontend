import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import mainSkillsData from "./mainSkillsData";

const MainSkills = () => {
  return (
    <section
      id="main-skills"
      className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28"
    >
      <div className="container">
        <Link href={"/skills"}>
          <SectionTitle
            title="Main Skills"
            paragraph="Here are my main technical skills and tools I use most often to build modern, scalable, and efficient web applications."
            center
          />
        </Link>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {mainSkillsData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSkills;
