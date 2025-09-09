import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Countdown from './components/countdown';
import BirthdayCard from "./components/BirthdayCard";
import MemoryTimeline from "./components/MemoryTimeline";
import About from "./components/About"; 

function Home({ showCard }) {
  return (
    <div className="App">
      {showCard ? (
        <>
          <BirthdayCard />
          <MemoryTimeline />
        </>
      ) : null}
    </div>
  );
}

function App() {
  const [showCard, setShowCard] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  // Smooth transition for navigation appearance
  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => setNavVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  return (
    <>
      {!showCard ? (
        // Show only countdown before birthday
        <Countdown
          targetDate={new Date("2025-09-10T01:24:30")}
          onComplete={() => setShowCard(true)}
        />
      ) : (
        // Show navigation and routes after countdown ends
        <Router>
          {/* 🎉 Modern Birthday Navigation Bar */}
          <nav
            className={`sticky top-0 z-50 transition-all duration-700 transform ${
              navVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
              backdropFilter: "blur(10px)",
              borderRadius: "0 0 30px 30px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "0"
            }}
          >
            <div className="flex justify-center items-center gap-6 py-4 px-6">
              
              {/* Logo/Brand */}
              <div className="hidden sm:flex items-center mr-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <span className="text-xl">🎂</span>
                </div>
                <span className="ml-3 text-white font-bold text-lg hidden md:block">
                  Khushi's Birthday
                </span>
              </div>

              {/* Navigation Links */}
              <div className="flex gap-4">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `
                    group relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white
                    transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5
                    ${isActive 
                      ? 'bg-white/30 backdrop-blur-md shadow-lg border border-white/40' 
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">🏠</span>
                    <span className="font-medium">Home</span>
                  </span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) => `
                    group relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white
                    transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5
                    ${isActive 
                      ? 'bg-white/30 backdrop-blur-md shadow-lg border border-white/40' 
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">👑</span>
                    <span className="font-medium">About</span>
                  </span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </NavLink>
              </div>

              {/* Decorative Elements */}
              <div className="hidden lg:flex items-center ml-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            {/* Bottom shine effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </nav>

          {/* Main Content with Smooth Transition */}
          <main className={`transition-all duration-500 ${navVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Routes>
              <Route path="/" element={<Home showCard={showCard} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          {/* Floating Action Elements (Optional) */}
          {navVisible && (
            <div className="fixed bottom-6 right-6 z-40">
              <div className="group relative">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <span className="text-2xl animate-bounce">🎉</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs">✨</span>
                </div>
              </div>
            </div>
          )}
        </Router>
      )}

      {/* Global Custom Styles */}
      <style jsx global>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .nav-enter {
          animation: navSlideDown 0.7s ease-out forwards;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ff9a9e, #fecfef);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #ff6b9d, #f093fb);
        }
      `}</style>
    </>
  );
}

export default App;