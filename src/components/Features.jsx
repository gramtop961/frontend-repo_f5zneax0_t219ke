import React from 'react';
import { MessageSquare, Users, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    desc: 'Natural voice and chat with real-time guidance and memory of attendee context.'
  },
  {
    icon: Users,
    title: 'Built for venues',
    desc: 'Optimized for lobbies, booths, and stages with responsive design and kiosk modes.'
  },
  {
    icon: Shield,
    title: 'Secure & private',
    desc: 'Granular controls, analytics opt-in, and role-based access for staff.'
  },
  {
    icon: Headphones,
    title: 'Multi-lingual & voice',
    desc: 'Understands multiple languages and works even in noisy environments.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0b0b0f] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need for a seamless event</h2>
          <p className="mt-3 text-white/80">
            The avatar is more than a chatbot — it\'s a helpful host that knows your agenda, venue map, and partners.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
