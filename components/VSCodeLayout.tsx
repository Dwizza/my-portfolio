"use client";

import { useState, useEffect, useRef } from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscAccount,
  VscSettingsGear,
  VscChevronRight,
  VscChevronDown,
  VscMarkdown,
  VscJson,
  VscClose,
  VscCode,
  VscWarning,
  VscError,
  VscBell,
  VscSync,
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
  VscArrowLeft,
  VscArrowRight,
  VscLayoutSidebarLeft,
  VscLayoutPanel,
  VscLayoutSidebarRight,
  VscLayout,
  VscVscode,
} from "react-icons/vsc";
import { SiReact, SiHtml5, SiJavascript, SiCss, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Import all File components dynamically or directly
import HomeFile from "./vscode/HomeFile";
import AboutFile from "./vscode/AboutFile";
import SkillsFile from "./vscode/SkillsFile";
import ProjectsFile from "./vscode/ProjectsFile";
import ExperienceFile from "./vscode/ExperienceFile";
import ContactFile from "./vscode/ContactFile";
import SettingsMenu from "./vscode/SettingsMenu";

const FILES = [
  { name: "home.tsx", icon: SiReact, color: "#61dafb", component: HomeFile },
  { name: "about.html", icon: SiHtml5, color: "#e34c26", component: AboutFile },
  { name: "skills.json", icon: VscJson, color: "#cbcb41", component: SkillsFile },
  { name: "projects.js", icon: SiJavascript, color: "#f1e05a", component: ProjectsFile },
  { name: "experience.ts", icon: SiTypescript, color: "#3178c6", component: ExperienceFile },
  { name: "contact.tsx", icon: SiReact, color: "#61dafb", component: ContactFile },
  { name: "Untitled-1", icon: VscCode, color: "#cccccc", component: () => <div className="p-8 text-vscode-text font-mono text-sm">Untitled file content...</div> },
];

export default function VSCodeLayout() {
  const [activeFile, setActiveFile] = useState("home.tsx");
  const [openFiles, setOpenFiles] = useState(["home.tsx", "skills.json", "projects.js", "about.html", "experience.ts"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const topBarRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchableFiles = [
    {
      name: "home.tsx",
      title: "Home",
      description: "Hero section, role chips, social links, CV download.",
      keywords: ["backend engineer", "qa engineer", "full stack", "youtube", "github", "linkedin", "projects", "about", "contact"],
    },
    {
      name: "about.html",
      title: "About",
      description: "Profile summary, soft skills, and education history.",
      keywords: ["soft skills", "education", "youcode", "ofppt", "teamwork", "time management", "conflict resolution", "morocco"],
    },
    {
      name: "skills.json",
      title: "Skills",
      description: "Frontend, backend, database, testing, DevOps, tools.",
      keywords: ["react", "nextjs", "angular", "java", "spring boot", "postgresql", "mongodb", "junit", "selenium", "docker", "git"],
    },
    {
      name: "projects.js",
      title: "Projects",
      description: "EcoRide and Logistics Fleet Management projects.",
      keywords: ["microservices", "transport", "logistics", "docker", "maven", "ci/cd", "rest api", "spring boot", "unit test"],
    },
    {
      name: "experience.ts",
      title: "Experience",
      description: "Full stack internship at TwaadUp, Agadir.",
      keywords: ["internship", "twaadup", "agadir", "autonomy", "best practices", "problem solving", "reactjs", "spring boot"],
    },
    {
      name: "contact.tsx",
      title: "Contact",
      description: "Email form, GitHub, LinkedIn, and response info.",
      keywords: ["email", "form", "linkedin", "github", "message", "send message"],
    },
  ];

  const filteredSearchResults = searchQuery.trim()
    ? searchableFiles.filter((file) => {
        const haystack = `${file.name} ${file.title} ${file.description} ${file.keywords.join(" ")}`.toLowerCase();
        return haystack.includes(searchQuery.toLowerCase().trim());
      })
    : searchableFiles;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (topBarRef.current && !topBarRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setSearchOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (e: React.MouseEvent, menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleMenuAction = (action: () => void) => {
    action();
    setActiveMenu(null);
  };

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    });
  };

  const handleSearchResultClick = (fileName: string) => {
    openFile(fileName);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const CurrentComponent = FILES.find((f) => f.name === activeFile)?.component || HomeFile;

  const openFile = (fileName: string) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName]);
    }
    setActiveFile(fileName);
  };

  const closeFile = (e: React.MouseEvent | undefined, fileName: string) => {
    if (e) e.stopPropagation();
    const newOpenFiles = openFiles.filter((f) => f !== fileName);
    setOpenFiles(newOpenFiles);
    if (activeFile === fileName) {
      if (newOpenFiles.length > 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile("");
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-vscode-bg text-vscode-text font-sans overflow-hidden">
      {/* Single Row Title & Menu Bar */}
      <div ref={topBarRef} className="h-[35px] w-full flex items-center shrink-0 select-none bg-vscode-bg border-b border-vscode-border relative z-50">
        
        {/* Left: VS Logo & Menus */}
        <div className="flex items-center text-[13px] text-vscode-text font-sans h-full pl-3 shrink-0">
          <div className="text-vscode-accent mr-3 flex items-center">
            <VscVscode size={16} />
          </div>
          
          <div className="flex items-center space-x-0.5">
            {/* File Menu */}
            <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'File' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'File')}
            >
              File
            </span>
            {activeMenu === 'File' && (
              <div className="absolute top-full left-0 mt-[2px] w-[240px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => handleMenuAction(() => openFile('Untitled-1'))}>
                  <span className="font-medium text-vscode-text hover:text-white">New Tab</span><span className="text-vscode-text-muted text-[11px]">Ctrl+T</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => handleMenuAction(() => openSearch())}>
                  <span className="font-medium text-vscode-text hover:text-white">Open File...</span><span className="text-vscode-text-muted text-[11px]">Ctrl+P</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => handleMenuAction(() => closeFile(undefined, activeFile))}>
                  <span className="font-medium text-vscode-text hover:text-white">Close Tab</span><span className="text-vscode-text-muted text-[11px]">Ctrl+W</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer" onClick={() => handleMenuAction(() => { setOpenFiles([]); setActiveFile(""); })}>
                  <span className="font-medium text-vscode-text hover:text-white">Close All Tabs</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                <div className="px-4 py-1 text-[10px] tracking-[0.2em] font-bold text-vscode-text-muted uppercase mt-1">
                  Open Recent
                </div>
                {FILES.filter(f => ['home.tsx', 'about.html', 'projects.js', 'skills.json'].includes(f.name)).map(f => (
                  <div key={f.name} className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer" onClick={() => handleMenuAction(() => openFile(f.name))}>
                     <span className="font-medium text-vscode-text hover:text-white">{f.name}</span>
                  </div>
                ))}
                <div className="h-px bg-white/5 my-1.5"></div>
                <a href="/oussama_errahili_cv.pdf" download className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer block text-inherit no-underline" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Download Resume</span>
                </a>
              </div>
            )}
          </div>

          {/* Edit Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Edit' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Edit')}
            >
              Edit
            </span>
            {activeMenu === 'Edit' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Find...</span><span className="text-vscode-text-muted text-[11px]">Ctrl+P</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Select All</span><span className="text-vscode-text-muted text-[11px]">Ctrl+A</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Copy</span><span className="text-vscode-text-muted text-[11px]">Ctrl+C</span>
                </div>
              </div>
            )}
          </div>

          {/* Selection Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Selection' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Selection')}
            >
              Selection
            </span>
            {activeMenu === 'Selection' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Select All</span><span className="text-vscode-text-muted text-[11px]">Ctrl+A</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Expand Selection</span><span className="text-vscode-text-muted text-[11px]">Shift+Alt+Right</span>
                </div>
              </div>
            )}
          </div>

          {/* View Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'View' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'View')}
            >
              View
            </span>
            {activeMenu === 'View' && (
              <div className="absolute top-full left-0 mt-[2px] w-[260px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Command Palette...</span><span className="text-vscode-text-muted text-[11px]">Ctrl+P</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => handleMenuAction(() => setSidebarOpen(!sidebarOpen))}>
                  <span className="font-medium text-vscode-text hover:text-white">Toggle Sidebar</span><span className="text-vscode-text-muted text-[11px]">Ctrl+B</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Toggle Terminal</span><span className="text-vscode-text-muted text-[11px]">Ctrl+`</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Oussama&apos;s Copilot</span><span className="text-vscode-text-muted text-[11px]">Ctrl+Shift+C</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => { document.documentElement.requestFullscreen(); setActiveMenu(null); }}>
                  <span className="font-medium text-vscode-text hover:text-white">Enter Full Screen</span><span className="text-vscode-text-muted text-[11px]">F11</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Zoom In</span><span className="text-vscode-text-muted text-[11px]">Ctrl++</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Zoom Out</span><span className="text-vscode-text-muted text-[11px]">Ctrl+-</span>
                </div>
              </div>
            )}
          </div>

          {/* Go Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Go' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Go')}
            >
              Go
            </span>
            {activeMenu === 'Go' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Go to File...</span><span className="text-vscode-text-muted text-[11px]">Ctrl+P</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                {FILES.map(f => (
                  <div key={f.name} className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex items-center" onClick={() => handleMenuAction(() => openFile(f.name))}>
                     <f.icon size={12} style={{ color: f.color }} className="mr-2" /> <span className="font-medium text-vscode-text hover:text-white">{f.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Run Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Run' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Run')}
            >
              Run
            </span>
            {activeMenu === 'Run' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Start Terminal</span><span className="text-vscode-text-muted text-[11px]">Ctrl+`</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Run Last Command</span>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Terminal' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Terminal')}
            >
              Terminal
            </span>
            {activeMenu === 'Terminal' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">New Terminal</span><span className="text-vscode-text-muted text-[11px]">Ctrl+`</span>
                </div>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Clear Terminal</span>
                </div>
              </div>
            )}
          </div>

          {/* Help Menu */}
          <div className="relative">
            <span 
              className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${activeMenu === 'Help' ? 'bg-vscode-activity border border-white/20 text-white' : 'border border-transparent hover:bg-white/10 hover:text-white'}`}
              onClick={(e) => toggleMenu(e, 'Help')}
            >
              Help
            </span>
            {activeMenu === 'Help' && (
              <div className="absolute top-full left-0 mt-[2px] w-[220px] bg-vscode-sidebar border border-white/10 shadow-2xl rounded-md py-1.5 z-50 text-[12.5px] font-mono tracking-wide">
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">Keyboard Shortcuts</span>
                </div>
                <div className="h-px bg-white/5 my-1.5"></div>
                <a href="https://github.com/OussamaErrahili" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer flex justify-between no-underline text-inherit block" onClick={() => setActiveMenu(null)}>
                  <span className="font-medium text-vscode-text hover:text-white">GitHub</span><span className="text-vscode-text-muted text-[11px]">↗</span>
                </a>
                <div className="px-4 py-1.5 hover:bg-white/10 hover:text-white cursor-pointer" onClick={() => handleMenuAction(() => openFile("about.html"))}>
                  <span className="font-medium text-vscode-text hover:text-white">About Oussama</span>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        {/* Center: Search Bar & Navigation */}
        <div className="flex-1 flex justify-center items-center h-full pointer-events-none min-w-0 px-2 lg:px-4 relative">
           <div className="hidden lg:flex space-x-1 text-vscode-text mr-3 pointer-events-auto shrink-0">
              <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100"><VscArrowLeft size={16} /></div>
              <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100"><VscArrowRight size={16} /></div>
           </div>
           <div className="pointer-events-auto w-full max-w-[460px] relative">
             <button
               type="button"
               onClick={openSearch}
               className={`h-[28px] w-full rounded-md border flex items-center text-[12px] transition-colors shadow-inner truncate px-3 outline-none ${searchOpen ? "bg-vscode-activity border-vscode-accent text-white" : "bg-vscode-tab-inactive border-vscode-border text-vscode-text hover:bg-vscode-activity"}`}
             >
               <VscSearch size={14} className="mr-2 opacity-70 shrink-0" />
               <span className="truncate text-left flex-1">Search files in portfolio</span>
               <span className="ml-3 hidden sm:inline-flex items-center gap-1 text-[10px] text-vscode-text-muted">
                 Ctrl+P
               </span>
             </button>

             {searchOpen && (
               <div className="absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl border border-white/10 bg-[#1b1b1b]/95 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] overflow-hidden z-[70]">
                 <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                   <VscSearch size={14} className="text-vscode-text-muted shrink-0" />
                   <input
                     ref={searchInputRef}
                     value={searchQuery}
                     onChange={(event) => setSearchQuery(event.target.value)}
                     onKeyDown={(event) => {
                       if (event.key === "Escape") {
                         setSearchOpen(false);
                       }
                       if (event.key === "Enter" && filteredSearchResults[0]) {
                         handleSearchResultClick(filteredSearchResults[0].name);
                       }
                     }}
                     placeholder="Search a file, project, skill, or keyword..."
                     className="w-full bg-transparent text-sm text-white placeholder:text-vscode-text-muted outline-none"
                   />
                   <button
                     type="button"
                     onClick={() => {
                       setSearchOpen(false);
                       setSearchQuery("");
                     }}
                     className="rounded-md px-2 py-1 text-xs text-vscode-text-muted hover:text-white hover:bg-white/5 transition-colors"
                   >
                     Esc
                   </button>
                 </div>

                 <div className="max-h-[280px] overflow-auto custom-scrollbar">
                   {filteredSearchResults.length > 0 ? (
                     filteredSearchResults.map((file) => {
                       const Icon = FILES.find((entry) => entry.name === file.name)?.icon || VscCode;
                       return (
                         <button
                           key={file.name}
                           type="button"
                           onClick={() => handleSearchResultClick(file.name)}
                           className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                         >
                           <Icon size={15} style={{ color: FILES.find((entry) => entry.name === file.name)?.color || "#fff" }} className="mt-0.5 shrink-0" />
                           <div className="min-w-0 flex-1">
                             <div className="flex items-center justify-between gap-3">
                               <span className="text-sm text-white font-medium truncate">{file.name}</span>
                               <span className="text-[10px] uppercase tracking-[0.22em] text-vscode-text-muted shrink-0">{file.title}</span>
                             </div>
                             <p className="text-xs text-vscode-text-muted mt-1 leading-relaxed">{file.description}</p>
                           </div>
                         </button>
                       );
                     })
                   ) : (
                     <div className="px-4 py-6 text-sm text-vscode-text-muted">
                       No matching file found.
                     </div>
                   )}
                 </div>
               </div>
             )}
           </div>
        </div>

        {/* Right: Layout & Window Controls */}
        <div className="flex items-center justify-end h-full space-x-2 pointer-events-auto shrink-0">
           <div className="flex items-center text-vscode-text space-x-0.5 mr-2">
             <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <VscLayoutSidebarLeft size={14} />
             </div>
             <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100">
                <VscLayoutPanel size={14} />
             </div>
             <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100">
                <VscLayoutSidebarRight size={14} /> 
             </div>
             <div className="p-1 hover:bg-white/10 rounded cursor-pointer opacity-80 hover:opacity-100">
                <VscLayout size={14} /> 
             </div>
           </div>

           {/* Window Controls */}
           <div className="flex h-full text-vscode-text">
             <div className="h-full px-4 flex items-center hover:bg-white/10 cursor-pointer">
               <VscChromeMinimize size={14} />
             </div>
             <div className="h-full px-4 flex items-center hover:bg-white/10 cursor-pointer">
               <VscChromeMaximize size={14} />
             </div>
             <div className="h-full px-4 flex items-center hover:bg-[#e81123] hover:text-white cursor-pointer transition-colors">
               <VscChromeClose size={14} />
             </div>
           </div>
        </div>
      </div>

      {/* Main App Container */}
      <div className="flex flex-1 w-full overflow-hidden border-vscode-border border-t">
      {/* Activity Bar */}
      <div className="w-12 h-calc(100vh-22px) bg-vscode-activity flex flex-col items-center justify-between py-2 select-none shrink-0 border-r border-vscode-border z-20 absolute lg:relative h-full">
        <div className="flex flex-col space-y-4 w-full items-center pt-2">
          <div
            className={`cursor-pointer p-2 rounded-lg transition-colors ${sidebarOpen ? "text-white" : "text-vscode-text-muted hover:text-white"}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <VscFiles size={24} />
          </div>
          <div className={`cursor-pointer p-2 ${searchOpen ? "text-white" : "text-vscode-text-muted hover:text-white"} transition-colors`} onClick={openSearch}>
            <VscSearch size={22} />
          </div>
          <div className="cursor-pointer p-2 text-vscode-text-muted hover:text-white transition-colors">
            <VscSourceControl size={22} />
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-full items-center pb-8 border-b border-vscode-border">
          <div className="cursor-pointer p-2 text-vscode-text-muted hover:text-white transition-colors">
            <VscAccount size={22} />
          </div>
          <div 
            ref={settingsRef}
            className="relative cursor-pointer p-2 text-vscode-text-muted hover:text-white transition-colors"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <VscSettingsGear size={22} />
            {settingsOpen && <SettingsMenu onClose={() => setSettingsOpen(false)} />}
          </div>
        </div>
      </div>

      {/* Sidebar (Explorer) */}
      {sidebarOpen && (
        <div className="w-64 bg-vscode-sidebar flex flex-col shrink-0 border-r border-vscode-border transition-all transform lg:w-64 h-full absolute left-12 lg:relative lg:left-0 z-10 shadow-xl lg:shadow-none">
          <div className="h-8 px-5 text-[11px] tracking-wide text-vscode-text font-sans flex items-center shrink-0 uppercase mt-1">
            Explorer
          </div>
          
          <div className="flex-1 overflow-auto py-1">
            <div
              className="px-1 py-[3px] text-[11px] font-bold tracking-wide font-sans flex items-center cursor-pointer hover:bg-vscode-hover select-none text-vscode-text"
              onClick={() => setExplorerOpen(!explorerOpen)}
            >
              {explorerOpen ? <VscChevronDown size={16} className="mr-0.5" /> : <VscChevronRight size={16} className="mr-0.5" />}
              PORTFOLIO
            </div>
            
            {explorerOpen && (
              <div className="flex flex-col mt-[1px]">
                {FILES.map((file) => {
                  const Icon = file.icon;
                  const isActive = activeFile === file.name;
                  return (
                    <div
                      key={file.name}
                      onClick={() => openFile(file.name)}
                      className={`flex items-center pl-[22px] pr-4 py-[3px] text-[13px] font-sans cursor-pointer select-none transition-colors ${
                        isActive ? "bg-vscode-tab-active text-white" : "text-vscode-text hover:bg-vscode-hover"
                      }`}
                    >
                      <Icon size={15} style={{ color: file.color }} className="mr-[6px] shrink-0" />
                      <span className="truncate tracking-wide" style={{ letterSpacing: "0.2px" }}>{file.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 bg-vscode-bg h-calc(100vh-22px) h-full ${sidebarOpen ? "pl-0" : "pl-12 lg:pl-0"}`}>
        {/* Tabs Bar */}
        <div className="flex h-9 bg-vscode-sidebar overflow-x-auto no-scrollbar shrink-0 shadow-sm">
          {openFiles.map((fileName) => {
            const file = FILES.find((f) => f.name === fileName);
            if (!file) return null;
            const Icon = file.icon;
            const isActive = activeFile === fileName;
            
            return (
              <div
                key={fileName}
                onClick={() => setActiveFile(fileName)}
                className={`flex items-center px-4 py-2 border-r border-vscode-border text-[13px] cursor-pointer select-none min-w-[120px] group transition-colors ${
                  isActive ? "bg-vscode-bg text-white border-t border-t-vscode-accent" : "bg-vscode-tab-inactive text-vscode-text-muted border-t border-t-transparent hover:bg-[#2b2b2b]"
                }`}
              >
                <Icon size={14} style={{ color: file.color }} className="mr-2 shrink-0" />
                <span className="truncate mr-4">{fileName}</span>
                <div
                  className={`p-0.5 rounded ml-auto transition-colors ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"} hover:bg-vscode-border`}
                  onClick={(e) => closeFile(e, fileName)}
                >
                  <VscClose size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-auto relative">
          {/* Breadcrumbs */}
          {activeFile && (
            <div className="h-6 flex items-center px-4 text-[12px] text-vscode-text-muted border-b border-vscode-border/50">
              <span className="tracking-wide">portfolio</span>
              <VscChevronRight size={14} className="mx-1" />
              <span className="tracking-wide">{activeFile}</span>
            </div>
          )}
          
          <div className="absolute inset-0 p-4 lg:p-8 top-6 overflow-auto">
            {activeFile ? (
              <CurrentComponent openFile={openFile} />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center select-none text-[#555]">
                <VscCode size={150} opacity={0.1} />
                <h2 className="mt-8 text-xl font-medium tracking-wider">Oussama Errahili VSCode</h2>
                <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-4 text-left text-sm">
                  <div className="col-span-2 text-vscode-text-muted mb-2 font-bold uppercase tracking-widest text-[11px]">Start</div>
                  <div className="text-vscode-accent cursor-pointer hover:underline" onClick={() => openFile("home.tsx")}>New File...</div>
                  <div className="text-white cursor-pointer hover:underline">Ctrl+N</div>
                  <div className="text-vscode-accent cursor-pointer hover:underline" onClick={() => openFile("about.html")}>Open File...</div>
                  <div className="text-white cursor-pointer hover:underline">Ctrl+O</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-[22px] w-full bg-vscode-accent absolute bottom-0 flex items-center justify-between px-2 text-white text-[11px] select-none z-30 font-sans tracking-wide">
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            <VscSourceControl size={14} className="mr-1" /> main*
          </div>
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded transition-colors hidden sm:flex">
            <VscSync size={14} className="mr-1" /> 0 ⬇
          </div>
          <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
            <VscError size={12} className="mr-1" /> 0
            <VscWarning size={12} className="ml-2 mr-1" /> 0
          </div>
        </div>
        <div className="flex items-center space-x-4">
           <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:block">Ln 42, Col 3</div>
           <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:block">Spaces: 2</div>
           <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:block">UTF-8</div>
           <div className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors hidden sm:block">CRLF</div>
           <div className="flex items-center cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
             <VscBell size={14} />
           </div>
        </div>
      </div>
    </div>
    </div>
  );
}
