import React from "react";

export default function AboutFile() {
  return (
    <div className="home-content pb-10">
      <p className="text-sm text-vscode-comment mb-2.5">
        &lt;!-- about.html - Oussama Errahili --&gt;
      </p>

      <h1 className="font-sans font-extrabold leading-none text-white tracking-[-2px] text-5xl md:text-6xl mb-2">
        About Me
      </h1>
      
      <p className="text-sm text-vscode-text-muted mb-8 font-mono">
        {"// who I am · what I do · where I build"}
      </p>

      {/* Intro Block */}
      <div className="border border-vscode-border rounded-md p-5 bg-vscode-sidebar/50 mb-6 font-mono text-sm leading-relaxed text-vscode-text-muted">
        Hi! I&apos;m <strong className="text-vscode-accent font-medium">Oussama Errahili</strong>, a developer living at the crossroads of <strong className="text-vscode-accent font-medium">backend engineering</strong>, <strong className="text-vscode-accent font-medium">frontend development</strong>, and <strong className="text-vscode-accent font-medium">quality assurance</strong>. I love building systems that are not just functional but genuinely <strong className="text-vscode-accent font-medium">intelligent and scalable</strong>. Currently a <strong className="text-vscode-accent font-medium">Full Stack Developer Student at YouCode</strong>, learning and building modern applications daily.
      </div>

      {/* Soft Skills & Focus */}
      <div className="mb-6">
        <h2 className="text-vscode-entity font-mono tracking-widest text-xs font-bold uppercase mb-3">Compétences Transversales & Focus</h2>
        <div className="border border-vscode-border rounded-md p-5 bg-vscode-sidebar/50 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs text-vscode-text">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0">🎧</span>
            <span><strong className="text-white block">Écoute active</strong> Always attentive to client and team needs.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0">🤝</span>
            <span><strong className="text-white block">Travail d&apos;équipe</strong> Thriving in collaborative environments.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0">⏳</span>
            <span><strong className="text-white block">Gestion du temps</strong> Delivering projects on schedule efficiently.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0">⚖️</span>
            <span><strong className="text-white block">Gestion des conflits</strong> Maintaining harmonious workflows.</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-vscode-entity font-mono tracking-widest text-xs font-bold uppercase mb-3">Formation</h2>
        <div className="border border-vscode-border rounded-md p-5 bg-vscode-sidebar/50 flex flex-col space-y-6">
          
          {/* Item 1 */}
          <div>
            <div className="flex justify-between items-start mb-1 gap-4 flex-wrap">
              <h3 className="text-white font-bold font-sans text-lg flex items-center gap-2">
                🎓 YouCode (Simplon) UM6P
              </h3>
              <span className="text-vscode-text-muted font-mono text-sm">2024 - 2026</span>
            </div>
            <p className="text-vscode-text-muted text-sm mb-1">Youssoufia, Maroc</p>
            <p className="text-vscode-accent text-sm">2ème année de Formation en Développement Web et Mobile</p>
          </div>

          <div className="w-full h-px bg-vscode-border"></div>

          {/* Item 2 */}
          <div>
            <div className="flex justify-between items-start mb-1 gap-4 flex-wrap">
              <h3 className="text-white font-bold font-sans text-lg flex items-center gap-2">
                ⚙️ OFPPT
              </h3>
              <span className="text-vscode-text-muted font-mono text-sm">2014 - 2016</span>
            </div>
            <p className="text-vscode-accent text-sm">Diplôme en Electromécanique des systèmes automatisés</p>
          </div>

          <div className="w-full h-px bg-vscode-border"></div>

          {/* Item 3 */}
          <div>
            <div className="flex justify-between items-start mb-1 gap-4 flex-wrap">
              <h3 className="text-white font-bold font-sans text-lg flex items-center gap-2">
                🏫 Jaber Ben Hayyan
              </h3>
              <span className="text-vscode-text-muted font-mono text-sm">2013 - 2014</span>
            </div>
            <p className="text-vscode-text-muted text-sm mb-1">Youssoufia, Maroc</p>
            <p className="text-vscode-accent text-sm">Baccalauréat Electrique</p>
          </div>

        </div>
      </div>

    </div>
  );
}
