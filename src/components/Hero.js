import React from 'react';
import logo from '../images/logo/logo.jpeg';

const Hero = () => {
  return (
    <div className="relative bg-urban-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      {/* Diagonal Stripes */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Translucent Logo Image */}
          <div className="flex-1 relative hidden lg:block">
            <img 
              src={logo} 
              alt="OBLIQUE-RUSTE" 
              className="w-full h-auto object-contain opacity-30 hover:opacity-40 transition-opacity duration-500 mix-blend-lighten scale-150 -translate-x-36 -translate-y-24"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex-1 max-w-4xl">
            {/* Main Heading with Gradient Effect */}
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-6 leading-none">
              <span className="inline-block hover:skew-y-2 transition-transform duration-300">Urban</span>
              <br />
              <span className="inline-block hover:skew-y-2 transition-transform duration-300 text-white">Street</span>
              <br />
              <span className="inline-block hover:skew-y-2 transition-transform duration-300 bg-white text-black px-4">Style</span>
            </h1>
            
            {/* Divider Line */}
            <div className="w-24 h-1 bg-white mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-normal max-w-2xl leading-relaxed">
              Elevate your wardrobe with our exclusive collection of streetwear, footwear, and headwear. Express your individuality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-white text-black border-4 border-white px-10 py-5 font-black uppercase tracking-wider hover:bg-black hover:text-white text-lg transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                Shop Now
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="group bg-transparent text-white border-4 border-white px-10 py-5 font-black uppercase tracking-wider hover:bg-white hover:text-black text-lg transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                New Arrivals
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">★</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
