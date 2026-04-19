"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16 px-4 md:px-0 text-center md:text-left">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">03. Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Work.</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass h-full border-white/5 hover:border-blue-500/30 transition-all duration-500 group flex flex-col relative overflow-visible">
                <CardHeader className="pb-4 relative z-20 overflow-visible">
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Folder size={24} />
                     </div>
                     <div className="flex gap-2">
                        {project.links.githubs.map((link, i) => (
                           <AnimatedTooltip key={i} content={`${link.label} Repo`}>
                              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-blue-500/10 hover:text-blue-500 transition-colors">
                                 <a href={link.url} target="_blank" rel="noreferrer">
                                    <FaGithub size={20} />
                                 </a>
                              </Button>
                           </AnimatedTooltip>
                        ))}
                        {project.links.demo !== "#" && (
                           <AnimatedTooltip content="Live Demo">
                              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-blue-500/10 hover:text-blue-500 transition-colors">
                                 <a href={project.links.demo} target="_blank" rel="noreferrer">
                                    <ExternalLink size={20} />
                                 </a>
                              </Button>
                           </AnimatedTooltip>
                        )}
                     </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-grow relative z-10">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                    <p className="text-blue-500 font-mono text-xs uppercase tracking-widest">{project.period}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="pt-6 border-t border-white/5 bg-white/[0.01] relative z-10">
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-blue-500/5 text-blue-400 border-blue-500/10 text-[10px] uppercase font-bold py-0.5">
                           {t}
                        </Badge>
                      ))}
                   </div>
                </CardFooter>
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-0" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
