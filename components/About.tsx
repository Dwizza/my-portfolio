"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding border-b border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm border border-neutral-800 p-2 bg-[#121212]">
              <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src="/profile.png" 
                  alt="Oussama Errahili" 
                  fill
                  className="object-cover" 
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-black p-6 border border-black hidden md:block">
                <h3 className="text-4xl font-bold font-mono tracking-tighter">02+</h3>
                <p className="text-sm font-semibold uppercase tracking-wider mt-1">Years<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2 block">01. Discover</span>
            <h2 className="heading-md">About Me.</h2>
            
            <div className="space-y-6 mt-8">
              <p className="text-muted">
                I am an enthusiastic Full Stack Developer currently pursuing my 2nd year in Web and Mobile Development at YouCode (UM6P) in Youssoufia.
              </p>
              <p className="text-muted">
                Coming from a background in Electromechanics and International Transport, my diverse foundation has instilled in me strong organizational skills, autonomy, and the ability to solve complex problems under pressure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-12 pt-8 border-t border-neutral-900">
              {[
                { label: "Name", value: "Oussama Errahili" },
                { label: "Email", value: "oussamaerrahili124@gmail.com" },
                { label: "Location", value: "Morocco" },
                { label: "Availability", value: "Freelance" }
              ].map((detail, index) => (
                <div key={index}>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest font-mono mb-1">{detail.label}</p>
                  <p className="text-white font-medium">{detail.value}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
