import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { links, owner } from "@/data/portfolio";
import { siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${owner.name} — ${owner.title}`,
  description:
    "Senior Software Engineer specializing in Flutter, WebRTC real-time media, iOS native development, and scalable full-stack architectures.",
  authors: [{ name: owner.name, url: links.github }],
  keywords: [
    "Bashar Albashier",
    "Flutter Engineer",
    "Senior Mobile Engineer",
    "WebRTC Dart",
    "iOS Developer",
    "Full-Stack Engineer",
    "LiveKit",
    "Software Architecture",
  ],
  openGraph: {
    title: `${owner.name} — ${owner.title}`,
    description:
      "Flutter, WebRTC real-time communication, and scalable systems engineering. Selected work, experience, and contact.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/profile-v2.jpg",
        width: 1200,
        height: 1200,
        alt: `Portrait of ${owner.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${owner.name} — ${owner.title}`,
    description:
      "Senior Software Engineer specializing in Flutter, WebRTC, and Full-Stack systems.",
    images: ["/images/profile-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: owner.name,
    jobTitle: owner.title,
    url: siteUrl,
    sameAs: [links.github, links.linkedin],
    knowsAbout: [
      "Flutter",
      "Dart",
      "WebRTC",
      "iOS Development",
      "SwiftUI",
      "LiveKit",
      "Full-Stack Development",
      "Real-time Systems",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (dark) document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
