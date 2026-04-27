"use client";

import React from "react";
import {
  VscCommentDiscussion,
  VscChevronLeft,
  VscSend,
  VscSparkle,
  VscEllipsis,
  VscGear,
  VscNewFile,
  VscSplitHorizontal,
  VscWindow,
  VscClose,
} from "react-icons/vsc";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const QUICK_PROMPTS = [
  "Tell me about your profile",
  "What are your main skills?",
  "What projects did you build?",
  "How can I contact you?",
];

const DEFAULT_REPLY = "I don't have information about that.";

function formatMessageText(text: string) {
  const urlEmailRegex = /(https?:\/\/[^\s()]+|github\.com\/[^\s,.]+|linkedin\.com\/[^\s,.]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(urlEmailRegex);
  return parts.map((part, i) => {
    if (part.match(urlEmailRegex)) {
      let href = part;
      if (part.includes("@")) {
        href = `mailto:${part}`;
      } else if (!part.startsWith("http")) {
        href = `https://${part}`;
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s+/-]/g, " ").replace(/\s+/g, " ").trim();
}

function getCvAnswer(query: string) {
  const normalized = normalizeText(query);

  if (!normalized) {
    return DEFAULT_REPLY;
  }

  if (/(who are you|tell me about yourself|profile|about you|intro)/.test(normalized)) {
    return "Oussama Errahili is a backend engineer, QA engineer, and full-stack developer focused on building robust web systems, testing, and automation.";
  }

  if (/(skill|skills|tech|stack|technology|frontend|backend|database|devops|testing)/.test(normalized)) {
    return "Main skills: React, Next.js, Angular, HTML, CSS, JavaScript, TypeScript, Java, Spring Boot, Spring Security, REST APIs, PostgreSQL, MySQL, MongoDB, Docker, Git, Jenkins, CI/CD, JUnit, Mockito, Selenium, Postman, UML, and Agile tools.";
  }

  if (/(project|projects|built|portfolio|work)/.test(normalized)) {
    return "Highlighted projects include EcoRide, a transport and ride-management platform, and a logistics fleet management system built with a microservices-oriented approach, Spring Boot, Angular, Docker, and REST APIs.";
  }

  if (/(experience|internship|job|work history|twaadup|twaad up|agadir)/.test(normalized)) {
    return "He completed a full-stack internship at TwaadUp in Agadir, where he contributed to a professional web project with an architecture-based workflow, best practices, and teamwork.";
  }

  if (/(education|study|school|degree|youcode|ofppt|baccalaureate|bachelor)/.test(normalized)) {
    return "Education includes YouCode / UM6P formation in web and mobile development, an OFPPT systems automation diploma, and a technical baccalaureate from Jaber Ben Hyyan in Youssoufia.";
  }

  if (/(language|languages|french|english|arabic)/.test(normalized)) {
    return "Languages: French A2, English A2, and Arabic as the native language.";
  }

  if (/(contact|email|reach|linkedin|github|social)/.test(normalized)) {
    return "Contact via email at oussamaerrahili124@gmail.com, GitHub at github.com/Dwizza, and LinkedIn at linkedin.com/in/oussama-errahili-280553331/.";
  }

  if (/(available|availability|open to|opportunity|freelance|hire)/.test(normalized)) {
    return "He is open to projects, internships, and collaboration opportunities.";
  }

  if (/(download|cv|resume|pdf)/.test(normalized)) {
    return "The CV is available as a PDF download from the home section and the portfolio resources.";
  }

  if (/(qa|quality assurance|testing|tests)/.test(normalized)) {
    return "QA-focused work includes JUnit, Mockito, Selenium, JMeter, SoapUI, and Postman, plus a strong interest in test quality and automation.";
  }

  if (/(frontend|react|next|angular|javascript|typescript)/.test(normalized)) {
    return "Frontend experience includes React, Next.js, Angular, HTML5, CSS3, JavaScript, and TypeScript.";
  }

  if (/(backend|spring|java|api|microservice|rest)/.test(normalized)) {
    return "Backend experience includes Java, Spring Boot, Spring Core, Spring Security, REST APIs, microservices, Docker, Jenkins, and CI/CD workflows.";
  }

  if (/(database|sql|mysql|postgres|postgresql|mongodb)/.test(normalized)) {
    return "Database experience includes MySQL, PostgreSQL, MongoDB, and data modeling for application workflows.";
  }

  return DEFAULT_REPLY;
}

export default function CVChatBot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hello — ask me about the CV. I only answer CV-related questions.",
    },
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const latestAssistantMessage = [...messages].reverse().find((message) => message.role === "assistant")?.text ?? DEFAULT_REPLY;

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  const sendMessage = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    setMessages((currentMessages) => {
      const userMessage: ChatMessage = {
        id: Date.now(),
        role: "user",
        text: trimmedText,
      };

      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        text: getCvAnswer(trimmedText),
      };

      return [...currentMessages, userMessage, assistantMessage].slice(-14);
    });

    setInputValue("");
  };

  return (
    <div className="fixed right-0 top-0 bottom-0 z-[70] pointer-events-none">
      <div
        className={`fixed right-0 top-0 bottom-0 z-[72] w-[min(92vw,400px)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pointer-events-auto flex flex-col overflow-hidden border-l border-white/10 bg-[#1e1e1e] shadow-2xl`}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#1e1e1e] px-2 py-1">
          <div className="flex items-center gap-2">
            <span className="pl-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              Chat
            </span>
          </div>
          <div className="flex items-center gap-1 text-white/80">
            <button
              type="button"
              className="rounded-sm p-1.5 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="New Chat"
            >
              <VscNewFile size={15} />
            </button>
            <button
              type="button"
              className="rounded-sm p-1.5 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="More Actions"
            >
              <VscEllipsis size={15} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-sm p-1.5 transition-colors hover:bg-[#e81123] hover:text-white"
              aria-label="Close"
            >
              <VscClose size={15} />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4 custom-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gray-600 to-gray-800">
                  <VscSparkle size={16} className="text-white/80" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[13.5px] leading-relaxed shadow-sm ${
                  message.role === "user"
                    ? "bg-[#343a40] text-white/90"
                    : "border border-white/5 bg-[#2a2a2a] text-white/80"
                }`}
              >
                {formatMessageText(message.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-white/10 bg-[#1e1e1e] p-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/70 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white/90"
              >
                {prompt}
              </button>
            ))}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(inputValue);
            }}
          >
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#3c3c3c] px-3 py-2 focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask a question or type '/' for commands"
                className="min-w-0 flex-1 bg-transparent text-sm text-white/90 placeholder:text-white/50 outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white transition-colors hover:bg-blue-500 disabled:bg-gray-500"
                aria-label="Send message"
                disabled={!inputValue.trim()}
              >
                <VscSend size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="pointer-events-auto fixed right-3 bottom-3 z-[73] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg transition-all hover:scale-110 hover:from-blue-600 hover:to-purple-700"
        aria-expanded={isOpen}
      >
        <VscCommentDiscussion size={20} />
      </button>
    </div>
  );
}