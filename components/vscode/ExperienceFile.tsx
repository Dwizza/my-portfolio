import React from "react";

export default function ExperienceFile() {
  return (
    <div className="home-content pb-10">
      <p className="text-sm text-vscode-comment mb-2.5">
        {"// experience.ts : where I've worked"}
      </p>

      <h1 className="font-sans font-extrabold leading-none text-white tracking-[-2px] text-5xl md:text-6xl mb-8">
        Experience
      </h1>

      <div className="relative border-l border-vscode-border ml-3 pl-8 py-2">
        {/* Experience Item */}
        <div className="relative mb-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-vscode-accent border-4 border-vscode-bg"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h2 className="text-xl font-bold text-white font-sans tracking-tight">Stagiaire Développeur FullStack</h2>
              <p className="text-vscode-accent font-mono text-sm mt-0.5">TwaadUp, Agadir</p>
            </div>
            <div className="mt-2 md:mt-0 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-sm text-vscode-text-muted text-xs font-mono inline-block w-max">
              2025 - 2025
            </div>
          </div>

          <div className="mt-4 space-y-3 font-mono text-sm text-vscode-text-muted leading-relaxed">
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Réalisation d’un projet individuel en autonomie dans un environnement professionnel.</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Application des bonnes pratiques de développement web (front-end et back-end).</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Participation aux échanges techniques et suivi des encadrants.</span>
            </p>
            <p className="flex items-start">
              <span className="text-vscode-control mr-3 mt-0.5">▹</span>
              <span>Renforcement des compétences en organisation, résolution de problèmes et autonomie.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {["SpringBoot", "ReactJs"].map((tech) => (
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
