import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import { CTA, Footer } from './components/Footer';
import DustMotes from './components/DustMotes';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <AuroraBackground />
      <DustMotes />

      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
