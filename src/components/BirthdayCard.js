import React, { useState, useEffect } from "react";

const BirthdayCard = () => {
  const [mounted, setMounted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Stop confetti after 5 seconds for cleaner look
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Simple confetti component without external library
  const ConfettiPiece = ({ delay, duration, color }) => (
    <div
      className={`absolute w-2 h-2 ${color} opacity-80`}
      style={{
        left: `${Math.random() * 100}%`,
        animation: `fall ${duration}s linear ${delay}s infinite`,
        animationFillMode: 'both'
      }}
    />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-6 py-12 relative overflow-hidden">
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .bounce-gentle { animation: bounce 2s infinite; }
      `}</style>

      {/* Subtle Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <ConfettiPiece
              key={i}
              delay={Math.random() * 2}
              duration={3 + Math.random() * 2}
              color={['bg-pink-400', 'bg-purple-400', 'bg-yellow-400', 'bg-blue-400'][i % 4]}
            />
          ))}
        </div>
      )}

      {/* Main Card Container */}
      <div className={`max-w-2xl w-full ${mounted ? 'fade-in-up' : 'opacity-0'}`}>
        
        {/* Birthday Emoji */}
        <div className="text-center mb-8">
          <span className="text-6xl md:text-8xl bounce-gentle">🎂</span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
            Happy Birthday
          </h1>
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Khushi
          </div>
          <div className="flex justify-center space-x-2 text-2xl md:text-3xl">
            <span>✨</span>
            <span>🎉</span>
            <span>💖</span>
          </div>
        </div>

        {/* Message Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50 mb-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light">
            Wishing you a day filled with love, laughter, and endless joy. 
            <br className="hidden md:block" />
            May this new year bring you all the happiness your heart can hold.
          </p>
          <div className="text-center mt-6">
            <span className="text-2xl">🌟</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
          <div className="text-3xl">🎁</div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-300"></div>
        </div>

        {/* Fun Image */}
        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
              alt="Celebration"
              className="relative rounded-2xl shadow-xl max-w-xs w-full transform group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-gray-500 font-light">
            Here's to another year of amazing adventures! 🥳
          </p>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 text-4xl animate-pulse"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {['🎈', '🌸', '⭐', '🦋', '🌙', '💫'][i]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCard;