"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 border-b border-neutral-900">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">Open for work</span>
          </div>

          <div>
            <h1 className="heading-lg">Oussama <br/>Errahili.</h1>
            <h2 className="text-2xl mt-4 text-neutral-400 font-light tracking-wide">
              Full Stack Software Engineer
            </h2>
          </div>

          <p className="text-muted max-w-lg">
            I build scalable, modern web applications from the ground up. Focused on clean code, robust backend systems, and perfect user interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/oussama_errahili_cv.pdf" download="Oussama_Errahili_CV.pdf" className="btn-outline">
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-neutral-800">
            <a href="https://github.com/Dwizza" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/oussama-errahili-280553331/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Clean minimal visual graphic instead of AI UI */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="hidden lg:flex justify-end p-8"
        >
           <div className="relative w-full max-w-sm aspect-square border border-neutral-800 flex items-center justify-center bg-[#121212]">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500 -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500 translate-x-1 translate-y-1" />
              <pre className="font-mono text-emerald-500 text-sm p-6 overflow-hidden">
{`const engineer = {
  stack: [
    "Next.js",
    "TailwindCSS",
    "Spring Boot",
    "PostgreSQL"
  ],
  driven: true
};

engineer.build();`}
              </pre>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
