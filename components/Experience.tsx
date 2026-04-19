"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">04. Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience & Learning.</h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l-2 border-blue-500/20 ml-4 md:ml-48"
          >
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-16 last:mb-0 pl-10"
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center -z-0"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </motion.div>

                {/* Period Label (Desktop Only) */}
                <div className="absolute -left-48 top-4 w-32 hidden md:block text-right">
                  <p className="text-sm font-mono text-blue-500 font-bold uppercase tracking-tight">{exp.period}</p>
                </div>

                <Card className="glass border-white/5 hover:border-blue-500/30 transition-all duration-500 group">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                       <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                             <exp.icon size={18} />
                          </div>
                          <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-blue-400 transition-colors">{exp.title}</CardTitle>
                       </div>
                       <Badge variant="outline" className="w-fit text-[10px] uppercase font-bold tracking-widest border-blue-500/20 text-blue-500">
                          {exp.type === "work" ? "Professional" : "Education"}
                       </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium mt-2">
                       <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.company}</span>
                       <span className="md:hidden flex items-center gap-1.5 font-mono text-blue-500 text-xs"><Calendar size={14} /> {exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
