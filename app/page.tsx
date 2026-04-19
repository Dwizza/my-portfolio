import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="text-center py-12 text-muted-foreground text-sm border-t border-white/5 bg-background/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Oussama Errahili. All rights reserved.</p>
        <p className="mt-2 text-xs font-mono opacity-50 uppercase tracking-tighter">Built with Next.js, Framer Motion & Shadcn/UI</p>
      </footer>
    </>
  );
}
