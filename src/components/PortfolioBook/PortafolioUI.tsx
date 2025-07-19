import { atom, useAtom } from 'jotai';

const pictures = [
  'fresco-design-img',
  'bike-img',
  'polyjoule-img',
  'fresco-3d-img',
  'nasa-app',
  'netflix-clone',
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: 'portfolio-cover',
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: 'portfolio-back-cover',
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  //   useEffect(() => {
  //     const audio = new Audio("/audios/page-flip-01a.mp3");
  //     audio.play();
  //   }, [page]);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-indigo-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium border ${
                index === page
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg scale-105'
                  : 'bg-slate-800/50 text-gray-300 border-white/10 hover:bg-slate-700/50 hover:border-white/20 hover:scale-102'
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? 'Cover' : `Page ${index}`}
            </button>
          ))}
          <button
            className={`transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium border ${
              page === pages.length
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg scale-105'
                : 'bg-slate-800/50 text-gray-300 border-white/10 hover:bg-slate-700/50 hover:border-white/20 hover:scale-102'
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </div>
  );
};
