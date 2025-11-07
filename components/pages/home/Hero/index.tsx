"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white px-5 pb-16 pt-[120px] dark:bg-gray-900 sm:px-10 md:pb-[80px] md:pt-[150px] xl:px-32 xl:pb-[160px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[210px]"
    >
      {/* Animated Background Shape - Top Right */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="325.486"
              y1="122.87"
              x2="325.486"
              y2="482.87"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.3" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="191.659"
              y1="169.297"
              x2="191.659"
              y2="436.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.2" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text Section - Left */}
          <div className="w-full space-y-6 px-4 lg:w-1/2">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.1,
              }}
            >
              {/* <motion.span
                className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                👋 Welcome to my portfolio
              </motion.span> */}
            </motion.div>

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
              className="text-xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-4xl md:leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-md relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Faeze Esnaashari
                </span>
              </span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3,
              }}
              className="text-lg !leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl"
            >
              A passionate{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Front-End Developer
              </span>{" "}
              from Shiraz, Iran. I create modern, responsive, and user-friendly
              web applications using{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                Next.js
              </span>
              ,{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                React
              </span>
              , and{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                TypeScript
              </span>
              . I love transforming creative ideas into functional digital
              experiences.
            </motion.p>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.4,
              }}
              className="flex flex-col items-center justify-start gap-4 sm:flex-row"
            >
              {/* View Projects Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                >
                  <span className="relative z-10">💼 View Projects</span>
                  <motion.span
                    className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-blue-600"
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* About Me Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-transparent px-8 py-4 text-base font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  👩‍💻 About Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Tech Stack:
              </span>
              {["Next.js", "React", "TypeScript", "Tailwind"].map((tech, i) => (
                <motion.span
                  key={tech}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Profile Image - Right */}
          <div className="mt-12 flex w-full justify-center px-4 lg:mt-0 lg:w-1/2">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5,
              }}
              className="relative"
            >
              {/* Decorative Background Circles */}
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
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-2xl"
              />

              <motion.div
                whileHover={{
                  scale: 1.09,
                  rotate: [0, 10, 0],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  rotate: { duration: 0.5 },
                }}
                className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-blue-500 bg-gradient-to-br from-blue-100 to-blue-50 p-2 shadow-2xl dark:border-blue-400 dark:from-blue-900 dark:to-gray-800 sm:h-[420px] sm:w-[420px]"
              >
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/me/faeze-esnaashari.jpg"
                    alt="Faeze Esnaashari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-8 rounded-full bg-blue-500/20 p-3 shadow-lg backdrop-blur-md sm:-right-6 sm:top-12 sm:p-4"
              >
                <span className="text-2xl sm:text-3xl">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-4 bottom-16 rounded-full bg-blue-600/30 p-3 shadow-lg backdrop-blur-md sm:-left-14 sm:bottom-24 sm:p-4"
              >
                <span className="text-2xl sm:text-3xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-2 bottom-8 rounded-full bg-blue-400/30 p-3 shadow-lg backdrop-blur-md sm:-right-7 sm:bottom-12 sm:p-4"
              >
                <span className="text-2xl sm:text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Background Shape - Bottom Left */}
      <div>
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <circle
            opacity="0.8"
            cx="220.505"
            cy="65.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
