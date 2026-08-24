import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Bashar Albashier — Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience building Flutter mobile apps, WebRTC real-time communication, and full-stack systems.",
  openGraph: {
    title: "Bashar Albashier — Senior Software Engineer",
    description:
      "Flutter, real-time communication, and full-stack engineering. Selected work, experience, and contact.",
    type: "website",
    images: [
      {
        url: "/images/profile-v2.jpg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Bashar Albashier",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
