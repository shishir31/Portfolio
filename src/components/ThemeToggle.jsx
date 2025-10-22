import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-5 top-5 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}