
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Smartphone, Server, Settings, Users, MessageSquare, Sparkles, Palette, Code, Download, MoveRight } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export interface HeroData {
  profileImageUrl: string;
  profileImageAlt: string;
  profileImageHint: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  primaryButtonIcon?: LucideIcon;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonIcon?: LucideIcon;
  cvButtonText?: string;
  cvButtonLink?: string;
  cvButtonIcon?: LucideIcon;
  cvFileName?: string;
}

export const heroData: HeroData = {
  profileImageUrl: '/my_images/1.JPG',
  profileImageAlt: 'Abdallh Mostafa - Flutter Developer',
  profileImageHint: 'professional developer',
  greeting: "Hello, I'm",
  name: 'Abdallh Mostafa',
  title: 'Flutter Developer Extraordinaire',
  description: 'I craft beautiful, high-performance mobile applications that provide seamless user experiences across platforms.',
  primaryButtonText: 'View My Work',
  primaryButtonLink: '#projects',
  primaryButtonIcon: MoveRight,
  secondaryButtonText: 'Get In Touch',
  secondaryButtonLink: '#contact',
  // Optional CV download button
  // cvButtonText: 'Download CV',
  // cvButtonLink: '/path-to-cv.pdf', // Replace with your actual CV path
  // cvButtonIcon: Download,
  // cvFileName: 'Abdallh-CV.pdf' // Suggested filename for download
};


export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce App "FlutterCart"',
    description: 'A full-featured e-commerce mobile application built with Flutter, including product listings, cart management, and Stripe integration for payments.',
    imageUrl: '/projects/pm-2/NewTux.png',
    imageHint: 'mobile shopping',
    tags: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'],
    githubUrl: 'https://github.com/abdallh',
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Social Media Platform "ConnectMe"',
    description: 'A cross-platform social networking app allowing users to share posts, follow others, and chat in real-time using Flutter and Firebase.',
    imageUrl: 'https://images.unsplash.com/photo-1726137570714-68c4d227b6b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'social network',
    tags: ['Flutter', 'Dart', 'Firebase Realtime DB', 'Bloc'],
    githubUrl: 'https://github.com/abdallh',
  },
  {
    id: '3',
    title: 'Task Management Tool "TaskFlow"',
    description: 'A productivity app for managing tasks and projects with features like reminders, team collaboration, and progress tracking.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager',
    tags: ['Flutter', 'Dart', 'SQLite', 'GetX'],

    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Test"',
    description: 'A productivity app for managing tasks and projects with features like reminders, team collaboration, and progress tracking.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager',
    tags: ['Flutter', 'Dart', 'SQLite', 'GetX'],

    liveUrl: '#',
  },
];

export interface SkillCategory {
  name: string;
  Icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Flutter Development',
    Icon: Smartphone,
    skills: ['Flutter', 'Dart', 'React Native (Basic)', 'Swift (Basic)', 'Kotlin (Basic)', 'UI/UX Design Principles', 'Responsive Design', 'Material Design', 'Cupertino Widgets'],
  },
  {
    name: 'Backend Development',
    Icon: Server,
    skills: ['Firebase (Auth, Firestore, Storage, Functions)', 'Node.js (Express)', 'REST APIs', 'GraphQL (Basic)', 'MongoDB'],
  },
  {
    name: 'Development Tools',
    Icon: Settings,
    skills: ['Git & GitHub', 'VS Code', 'Android Studio', 'Xcode', 'CI/CD (Codemagic, GitHub Actions)', 'JIRA', 'Agile Methodologies'],
  },
  {
    name: 'Other Skills',
    Icon: Sparkles,
    skills: ['Problem Solving', 'Team Collaboration', 'State Management (Provider, BLoC, GetX, Riverpod)', 'API Integration', 'Unit & Widget Testing'],
  },
  {
    name: 'Other Skills',
    Icon: Sparkles,
    skills: ['Problem Solving', 'Team Collaboration', 'State Management (Provider, BLoC, GetX, Riverpod)', 'API Integration', 'Unit & Widget Testing'],
  }
  {
    name: 'Other Skills',
    Icon: Sparkles,
    skills: ['Problem Solving', 'Team Collaboration', 'State Management (Provider, BLoC, GetX, Riverpod)', 'API Integration', 'Unit & Widget Testing'],
  }
  {
    name: 'Other Skills',
    Icon: Sparkles,
    skills: ['Problem Solving', 'Team Collaboration', 'State Management (Provider, BLoC, GetX, Riverpod)', 'API Integration', 'Unit & Widget Testing'],
  }
  {
    name: 'Test test test',
    Icon: Sparkles,
    skills: ['Problem Solving', 'Team Collaboration', 'State Management (Provider, BLoC, GetX, Riverpod)', 'API Integration', 'Unit & Widget Testing'],
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  avatarHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Abdallh is an exceptional Flutter developer. His attention to detail and problem-solving skills were invaluable to our project's success.",
    author: 'Jane Doe',
    role: 'Project Manager, Tech Solutions Inc.',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
  },
  {
    id: '2',
    quote: 'Working with Abdallh was a pleasure. He consistently delivered high-quality code and was always proactive in suggesting improvements.',
    author: 'John Smith',
    role: 'Lead Developer, MobileFirst Co.',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
  },
  {
    id: '3',
    quote: "Abdallh's expertise in Flutter helped us launch our app ahead of schedule. He's a true asset to any development team.",
    author: 'Alice Brown',
    role: 'CEO, Startup X',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'person smiling',
  },
];

export interface ContactLink {
  name: string;
  href: string;
  Icon: LucideIcon;
  text: string;
}
export const contactLinks: ContactLink[] = [
  { name: 'Email', href: 'mailto:abdallh.dev@example.com', Icon: Mail, text: 'abdallh.dev@example.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdallh', Icon: Linkedin, text: 'linkedin.com/in/abdallh' },
  { name: 'GitHub', href: 'https://github.com/abdallh', Icon: Github, text: 'github.com/abdallh' },
];

export const footerSocialLinks = [
  { name: 'GitHub', href: 'https://github.com/abdallh', Icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdallh', Icon: Linkedin },
  { name: 'Email', href: 'mailto:abdallh.dev@example.com', Icon: Mail },
];
