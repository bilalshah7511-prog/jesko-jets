import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 76;
const currentFrame = (index) => `/sequence-2/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

export default function JetSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
          initAnimation(images);
        }
      };
      images.push(img);
    }
    
    let ctxGsap;

    const initAnimation = (loadedImages) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      
      canvas.width = 1920;
      canvas.height = 1080;

      const render = (index) => {
        if (loadedImages[index]) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(loadedImages[index], 0, 0, canvas.width, canvas.height);
        }
      };

      render(0);

      const obj = { frame: 0 };

      ctxGsap = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400vh',
          pin: true,
          scrub: 0.5,
          animation: gsap.to(obj, {
            frame: FRAME_COUNT - 1,
            snap: 'frame',
            ease: 'none',
            onUpdate: () => render(obj.frame),
          }),
        });

        gsap.from('.jet-text', {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1000',
            scrub: true,
          }
        });
      }, containerRef);
    };

    return () => {
      if (ctxGsap) ctxGsap.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-jetBg text-[#1c1009] overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-jetBg">
          <div className="text-xs tracking-widest uppercase">Loading assets...</div>
        </div>
      )}
      
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-between px-10 md:px-20">
        <h2 className="jet-text text-[clamp(4rem,8vw,8rem)] font-extrabold tracking-tighter uppercase leading-none mix-blend-multiply opacity-20">
          Fly in
        </h2>
        <h2 className="jet-text text-[clamp(4rem,8vw,8rem)] font-extrabold tracking-tighter uppercase leading-none mix-blend-multiply opacity-20">
          Luxury
        </h2>
      </div>

      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full object-cover z-20 pointer-events-none mix-blend-multiply" 
      />

      <div className="absolute bottom-10 right-10 md:right-20 z-30 max-w-sm text-right">
        <h3 className="jet-text text-3xl font-extrabold tracking-tight uppercase mb-1">GULFSTREAM</h3>
        <h4 className="jet-text text-xl font-light tracking-widest uppercase mb-4">650ER</h4>
        <p className="jet-text font-light text-sm leading-relaxed opacity-80">
          A true time-saving machine. It brings Tokyo and New York an hour closer, and at 92% of the speed of sound, it can circle the globe with just a single stop.
        </p>
      </div>

    </section>
  );
}
