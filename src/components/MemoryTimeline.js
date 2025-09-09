import React, { useState, useEffect } from "react";

// Your original images
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";
import img11 from "../assets/images/img11.jpeg";

const memories = [
  { text: "My favorite Photo 😄", img: img5 },
  { text: "Our crazy dance 💃🕺", img: img4 },
  { text: "Our Crazy New Year ❤️", img: img8 },
  { text: "Always there for you ❤️", img: img3 },
  { text: "Social Chale?? 🍹", img: img9 },
  { text: "Nariyal lelo 🥥", img: img6 },
  { text: "Holi Bhoot 👻🎨", img: img11 },
];

const MemoryTimeline = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextMemory = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % memories.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevMemory = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + memories.length) % memories.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToMemory = (index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 px-4 py-16 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3">
            Our Beautiful
          </h2>
          <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Memories
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Memory Display */}
        <div className="flex flex-col items-center">
          
          {/* Image Container */}
          <div className="relative group mb-6 w-full max-w-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white p-2 rounded-3xl">
              <img
                src={memories[current].img}
                alt={memories[current].text}
                className={`w-full h-80 sm:h-96 md:h-[28rem] object-cover rounded-2xl transition-all duration-300 ${
                  isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Memory Text */}
          <div className={`bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50 mb-8 transition-all duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
            <p className="text-lg md:text-xl text-gray-700 font-medium text-center">
              {memories[current].text}
            </p>
          </div>

          {/* Navigation Buttons - Below Image */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={prevMemory}
              disabled={isAnimating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              <span className="font-medium">Previous</span>
            </button>

            <div className="px-4 py-2 bg-white/80 rounded-full shadow-md">
              <span className="text-pink-500 font-bold">{current + 1}</span>
              <span className="text-gray-500 mx-1">/</span>
              <span className="text-gray-700 font-medium">{memories.length}</span>
            </div>

            <button
              onClick={nextMemory}
              disabled={isAnimating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <span className="font-medium">Next</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMemory(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 rounded-full border-2 ${
                  index === current
                    ? 'w-10 h-3 bg-gradient-to-r from-pink-400 to-purple-400 border-transparent'
                    : 'w-3 h-3 bg-white/80 border-gray-300 hover:border-pink-300 hover:bg-pink-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-16 left-6 opacity-10 text-4xl animate-pulse">💕</div>
        <div className="absolute top-24 right-8 opacity-10 text-3xl animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-16 left-8 opacity-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="absolute bottom-24 right-6 opacity-10 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>💫</div>
      </div>
    </div>
  );
};

export default MemoryTimeline;