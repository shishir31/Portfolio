import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m <strong>Shishir Jaiswal</strong>, a passionate{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          Full Stack Developer
        </span>{" "}
        who enjoys crafting clean, efficient, and scalable web solutions.  
        I love working with the{" "}
        <span className="text-purple-600 dark:text-purple-400 font-semibold">
          MERN stack
        </span>{" "}
        and exploring technologies like <strong>Python, C++, and DSA</strong> to
        build projects that make an impact.
      </motion.p>

      <motion.div
        className="mt-12 grid sm:grid-cols-2 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          { title: "Education", desc: "B.Tech in ECE-IOT Engineering" },
          { title: "Interest", desc: "Web Development, Problem Solving, AI" },
          { title: "Goal", desc: "To become a top-tier Software Engineer" },
          { title: "Hobbies", desc: "Coding, Music, Learning" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-purple-400">
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}