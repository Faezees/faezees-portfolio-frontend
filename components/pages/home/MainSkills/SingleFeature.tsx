"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export const SingleFeature = ({ feature, index }) => {
  const { icon, title, paragraph, color, glow } = feature;
  const [isHovered, setIsHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"],
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setMousePosition({ x: mouseX, y: mouseY });
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <motion.div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 dark:bg-gray-800">
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 transition duration-200 ease-out"
            style={{
              background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glow}, transparent 100%)`,
            }}
          />
        )}
        {/* Content */}
        <div className="relative" style={{ transform: "translateZ(50px)" }}>
          {/* Icon container with 3D effect */}
          <motion.div
            animate={{
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} p-3 text-white shadow-2xl`}
            style={{
              transformStyle: "preserve-3d",
              boxShadow: isHovered ? `0 15px 35px ${glow}` : "none",
            }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <motion.h3
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
          >
            {paragraph}
          </motion.p>

          {/* Hover indicator */}
          <motion.div
            animate={{
              width: isHovered ? "100%" : "0%",
            }}
            transition={{ duration: 0.3 }}
            className={`mt-6 h-1 rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
