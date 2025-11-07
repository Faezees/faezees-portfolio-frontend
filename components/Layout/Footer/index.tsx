"use client";
import { portfolioLinks, socialLinks } from "@/components/data/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Faezeesnaashari.pdf";
    link.setAttribute("download", "Faezeesnaashari.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 px-5 pt-20 dark:from-gray-950 dark:to-gray-900 sm:px-10 lg:px-32 lg:pt-24">
      {/* Animated Background Blobs */}
      <div className="animate-blob pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-400/10 mix-blend-multiply blur-3xl filter dark:mix-blend-normal" />
      <div className="animation-delay-2000 animate-blob pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 mix-blend-multiply blur-3xl filter dark:mix-blend-normal" />

      <div className="container relative mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Side - Brand & Social */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Link href="/" className="group inline-block">
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Image
                    src="/images/logo/final-dark.png"
                    alt="logo"
                    width={120}
                    height={30}
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/logo/final-light.png"
                    alt="logo"
                    width={120}
                    height={30}
                    className="hidden dark:block"
                  />
                  {/* Glow effect */}
                  <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                </div>
              </Link>
            </div>

            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Hi! I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-purple-400">
                Faeze
              </span>{" "}
              — a front-end developer passionate about creating modern web
              experiences using React, Next.js, and Flutter.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  aria-label={social.name}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:border-white/10 ${social.bgColor}`}
                >
                  {/* Icon */}
                  <i
                    className={`bi ${social.icon} text-xl text-gray-600 transition-all duration-300 group-hover:scale-110 dark:text-gray-300`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r ${social.color} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50`}
                  />

                  {/* Tooltip */}
                  <span
                    className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-200 dark:bg-gray-100 dark:text-gray-900 ${hoveredSocial === index ? "opacity-100" : ""}`}
                  >
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:pl-12">
            {/* Portfolio Links */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-black dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </span>
                Portfolio
              </h3>
              <ul className="space-y-3">
                {portfolioLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600 dark:bg-gray-600 dark:group-hover:bg-blue-400" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-black dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={handleDownloadResume}
                    className="group inline-flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-2 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-600 dark:bg-gray-600 dark:group-hover:bg-purple-400" />
                    Resume
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:faeze1377.es@gmail.com"
                    className="group inline-flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-2 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-600 dark:bg-gray-600 dark:group-hover:bg-purple-400" />
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 pb-8 sm:flex-row">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Made with{" "}
            <span className="inline-block animate-pulse text-red-500">❤️</span>{" "}
            by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-transparent dark:from-blue-400 dark:to-purple-400">
              Faeze Es
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="pointer-events-none absolute right-0 top-14 opacity-20">
        <svg width="55" height="99" viewBox="0 0 55 99" fill="none">
          <circle
            cx="49.5"
            cy="49.5"
            r="49.5"
            fill="url(#paint0_radial_footer)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_footer"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopColor="#3B82F6" stopOpacity="0.47" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-24 left-0 opacity-20">
        <svg width="79" height="94" viewBox="0 0 79 94" fill="none">
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_footer)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_footer"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" stopOpacity="0.62" />
              <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
