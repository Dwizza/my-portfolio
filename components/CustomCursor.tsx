"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If hovering over interactive elements, we can slightly enlarge or change opacity
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Square (Trails slightly behind) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 z-[10000] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 16, // 32/2
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.3 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 750,
          damping: 40,
          mass: 0.1
        }}
      />

      {/* Inner Dot (Exact position) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white z-[10000] pointer-events-none hidden md:block rounded-sm"
        animate={{
          x: mousePosition.x - 3, // 6/2
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1
        }}
        transition={{
          type: "tween",
          duration: 0
        }}
      />
    </>
  );
}
