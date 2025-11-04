"use client";

import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
import SectionTitle from "../Common/SectionTitle";

const Projects = () => {
  const [activeProject, setActiveProject] = useState("seed");

  const projects = {
    seed: {
      title: "Seed.Photo — NFT Photography Marketplace",
      description:
        "A blockchain-based platform for photographers to mint, list, and sell NFTs. Built with Next.js, Redux, web3 and smart contract integration.",
      video: "https://www.youtube.com/watch?v=YOUR_SEEDPHOTO_VIDEO_ID",
    },
    dynamo: {
      title: "Dynamo100 — Creative Web Platform",
      description:
        "Dynamo100 is a community-driven Web3 platform where users can earn D100 tokens by participating in various activities, challenges, and social or community-based projects, built with Next.js and Redux",
      video: "https://www.youtube.com/watch?v=YOUR_DYNAMO_VIDEO_ID",
    },
  };

  const current = projects[activeProject as keyof typeof projects];

  return (
    <section
      id="projects"
      className="relative z-10 bg-gray-50 py-20 dark:bg-gray-900 md:py-24 lg:py-28"
    >
      <div className="container">
        <Link href={"/projects"}>
          <SectionTitle
            title="Featured Projects"
            paragraph="Here are some of my favorite projects that combine technology, creativity, and user experience. Watch the videos to see them in action."
            center
            mb="70px"
          />

          <div className="mb-8 flex justify-center space-x-4">
            <button
              className={`rounded-md px-6 py-2 font-semibold ${
                activeProject === "seed"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveProject("seed")}
            >
              Seed.Photo
            </button>
            <button
              className={`rounded-md px-6 py-2 font-semibold ${
                activeProject === "dynamo"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveProject("dynamo")}
            >
              Dynamo100
            </button>
          </div>

          <div
            className="wow fadeInUp mx-auto max-w-[770px]"
            data-wow-delay=".15s"
          >
            <div className="mb-5 mt-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                {current.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {current.description}
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <ReactPlayer
                src="/images/me/faeze-esnaashari.mp4"
                width="100%"
                height="100%"
                controls
                playing={false}
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Projects;
