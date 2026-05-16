import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 76;
const currentFrame = (index) =>
  `/sequence-2/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export default function SequenceScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const specsRef = useRef(null);

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          initAnimation(loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const initAnimation = (loadedImages) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = (index) => {
      if (loadedImages[index]) {
        const img = loadedImages[index];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;  
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    // Initial render
    render(0);

    const obj = { frame: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000',
        pin: true,
        scrub: 0.5,
        animation: gsap.to(obj, {
          frame: FRAME_COUNT - 1,
          snap: 'frame',
          ease: 'none',
          onUpdate: () => render(obj.frame),
        }),
      });

      // Animate text overlay
      gsap.to(textRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
        }
      });

      // Reveal specs grid later in the sequence
      gsap.fromTo(specsRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: '+=2000', // When it turns into wireframe roughly
            end: '+=3000',
            scrub: true,
          }
        }
      );
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(obj.frame);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert(); // Clean up GSAP instances
    };
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-background">
      <canvas ref={canvasRef} className="scrolly-canvas w-full h-full object-cover" />
      
      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-10 md:px-20">
        
        <div ref={textRef} className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest mb-4 drop-shadow-xl text-white">
            Gulfstream 650ER
          </h2>
          <h3 className="text-xl md:text-2xl text-neutral-300 font-light uppercase tracking-wider mb-6">
            Ultra-long-range Aircraft
          </h3>
          <p className="text-neutral-400 font-light leading-relaxed text-lg">
            A true time-saving machine. It brings Tokyo and New York an hour closer, and at 92% of the speed of sound, it can circle the globe with just a single stop.
          </p>
        </div>

        {/* Specs Grid */}
        <div ref={specsRef} className="absolute bottom-20 left-10 md:left-20 right-10 md:right-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
            <div>
              <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Max Range</div>
              <div className="text-2xl md:text-3xl font-light text-white">13,890 KM</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Speed</div>
              <div className="text-2xl md:text-3xl font-light text-white">480 KNOTS</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Passengers</div>
              <div className="text-2xl md:text-3xl font-light text-white">UP TO 19</div>
            </div>
            <div>
              <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Baggage</div>
              <div className="text-2xl md:text-3xl font-light text-white">6.92 M³</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
