/**
 * Single source of truth for owner-specific content.
 * Update this file to change site content without touching components.
 */

export const owner = {
  name: "Bashar Albashier",
  firstName: "Bashar",
  initials: "BA",
  title: "Senior Software Engineer",
  experienceYears: "5+",
  location: "London, UK",
  bio: [
    "I'm a senior software engineer with more than five years of experience designing, building, and maintaining production applications — from Flutter mobile products to the backend systems behind them.",
    "My work centers on real-time communication and media-rich mobile engineering: WebRTC video calling, short-video editing, voice notes, and instant messaging. I care about the details users feel — performance, reliability, and interfaces that behave the way people expect.",
    "Across healthcare, delivery, e-commerce, and social products, I've led teams, shipped features used in production every day, and kept pushing quality through testing, refactoring, and honest measurement.",
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "Flutter & Dart", label: "Core Specialty" },
    { value: "WebRTC & Real-time", label: "Media & Streaming" },
    { value: "Full-Stack", label: "Backend & Cloud" },
  ],
} as const;

export const links = {
  github: "https://github.com/basharalbashier",
  linkedin: "https://linkedin.com/in/basharalbashier",
  whatsapp: "https://wa.me/201203886767",
  whatsappDisplay: "+20 120 388 6767",
  resume: "/Bashar-Albashier.pdf",
  resumePdf: "/Bashar-Albashier.pdf",
  resumeDocx: "/Bashar-Albashier-CV.docx",
} as const;

export const profileImage = {
  src: "/images/profile-v2.jpg",
  alt: "Portrait of Bashar Albashier",
  width: 1200,
  height: 1200,
  blurDataURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBQMDAwUGBQUFBQYIBgYGBgYICggICAgICAoKCgoKCgoKDAwMDAwMDg4ODg4PDw8PDw8PDw8P/9sAQwECAgIEBAQHBAQHEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/90ABAAB/9oADAMBAAIRAxEAPwDwU3PhayBDn7au2ON7iHzGhsZV/fFpZI5EjXMaMP3iuMBuAQa+hFtPCzKGTUbVlIyCJVII/OvnL9lVVuPhb8f4bgebGPAk8m1vmG9JPlbB7rk4PUZrzTwqSfC+jkn/AJc7f/0WtRXy1UXZSb/pHYsZ7RK8dj//2Q==",
} as const;

export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Languages",
    items: ["Dart", "Python", "JavaScript", "PHP", "Ruby"],
  },
  {
    label: "Mobile",
    items: [
      "Flutter",
      "SwiftUI",
      "UIKit",
      "CoreData",
      "CallKit",
      "WebRTC",
      "LiveKit",
    ],
  },
  {
    label: "Web & Backend",
    items: ["React", "HTML", "CSS", "Laravel", "Node.js", "Ruby on Rails"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "DevOps & Practices",
    items: ["AWS", "Docker", "CI/CD", "Git", "Agile", "Scrum", "TDD"],
  },
] as const;

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Tezda Ltd (Pingtop)",
    location: "London, UK",
    period: "03/2024 — Present",
    current: true,
    highlights: [
      "Developed scalable Flutter and Dart features for a social product.",
      "Built the livestream feature using the LiveKit SDK.",
      "Developed the feed's short-video player and owned short-video editing implementation.",
      "Contributed to WebRTC video calling, voice notes, and instant messaging.",
      "Integrated RESTful APIs and GraphQL services.",
      "Optimized and improved the performance of heavy media features — livestream, video playback, and editing.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Omdurman Maternity Hospital",
    location: "Omdurman, Sudan",
    period: "10/2022 — 04/2023",
    highlights: [
      "Led a team of five developers.",
      "Built and maintained medical record applications with Flutter and Laravel.",
      "Introduced automated testing practices.",
      "Improved reliability and reduced defects across the system.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Soat Inc.",
    location: "Riyadh, KSA",
    period: "06/2021 — 10/2022",
    highlights: [
      "Developed delivery applications with Flutter, Node.js, and Laravel.",
      "Implemented real-time geolocation tracking features.",
      "Worked on server-side performance and load balancing.",
      "Built algorithms powering management dashboards.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amipharma Inc.",
    location: "Khartoum-Bahri, Sudan",
    period: "01/2019 — 05/2021",
    highlights: [
      "Built e-commerce applications with Flutter and Ruby on Rails.",
      "Implemented authentication and payment workflows.",
      "Improved product listing, pagination, and overall UI experience.",
    ],
  },
] as const;

export type EducationItem = {
  degree: string;
  school: string;
  year: string;
};

export const education: readonly EducationItem[] = [
  {
    degree: "BSc Computer Science",
    school: "Sudan University",
    year: "2019",
  },
  {
    degree: "Diploma in Survey Engineering",
    school: "Sudan University",
    year: "2013",
  },
] as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  kind: string;
  description: string;
  details: readonly string[];
  tags: readonly string[];
  href: string;
  linkLabel: string;
  isFork?: boolean;
};

/**
 * Curated from the public profile at github.com/basharalbashier.
 * Descriptions stay factual to each repository's own documentation.
 */
export const projects: readonly Project[] = [
  {
    id: "bash-ios-editor",
    index: "01",
    title: "iOS Image & Video Editor",
    kind: "Native platform work",
    description:
      "A Flutter plugin that brings native iOS photo and video editing into Flutter applications by integrating HXPHPicker behind a Dart-facing API.",
    details: [
      "Exposes native crop, rotate, filter, drawing, and mosaic tools to Flutter applications.",
      "Includes localization support and an example application to make integration easier to evaluate.",
      "Connects Flutter code with native iOS media capabilities while keeping the consuming API straightforward.",
    ],
    tags: ["Dart", "SwiftUI", "UIKit", "iOS"],
    href: "https://github.com/basharalbashier/bash_ios_image_and_video_editor",
    linkLabel: "View repository",
  },
  {
    id: "pro-image-editor",
    index: "02",
    title: "Pro Image Editor",
    kind: "Media tooling",
    description:
      "A substantial Dart image-editing codebase covering modular editing tools, configurable interfaces, and reusable interaction patterns for Flutter applications.",
    details: [
      "Contains paint, text, crop-and-rotate, filter, blur, emoji, sticker, and tuning editor modules.",
      "Provides multiple interface systems, including grounded, frosted-glass, WhatsApp-style, and custom profile-editing designs.",
      "Includes configurable callbacks, state-history import and export, localization models, and reusable editor components.",
    ],
    tags: ["Dart", "Flutter", "Image editing"],
    href: "https://github.com/basharTezda/pro_image_editor",
    linkLabel: "View repository",
  },
  {
    id: "medical-record",
    index: "03",
    title: "Maternity Hospital Medical Record",
    kind: "Production healthcare system",
    description:
      "A Flutter medical-record application developed for Omdurman Maternity Hospital, with Bashar leading a five-developer team and contributing across the application and Laravel-backed workflows.",
    details: [
      "Covers patient registration, maternity and gynaecology records, antenatal care, delivery notes, and clinical examinations.",
      "Includes neonatal, ICU, laboratory, pharmacy, nutrition, surgery, ultrasound, and statistics workflows in one application.",
      "The supplied professional record documents team leadership, automated-testing practices, and reliability improvements.",
    ],
    tags: ["Flutter", "Laravel", "Healthcare"],
    href: "https://github.com/basharalbashier/Omdorman-Maternity-hospital-medical-record",
    linkLabel: "View repository",
  },
  {
    id: "webrtc-signaling-server",
    index: "04",
    title: "WebRTC Signaling Server",
    kind: "Real-time communication",
    description:
      "A WebRTC signalling service created to connect peers for a Flutter calling demonstration and explore the server-side coordination required by real-time communication.",
    details: [
      "Includes signalling entry points and WebSocket connection management for coordinating peers.",
      "Packages the service with Docker and Docker Compose configuration for repeatable local execution.",
      "Includes a compiled Flutter web client that can be used alongside the signalling service for demonstration and testing.",
    ],
    tags: ["Dart", "WebRTC", "Signaling"],
    href: "https://github.com/basharalbashier/webRTC-server",
    linkLabel: "View repository",
  },
  {
    id: "dart-realtime-api",
    index: "05",
    title: "Dart Realtime API",
    kind: "Real-time infrastructure",
    description:
      "A Serverpod-based Dart backend that models users, conversations, and messages for a real-time chat service, with local infrastructure and cloud-deployment configuration included.",
    details: [
      "Defines endpoints and generated protocol models for users, conversations, and messages.",
      "Uses PostgreSQL and Redis through a Docker Compose development environment.",
      "Includes deployment scaffolding for AWS and Google Cloud alongside staging and production configuration.",
    ],
    tags: ["Dart", "Serverpod", "PostgreSQL", "Redis"],
    href: "https://github.com/basharalbashier/dart-realtime-api",
    linkLabel: "View repository",
  },
] as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;
