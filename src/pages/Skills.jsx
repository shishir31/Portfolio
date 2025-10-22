import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
  { name: "C++ / DSA", icon: <FaCode className="text-blue-400 text-4xl" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center py-20">
      <motion.h2
        className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            {skill.icon}
            <h3 className="mt-3 font-semibold text-lg">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}