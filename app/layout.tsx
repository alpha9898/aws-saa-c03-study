import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { PWA } from "@/components/PWA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AWS SAA-C03 Study Hub",
  description:
    "Interactive AWS Certified Solutions Architect – Associate (SAA-C03) study app: scenario MCQs, a timed mock exam, flashcards, and concept Q&A. Bilingual English + Arabic.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  appleWebApp: { capable: true, title: "SAA-C03", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#0a1322",
};

const themeScript = `(function(){try{var t=localStorage.getItem('saa-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased min-h-screen`}
      >
        <Providers>
          <PWA />
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 pb-24 pt-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
