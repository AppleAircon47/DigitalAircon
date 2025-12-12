"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    float: {
      y: [-10, 10, -10],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <main className="min-h-screen bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] flex flex-col justify-center items-center text-center px-4">
        <motion.div
          animate="float"
          variants={floatAnimation}
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate="float"
          variants={{
            ...floatAnimation,
            float: { ...floatAnimation.float, delay: 1 },
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"
        />

        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#1e40af] mb-6">
            404
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-gray-500 mb-8">
            It might have been removed, renamed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-linear-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            Go Back Home
          </Link>
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
