import React from "react";
import "../css/particles.css"; 

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a021c] to-[#020531]">

      {/* Left Purple Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>

      {/* Right Blue Glow */}
      <div className="absolute top-32 right-16 w-80 h-80 bg-blue-600 opacity-30 blur-[140px] rounded-full"></div>

      {/* Bottom Pink Glow */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-600 opacity-20 blur-[160px] rounded-full"></div>

      {/* Moving Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map(( i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 8 + 6 + "s",
              animationDelay: Math.random() * 5 + "s",
              transform: `scale(${Math.random() * 0.8 + 0.3})`
            }}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Background;
