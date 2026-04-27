"use client";

import React from "react";
import { VscMail, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function ContactFile() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message || "Message sent successfully." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-content pb-10 h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-vscode-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-vscode-blue2/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="text-sm text-vscode-comment mb-2.5">
          {"/* contact.css : let’s build something real */"}
        </p>

        <div className="flex flex-col gap-4 mb-8 max-w-3xl">
          <h1 className="font-sans font-black leading-none text-white tracking-[-2px] text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="font-mono text-vscode-text-muted text-sm md:text-[15px] leading-relaxed max-w-2xl">
            I&apos;m open to full-time roles, freelance work, and collaborations.
            If you want to talk product, engineering, or a new idea, send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 xl:gap-8 flex-1">
          {/* Left Side: Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-vscode-accent/15 border border-vscode-accent/20 flex items-center justify-center text-vscode-accent">
                  <VscMail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-vscode-text-muted font-bold">Contact</p>
                  <h2 className="text-white text-lg font-semibold">Quick ways to reach me</h2>
                </div>
              </div>

              <p className="font-mono text-vscode-text-muted text-sm leading-relaxed mb-6">
                Prefer email for project requests, LinkedIn for professional chat,
                and GitHub if you want to see code first.
              </p>

              <div className="space-y-3 font-mono text-sm">
                <a href="mailto:oussamaerrahili124@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-vscode-text hover:text-white hover:border-white/25 hover:bg-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-vscode-sidebar flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                    <VscMail size={18} />
                  </div>
                  <span className="flex-1">Email</span>
                  <span className="text-vscode-text-muted text-xs">fastest response</span>
                </a>
                <a href="https://github.com/OussamaErrahili" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-vscode-text hover:text-white hover:border-white/25 hover:bg-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-vscode-sidebar flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                    <VscGithubInverted size={18} />
                  </div>
                  <span className="flex-1">GitHub</span>
                  <span className="text-vscode-text-muted text-xs">projects & code</span>
                </a>
                <a href="https://www.linkedin.com/in/oussama-errahili-280553331/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-vscode-text hover:text-white hover:border-white/25 hover:bg-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-vscode-sidebar flex items-center justify-center group-hover:border-vscode-accent transition-colors">
                    <FaLinkedin size={18} />
                  </div>
                  <span className="flex-1">LinkedIn</span>
                  <span className="text-vscode-text-muted text-xs">professional profile</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.28em] text-vscode-text-muted font-bold mb-2">Availability</div>
                <div className="text-white font-semibold">Open</div>
                <div className="text-vscode-text-muted text-sm font-mono mt-1">Projects, internships, collaborations</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.28em] text-vscode-text-muted font-bold mb-2">Response time</div>
                <div className="text-white font-semibold">24-48h</div>
                <div className="text-vscode-text-muted text-sm font-mono mt-1">Usually faster on LinkedIn</div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-vscode-text-muted font-bold">Send message</p>
                <h2 className="text-white text-xl font-semibold mt-1">Let&apos;s talk</h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-vscode-text-muted text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Secure email delivery
              </div>
            </div>

            <form className="space-y-4 font-mono" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-vscode-bg/80 px-4 py-3 text-sm text-white placeholder:text-vscode-text-muted/70 focus:outline-none focus:border-vscode-accent focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-vscode-bg/80 px-4 py-3 text-sm text-white placeholder:text-vscode-text-muted/70 focus:outline-none focus:border-vscode-accent focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-vscode-bg/80 px-4 py-3 text-sm text-white placeholder:text-vscode-text-muted/70 focus:outline-none focus:border-vscode-accent focus:ring-2 focus:ring-vscode-accent/20 transition-all"
                  placeholder="Project opportunity"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-vscode-text-muted uppercase tracking-widest font-bold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-vscode-bg/80 px-4 py-3 text-sm text-white placeholder:text-vscode-text-muted/70 focus:outline-none focus:border-vscode-accent focus:ring-2 focus:ring-vscode-accent/20 transition-all min-h-[170px] resize-y"
                  placeholder="Tell me about your idea, role, or timeline..."
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-red-500/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-vscode-blue2 via-vscode-accent to-vscode-entity px-4 py-3.5 text-white font-mono text-sm font-semibold transition-all hover:brightness-110 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      ` }} />
    </div>
  );
}
