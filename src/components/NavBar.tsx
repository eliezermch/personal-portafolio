import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

const NavBar = () => {
  return (
    <nav className="w-full h-16 text-white flex items-center justify-center">
      <div className="bg-indigo-900/40 border border-white/10 rounded-lg py-6 mt-16 shadow-xl flex items-center justify-center px-8 gap-8 space-x-4">
        <p>Eliezer Chirino</p>
        <ul className="flex gap-2 space-x-4">
          <li>
            <a
              href="https://www.linkedin.com/in/eliezerchirino/"
              target="_blank"
              className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <IconBrandLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/eliezermch"
              target="_blank"
              className="hover:text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <IconBrandGithub />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/eliezermch/"
              target="_blank"
              className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <IconBrandLeetcode />
            </a>
          </li>
          <li>
            <a
              href="mailto:emchch3001arg@gmail.com"
              className="hover:text-red-400 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <IconMail />
            </a>
          </li>
        </ul>
        <a
          href="assets/cv/web-developer-eliezer-cv-2025.pdf"
          download
          className="hover:text-indigo-300 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p>Download CV</p>
        </a>
      </div>
    </nav>
  );
};

export { NavBar };
