import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white pointer-events-none mix-blend-difference">
      {/* Add pointer-events-auto to interactive elements within */}
      <div className="flex gap-6 text-[0.85rem] font-light tracking-[0.05em] uppercase pointer-events-auto cursor-pointer">
        <span className="hover:opacity-70 transition-opacity">About</span>
        <span className="hover:opacity-70 transition-opacity">Our Fleet</span>
        <span className="hover:opacity-70 transition-opacity">Advantages</span>
        <span className="hover:opacity-70 transition-opacity">Global</span>
      </div>

      <div className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase pointer-events-auto cursor-pointer text-center absolute left-1/2 -translate-x-1/2">
        Jesko Jets
      </div>

      <div className="flex gap-6 text-[0.85rem] font-light tracking-[0.05em] uppercase pointer-events-auto cursor-pointer">
        <span className="hover:opacity-70 transition-opacity">+971 54 432 5050</span>
        <span className="hover:opacity-70 transition-opacity">info@jeskojets.com</span>
      </div>
    </nav>
  );
}
