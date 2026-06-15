import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AdvantagesSection() {
  const containerRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.adv-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full text-black px-10 md:px-20 py-20 md:py-32 overflow-hidden">
      
      {/* Background Image */}
      <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68bf3a7535c381d724ba24f3_3d4cd5b30d8e5eb5ac2c6f3736aef35b_img_sky-about.avif" alt="sky" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        
        <div className="adv-card bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-2xl shadow-sm border border-white/40">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] mb-6 text-neutral-500 font-semibold">Advantage 01</div>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Precision and <br/> Excellence</h3>
          <p className="font-light text-neutral-700 leading-relaxed text-lg">
            Every aircraft in our fleet is maintained to the highest standards of safety and comfort. We ensure that your environment is flawless, down to the smallest detail.
          </p>
        </div>

        <div className="adv-card bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-2xl shadow-sm border border-white/40">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] mb-6 text-neutral-500 font-semibold">Advantage 02</div>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Global Reach, <br/> Personal Touch</h3>
          <p className="font-light text-neutral-700 leading-relaxed text-lg">
            No matter the destination, our global network guarantees access to the world's most remote locations, paired with an unwavering commitment to personalized service.
          </p>
        </div>

      </div>
    </section>
  );
}



