// BackgroundShapes.jsx
import React from 'react';

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[-1]">
      {/* Animated noise layer */}
      <div 
        className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 animate-noise"
      ></div>
      
      {/* Moving background shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-200"></div>
    </div>
  );
}
