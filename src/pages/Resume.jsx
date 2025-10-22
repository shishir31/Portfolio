import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <motion.h2
        className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Download my latest resume to explore my experience, projects, and technical background.
      </motion.p>

      <motion.a
        href="YOUR_RESUME_LINK_HERE"
        download
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FaDownload /> Download Resume
      </motion.a>
    </section>
  );
}