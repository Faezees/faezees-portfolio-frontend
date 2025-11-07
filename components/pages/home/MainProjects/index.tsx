"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiCode, FiPlay } from "react-icons/fi";

const Projects = () => {
  const [activeProject, setActiveProject] = useState("seed");
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = {
    seed: {
      title: "Seed.Photo",
      subtitle: "NFT Photography Marketplace",
      description:
        "A blockchain-based platform for photographers to mint, list, and sell NFTs. Built with Next.js, Redux, web3 and smart contract integration.",
      video: "/images/me/faeze-esnaashari.mp4",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      color: "purple",
    },
    dynamo: {
      title: "Dynamo100",
      subtitle: "Creative Web Platform",
      description:
        "Dynamo100 is a community-driven Web3 platform where users can earn D100 tokens by participating in various activities, challenges, and social or community-based projects, built with Next.js and Redux",
      video: "/images/me/faeze-esnaashari.mp4",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      color: "blue",
    },
  };

  const current = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-50 px-5 py-20 dark:bg-gray-900 sm:px-10 lg:px-32 lg:py-36"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gray-50 bg-gradient-to-br blur-3xl dark:bg-gray-900"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-extrabold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 sm:text-5xl md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Here are some of my favorite projects that combine technology,
            creativity, and user experience. Watch the videos to see them in
            action.
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {Object.entries(projects).map(([key, project]) => (
            <motion.button
              key={key}
              onClick={() => {
                setActiveProject(key);
                setIsPlaying(false);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-2xl px-8 py-4 font-semibold transition-all ${
                activeProject === key
                  ? "text-white shadow-2xl"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {activeProject === key && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <FiCode className="text-lg" />
                {project.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mx-auto max-w-6xl"
          >
            {/* Project Info Card */}
            <motion.div
              className="mb-0 overflow-hidden rounded-3xl p-3 md:p-2"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title & Subtitle */}
              <div className="mb-6 grid justify-center">
                <motion.h3
                  animate={{ x: 0, opacity: 1 }}
                  className={`text-center mb-2 bg-gradient-to-r ${current.gradient} bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl`}
                >
                  {current.title}
                </motion.h3>

                <motion.p
                  animate={{ x: 0, opacity: 1 }}
                  className="text-center text-xl font-semibold text-gray-600 dark:text-gray-400"
                >
                  {current.subtitle}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                animate={{ x: 0, opacity: 1 }}
                className="mb-8 grid justify-center text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {current.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="group relative flex max-w-6xl justify-center overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Video Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-900">
              {!isPlaying ? (
                <motion.div
                  className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                  onClick={() => setIsPlaying(true)}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r ${current.gradient} shadow-2xl`}
                  >
                    <FiPlay className="ml-1 text-4xl text-white" />
                  </motion.div>
                </motion.div>
              ) : null}

              <video
                src={current.video}
                controls={isPlaying}
                className="h-full w-full object-cover"
                autoPlay={isPlaying}
              />
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r ${current.gradient} opacity-30 blur-2xl`}
            />
          </motion.div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:from-blue-700 hover:to-purple-700"
          >
            <span>Explore All Projects</span>
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

      <div className="absolute bottom-0 left-0 right-0 z-[1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Projects;
