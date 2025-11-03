import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient overlay to improve contrast, doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0.25),rgba(0,0,0,0.75))]" />

      <div className="relative z-10 px-6 sm:px-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs sm:text-sm text-white/80">Live AI avatar for conferences</p>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
          Meet your conversational event concierge
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          A real-time voice and chat avatar that greets attendees, answers questions, and guides them through your event — now with an immersive 3D cover experience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-medium shadow/40 shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition">
            <Rocket className="h-5 w-5" />
            Try a live demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/15 transition">
            <Users className="h-5 w-5" />
            Why events love it
          </a>
        </div>
      </div>
    </section>
  );
}
