import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-lg mx-auto mt-24 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg dark:bg-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg dark:bg-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded-lg h-32 dark:bg-gray-700"
        ></textarea>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}