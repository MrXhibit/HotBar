import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-green-400 text-white min-h-[400px] flex items-center justify-center text-center p-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Discover Your Next Favorite Movie 🎬
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore a vast collection of movies and find the perfect film to watch.
          Search, discover, and save your favorites all in one place.
        </p>
        <a
          href="#search"
          className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300"
        >
          Start Searching
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
