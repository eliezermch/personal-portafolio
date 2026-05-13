import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Uses direct DOM mutation instead of React state to avoid re-rendering on every mousemove.
export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(99,102,241,0.07) 0%, transparent 60%)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return createPortal(
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[100] transition-[background] duration-300"
    />,
    document.body
  );
};
