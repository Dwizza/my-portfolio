"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  trigger?: "hover" | "click";
}

export function FlipCard({ front, back, className, trigger = "hover" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (trigger === "click") {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={cn("relative w-full h-full perspective-1000", className)}
      onMouseEnter={() => trigger === "hover" && setIsFlipped(true)}
      onMouseLeave={() => trigger === "hover" && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden ring-1 ring-white/10 rounded-2xl overflow-hidden">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 ring-1 ring-blue-500/30 rounded-2xl overflow-hidden glass">
          <div className="w-full h-full flex items-center justify-center">
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
