import { atom } from 'jotai';

export type ProjectDetail = {
  name: string;
  link: string;
  img: string;
  description: string;
  tech: string[];
};

export type Page = {
  front: string;
  frontDetail?: ProjectDetail;
  back: string;
  backDetail?: ProjectDetail;
};

const projects: ProjectDetail[] = [
  {
    img: 'fresco-design-img',
    name: 'Fresco Design',
    link: 'https://www.fresco-design.com/',
    description:
      'Award-winning 3D web experiences studio. Contributed to interactive product showcases with immersive WebGL animations and scroll-driven storytelling.',
    tech: ['React', 'Three.js', 'WebGL', 'GSAP'],
  },
  {
    img: 'bike-img',
    name: '3D Bike Configurator',
    link: 'https://www.fresco-design.com/3d-bike-configurator',
    description:
      'Real-time 3D product configurator letting users customize bike colors and components live in the browser with instant visual feedback.',
    tech: ['Three.js', 'React', 'WebGL'],
  },
  {
    img: 'polyjoule-img',
    name: 'PolyJoule',
    link: 'https://www.polyjoule.com/',
    description:
      'Energy storage startup website featuring dynamic data visualizations, smooth scroll-driven animations, and a clean modern design system.',
    tech: ['Next.js', 'TypeScript', 'Three.js'],
  },
  {
    img: 'fresco-3d-img',
    name: 'Fresco 3D Library',
    link: 'https://s3.us-east-1.amazonaws.com/fresco-augmented-reality.com/libs/demo/index.html',
    description:
      'Custom WebGL augmented reality library for real-time 3D product visualization in the browser, enabling brands to offer try-before-you-buy experiences.',
    tech: ['WebGL', 'Three.js', 'JavaScript'],
  },
  {
    img: 'nasa-app',
    name: 'NASA App',
    link: 'https://github.com/eliezermch/nasa_app',
    description:
      'Mobile application consuming NASA public APIs to display the Astronomy Picture of the Day, Mars rover photos, and upcoming space events.',
    tech: ['React Native', 'TypeScript', 'REST API'],
  },
  {
    img: 'netflix-clone',
    name: 'Netflix Clone',
    link: 'https://netflix-clone-e.vercel.app/',
    description:
      'Full-stack streaming platform clone with authentication, movie catalog browsing, and a responsive UI that mirrors the real Netflix experience.',
    tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
  },
];

export const pageAtom = atom(0);

export const pages: Page[] = [
  {
    front: 'portfolio-cover',
    back: projects[0].img,
    backDetail: projects[0],
  },
];

for (let i = 1; i < projects.length - 1; i += 2) {
  pages.push({
    front: projects[i].img,
    frontDetail: projects[i],
    back: projects[i + 1].img,
    backDetail: projects[i + 1],
  });
}

pages.push({
  front: projects[projects.length - 1].img,
  frontDetail: projects[projects.length - 1],
  back: 'portfolio-back-cover',
});
