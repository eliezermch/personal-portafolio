import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { type ProjectDetail, pageAtom, pages } from './portfolioData';

function playPageFlip() {
  const ctx = new AudioContext();
  const duration = 0.12;
  const buf = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const t = i / ctx.sampleRate;
    data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 28) * 0.35;
  }
  const source = ctx.createBufferSource();
  source.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1800;
  filter.Q.value = 0.8;
  source.connect(filter);
  filter.connect(ctx.destination);
  source.start();
  source.onended = () => ctx.close();
}

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectDetail;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="animate-fade-slide-up relative z-10 bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Project image */}
        <div className="w-full h-44 overflow-hidden">
          <img
            src={`assets/textures/${project.img}.png`}
            alt={project.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-indigo-900/60 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Visit link */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:-translate-y-0.5 transition-all duration-300 border border-white/20"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
};

const backCoverThumb = pages[pages.length - 1].back;

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const prevPage = useRef(page);
  const [modalProject, setModalProject] = useState<ProjectDetail | null>(null);

  // Page flip sound
  useEffect(() => {
    if (prevPage.current !== page) {
      playPageFlip();
      prevPage.current = page;
    }
  }, [page]);

  // Arrow key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalProject) return;
      if (e.key === 'ArrowRight') setPage((p) => Math.min(p + 1, pages.length));
      if (e.key === 'ArrowLeft') setPage((p) => Math.max(p - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setPage, modalProject]);

  const leftDetail = useMemo(
    () => (page > 0 ? (pages[page - 1].backDetail ?? null) : null),
    [page]
  );
  const rightDetail = useMemo(
    () => (page < pages.length ? (pages[page].frontDetail ?? null) : null),
    [page]
  );

  return (
    <>
      {/* Project detail modal */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}

      <div className="w-full flex flex-col items-center gap-4">
        {/* Visit Project buttons */}
        <div className="min-h-10 flex items-center justify-center gap-3 flex-wrap">
          {leftDetail && (
            <button
              key={`left-${page}`}
              onClick={() => setModalProject(leftDetail)}
              className="animate-fade-slide-up px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:-translate-y-1 transition-all duration-300 inline-block whitespace-nowrap border border-white/20 cursor-pointer"
            >
              ← {leftDetail.name}
            </button>
          )}
          {rightDetail && (
            <button
              key={`right-${page}`}
              onClick={() => setModalProject(rightDetail)}
              className="animate-fade-slide-up px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:-translate-y-1 transition-all duration-300 inline-block whitespace-nowrap border border-white/20 cursor-pointer"
            >
              {rightDetail.name} →
            </button>
          )}
        </div>

        {/* Thumbnail strip + Prev / Next */}
        <div className="bg-indigo-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl w-full max-w-full">
          <div className="flex items-end justify-start sm:justify-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {/* Prev */}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="self-center transition-all duration-300 px-3 py-2 rounded-lg text-sm font-bold border cursor-pointer bg-slate-800/50 text-gray-300 border-white/10 hover:bg-slate-700/50 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              ‹
            </button>

            {/* Page thumbnails */}
            {[...pages].map((pageData, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                  index === page
                    ? 'border-indigo-400 bg-indigo-700/40 scale-110 shadow-[0_0_12px_rgba(99,102,241,0.5)]'
                    : 'border-white/10 bg-slate-800/40 hover:border-white/30 hover:bg-slate-700/50'
                }`}
              >
                <img
                  src={`assets/textures/${pageData.front}.png`}
                  alt={index === 0 ? 'Cover' : `Page ${index}`}
                  className="w-10 h-14 object-cover rounded"
                  draggable={false}
                />
                <span className="text-[10px] text-gray-400 leading-none">
                  {index === 0 ? 'Cover' : `P${index}`}
                </span>
              </button>
            ))}

            {/* Back Cover thumbnail */}
            <button
              onClick={() => setPage(pages.length)}
              className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                page === pages.length
                  ? 'border-indigo-400 bg-indigo-700/40 scale-110 shadow-[0_0_12px_rgba(99,102,241,0.5)]'
                  : 'border-white/10 bg-slate-800/40 hover:border-white/30 hover:bg-slate-700/50'
              }`}
            >
              <img
                src={`assets/textures/${backCoverThumb}.png`}
                alt="Back Cover"
                className="w-10 h-14 object-cover rounded"
                draggable={false}
              />
              <span className="text-[10px] text-gray-400 leading-none">Back</span>
            </button>

            {/* Next */}
            <button
              onClick={() => setPage((p) => Math.min(p + 1, pages.length))}
              disabled={page === pages.length}
              className="self-center transition-all duration-300 px-3 py-2 rounded-lg text-sm font-bold border cursor-pointer bg-slate-800/50 text-gray-300 border-white/10 hover:bg-slate-700/50 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
