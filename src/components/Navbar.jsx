import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shishir Jaiswal
        </h1>
        <div className="flex gap-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-500 transition ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}