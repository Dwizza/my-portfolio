import React from "react";
import { VscGithubInverted, VscBriefcase, VscMail } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

const typingTexts = [
  "Building scalable robust backend systems...",
  "Ensuring zero-bug high-quality software...",
  "Creating interactive full-stack applications...",
  "Automating continuous integration pipelines..."
];

export default function HomeFile({ openFile }: { openFile?: (file: string) => void }) {
  const roles = [
    { text: "Backend Engineer", color: "rgb(78, 201, 176)", border: "border-vscode-entity/30" },
    { text: "QA Engineer", color: "rgb(197, 134, 192)", border: "border-vscode-control/30" },
    { text: "Full Stack Dev", color: "rgb(79, 193, 255)", border: "border-vscode-blue/30" },
    { text: "@ YouCode", color: "rgba(255, 50, 77, 1)", border: "border-vscode-control/30" }
  ];

  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = typingTexts[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;
    
    if (!isDeleting && displayText === currentText) {
      const timeoutId = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeoutId);
    }
    
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="home-content py-8 pl-4 md:pl-10 max-w-[1200px]">
      <p className="font-mono text-[13px] text-vscode-entity font-medium mb-6 opacity-0 animate-[fade-in_0.5s_ease-out_0.1s_forwards]">
        {"// hello world !! Welcome to my portfolio"}
      </p>

      <div className="mb-4 opacity-0 animate-[fade-in_0.5s_ease-out_0.2s_forwards]">
        <h1
          className="font-black leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(38px, 6.5vw, 80px)", transform: "scaleX(1.15) scaleY(0.9)", transformOrigin: "left" }}
        >
          <span className="text-white block mb-1">Oussama</span>
          <span className="text-vscode-keyword block">Errahili</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-10 opacity-0 animate-[fade-in_0.5s_ease-out_0.3s_forwards]">
        {roles.map((role, idx) => (
          <div key={idx} className={`inline-flex items-center gap-2 px-3 py-1.5 border ${role.border} rounded-sm bg-transparent transition-colors h-[28px]`}>
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: role.color }}
            ></span>
            <span className="font-mono text-[11px] text-vscode-text font-medium tracking-wide">
              {role.text}
            </span>
          </div>
        ))}
      </div>

      <p className="font-mono text-[13px] text-vscode-text-muted mb-8 min-h-[20px] opacity-0 animate-[fade-in_0.5s_ease-out_0.4s_forwards]">
        {displayText}
        <span className="text-vscode-keyword animate-[pulse-glow_1.5s_ease-in-out_infinite] ml-[1px]">|</span>
      </p>

      <p className="font-mono text-[13px] text-vscode-text-muted leading-[2] max-w-[650px] mb-12 opacity-0 animate-[fade-in_0.5s_ease-out_0.5s_forwards] tracking-wide">
        I live at the crossroads of <strong className="text-vscode-entity font-medium">backend engineering</strong>,{" "}
        <strong className="text-vscode-control font-medium">quality assurance</strong>, and{" "}
        <strong className="text-vscode-blue font-medium">frontend development</strong>. I build systems that are genuinely{" "}
        <strong className="text-vscode-blue font-medium">robust and scalable</strong>.
      </p>

      <div className="flex gap-3 flex-wrap mb-16 opacity-0 animate-[fade-in_0.5s_ease-out_0.6s_forwards]">
        <button 
          onClick={() => openFile?.("projects.js")}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-vscode-accent text-white text-[12px] font-mono rounded-sm hover:bg-vscode-blue2 transition-colors cursor-pointer border-none font-medium"
        >
          <span style={{ color: "rgb(251, 192, 45)" }}>📁</span> Projects
        </button>
        <button 
          onClick={() => openFile?.("about.html")}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 text-vscode-text text-[12px] font-mono rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span style={{ color: "rgb(197, 134, 192)" }}>👤</span> About Me
        </button>
        <button 
          onClick={() => openFile?.("contact.tsx")}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 text-vscode-text text-[12px] font-mono rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span style={{ color: "rgb(206, 145, 120)" }}>✉️</span> Contact
        </button>
        <a 
          href="/oussama_errahili_cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 text-vscode-text text-[12px] font-mono rounded-sm hover:bg-white/5 transition-colors cursor-pointer no-underline"
        >
          <span style={{ color: "rgb(215, 186, 125)" }}>📄</span> Download CV
        </a>
      </div>

      <div className="flex w-full max-w-[850px] border-y border-vscode-border py-6 mb-10 opacity-0 animate-[fade-in_0.5s_ease-out_0.7s_forwards]">
        <div className="flex-1 flex flex-col items-center justify-center border-r border-vscode-border hover:bg-white/[0.02] transition-colors">
          <span style={{ fontFamily: "'Archivo Black', sans-serif" }} className="text-[26px] text-white block mb-1 tracking-wider">2+</span>
          <span className="font-mono text-[9px] text-vscode-text-muted uppercase tracking-[0.2em] font-bold">Years</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center border-r border-vscode-border hover:bg-white/[0.02] transition-colors">
          <span style={{ fontFamily: "'Archivo Black', sans-serif" }} className="text-[26px] text-white block mb-1 tracking-wider">15+</span>
          <span className="font-mono text-[9px] text-vscode-text-muted uppercase tracking-[0.2em] font-bold">Projects</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center border-r border-vscode-border hover:bg-white/[0.02] transition-colors">
          <span style={{ fontFamily: "'Archivo Black', sans-serif" }} className="text-[26px] text-white block mb-1 tracking-wider">∞</span>
          <span className="font-mono text-[9px] text-vscode-text-muted uppercase tracking-[0.2em] font-bold">Curiosity</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors">
          <span style={{ fontFamily: "'Archivo Black', sans-serif" }} className="text-[26px] text-white block mb-1 tracking-wider">↑</span>
          <span className="font-mono text-[9px] text-vscode-text-muted uppercase tracking-[0.2em] font-bold">Always Learning</span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap opacity-0 animate-[fade-in_0.5s_ease-out_0.8s_forwards]">
        <a
          href="https://github.com/Dwizza"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-vscode-border rounded-sm text-vscode-text-muted text-[11px] font-mono transition-all hover:bg-white/5 cursor-pointer no-underline"
        >
          <VscGithubInverted size={13} className="text-vscode-text" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/oussama-errahili-280553331/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-vscode-border rounded-sm text-vscode-text-muted text-[11px] font-mono transition-all hover:bg-white/5 cursor-pointer no-underline"
        >
          <FaLinkedin size={13} className="text-[#0a66c2]" /> LinkedIn
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-vscode-border rounded-sm text-vscode-text-muted text-[11px] font-mono transition-all hover:bg-white/5 cursor-pointer no-underline"
        >
          <VscMail size={13} className="text-vscode-entity" /> Email
        </a>
      </div>

      {/* Global CSS Inject for Animations and Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
}
