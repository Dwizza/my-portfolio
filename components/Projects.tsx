"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "LogistechPro",
    period: "2025 - 2026",
    description: "Developed a comprehensive logistics management system to handle inventories, shipping/receiving flows, and supervision tasks. The system features a robust backend, reliable deployment packaging, and an optimized workflow for logistical operations.",
    tech: ["Spring Boot", "Maven", "Docker", "CI/CD", "Modular Architecture"],
    links: {
      githubs: [
        { label: "Frontend", url: "https://github.com/Dwizza/LogistechPro-Front" },
        { label: "Backend", url: "https://github.com/Dwizza/LogistechPro" }
      ],
      demo: "#"
    }
  },
  {
    title: "Fleet & Logistics Management",
    period: "2024 - 2025",
    description: "Built a web application for managing vehicles, drivers, and logistical operations. Features include activity tracking, user management, and data centralization to improve process efficiency. Developed RESTful APIs and a dynamic, responsive interface.",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "REST API", "Docker", "CI/CD"],
    links: {
      githubs: [
        { label: "Frontend", url: "https://github.com/Dwizza/GESTION-DE-FLOTE-ET-LOGISTIQUE-frontend-" },
        { label: "Backend", url: "https://github.com/Dwizza/GESTION-DE-FLOTTE-ET-LOGISTIQUE-backend-" }
      ],
      demo: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-brand-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, boxShadow: "0 20px 40px -15px rgba(59,130,246,0.3)" }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-brand-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 relative z-10 gap-4">
                <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400 shrink-0">
                  <Folder size={24} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.githubs.map((gh, idx) => (
                    <a
                      key={idx}
                      href={gh.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white rounded-full transition-all border border-slate-700/50 hover:border-slate-500"
                    >
                      <FaGithub size={14} />
                      <span>{gh.label}</span>
                    </a>
                  ))}
                  {project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 hover:text-brand-200 rounded-full transition-all border border-brand-500/20"
                    >
                      <ExternalLink size={14} />
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{project.title}</h3>
              <p className="text-brand-400 text-sm mb-4 font-mono">{project.period}</p>

              <p className="text-slate-400 leading-relaxed mb-8 relative z-10 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded text-brand-200">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
