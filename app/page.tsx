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

      <footer className="text-center py-6 text-slate-500 text-sm glass mt-auto">
        <p>© {new Date().getFullYear()} Oussama Errahili. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Framer Motion & Tailwind CSS</p>
      </footer>
    </>
  );
}
