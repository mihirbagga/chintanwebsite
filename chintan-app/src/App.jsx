import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import { CTA, Footer } from './components/Footer';
import DustMotes from './components/DustMotes';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <DustMotes />

      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
