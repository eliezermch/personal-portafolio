import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  shadowColor: string;
  glowColor: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  shadowColor,
  glowColor,
}) => {
  return (
    <div
      className="
        relative group
        bg-indigo-900/20 backdrop-blur-md 
        border border-white/10 
        rounded-xl p-6 
        shadow-xl hover:shadow-2xl
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:border-white/20
        hover:bg-indigo-900/25
        cursor-pointer
        @container
      "
      style={{
        boxShadow: `0 8px 32px rgb(0 0 0 / 0.2), 0 0 20px ${shadowColor}15`,
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}08 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with shadow */}
        <div
          className="mb-4 p-3 rounded-lg w-fit transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${shadowColor}12`,
            boxShadow: `0 4px 20px ${shadowColor}25`,
          }}
        >
          <div style={{ color: shadowColor }}>{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 @container-normal:text-base">
          {description}
        </p>
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Card;
