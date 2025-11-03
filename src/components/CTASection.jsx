import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b0b0f] to-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Bring Aura to your next conference</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Get a tailored setup with your schedule, venue map, and sponsor info. Deploy on kiosks, tablets, or the web.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium shadow/40 shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition">
            <CalendarDays className="h-5 w-5" />
            Book a walkthrough
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/15 transition">
            Try the demo
          </a>
        </div>
        <p className="mt-6 text-xs text-white/50">
          Voice features require integrating your preferred speech provider.
        </p>
      </div>
    </section>
  );
}
