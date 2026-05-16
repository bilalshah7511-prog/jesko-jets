import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalSection() {
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(globeRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-globalBg text-white overflow-hidden flex flex-col justify-between">

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="text-[25vw] font-extrabold uppercase tracking-tighter opacity-5 text-white whitespace-nowrap mix-blend-overlay translate-y-20">
          Global
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 mt-20">

        {/* Left */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase leading-[1.1]">
            Fly anywhere <br /> with total <br /> comfort and <br /> control
          </h3>
        </div>

        {/* Center Globe Video */}
        <div ref={globeRef} className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          {/* Circular crop container */}
          <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/5 relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
            >
              <source src="/earth rotation 4k.mp4" type="video/mp4" />
            </video>

            {/* Overlay arc lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              <path d="M 100 250 Q 250 50 400 250" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 150 350 Q 250 200 350 150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M 50 200 Q 250 400 450 300" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 6" />
            </svg>

            {/* Vignette */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_#0e0b09] pointer-events-none"></div>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="w-full md:w-1/3 text-right">
          <div className="mb-8">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-50 font-semibold mb-2">Bookings & Inquiries</div>
            <a href="mailto:info@jeskojets.com" className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity">info@jeskojets.com</a>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-50 font-semibold mb-2">Global Concierge</div>
            <a href="tel:+971544325050" className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity">+971 54 432 5050</a>
          </div>
        </div>

      </div>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full py-8 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-[0.7rem] tracking-[0.2em] font-semibold uppercase opacity-60">
        <div>© {new Date().getFullYear()} Jesko Jets</div>
        <div className="mt-4 md:mt-0 flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity">
          Made by The First The Last <span className="text-lg">↻</span>
        </div>
      </footer>

    </section>
  );
}
