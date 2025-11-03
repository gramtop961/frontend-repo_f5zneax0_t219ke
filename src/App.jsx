import React from 'react';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import Features from './components/Features';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter antialiased">
      <Hero />
      <ChatWidget />
      <Features />
      <CTASection />
      <footer className="bg-black text-white/60 text-center text-sm py-6">
        © {new Date().getFullYear()} Aura for Events. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
