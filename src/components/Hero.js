import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-urban-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-white text-black px-4 py-2 mb-4 font-bold text-sm uppercase tracking-widest">
            OBLIQUE-RUSTE
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-8 leading-none">
            Urban
            <br />
            Street Style
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-white font-medium">
            Elevate your wardrobe with our exclusive collection of streetwear, footwear, and headwear.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-secondary bg-white text-black border-white hover:bg-gray-200 hover:text-black text-lg py-4 px-8">
              Shop Now
            </button>
            <button className="btn-secondary text-white border-white hover:bg-white hover:text-black text-lg py-4 px-8">
              New Arrivals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
