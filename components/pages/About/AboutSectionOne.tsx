"use client";
import { experiences } from "@/components/data/about";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const AboutSectionOne = () => {
  const skills = [
    { text: "React.js / Next.js / Redux", delay: 0.1 },
    { text: "TypeScript & Tailwind CSS", delay: 0.15 },
    { text: "Responsive Design", delay: 0.2 },
    { text: "Sass (SCSS) & Bootstrap", delay: 0.25 },
    { text: "Node.js & Express.js", delay: 0.3 },
    { text: "WordPress & SEO Optimization", delay: 0.35 },
    { text: "Git / GitHub Collaboration", delay: 0.4 },
    { text: "Clean Code & Documentation", delay: 0.45 },
  ];

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-sm font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <FiCheck />
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-20 dark:bg-gray-900 sm:px-10 md:py-28 lg:px-32 lg:py-36"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-0 -z-10 opacity-10">
        <svg width="287" height="254" viewBox="0 0 287 254" fill="none">
          <path
            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
            fill="url(#paint0_linear_about1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_about1"
              x1="-40.5"
              y1="117"
              x2="301.926"
              y2="-97.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="grid items-center justify-between gap-10 lg:flex">
            <div className="w-full lg:w-1/2">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-3xl md:mt-0">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Faeze Esnaashari
                  </span>
                </h2>
                <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  <span className="mb-2 block">
                    Hi, I’m{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Faeze Esnaashari
                    </span>{" "}
                    — a Front-End Developer based in{" "}
                    <span className="font-medium">Shiraz, Iran</span>.
                  </span>

                  <span className="mb-2 block">
                    I’m passionate about crafting{" "}
                    <span className="font-medium">
                      modern, responsive, and meaningful
                    </span>{" "}
                    digital experiences that bring ideas to life with both
                    creativity and technical precision.
                  </span>

                  <span className="mb-2 block">
                    With over{" "}
                    <span className="font-medium">4 years of experience</span>,
                    I build fast, scalable, and user-centered products using
                    <span className="font-semibold text-sky-600 dark:text-sky-400">
                      {" "}
                      React
                    </span>
                    ,
                    <span className="font-semibold text-sky-600 dark:text-sky-400">
                      {" "}
                      Next.js
                    </span>
                    , and
                    <span className="font-semibold text-sky-600 dark:text-sky-400">
                      {" "}
                      TypeScript
                    </span>{" "}
                    — always aiming for clean architecture and smooth
                    performance.
                  </span>

                  <span className="mb-2 block">
                    Outside of coding, I enjoy{" "}
                    <span className="font-medium">mountaineering</span>,
                    <span className="font-medium"> running</span>, and
                    <span className="font-medium">
                      {" "}
                      creating content for Instagram
                    </span>
                    , because staying active and creative keeps me inspired and
                    balanced.
                  </span>

                  <span className="mt-3 block italic text-gray-500 dark:text-gray-400">
                    “Code for clarity, design for empathy.”
                  </span>
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skill.delay, duration: 0.5 }}
                      whileHover={{ x: 15, scale: 1.02 }}
                      className="flex items-center gap-0 rounded-xl"
                    >
                      <List text={skill.text} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto flex justify-center"
              >
                <div className="relative">
                  {/* Decorative circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-3xl"
                  />

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl dark:border-blue-400 sm:h-[350px] sm:w-[350px]"
                  >
                    <Image
                      src="/images/me/faeze-esnaashari6.jpg"
                      alt="Faeze Esnaashari"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -right-4 top-8 rounded-2xl bg-white/10 p-4 shadow-xl backdrop-blur-md dark:bg-gray-800/10"
                  >
                    <div className="flex items-center justify-center gap-2 text-center">
                      <div className="text-md font-bold text-blue-600 sm:text-2xl">
                        +3
                      </div>
                      <div className="text-sm text-gray-900 dark:text-gray-400">
                        Years Exp
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute -left-10 bottom-16 rounded-2xl bg-white/10 p-4 shadow-xl backdrop-blur-md dark:bg-gray-800/10"
                  >
                    <div className="flex items-center justify-center gap-2 text-center">
                      <div className="text-md font-bold text-purple-600 sm:text-2xl">
                        +5
                      </div>
                      <div className="text-sm text-gray-800 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVGs with Animation */}
      <div>
        <span className="animate-float absolute left-0 top-0 z-[1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span
          className="animate-float absolute right-0 top-0 z-[1]"
          style={{ animationDelay: "1s" }}
        >
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

const AboutSectionTwo = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-5 py-10 dark:bg-gray-900 sm:px-10 lg:px-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center justify-center gap-12 lg:flex lg:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-[450px]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-2xl" />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src="/images/about/code.jpg"
                  alt="coding workspace"
                  fill
                  className="object-cover dark:hidden"
                />
                <Image
                  src="/images/about/code2.jpg"
                  alt="coding workspace dark"
                  fill
                  className="hidden object-cover dark:block"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ x: 20, scale: 1.08 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all dark:bg-gray-800"
                >
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${exp.gradient}`}
                  />

                  {/* Icon */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${exp.gradient} text-xl text-white shadow-lg`}
                    >
                      {exp.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-md mb-3 font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-loose text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>

                  {/* Hover effect */}
                  <motion.div
                    className={`absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-gradient-to-tl ${exp.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutSections() {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
