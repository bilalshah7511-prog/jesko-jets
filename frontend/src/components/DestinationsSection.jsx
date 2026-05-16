import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CITIES = ['Melbourne', 'Abu Dhabi', 'Singapore', 'Mykonos', 'Kuala Lumpur', 'Tokyo', 'Dubai', 'London', 'New York', 'Paris', 'Sydney', 'Geneva'];

export default function DestinationsSection() {
  const tickerRef = useRef(null);

  useEffect(() => {
    // Continuous vertical scroll loop
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        yPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  // Double the list for seamless loop
  const tickerItems = [...CITIES, ...CITIES];

  return (
    <section className="w-full h-screen bg-destinationsBg text-white px-10 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left */}
      <div className="w-full md:w-1/2 flex items-center mb-20 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase flex items-center gap-4">
          Fly anywhere <span className="font-light tracking-widest text-neutral-600 hidden md:inline">────────→</span> ✈️
        </h2>
      </div>

      {/* Right Ticker */}
      <div className="w-full md:w-1/2 h-[60vh] relative overflow-hidden flex justify-end">
        {/* Fading edges mask */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-destinationsBg via-transparent to-destinationsBg"></div>
        
        <div className="w-full relative flex justify-end">
          <div ref={tickerRef} className="flex flex-col gap-6 text-right w-full">
            {tickerItems.map((city, idx) => (
              <div 
                key={idx} 
                className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter opacity-20 hover:opacity-100 hover:scale-105 transition-all duration-300 origin-right cursor-default"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
