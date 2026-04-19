"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

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
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-brand-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I am currently open to exciting opportunities and collaborations. Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring" }} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:oussamaerrahili124@gmail.com" className="text-slate-400 hover:text-brand-400 transition-colors break-all">
                  oussamaerrahili124@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring" }} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <a href="tel:+212629320061" className="text-slate-400 hover:text-green-400 transition-colors">
                  +212 629320061
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring" }} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Address</h4>
                <span className="text-slate-400">Youssoufia, Morocco</span>
              </div>
            </motion.div>

            <div className="flex gap-4 pt-4 px-2">
              <a href="https://github.com/Dwizza" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/oussamaerrahili" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-brand-400 hover:bg-brand-500/10 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 glass-card p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-400">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-slate-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors disabled:opacity-50"
                  placeholder="Hello..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-400">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Let's build something great together..."
                />
              </div>

              {status === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={16} />
                  Your message has been sent successfully!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <XCircle size={16} />
                  {errorMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-800 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group"
              >
                <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                {status !== "loading" && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
