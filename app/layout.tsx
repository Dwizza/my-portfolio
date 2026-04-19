import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oussama Errahili | Full Stack Developer",
  description: "Portfolio of Oussama Errahili, an experienced Full Stack Developer specializing in React, Next.js, and Spring Boot.",
  openGraph: {
    title: "Oussama Errahili | Full Stack Developer",
    description: "Portfolio of Oussama Errahili, an experienced Full Stack Developer specializing in React, Next.js, and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} min-h-screen bg-background text-white selection:bg-brand-500/30 selection:text-brand-50`}>
        {children}
      </body>
    </html>
  );
}
