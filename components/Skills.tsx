"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Front-End",
    skills: ["ReactJs", "NextJs", "Angular", "HTML5", "CSS3", "Javascript"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Back-End",
    skills: ["Spring Boot", "Laravel", "PHP", "NodeJs", "ExpressJs", "NestJs"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Databases",
    skills: ["MySql", "PostgreSql", "MongoDB"],
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "DevOps & Cloud",
    skills: ["CI/CD", "Docker", "Containers & Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
    color: "from-purple-500 to-indigo-400"
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "Jacoco", "Unit Test"],
    color: "from-red-500 to-pink-400"
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "GitHub", "Jira", "Trello", "Agile", "UML", "Merise", "Figma", "Photoshop", "Wordpress"],
    color: "from-slate-400 to-slate-200"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-brand-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
              }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(255,255,255,0.1)" }}
              className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-brand-500 transition-all group"
            >
              <h3 className={`text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${category.color} transform transition-transform group-hover:scale-105 origin-left`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                    key={skill}
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
