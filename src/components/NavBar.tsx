import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const NAV_SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-aware background — listens on both window and the drei Html wrapper
  useEffect(() => {
    const check = () => {
      const wrapper = document.querySelector('.html-wrapper');
      const top = (wrapper?.scrollTop ?? 0) || window.scrollY;
      setScrolled(top > 60);
    };

    const wrapper = document.querySelector('.html-wrapper');
    wrapper?.addEventListener('scroll', check, { passive: true });
    window.addEventListener('scroll', check, { passive: true });
    return () => {
      wrapper?.removeEventListener('scroll', check);
      window.removeEventListener('scroll', check);
    };
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Name */}
        <span className="font-semibold text-white text-sm hidden md:block">
          Eliezer Chirino
        </span>

        {/* Section nav links — desktop */}
        <ul className="hidden sm:flex items-center gap-7 text-sm">
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`relative cursor-pointer transition-colors duration-200 ${
                  activeSection === id
                    ? 'text-indigo-400 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-400 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: social icons + CV + hamburger */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a
            href="https://www.linkedin.com/in/eliezerchirino/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <a
            href="https://github.com/eliezermch"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href="https://leetcode.com/u/eliezermch/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-200"
          >
            <IconBrandLeetcode size={18} />
          </a>
          <a
            href="mailto:emchch3001arg@gmail.com"
            className="text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-200"
          >
            <IconMail size={18} />
          </a>
          <a
            href="assets/cv/web-developer-eliezer-cv-2025.pdf"
            download
            className="ml-1 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-500/50 rounded-full text-white text-xs font-medium transition-all duration-200 hover:scale-105"
          >
            <IconDownload size={13} />
            CV
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden ml-1 text-white hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-1 py-4">
            {NAV_SECTIONS.map(({ id, label }) => (
              <li key={id} className="w-full text-center">
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full py-3 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === id
                      ? 'text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export { NavBar };
