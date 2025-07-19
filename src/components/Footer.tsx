const Footer = () => {
  const currentDate = new Date();

  // Get the current year
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-indigo-900/40 backdrop-blur-xs border-t border-white/10 py-4 text-center text-white fixed bottom-0 left-0 w-full">
      {/* <h6 className="text-lg font-semibold">
        Software Engineer | Web Developer
      </h6> */}
      <p className="text-sm">
        © {currentYear} Eliezer Chirino. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
