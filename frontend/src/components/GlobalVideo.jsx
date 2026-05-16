import React, { useEffect, useState, useRef } from 'react';
import { Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalVideo() {
  const [cities, setCities] = useState([]);
  const [hoveredCity, setHoveredCity] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/cities')
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(err => console.error('Error fetching cities:', err));
  }, []);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/earth rotation 4k.mp4" type="video/mp4" />
      </video>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050505_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>

      {/* Giant Blended Title */}
      <h2 ref={titleRef} className="absolute z-0 text-[15vw] font-bold font-sans uppercase tracking-tighter text-white opacity-10 mix-blend-overlay select-none pointer-events-none">
        Global
      </h2>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-32 pb-20">
        
        {/* Left Side: Stats */}
        <div className="flex flex-col mb-10 md:mb-0">
          <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-4">Operations</span>
          <div className="text-5xl md:text-7xl font-light text-white tracking-widest uppercase">
            5K+ <span className="text-neutral-600 block text-3xl md:text-5xl mt-2">Flights</span>
          </div>
        </div>

        {/* Right Side: City Ticker */}
        <div className="flex flex-col items-end gap-6 relative">
          <div className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-4 absolute -top-10 right-0">
            Destinations
          </div>
          
          <div className="flex flex-col gap-4 text-right">
            {cities.length > 0 ? cities.map((city, idx) => (
              <div 
                key={idx}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <div className="text-2xl md:text-4xl font-light text-neutral-400 uppercase tracking-widest transition-colors duration-500 group-hover:text-white">
                  {city.name}
                </div>
                
                {/* Hover Time Label */}
                <div className={`absolute top-1/2 -translate-y-1/2 right-full mr-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full transition-all duration-300 ${
                  hoveredCity?.name === city.name ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                }`}>
                  <Clock size={14} className="text-white" />
                  <span className="text-white text-sm font-medium tracking-widest">{city.time}</span>
                </div>
              </div>
            )) : (
              // Fallback if backend is not running yet
              ['Dubai', 'Riyadh', 'Seoul', 'Bangkok', 'Tel Aviv', 'Tokyo', 'Cairo'].map((city, idx) => (
                 <div key={idx} className="text-2xl md:text-4xl font-light text-neutral-500 uppercase tracking-widest">{city}</div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
