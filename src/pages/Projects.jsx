import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Airbnb Clone",
      desc: "Full-stack web app where users can list and book rental homes using the MERN stack.",
      tech: "React, Node.js, MongoDB, Express",
      link: "https://www.linkedin.com/posts/shishir-jaiswal-671385286_airbnb-clone-web-application-built-a-web-activity-7341926984731529218-DUoj?utm_source=share&utm_medium=member_android&rcm=ACoAAEV3cXUBZmv6GVqnj7JclmofcSz7oSSYZY0",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React, Tailwind CSS, and Framer Motion animations.",
      tech: "React, Tailwind, Framer Motion",
      link: "https://github.com/shishir31/Portfolio.git6",
    },
   
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-purple-400">
              {p.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{p.desc}</p>
            <p className="text-sm text-gray-500 mb-4">{p.tech}</p>
            <a
              href={p.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
