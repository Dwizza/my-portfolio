"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTooltipProps {
  content: string;
  children: React.ReactNode;
}

export function AnimatedTooltip({ content, children }: AnimatedTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center z-10 hover:z-[100]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.6 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="absolute -top-14 z-[100] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative flex min-w-max items-center justify-center rounded-lg bg-blue-950/90 px-3 py-1.5 text-xs font-mono font-medium text-blue-50 shadow-xl backdrop-blur-md border border-blue-500/30">
              {content}
              {/* Arrow */}
              <div className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-blue-500/30 bg-blue-950/90" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative">{children}</div>
    </div>
  );
}
