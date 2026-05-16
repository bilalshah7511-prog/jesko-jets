import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import JetSection from './components/JetSection';
import SpecsSection from './components/SpecsSection';
import BetterWaySection from './components/BetterWaySection';
import DestinationsSection from './components/DestinationsSection';
import GlobalSection from './components/GlobalSection';
import SequenceScroll from './components/SequenceScroll';

function App() {
  return (
    <div className="bg-[#0e0b09] text-white font-sans min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JetSection />
      <SequenceScroll />
      <SpecsSection />
      <AdvantagesSection />
      <BetterWaySection />
      <DestinationsSection />
      <GlobalSection />
    </div>
  );
}

export default App;