import React, { useState, useEffect } from 'react';


const accordionData = [
  { id: 1, title: 'Pets', content: 'Your furry friends are always welcome on board. We provide specialized care and comfort for pets to travel by your side.', img: 'https://cdn.prod.website-files.com/68b5ebb0b83342b0b2bbd5ee/68d9a3daa04c725a21d89d3f_img_benefits-2.webp' },
  { id: 2, title: '24/7 Availability', content: 'Our dedicated team is ready to deploy your aircraft at a moments notice, day or night, anywhere in the world.', img: 'https://cdn.prod.website-files.com/68b5ebb0b83342b0b2bbd5ee/68d9a43945c6f790cee01dd3_img_benefits-3.webp' },
  { id: 3, title: 'Onboard Services', content: 'From Michelin-starred catering to tailored entertainment, every aspect of your flight is customized to your exact preferences.', img: 'https://cdn.prod.website-files.com/68b5ebb0b83342b0b2bbd5ee/68e923fd81c2d3933a1661f7_img_benefit-3.webp' },
  { id: 4, title: 'Efficient', content: 'Avoid the queues and delays. Arrive at the private terminal just minutes before departure and let us handle the rest seamlessly.', img: 'https://cdn.prod.website-files.com/68b5ebb0b83342b0b2bbd5ee/68e9240bc0c8bd03a98e8c97_img_benefit-4.webp' },
];

export default function BetterWaySection() {
  const [openId, setOpenId] = useState(1);
  const [dubaiTime, setDubaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      setDubaiTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-jetBg text-[#1c1009] flex flex-col pt-20">
      
      <div className="px-10 md:px-20 pb-20 flex flex-col lg:flex-row gap-20">
        {/* Left: Accordion */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">A Better Way <br/> to Fly</h2>
          
          <div className="flex flex-col gap-4">
            {accordionData.map((item) => (
              <div key={item.id} className="border-b border-[#1c1009]/20 overflow-hidden">
                <button 
                  onClick={() => setOpenId(item.id === openId ? null : item.id)}
                  className="w-full text-left py-6 flex justify-between items-center text-xl font-bold uppercase tracking-wider"
                >
                  {item.title}
                  <span className={`transform transition-transform ${openId === item.id ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-light leading-relaxed opacity-80">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interior Image */}
        <div className="w-full lg:w-1/2 min-h-[400px] bg-[#d5cfc5] rounded-xl overflow-hidden relative shadow-inner flex items-center justify-center transition-all duration-500">
           {accordionData.map(item => (
             <img 
               key={item.id}
               src={item.img} 
               alt={item.title} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${openId === item.id ? 'opacity-100' : 'opacity-0'}`} 
             />
           ))}
           <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="w-full border-t border-[#1c1009]/10 py-6 px-10 md:px-20 flex flex-wrap justify-between items-center text-[0.7rem] tracking-[0.2em] font-semibold uppercase opacity-70 gap-4">
        <div>Countries Supported 174</div>
        <div>Based in Dubai, UAE</div>
        <div>Local Time {dubaiTime}</div>
      </div>

    </section>
  );
}
