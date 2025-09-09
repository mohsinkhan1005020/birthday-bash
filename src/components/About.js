import React, { useState, useEffect } from "react";
import img9 from "../assets/images/img9.jpeg";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const personalityTraits = [
    { emoji: "😄", trait: "Always Laughing", description: "Brings joy to every moment" },
    { emoji: "🌟", trait: "Bright Spirit", description: "Lights up any room" },
    { emoji: "💖", trait: "Kind Heart", description: "Cares deeply for everyone" },
    { emoji: "🎭", trait: "Fun & Quirky", description: "Makes ordinary days special" },
    { emoji: "🤗", trait: "Best Friend", description: "Always there when needed" },
    { emoji: "✨", trait: "Pure Magic", description: "Makes life more colorful" }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-4 py-16 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .float { animation: float 4s ease-in-out infinite; }
        .sparkle { animation: sparkle 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className={`text-center mb-16 ${mounted ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="text-4xl md:text-5xl mb-4">👑</div>
          <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4">
            Meet the Amazing
          </h1>
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
            Khushi
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Photo and Floating Elements */}
          <div className="relative flex justify-center">
            
            {/* Floating Decorative GIFs */}
            <div className="absolute -top-8 -left-8 float opacity-60" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎉</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-12 float opacity-60" style={{ animationDelay: '1.5s' }}>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">✨</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 float opacity-60" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg">🌟</span>
              </div>
            </div>

            {/* Profile Photo with Enhanced Design */}
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500 sparkle"></div>
              
              {/* Photo container */}
              <div className="relative bg-white p-3 rounded-full shadow-2xl">
                <img
                  src={img9}
                  alt="Khushi"
                  onLoad={() => setIsImageLoaded(true)}
                  className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-full transition-all duration-500 ${
                    isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  } group-hover:scale-105`}
                />
              </div>
              
              {/* Floating heart */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg float">
                <span className="text-xl">💖</span>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className={`space-y-8 ${mounted ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            
            {/* Main Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                A Beautiful Soul ✨
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                She’s honestly the most genuine person I know 💯. Thanks for making my wardrobe look good (basically saving me from looking homeless 😂).
                Always ready to hear my endless chants without judging—what a brave soul! 🫡
                Dancing with you is the best… thanks for not calling the police on my dance moves 🕺🤣.
                And of course, my personal gym cheerleader—without you, I’d probably just lift snacks instead of weights 🏋️🍫.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Honestly, life's more colorful with her around! 🌈
              </p>
            </div>

            {/* Personality Traits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalityTraits.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300 ${mounted ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2 text-center">{item.emoji}</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1 text-center">{item.trait}</h3>
                  <p className="text-xs text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className={`mt-16 text-center ${mounted ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-4xl mb-4">🎂</div>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              "Some people make your day brighter just by being in it."
            </p>
            <p className="text-lg mt-4 opacity-90">
              That's exactly who Khushi is! 💫
            </p>
          </div>
        </div>

        {/* Scattered Background Elements */}
        <div className="absolute top-32 left-8 opacity-5 text-8xl animate-pulse">💕</div>
        <div className="absolute top-48 right-12 opacity-5 text-6xl animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-32 left-16 opacity-5 text-7xl animate-pulse" style={{ animationDelay: '2s' }}>🌸</div>
        <div className="absolute bottom-48 right-8 opacity-5 text-5xl animate-pulse" style={{ animationDelay: '0.5s' }}>💫</div>
      </div>
    </div>
  );
};

export default About;