"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center"
        >
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">05. Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let&apos;s Collaborate.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             I am currently open to exciting opportunities and collaborations. 
             Feel free to reach out to me!
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12"
        >
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="glass border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-mono text-blue-500/80 uppercase tracking-widest">Email</p>
                    <a href="mailto:oussamaerrahili124@gmail.com" className="text-foreground hover:text-blue-500 transition-colors break-all font-medium">
                      oussamaerrahili124@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass border-white/5 hover:border-blue-500/30 transition-all duration-300">
                 <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                       <Phone size={24} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-sm font-mono text-blue-400/80 uppercase tracking-widest">Phone</p>
                       <a href="tel:+212629320061" className="text-foreground hover:text-blue-400 transition-colors font-medium">
                          +212 629320061
                       </a>
                    </div>
                 </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass border-white/5 hover:border-blue-500/30 transition-all duration-300">
                 <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0">
                       <MapPin size={24} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-sm font-mono text-purple-400/80 uppercase tracking-widest">Location</p>
                       <p className="text-foreground font-medium">
                          Youssoufia, Morocco
                       </p>
                    </div>
                 </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="icon" className="w-12 h-12 rounded-full glass border-white/10 hover:border-blue-500/30 hover:text-blue-500 transition-all">
                <a href="https://github.com/Dwizza" target="_blank" rel="noreferrer">
                  <FaGithub size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="w-12 h-12 rounded-full glass border-white/10 hover:border-blue-500/30 hover:text-blue-400 transition-all">
                <a href="https://linkedin.com/in/oussamaerrahili" target="_blank" rel="noreferrer">
                  <FaLinkedin size={20} />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <Card className="glass border-white/5 p-8 relative overflow-hidden">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Your Name *</label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="glass border-white/5 focus-visible:ring-blue-500/50"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Your Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="glass border-white/5 focus-visible:ring-blue-500/50"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="glass border-white/5 focus-visible:ring-blue-500/50"
                    placeholder="Inquiry / Collaboration"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message *</label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="glass border-white/5 focus-visible:ring-blue-500/50 resize-none px-4 py-3"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 text-blue-500 text-sm bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <CheckCircle size={18} />
                    <p className="font-medium">Message delivered! I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                    <XCircle size={18} />
                    <p className="font-medium">{errorMessage}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  className="w-full h-14 bg-blue-500 hover:bg-blue-600 transition-all font-bold tracking-tight rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
                >
                  <span>{status === "loading" ? "Processing..." : "Dispatch Message"}</span>
                  {status !== "loading" && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
              
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
