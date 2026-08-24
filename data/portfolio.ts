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
  status: "Available for select opportunities",
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
  email: "mailto:basharalbashier@gmail.com",
  emailDisplay: "basharalbashier@gmail.com",
  github: "https://github.com/basharalbashier",
  linkedin: "https://linkedin.com/in/basharalbashier",
  resume: "/Bashar-Albashier.pdf",
  resumePdf: "/Bashar-Albashier.pdf",
  resumeDocx: "/Bashar-Albashier-CV.docx",
} as const;

export const profileImage = {
  src: "/images/profile-v2.jpg",
  alt: "Portrait of Bashar Albashier",
  width: 1200,
  height: 1200,
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
      "A Flutter plugin wrapping a native iOS photo and video editor — crop, rotate, filters, drawing, mosaic, and more, exposed to Dart with localization support.",
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
      "A Dart repository focused on image editing — an area Bashar works in daily, from short-video editing pipelines to native media tooling on iOS.",
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
      "The medical record application built for Omdurman Maternity Hospital — led by Bashar with a team of five, using Flutter and Laravel with automated testing.",
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
      "A WebRTC signaling server written in Dart, built to connect peers for calling demos and reusable across real-time Flutter applications.",
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
      "A Dart WebSocket implementation powering chat APIs — designed to stream any data type between clients and services in real time.",
    tags: ["Dart", "WebSockets", "Chat"],
    href: "https://github.com/basharalbashier/dart-realtime-api",
    linkLabel: "View repository",
  },
] as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;
