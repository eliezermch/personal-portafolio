export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
};

export const experienceData: Job[] = [
  {
    role: 'Software Developer',
    company: 'POTENCIAR S.G.R',
    period: 'Mar 2026 — Present',
    description:
      'Working as a Software Developer at a leading financial guarantee company in Argentina, building and maintaining internal tools and systems that support business operations in a hybrid environment.',
    tech: ['JavaScript', 'Python', 'TypeScript', 'React'],
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'Fresco Design',
    period: 'May 2024 — Mar 2026',
    description:
      'Led full-stack development of immersive web experiences for enterprise clients including PolyJoule and others. Built a real-time 3D Bike Configurator, an augmented reality product visualization library, and complex data-driven interfaces.',
    tech: ['Next.js', 'AWS', 'TypeScript', 'React', 'Node.js', 'Three.js', 'WebGL'],
  },
  {
    role: 'Frontend Developer',
    company: 'Fresco Design',
    period: 'Aug 2022 — Apr 2024',
    description:
      'Joined Fresco Design as a Frontend Developer, contributing to interactive web projects for international clients. Focused on building responsive UIs, animations, and 3D experiences across multiple industries.',
    tech: ['HTML', 'JavaScript', 'CSS', 'React', 'Three.js'],
  },
];
