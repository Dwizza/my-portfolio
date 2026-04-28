import React from "react";
import { createPortal } from "react-dom";
import { VscCheck, VscTerminal, VscLayoutSidebarLeft, VscClose, VscChevronUp, VscChevronDown } from "react-icons/vsc";

interface SettingsMenuProps {
  onClose: () => void;
  menuRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SettingsMenu({ onClose, menuRef }: SettingsMenuProps) {
  const [activeTheme, setActiveTheme] = React.useState("oussama-dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "oussama-dark";
    setActiveTheme(savedTheme);
    // remove previous themes, keep fonts
    document.documentElement.classList.forEach((cls) => {
      if (cls.startsWith("theme-")) document.documentElement.classList.remove(cls);
    });
    document.documentElement.classList.add(`theme-${savedTheme}`);
  }, []);

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("portfolio-theme", themeId);
    document.documentElement.classList.forEach((cls) => {
      if (cls.startsWith("theme-")) document.documentElement.classList.remove(cls);
    });
    document.documentElement.classList.add(`theme-${themeId}`);
  };

  const themes = [
    { id: "oussama-dark", name: "Oussama Dark", icon: "💜", dot: "bg-vscode-accent" },
    { id: "rose-pine", name: "Rosé Pine", icon: "🌸", dot: "bg-[#eb6f92]" },
    { id: "tokyo-night", name: "Tokyo Night", icon: "🌃", dot: "bg-[#7aa2f7]" },
    { id: "catppuccin", name: "Catppuccin", icon: "🐱", dot: "bg-[#cba6f7]" },
    { id: "nord", name: "Nord", icon: "🧊", dot: "bg-[#88c0d0]" },
    { id: "gruvbox", name: "Gruvbox", icon: "🔥", dot: "bg-[#fabd2f]" },
  ];

  if (!mounted) return null;

  const content = (
    <div
      ref={menuRef as React.RefObject<HTMLDivElement>}
      className="fixed bottom-12 left-12 w-[min(300px,calc(100vw-4rem))] md:w-[320px] bg-vscode-sidebar border border-vscode-border shadow-2xl rounded-md flex flex-col z-[200] text-vscode-text font-sans selection:bg-vscode-accent/30"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-label="Settings"
    >
      <div className="px-4 py-2 text-[10px] font-bold tracking-widest text-vscode-text-muted uppercase border-b border-vscode-border/50">
        Settings
      </div>

      <div className="overflow-y-auto max-h-[85vh] py-2 custom-scrollbar">
        {/* COLOR THEME SECTION */}
        <div className="px-4 py-1.5 text-[10px] font-bold tracking-widest text-vscode-text-muted flex items-center gap-2 mt-1">
          <span>🎨</span> COLOR THEME
        </div>
        <div className="flex flex-col mt-1 mb-2 space-y-0.5">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`group flex items-center justify-between px-6 py-1.5 cursor-pointer text-[13px] ${
                activeTheme === theme.id ? "bg-vscode-accent/20 text-white border-l-2 border-vscode-accent" : "hover:bg-vscode-hover border-l-2 border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${theme.dot}`}></span>
                <span>{theme.icon}</span>
                <span className={activeTheme === theme.id ? "font-medium" : ""}>{theme.name}</span>
              </div>
              {activeTheme === theme.id && <VscCheck size={14} className="text-vscode-accent" />}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-vscode-border/50 my-2"></div>

        {/* QUICK ACTIONS SECTION */}
        <div className="px-4 py-1.5 text-[10px] font-bold tracking-widest text-vscode-text-muted flex items-center gap-2">
          <span>⚡</span> QUICK ACTIONS
        </div>
        <div className="flex flex-col mt-1 mb-2 space-y-0.5">
          <div className="flex items-center justify-between px-6 py-1.5 hover:bg-vscode-hover cursor-pointer text-[13px] group">
            <div className="flex items-center gap-3">
              <span className="text-vscode-accent">🔍</span>
              <span className="group-hover:text-white transition-colors">Command Palette</span>
            </div>
            <span className="text-[11px] text-vscode-text-muted">Ctrl+P</span>
          </div>
          <div className="flex items-center justify-between px-6 py-1.5 hover:bg-vscode-hover cursor-pointer text-[13px] group">
            <div className="flex items-center gap-3">
              <span className="text-vscode-entity">📟</span>
              <span className="group-hover:text-white transition-colors">Toggle Terminal</span>
            </div>
            <span className="text-[11px] text-vscode-text-muted">Ctrl+`</span>
          </div>
          <div className="flex items-center justify-between px-6 py-1.5 hover:bg-vscode-hover cursor-pointer text-[13px] group">
            <div className="flex items-center gap-3">
              <span className="text-vscode-function">✨</span>
              <span className="group-hover:text-white transition-colors">Copilot Chat</span>
            </div>
          </div>
          <a href="/oussama_errahili_cv.pdf" download className="flex items-center justify-between px-6 py-1.5 hover:bg-vscode-hover cursor-pointer text-[13px] group text-inherit no-underline">
            <div className="flex items-center gap-3">
              <span className="text-vscode-string">📄</span>
              <span className="group-hover:text-white transition-colors">Download Resume</span>
            </div>
          </a>
          <div 
            className="flex items-center justify-between px-6 py-1.5 hover:bg-vscode-hover cursor-pointer text-[13px] group"
            onClick={() => document.documentElement.requestFullscreen()}
          >
            <div className="flex items-center gap-3">
              <span className="text-vscode-control">🖥️</span>
              <span className="group-hover:text-white transition-colors">Toggle Fullscreen</span>
            </div>
            <span className="text-[11px] text-vscode-text-muted">F11</span>
          </div>
        </div>

        <div className="w-full h-px bg-vscode-border/50 my-2"></div>

        {/* KEYBOARD SHORTCUTS SECTION */}
        <div className="px-4 py-1.5 text-[10px] font-bold tracking-widest text-vscode-text-muted flex items-center gap-2">
          <span>⌨️</span> KEYBOARD SHORTCUTS
        </div>
        <div className="flex flex-col mt-2 mb-4 px-6 space-y-2.5">
          <div className="flex items-center gap-3">
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">Ctrl</span>
            <span className="text-vscode-text-muted text-[11px]">+</span>
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">P</span>
            <span className="text-[12px] text-vscode-text-muted ml-2">Go to file</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">Ctrl</span>
            <span className="text-vscode-text-muted text-[11px]">+</span>
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">`</span>
            <span className="text-[12px] text-vscode-text-muted ml-2">Toggle terminal</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">Ctrl</span>
            <span className="text-vscode-text-muted text-[11px]">+</span>
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">B</span>
            <span className="text-[12px] text-vscode-text-muted ml-2">Toggle sidebar</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-vscode-activity border border-vscode-border text-vscode-text text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm">Esc</span>
            <span className="text-[12px] text-vscode-text-muted ml-2">Close overlay</span>
          </div>
        </div>

        <div className="w-full h-px bg-vscode-border/50 my-2"></div>

        {/* Footer */}
        <div className="px-5 py-3 flex flex-col gap-1 text-[11px] text-vscode-text-muted font-mono pb-4">
          <p>Portfolio v3.0 · Next.js + Tailwind</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-white">💜</span> by <span className="text-vscode-accent hover:underline cursor-pointer">Oussama Errahili</span>
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
