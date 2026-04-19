"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
    >
      <nav className="glass px-6 py-3 rounded-full flex gap-6 items-center hidden md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-white hover:text-glow transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
      {/* Mobile Nav could be added here later */}
    </motion.header>
  );
}
