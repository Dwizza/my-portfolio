"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    title: "FullStack Developer Intern",
    company: "TweadUp, Agadir",
    period: "June 2025 - August 2025",
    description: "Applied best practices in front-end and back-end development. Participated in technical exchanges and produced an individual project autonomously in a professional environment.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Web & Mobile Development (2nd Year)",
    company: "YouCode UM6P, Youssoufia",
    period: "2024 - 2026",
    description: "Intensive training program focused on modern full-stack technologies, agile methodologies, and real-world project creation.",
    icon: GraduationCap,
    type: "edu"
  },
  {
    title: "International Heavy Truck Driver",
    company: "B.P. Centre SUD, Agadir",
    period: "2022 - 2024",
    description: "Transported goods across multiple African countries. Ensured strict respect for safety standards and delivery deadlines, developing strong autonomy and stress management.",
    icon: Briefcase,
    type: "work"
  },
  {
    title: "Diploma in Electromechanics",
    company: "OFPPT",
    period: "2014 - 2016",
    description: "Specialized in automated systems, laying the foundation for logical problem-solving and systems thinking.",
    icon: GraduationCap,
    type: "edu"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-brand-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative border-l-2 border-brand-500/30 ml-3 md:ml-0 md:pl-0"
          >
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
              >
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="md:col-span-1 hidden md:block text-right pt-1">
                    <span className="text-brand-400 font-mono text-sm block transform transition-transform group-hover:scale-110 origin-right">{exp.period}</span>
                  </div>

                  <div className="md:col-span-4 relative">
                    <motion.div
                      whileHover={{ scale: 1.5, backgroundColor: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute -left-10 md:-left-[29px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-brand-500 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-brand-400 rounded-full" />
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="glass-card p-6 border-l-4 border-l-brand-500 rounded-l-none transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-slate-400">
                          <exp.icon size={20} />
                        </span>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <div className="md:hidden text-brand-400 font-mono text-sm mb-3">{exp.period}</div>
                      <h4 className="text-slate-300 font-medium mb-3">{exp.company}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
