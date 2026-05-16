import React from 'react';

export default function FloatingCTA() {
  return (
    <>
      {/* Center CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors shadow-xl">
          <span className="font-medium tracking-widest uppercase text-sm">Book the Flight</span>
          <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            ✈️
          </div>
        </button>
      </div>

      {/* Bottom Right Globe Icon */}
      <div className="fixed bottom-8 right-8 z-[9999] bg-white text-black w-11 h-11 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-neutral-200 transition-colors text-xl">
        🌍
      </div>
    </>
  );
}
