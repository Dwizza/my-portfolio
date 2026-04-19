"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Layout, Database, Terminal, Settings } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Front-end Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "text-blue-400"
  },
  {
    title: "Back-end Development",
    icon: Server,
    skills: ["Java Spring Boot", "Node.js", "Express", "REST APIs", "Microservices"],
    color: "text-blue-400"
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    color: "text-purple-400"
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "Maven", "Postman"],
    color: "text-orange-400"
  },
  {
    title: "Design & UX",
    icon: Settings,
    skills: ["Figma", "Responsive Design", "UI/UX Principles", "Accessibility"],
    color: "text-pink-400"
  },
  {
    title: "Core Programming",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "SQL", "C#"],
    color: "text-yellow-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">02. Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Skills.</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="glass border-white/5 hover:border-blue-500/30 transition-all duration-500 group h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 ${category.color}`}>
                    <category.icon size={22} />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill} variants={badgeVariants}>
                        <Badge 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 border-white/5 transition-colors cursor-default py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
