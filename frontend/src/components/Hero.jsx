import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    ).fromTo(
      subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-background to-background pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-sans font-light tracking-[0.2em] uppercase text-white mb-6">
          Fly in Luxury
        </h1>
        <p ref={subRef} className="text-neutral-400 text-lg md:text-2xl font-light tracking-widest uppercase">
          Luxury that moves with you
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-neutral-500 text-xs tracking-widest uppercase mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
      </div>
    </section>
  );
}
