"use client";

import React, { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  level: number;
  colorCode: string;
}

const SkillRow = ({ skill }: { skill: SkillItem }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [widthLevel, setWidthLevel] = useState(0);

  useEffect(() => {
    // Small delay before starting
    const timeout = setTimeout(() => {
      setWidthLevel(skill.level);
      
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out Quart (matches the CSS transition)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCurrentLevel(Math.floor(easeOut * skill.level));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [skill.level]);

  return (
    <div className="flex items-center group cursor-default">
      <div className="w-[110px] sm:w-[130px] font-mono text-[13px] text-vscode-text-muted shrink-0 truncate transition-colors group-hover:text-vscode-text">
        {skill.name}
      </div>
      
      <div className="flex-1 mx-4 relative h-[2px] bg-vscode-activity/40 rounded-full">
        <div 
          className="absolute top-0 left-0 h-full rounded-full opacity-100 transition-all duration-[1500ms] ease-out"
          style={{ 
            width: `${widthLevel}%`,
            backgroundColor: skill.colorCode
          }}
        ></div>
      </div>
      
      <div 
        className="w-10 text-right font-mono text-[12px] shrink-0 font-medium opacity-90"
        style={{ color: skill.colorCode }}
      >
        {currentLevel}%
      </div>
    </div>
  );
};

export default function SkillsFile() {
  const skillCategories: { title: string; skills: SkillItem[] }[] = [
    {
      title: "FRONT-END",
      skills: [
        { name: "ReactJs/NextJs", level: 85, colorCode: "rgb(0, 191, 255)" }, // Blue
        { name: "Angular", level: 90, colorCode: "rgb(255, 49, 49)" }, // Neon Red
        { name: "HTML5/CSS3", level: 90, colorCode: "rgb(0, 250, 154)" }, // Green
        { name: "Javascript", level: 85, colorCode: "rgb(255, 215, 0)" }, // Yellow
      ]
    },
    {
      title: "BACK-END",
      skills: [
        { name: "Java / JEE", level: 85, colorCode: "rgb(255, 165, 0)" }, // Orange
        { name: "Spring Boot", level: 85, colorCode: "rgb(0, 250, 154)" }, // Green
        { name: "NodeJs", level: 70, colorCode: "rgb(0, 191, 255)" }, // Blue
        { name: "Laravel / PHP", level: 75, colorCode: "rgb(255, 60, 172)" }, // Pink
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { name: "MySQL", level: 85, colorCode: "rgb(0, 191, 255)" }, // Blue
        { name: "PostgreSQL", level: 90, colorCode: "rgb(138, 43, 226)" }, // Purple
        { name: "MongoDB", level: 70, colorCode: "rgb(0, 250, 154)" }, // Green
      ]
    },
    {
      title: "TESTING",
      skills: [
        { name: "JUnit/Mockito", level: 85, colorCode: "rgb(0, 250, 154)" }, // Green
        { name: "Selenium", level: 80, colorCode: "rgb(255, 165, 0)" }, // Orange
        { name: "JMeter / SoapUI", level: 75, colorCode: "rgb(255, 60, 172)" }, // Pink
        { name: "Postman", level: 90, colorCode: "rgb(255, 215, 0)" }, // Yellow
      ]
    },
    {
      title: "DEVOPS & CLOUD",
      skills: [
        { name: "Containers", level: 80, colorCode: "rgb(0, 191, 255)" }, // Blue
        { name: "CI/CD Tools", level: 80, colorCode: "rgb(255, 60, 172)" }, // Pink
        { name: "IaC / Monitoring", level: 60, colorCode: "rgb(138, 43, 226)" }, // Purple
        { name: "Cloud", level: 50, colorCode: "rgb(255, 165, 0)" }, // Orange
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git / Github", level: 90, colorCode: "rgb(255, 165, 0)" }, // Orange
        { name: "Jira / Trello", level: 85, colorCode: "rgb(0, 191, 255)" }, // Blue
        { name: "Figma/Photoshop", level: 80, colorCode: "rgb(255, 60, 172)" }, // Pink
        { name: "Agile / UML", level: 85, colorCode: "rgb(0, 250, 154)" }, // Green
      ]
    }
  ];

  return (
    <div className="home-content pb-10 max-w-4xl">
      <p className="text-sm text-vscode-comment mb-4 font-mono">
        {"// skills.json — tech stack & tools I actually use"}
      </p>

      <h1 className="font-sans font-black leading-none text-white tracking-wide text-5xl md:text-[56px] mb-6">
        Skills
      </h1>

      {/* JSON Object Line */}
      <div className="font-mono text-[13px] mb-12 text-vscode-text">
        <span className="text-vscode-text">&#123;</span>
        <span className="text-vscode-text"> </span>
        <span className="text-vscode-string">&quot;status&quot;</span>
        <span className="text-vscode-text">: </span>
        <span className="text-vscode-string">&quot;always_learning&quot;</span>
        <span className="text-vscode-text">, </span>
        <span className="text-vscode-string">&quot;passion&quot;</span>
        <span className="text-vscode-text">: </span>
        <span className="text-vscode-string">&quot;quality_software&quot;</span>
        <span className="text-vscode-text"> </span>
        <span className="text-vscode-text">&#125;</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <div className="border-b border-vscode-border/60 pb-2 mb-6">
              <h2 className="text-vscode-function text-xs tracking-[0.3em] font-mono font-medium">
                {category.title}
              </h2>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
