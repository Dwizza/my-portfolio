import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oussama Errahili | Full Stack Developer & QA Engineer",
  description:
    "Portfolio of Oussama Errahili — Full Stack Developer & QA Engineer specializing in React, Next.js, Spring Boot, and modern web technologies.",
  openGraph: {
    title: "Oussama Errahili | Full Stack Developer & QA Engineer",
    description:
      "Portfolio of Oussama Errahili — Full Stack Developer & QA Engineer specializing in React, Next.js, Spring Boot, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('portfolio-theme') || 'oussama-dark';
                document.documentElement.classList.add('theme-' + theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground font-sans antialiased"
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
