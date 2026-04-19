"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  const words = ["Oussama Errahili.", "Software Engineer.", "Full Stack Developer."];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows with Floating Animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 animate-float-delayed" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-500 font-mono text-xs tracking-wider uppercase">Available for new opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] min-h-[1.2em]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                <Typewriter words={words} className="inline-block" />
              </span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground font-light tracking-tight">
              Crafting Exceptional Digital Experiences.
            </motion.h2>
          </div>

          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            I craft high-performance, scalable web applications with a focus on 
            clean architecture and exceptional user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 h-12 bg-blue-500 hover:bg-blue-600 transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 glass hover:bg-blue-500/10 border-white/10 hover:border-blue-500/50 transition-all group">
                <a href="/oussama_errahili_cv.pdf" download="Oussama_Errahili_CV.pdf">
                  Download CV
                  <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8 border-t border-white/5">
            <a href="https://github.com/Dwizza" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oussama-errahili-280553331/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="hidden lg:flex justify-end relative"
        >
           <div className="relative w-full max-w-md aspect-square glass p-8 group">
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-blue-500/50 transition-all group-hover:w-16 group-hover:h-16" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-blue-500/50 transition-all group-hover:w-16 group-hover:h-16" />
              
              <div className="w-full h-full bg-blue-500/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <pre className="font-mono text-blue-500/90 text-sm leading-relaxed relative z-10">
{`const developer = {
  name: "Oussama",
  passion: "FullStack",
  mission: "Excellence",
  status: "Optimizing..."
};`}
                </pre>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
