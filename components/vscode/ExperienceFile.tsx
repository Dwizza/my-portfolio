import React from "react";

export default function ExperienceFile() {
  return (
    <div className="home-content pb-10">
      <p className="text-sm text-vscode-comment mb-2.5">
        {"// experience.ts : where I've worked"}
      </p>

      <h1 className="font-sans font-extrabold leading-none text-white tracking-[-2px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
        Experience
      </h1>

      <div className="relative border-l border-vscode-border ml-1 sm:ml-2 md:ml-3 pl-5 sm:pl-6 md:pl-8 py-2">
        {/* Experience Item */}
        <div className="relative mb-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-vscode-accent border-4 border-vscode-bg"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">Full Stack Developer Intern</h2>
              <p className="text-vscode-accent font-mono text-sm mt-0.5">TwaadUp, Agadir</p>
            </div>
            <div className="mt-2 md:mt-0 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-sm text-vscode-text-muted text-xs font-mono inline-block w-max">
              2025 - 2025
            </div>
          </div>

          <div className="mt-4 space-y-3 font-mono text-sm text-vscode-text-muted leading-relaxed">
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Delivered an independent project autonomously in a professional environment.</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Applied web development best practices across both front-end and back-end.</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Participated in technical discussions and mentor reviews.</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Strengthened skills in organization, problem solving, and autonomy.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {["Spring Boot", "ReactJS"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-vscode-sidebar border border-vscode-border rounded-sm text-vscode-text text-[10px] font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
