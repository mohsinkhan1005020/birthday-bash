import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(interval);
        onComplete();
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (timeLeft === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 px-4 overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Mobile-optimized celebration */}
        <div className="text-center space-y-6">
          <div className="text-6xl animate-bounce mb-4">🎂</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            HAPPY BIRTHDAY!
          </h1>
          <div className="text-4xl">🎉🎊✨</div>
          <p className="text-lg sm:text-xl text-white/90 font-semibold">
            Time to celebrate!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600 px-4 py-8 overflow-hidden">
      
      {/* Floating background elements - fewer on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {['🎈', '🎊', '✨', '🎁', '🌟'][i % 5]}
          </div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-lg flex flex-col items-center">
        
        {/* Header - mobile optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-4xl mb-3">🎂</div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            Buddayyy Countdown
          </h1>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-pink-300 to-yellow-300 mx-auto rounded-full"></div>
        </div>

        {/* Countdown grid - mobile first design */}
        {timeLeft.days !== undefined && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
            {[
              { label: "Days", value: timeLeft.days, emoji: "📅", color: "from-pink-500 to-rose-500" },
              { label: "Hours", value: timeLeft.hours, emoji: "⏰", color: "from-purple-500 to-indigo-500" },
              { label: "Minutes", value: timeLeft.minutes, emoji: "⏱️", color: "from-blue-500 to-cyan-500" },
              { label: "Seconds", value: timeLeft.seconds, emoji: "⚡", color: "from-emerald-500 to-teal-500" },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  bg-gradient-to-br ${item.color} 
                  rounded-2xl sm:rounded-3xl 
                  p-4 sm:p-6 
                  shadow-xl 
                  border border-white/30
                  transform transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  minHeight: '120px'
                }}
              >
                {/* Emoji */}
                <div className="text-xl sm:text-2xl mb-2 text-center">
                  {item.emoji}
                </div>
                
                {/* Value */}
                <div className="text-2xl sm:text-4xl font-black text-white text-center mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm text-white/90 font-bold uppercase tracking-wider text-center">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom message - mobile friendly */}
        <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 w-full max-w-xs sm:max-w-md">
          <p className="text-sm sm:text-lg text-white/90 font-semibold text-center leading-relaxed">
            ✨ Get ready for an amazing celebration! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;