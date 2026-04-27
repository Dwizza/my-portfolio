import React from "react";
import { VscMail, VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function ContactFile() {
  return (
    <div className="home-content pb-10 h-full flex flex-col">
      <p className="text-sm text-vscode-comment mb-2.5">
        {"/* contact.css : drop me a line */"}
      </p>

      <h1 className="font-sans font-extrabold leading-none text-white tracking-[-2px] text-5xl md:text-6xl mb-8">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        
        {/* Left Side: Info */}
        <div className="flex flex-col space-y-6 lg:pr-8">
          <p className="font-mono text-vscode-text-muted text-sm leading-relaxed">
            I&apos;m currently seeking new opportunities and challenges. Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="space-y-4 font-mono text-sm">
            <a href="mailto:[EMAIL_ADDRESS]" className="flex items-center gap-3 text-vscode-text hover:text-vscode-accent transition-colors group">
              <div className="w-10 h-10 border border-vscode-border bg-vscode-sidebar rounded flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                <VscMail size={18} />
              </div>
              mail
            </a>
            <a href="https://github.com/Dwizza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-vscode-text hover:text-vscode-accent transition-colors group">
              <div className="w-10 h-10 border border-vscode-border bg-vscode-sidebar rounded flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                <VscGithubInverted size={18} />
              </div>
              github
            </a>
            <a href="https://www.linkedin.com/in/oussama-errahili-280553331/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-vscode-text hover:text-vscode-accent transition-colors group">
              <div className="w-10 h-10 border border-vscode-border bg-vscode-sidebar rounded flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                <FaLinkedin size={18} />
              </div>
              linkedin
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="border border-vscode-border bg-vscode-sidebar/50 rounded-md p-6 h-max">
          <form className="space-y-4 font-mono">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-1.5">
                <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold">Name</label>
                <input type="text" className="w-full bg-vscode-bg border border-vscode-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-vscode-accent transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold">Email</label>
                <input type="email" className="w-full bg-vscode-bg border border-vscode-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-vscode-accent transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold">Subject</label>
              <input type="text" className="w-full bg-vscode-bg border border-vscode-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-vscode-accent transition-colors" placeholder="Hello!" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold">Message</label>
              <textarea className="w-full bg-vscode-bg border border-vscode-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-vscode-accent transition-colors min-h-[120px] resize-y" placeholder="Your message here..."></textarea>
            </div>

            <button type="button" className="w-full bg-vscode-blue2 hover:bg-vscode-accent text-white font-mono text-sm py-2.5 rounded transition-colors border border-transparent">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
