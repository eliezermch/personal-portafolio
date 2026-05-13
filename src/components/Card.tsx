import React, { useEffect, useRef, useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  shadowColor: string;
  glowColor: string;
  level: number;
  index: number; // for stagger delay
}

function getProficiencyLabel(level: number) {
  if (level >= 85) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  return 'Beginner';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  shadowColor,
  glowColor,
  level,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const staggerDelay = Math.min(index * 80, 400);

  return (
    <div
      ref={ref}
      className="relative group bg-indigo-900/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:border-white/20 hover:bg-indigo-900/25"
      style={{
        boxShadow: `0 8px 32px rgb(0 0 0 / 0.2), 0 0 20px ${shadowColor}15`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${staggerDelay}ms`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}08 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="mb-4 p-3 rounded-lg w-fit transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${shadowColor}12`,
            boxShadow: `0 4px 20px ${shadowColor}25`,
          }}
        >
          <div style={{ color: shadowColor }}>{icon}</div>
        </div>

        {/* Title + proficiency label */}
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
            {title}
          </h3>
          <span className="text-xs text-gray-500 ml-2 shrink-0">
            {getProficiencyLabel(level)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4">
          {description}
        </p>

        {/* Skill level bar */}
        <div className="space-y-1">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: visible ? `${level}%` : '0%',
                backgroundColor: shadowColor === '#ffffff' ? '#a5b4fc' : shadowColor,
                boxShadow: `0 0 8px ${shadowColor === '#ffffff' ? '#a5b4fc' : shadowColor}80`,
                transitionDelay: `${staggerDelay + 200}ms`,
              }}
            />
          </div>
          <div className="flex justify-end">
            <span className="text-[10px] text-gray-600">{level}%</span>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Card;
