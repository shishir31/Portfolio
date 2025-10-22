import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Shishir Jaiswal 👋
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            2000,
            "Coding Enthusiast 🧠",
            2000,
            "Problem Solver 🔍",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200"
        />
      </motion.div>

      <motion.p
        className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I love building modern web applications using MERN stack and exploring
        Python, C++, and DSA to create real-world solutions.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        {/* Download Resume Button */}
        <a
          href="YOUR_RESUME_LINK_HERE"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:bg-blue-700 transition-all duration-300"
        >
          <FaDownload /> Download Resume
        </a>

        {/* Contact Me Button */}
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:bg-purple-700 transition-all duration-300"
        >
          <MdEmail /> Contact Me
        </Link>
      </motion.div>
    </section>
  );
}