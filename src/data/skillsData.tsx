import React from 'react';
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandAws,
  IconBrandThreejs,
  IconBrandGit,
} from '@tabler/icons-react';

export type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Tools';

export const skillCategories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Tools'];

export type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  shadowColor: string;
  glowColor: string;
  category: SkillCategory;
  level: number; // 0–100 proficiency
};

export const skillsData: Skill[] = [
  {
    title: 'Next.js',
    description:
      '+3 years of experience with Next.js — Full-stack React framework for production-ready applications with SSR and SSG capabilities.',
    icon: <IconBrandNextjs size={28} />,
    shadowColor: '#ffffff',
    glowColor: '#000000',
    category: 'Frontend',
    level: 90,
  },
  {
    title: 'TypeScript',
    description:
      '+3 years of experience with TypeScript — Strongly typed programming language that builds on JavaScript with static type definitions.',
    icon: <IconBrandTypescript size={28} />,
    shadowColor: '#3178c6',
    glowColor: '#3178c6',
    category: 'Frontend',
    level: 88,
  },
  {
    title: 'Tailwind CSS',
    description:
      '+2 years of experience with Tailwind CSS — Utility-first CSS framework for rapidly building custom user interfaces.',
    icon: <IconBrandTailwind size={28} />,
    shadowColor: '#06b6d4',
    glowColor: '#06b6d4',
    category: 'Frontend',
    level: 92,
  },
  {
    title: 'React',
    description:
      '+3 years of experience with React — JavaScript library for building user interfaces with component-based architecture.',
    icon: <IconBrandReact size={28} />,
    shadowColor: '#61dafb',
    glowColor: '#61dafb',
    category: 'Frontend',
    level: 90,
  },
  {
    title: 'Node.js',
    description:
      "+2 years of experience with Node.js — JavaScript runtime built on Chrome's V8 engine for server-side development.",
    icon: <IconBrandNodejs size={28} />,
    shadowColor: '#339933',
    glowColor: '#339933',
    category: 'Backend',
    level: 75,
  },
  {
    title: 'Python',
    description:
      '+1 year of experience with Python — High-level programming language for data science, AI, and backend development.',
    icon: <IconBrandPython size={28} />,
    shadowColor: '#3776ab',
    glowColor: '#3776ab',
    category: 'Backend',
    level: 60,
  },
  {
    title: 'AWS',
    description:
      '+2 years of experience with AWS — Cloud computing platform providing a wide range of services for scalable applications.',
    icon: <IconBrandAws size={28} />,
    shadowColor: '#ff9900',
    glowColor: '#ff9900',
    category: 'Backend',
    level: 70,
  },
  {
    title: 'Three.js',
    description:
      '+2 years of experience with Three.js — JavaScript library for creating 3D graphics in the browser using WebGL.',
    icon: <IconBrandThreejs size={28} />,
    shadowColor: '#ffffff',
    glowColor: '#000000',
    category: 'Frontend',
    level: 82,
  },
  {
    title: 'Git',
    description:
      '+3 years of experience with Git — Distributed version control system for tracking changes and collaboration.',
    icon: <IconBrandGit size={28} />,
    shadowColor: '#f05032',
    glowColor: '#f05032',
    category: 'Tools',
    level: 85,
  },
];
