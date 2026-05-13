import { IconDownload } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

// ── Typewriter hook ────────────────────────────────────────────────────────────
const TITLES = [
  'Full Stack Developer',
  '3D Web Developer',
  'React & Next.js Engineer',
  'TypeScript Enthusiast',
];

function useTypewriter(
  texts: string[],
  typeSpeed = 75,
  deleteSpeed = 40,
  pause = 1600
) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typeSpeed
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        deleteSpeed
      );
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
  }, [displayed, deleting, idx, texts, typeSpeed, deleteSpeed, pause]);

  return displayed;
}

// ── Animated counter ───────────────────────────────────────────────────────────
function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setCount(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl font-bold text-indigo-400">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-gray-400 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

// ── Profile ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 3, suffix: '+', label: 'Years Exp.' },
  { value: 6, suffix: '+', label: 'Projects' },
  { value: 9, suffix: '+', label: 'Technologies' },
];

const Profile = () => {
  const title = useTypewriter(TITLES);

  return (
    <div className="w-full flex items-center justify-center mt-8 lg:mt-16 px-4 sm:px-8">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
        {/* ── Left: text content ── */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-500 leading-tight">
            Eliezer Chirino
          </h1>

          {/* Typewriter subtitle */}
          <div className="flex items-center gap-1 h-8">
            <span className="text-xl font-medium text-indigo-300">{title}</span>
            <span className="w-[2px] h-5 bg-indigo-400 animate-blink rounded-full" />
          </div>

          <p className="text-base leading-7 text-gray-300 max-w-lg">
            I am a passionate Software Developer driven by curiosity,
            creativity, and a strong sense of purpose. I love building clean,
            efficient, and meaningful digital experiences — always striving to
            write better code, design better systems, and grow through every
            challenge.
          </p>

          {/* Animated stat counters */}
          <div className="flex items-center gap-4 sm:gap-8 py-2">
            {STATS.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>

          {/* Download CV */}
          <a
            href="assets/cv/web-developer-eliezer-cv-2025.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(99,102,241,0.55)] border border-indigo-500/50"
          >
            <IconDownload size={17} />
            Download CV
          </a>
        </div>

        {/* ── Right: headshot ── */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">
          <div className="relative">
            {/* Outer pulsing glow */}
            <div
              className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            {/* Static accent ring */}
            <div className="absolute inset-[-6px] rounded-full border-2 border-indigo-500/40" />
            {/* Inner subtle ring */}
            <div className="absolute inset-[-14px] rounded-full border border-indigo-500/15" />
            {/* Photo */}
            <img
              className="relative z-10 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] rounded-full object-cover shadow-2xl"
              src="/assets/headshot/eliezer_headshot.JPG"
              alt="Eliezer Chirino"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
