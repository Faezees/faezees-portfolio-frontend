"use client";
import { mainSkillsData } from "@/components/data/mainSkillsData";
import { motion } from "framer-motion";
import { SingleFeature } from "./SingleFeature";

const MainSkills = () => {
  return (
    <section
      id="main-skills"
      className="relative overflow-hidden bg-gray-50 bg-gradient-to-b px-5 dark:bg-gray-900 sm:px-10 md:py-28 lg:px-32 lg:py-36"
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="pt-5 pb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-extrabold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 sm:text-5xl md:text-6xl">
            Main Skills
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Here are my main technical skills and tools I use most often to
            build modern, scalable, and efficient web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainSkillsData.map((feature, index) => (
            <SingleFeature key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/skills"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:from-blue-700 hover:to-purple-700"
          >
            <span>Explore All Skills</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSkills;
