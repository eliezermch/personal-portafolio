const Profile = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4 mt-20">
      <div className="max-w-5xl gap-8 lg:gap-0 flex flex-col lg:flex-row items-center justify-between px-8">
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-5xl text font-bold text-indigo-600">
            Eliezer Chirino
          </h1>
          <p className="text-lg leading-6 text-white">
            I am a passionate Software Developer driven by curiosity,
            creativity, and a strong sense of purpose. I love building clean,
            efficient, and meaningful digital experiences. Always striving to
            write better code, design better systems, and grow through every
            challenge.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-4 text-center">
          <img
            className="w-[280px] h-[280px] rounded-[50%] object-cover"
            src="/assets/headshot/eliezer_headshot.JPG"
            alt="Eliezer headshot image"
          />
        </div>
      </div>
    </div>
  );
};

export { Profile };
