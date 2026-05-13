import { useEffect, useRef, useState } from 'react';
import { experienceData, type Job } from '../data/experienceData';

function TimelineItem({ job, index }: { job: Job; index: number }) {
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

  return (
    <div
      ref={ref}
      className="relative pl-10 transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-32px)',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline dot — centered on the line with -translate-x-1/2 */}
      <div className="absolute left-0 top-2 -translate-x-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 z-10">
        <div className={`w-2 h-2 rounded-full bg-indigo-400 ${job.current ? 'animate-pulse' : ''}`} />
      </div>

      {/* Card */}
      <div className={`mb-10 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
        job.current
          ? 'bg-indigo-900/30 border-indigo-500/40 hover:border-indigo-400/60'
          : 'bg-indigo-900/20 border-white/10 hover:border-white/20 hover:bg-indigo-900/30'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{job.role}</h3>
              {job.current && (
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold rounded-full border border-indigo-500/40 tracking-wide">
                  NOW
                </span>
              )}
            </div>
            <p className="text-indigo-400 font-medium text-sm">{job.company}</p>
          </div>
          <span className="text-xs text-gray-500 whitespace-nowrap sm:mt-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 self-start">
            {job.period}
          </span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          {job.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-indigo-900/60 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Timeline = () => {
  return (
    <section id="experience" className="w-full py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Work Experience
        </h2>

        {/* Vertical line + items */}
        <div className="relative ml-3">
          {/* Explicit line — same x origin as the dots (left-0) */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500/25" />
          {experienceData.map((job, index) => (
            <TimelineItem key={`${job.company}-${job.role}`} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
