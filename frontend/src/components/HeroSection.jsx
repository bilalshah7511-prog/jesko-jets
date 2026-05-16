import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const windowRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin and expand animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1500',
          scrub: true,
          pin: true,
        }
      });

      tl.to(windowRef.current, {
        scale: 4,
        ease: 'none',
      }, 0)
      .to(frameRef.current, {
        opacity: 0,
        ease: 'power1.inOut',
      }, 0.2); // fade out frame during expansion
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-heroBg overflow-hidden flex items-center justify-center text-white">
      
      {/* Top Left Text */}
      <div className="absolute left-10 md:left-20 top-32 z-10 max-w-sm">
        <h1 className="text-[clamp(4rem,8vw,7rem)] font-extrabold leading-[0.85] tracking-tighter uppercase whitespace-nowrap drop-shadow-lg">
          We are <br /> movement
        </h1>
      </div>

      {/* Center Right Text */}
      <div className="absolute right-10 md:right-20 top-[40%] -translate-y-1/2 z-10 text-right">
        <h1 className="text-[clamp(4rem,8vw,7rem)] font-extrabold leading-[0.85] tracking-tighter uppercase text-right whitespace-nowrap drop-shadow-lg">
          We are <br /> distinction
        </h1>
      </div>

      {/* Bottom Left Content */}
      <div className="absolute bottom-20 left-10 md:left-20 z-10 max-w-sm">
        <div className="font-light text-3xl mb-6 leading-tight drop-shadow-md">
          Your <br /> freedom to <br /> enjoy life
        </div>
        <p className="font-light text-[1rem] leading-[1.7] opacity-90 max-w-[320px] drop-shadow-sm">
          Every flight is designed around your comfort, time, and ambitions — so you can focus on what truly matters, while we take care of everything else.
        </p>
      </div>

      {/* Bottom Right Content */}
      <div className="absolute bottom-20 right-10 md:right-20 z-10 flex flex-col items-end">
        <div className="text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-300 mb-8 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-white"></span>
          SCROLL DOWN | TO START THE JOURNEY
        </div>
        <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#d5cfc5] transition-colors flex items-center gap-2">
          Book the Flight ❯
        </button>
      </div>

      {/* Center Airplane Window */}
      <div 
        ref={windowRef} 
        className="relative z-20 w-[400px] h-[520px] origin-center will-change-transform flex items-center justify-center"
      >
        <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9dfe10f1c8a1d719c1e63_917d8b944f7f57b7fbe3969bf2719a2e_img_hero-front.webp" alt="jet window" className="absolute inset-0 w-full h-full object-cover z-30 pointer-events-none" ref={frameRef} />
        
        {/* Inside Window Image (Sky view) */}
        <div className="absolute inset-0 z-10 overflow-hidden" style={{ borderRadius: '180px' }}>
          <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf31df0eb6b62331d8e35a_9557f7de34f540aa715092b1bcdbbf57_img_sky-hero.webp" alt="sky view" className="absolute inset-0 w-full h-full object-cover scale-[1.2]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-3xl font-light tracking-[0.15em] uppercase drop-shadow-md whitespace-nowrap mix-blend-difference">
              Jesko Jets
            </div>
          </div>
        </div>
      </div>
      
      {/* Background dark brown texture */}
      <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d27a91bc0bf516a17a3f69_img_hero-back.webp" alt="bg" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-80" />
      
    </section>
  );
}
