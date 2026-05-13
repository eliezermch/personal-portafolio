import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_DISPLAY = 900; // ms — always show at least this long

    const hide = () => {
      const elapsed = Date.now() - startTime;
      const wait = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setVisible(false), 550);
      }, wait);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    // Hard fallback — never block the page longer than 4s
    const fallback = setTimeout(hide, 4000);
    return () => clearTimeout(fallback);
  }, []);

  if (!visible) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950 transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? 'none' : 'all' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Branded initials with spinning ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-indigo-600/20 border-2 border-indigo-500/40 flex items-center justify-center">
            <span className="text-3xl font-bold text-indigo-400 select-none">EC</span>
          </div>
          {/* Spinning arc */}
          <div
            className="absolute inset-[-6px] rounded-[18px] border-2 border-transparent animate-spin"
            style={{ borderTopColor: '#6366f1', animationDuration: '1s' }}
          />
        </div>

        {/* Label */}
        <p className="text-gray-600 text-xs tracking-[0.3em] uppercase select-none">
          Loading
        </p>

        {/* Pulsing dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};
