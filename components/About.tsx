"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { FlipCard } from "@/components/ui/flip-card";
import { MapPin, Mail, Calendar, User } from "lucide-react";
import Image from "next/image";

const DETAILS = [
  { label: "Name", value: "Oussama Errahili", icon: User },
  { label: "Email", value: "oussamaerrahili124@gmail.com", icon: Mail },
  { label: "Location", value: "Morocco", icon: MapPin },
  { label: "Experience", value: "02+ Years", icon: Calendar }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group perspective-1000"
          >
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] blur-3xl group-hover:bg-blue-500/20 transition-all -z-10" />
            
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
               <FlipCard 
                  className="rounded-2xl shadow-2xl shadow-blue-500/10"
                  front={
                    <div className="relative w-full h-full">
                       <Image 
                        src="/profile.jpg" 
                        alt="Oussama Errahili" 
                        fill
                        className="object-cover transition-all duration-700 brightness-90 group-hover:brightness-100" 
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <h4 className="text-xl font-bold tracking-tight">Oussama Errahili</h4>
                         <p className="text-xs font-mono text-blue-500 uppercase tracking-widest">Hover to see more</p>
                      </div>
                    </div>
                  }
                  back={
                    <div className="w-full h-full p-8 flex flex-col justify-center gap-6 relative overflow-hidden">
                       <div className="space-y-2 relative z-10">
                          <h4 className="text-2xl font-bold">Tech Enthusiast</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">
                            &quot;Turning complex problems into elegant, scalable software solutions.&quot;
                          </p>
                       </div>
                       
                       <div className="space-y-4 relative z-10 font-mono text-xs">
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                             <span className="text-blue-500">Focus</span>
                             <span>Full Stack Architecture</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                             <span className="text-blue-500">Passion</span>
                             <span>Clean Code & UX</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                             <span className="text-blue-500">Status</span>
                             <span className="flex items-center gap-2">Building <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /></span>
                          </div>
                       </div>
                       
                       <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                    </div>
                  }
               />
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">01. Perspective</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me.</h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am an enthusiastic Full Stack Developer currently pursuing my 2nd year in Web and Mobile Development at <span className="text-foreground font-medium">YouCode (UM6P)</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Coming from a background in Electromechanics and International Transport, my diverse foundation has instilled in me strong organizational skills, autonomy, and the ability to solve complex problems under pressure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {DETAILS.map((detail, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex items-center gap-2">
                     <detail.icon size={12} className="text-blue-500/60" />
                     <p className="text-blue-500/80 text-[10px] uppercase tracking-widest font-mono">{detail.label}</p>
                  </div>
                  <p className="text-foreground font-medium text-sm group-hover:text-blue-500 transition-colors">{detail.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-white/5">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  <div>
                     <p className="text-sm font-medium">Currently Building</p>
                     <p className="text-xs text-muted-foreground font-mono">Modern Scalable Applications</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
