const PortfolioGlossary = () => {
  return (
    <div className="w-full mb-8">
      <div className="bg-indigo-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl ">
        <h3 className="text-lg font-bold text-white text-center mb-6">
          📋 Project Glossary
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {/* Page 1 - Bike Project */}
          <div
            id="glossary-page-2"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 1</span>
              <span className="text-xs text-gray-400">🚴‍♂️</span>
            </div>
            <h4 className="text-white font-semibold mb-2">
              3D Bike Configurator
            </h4>
            <p className="text-xs text-gray-300 mb-3">
              Modern E-Bike configurator developed with Three.js & Fresco 3D
              Library.
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  'https://www.fresco-design.com/3d-bike-configurator',
                  '_blank'
                )
              }
            >
              🌐 View Project
            </button>
          </div>

          {/* Page 2 - Polyjoule */}
          <div
            id="glossary-page-1"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 2</span>
              <span className="text-xs text-gray-400">⚡</span>
            </div>
            <h4 className="text-white font-semibold mb-2">
              Polyjoule's Website
            </h4>
            <p className="text-xs text-gray-300 mb-3">
              Complete website with creative concepts into a fully functional
              and visually engaging digital experience.
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open('https://www.polyjoule.com/', '_blank')
              }
            >
              🌐 View Project
            </button>
          </div>

          {/* Page 3 - Fresco Design */}
          <div
            id="glossary-page-3"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 3</span>
              <span className="text-xs text-gray-400">🟢</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Fresco Design</h4>
            <p className="text-xs text-gray-300 mb-3">
              Creative design studio website with animations, interactive 3D
              models and 3D visualizations.
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open('https://www.fresco-design.com/', '_blank')
              }
            >
              🌐 View Project
            </button>
          </div>

          {/* Page 4 - Fresco 3D Library */}
          <div
            id="glossary-page-4"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 4</span>
              <span className="text-xs text-gray-400">📚</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Fresco 3D Library</h4>
            <p className="text-xs text-gray-300 mb-3">
              3D library built with Three.js for custom 3D viewers &
              configurators
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  'https://s3.us-east-1.amazonaws.com/fresco-augmented-reality.com/libs/demo/index.html',
                  '_blank'
                )
              }
            >
              🌐 View Project
            </button>
          </div>

          {/* Page 5 - Nasa App */}
          <div
            id="glossary-page-5"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 5</span>
              <span className="text-xs text-gray-400">🔵</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Nasa App</h4>
            <p className="text-xs text-gray-300 mb-3">
              NASA's Mobile App with React Native - API consuming & 3D solar
              system
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open('https://github.com/eliezermch/nasa_app', '_blank')
              }
            >
              🌐 View Repository
            </button>
          </div>

          {/* Page 6 - Netflix Clone */}
          <div
            id="glossary-page-6"
            className="bg-slate-800/50 border border-white/10 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">Page 6</span>
              <span className="text-xs text-gray-400">🔴</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Netflix Clone</h4>
            <p className="text-xs text-gray-300 mb-3">
              Netflix Clone Website with React.js and Hooks implementation
            </p>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open('https://netflix-clone-e.vercel.app/', '_blank')
              }
            >
              🌐 View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PortfolioGlossary };
