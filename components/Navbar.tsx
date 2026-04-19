"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <nav className="glass px-6 py-2 rounded-full flex gap-2 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all rounded-full",
              "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
