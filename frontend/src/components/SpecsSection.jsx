import React from 'react';

export default function SpecsSection() {
  return (
    <section className="w-full bg-jetBg text-[#1c1009] px-10 md:px-20 py-32 border-t border-[#1c1009]/10">
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
        
        {/* Left: Blueprint & Specs Grid */}
        <div className="w-full lg:w-2/3">
          
          <div className="mb-16 flex justify-center">
             <img src="https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9baf6224ae03a0c240aad_img_jet-blue-print.avif" alt="Blueprint" className="w-full h-auto opacity-70" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase mb-2 opacity-60 font-semibold">Max Range</div>
              <div className="text-2xl font-bold">13,890 KM</div>
            </div>
            <div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase mb-2 opacity-60 font-semibold">Speed</div>
              <div className="text-2xl font-bold">480 KNOTS</div>
            </div>
            <div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase mb-2 opacity-60 font-semibold">Passengers</div>
              <div className="text-2xl font-bold">UP TO 19</div>
            </div>
            <div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase mb-2 opacity-60 font-semibold">Baggage</div>
              <div className="text-2xl font-bold">6.92 M³</div>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="w-full lg:w-1/3">
           <h3 className="text-2xl font-extrabold mb-6">Designed for <br/> Ultimate Comfort</h3>
           <p className="font-light text-[0.95rem] leading-[1.7] opacity-80">
             The cabin is a masterclass in ergonomics and luxury. Featuring advanced soundproofing, 100% fresh air circulation, and the lowest cabin altitude in its class, you arrive feeling refreshed. The spacious interior provides distinct living areas for working, dining, entertaining, and resting.
           </p>
        </div>

      </div>

    </section>
  );
}
