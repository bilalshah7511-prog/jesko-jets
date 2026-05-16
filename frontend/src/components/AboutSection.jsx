import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen text-white px-10 md:px-20 py-32 flex flex-col justify-center overflow-hidden">
      
      {/* Background Image */}
      <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf3a7535c381d724ba24f3_3d4cd5b30d8e5eb5ac2c6f3736aef35b_img_sky-about.avif" alt="sky" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>

      <div className="max-w-5xl fade-up relative z-10">
        <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-tight mb-20 drop-shadow-sm">
          Jesko Jets® is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/30 pt-12 fade-up">
        <div>
          <div className="text-3xl font-light tracking-[0.15em] uppercase mb-2 drop-shadow-md">Jesko Jets</div>
          <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-80">Global Aviation</div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Direct Access to Private Travel</h3>
          <p className="font-light text-[0.95rem] leading-[1.7] opacity-90">
            We bypass the complexities of commercial flying, offering a seamless and discreet experience tailored exactly to your schedule and preferences.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Your Freedom to Enjoy Life</h3>
          <p className="font-light text-[0.95rem] leading-[1.7] opacity-90">
            Time is the ultimate luxury. By streamlining every detail of your journey, we give you back the hours that matter most.
          </p>
        </div>
      </div>

    </section>
  );
}
