"use client";

import ScrollToTop from "@/components/Common/ScrollToTop";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
// import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />

          <motion.div
            id="scroll-indicator"
            style={{
              scaleX,
              position: "fixed",
              top: 100,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              zIndex: 9999,
              background: "linear-gradient(90deg, #4A6CF7, #00F9bf)",
              boxShadow: "0 0 10px rgba(74, 108, 247, 0.7)",
              borderRadius: 5,
            }}
          />

          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
