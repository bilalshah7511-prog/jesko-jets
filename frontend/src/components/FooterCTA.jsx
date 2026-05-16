import React from 'react';

export default function FooterCTA() {
  return (
    <section className="relative w-full py-32 bg-background flex flex-col items-center justify-center text-center px-4 border-t border-neutral-900">
      
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-white leading-tight">
          Fly anywhere with total comfort and control
        </h2>
      </div>

      <button className="group relative px-10 py-5 bg-white text-black font-medium tracking-[0.2em] uppercase text-sm overflow-hidden transition-all duration-500 hover:text-white">
        <div className="absolute inset-0 w-full h-full bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
        <span className="relative z-10">Book the Flight</span>
      </button>

      <footer className="mt-32 w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 text-neutral-600 text-xs tracking-widest uppercase">
        <div>©2026 JESKO JETS ALL RIGHTS RESERVED</div>
        <div className="mt-4 md:mt-0 hover:text-white transition-colors cursor-pointer">
          info@jeskojets.com
        </div>
      </footer>
      
    </section>
  );
}
