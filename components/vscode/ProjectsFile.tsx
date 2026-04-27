import React from "react";
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc";

export default function ProjectsFile() {
  return (
    <div className="home-content pb-10">
      <p 
        className="text-sm text-vscode-comment mb-2.5 opacity-0 animate-[slide-up-fade_0.5s_ease-out_forwards]"
        style={{ animationDelay: "0.1s" }}
      >
        {"// projects.js : things I've built & shipped"}
      </p>

      <h1 
        className="font-sans font-extrabold leading-none text-white tracking-[-2px] text-5xl md:text-6xl mb-2 opacity-0 animate-[slide-up-fade_0.5s_ease-out_forwards]"
        style={{ animationDelay: "0.15s" }}
      >
        Projects
      </h1>
      
      <p 
        className="text-sm text-vscode-text-muted mb-10 font-mono opacity-0 animate-[slide-up-fade_0.5s_ease-out_forwards]"
        style={{ animationDelay: "0.2s" }}
      >
        const projects = [ ...shipped, ...building ]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Project 1: EcoRide */}
        <div 
          className="border border-white/10 rounded-md p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 flex flex-col group opacity-0 animate-[slide-up-fade_0.5s_ease-out_forwards]"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex justify-between items-start mb-5">
            <div className="text-2xl">🚗</div>
            <a href="https://github.com/OussamaErrahili" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-sm text-vscode-text-muted text-[11px] font-mono hover:border-white/30 hover:text-white transition-all duration-300">
              GitHub <VscLinkExternal size={12} />
            </a>
          </div>
          
          <div className="mb-3 tracking-widest text-[10px] text-vscode-pink font-bold font-mono">
            JAVA · SPRING BOOT
          </div>
          
          <h2 className="text-white font-sans font-black text-[22px] mb-3 tracking-wide">EcoRide – Transport Platform</h2>
          
          <p className="text-vscode-text-muted text-[13px] leading-[1.8] mb-6 font-mono flex-grow">
            Development of a microservices-based application for managing and optimizing transport services. Team collaboration with modern development practices and continuous integration.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {["Java", "Spring Boot", "Microservices", "REST APIs", "Docker", "Jenkins", "SQL"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-vscode-bg border border-white/5 rounded-sm text-vscode-text text-[10px] font-mono shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project 2: Logistics Fleet Management */}
        <div 
          className="border border-white/10 rounded-md p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 flex flex-col group opacity-0 animate-[slide-up-fade_0.5s_ease-out_forwards]"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex justify-between items-start mb-5">
            <div className="text-2xl">📦</div>
            <a href="https://github.com/OussamaErrahili" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-sm text-vscode-text-muted text-[11px] font-mono hover:border-white/30 hover:text-white transition-all duration-300">
              GitHub <VscLinkExternal size={12} />
            </a>
          </div>
          
          <div className="mb-3 tracking-widest text-[10px] text-vscode-blue font-bold font-mono">
            BACKEND · ARCHITECTURE
          </div>
          
          <h2 className="text-white font-sans font-black text-[22px] mb-3 tracking-wide">Logistics Fleet Management</h2>
          
          <p className="text-vscode-text-muted text-[13px] leading-[1.8] mb-6 font-mono flex-grow">
            Development of logistics management software for handling inventory, shipping and receiving flows, and supervision tasks, with a modular architecture deployable in Docker containers.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {["SPRINGBOOT", "MAVEN", "DOCKER", "CI/CD", "Unit test"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-vscode-bg border border-white/5 rounded-sm text-vscode-text text-[10px] font-mono shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-up-fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
