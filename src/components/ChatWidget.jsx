import React, { useState } from 'react';
import { Mic, Send, Sparkles } from 'lucide-react';

const initialMessages = [
  { id: 1, role: 'assistant', text: 'Hi! I\'m Aura, your event concierge. Ask me about the schedule, speakers, or where to find the coffee ☕' },
  { id: 2, role: 'user', text: 'Where is the keynote?' },
  { id: 3, role: 'assistant', text: 'The keynote starts at 10:00 in Hall A. Doors open at 9:45. Would you like me to guide you there?' },
];

export default function ChatWidget() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const onSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    const reply = {
      id: Date.now() + 1,
      role: 'assistant',
      text: "I\u2019ll remember that. For a full agenda, tap the Features section below."
    };
    setMessages(prev => [...prev, userMsg, reply]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <section id="demo" className="relative w-full bg-gradient-to-b from-black to-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-fuchsia-500/20 text-fuchsia-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Talk to the avatar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Chat panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6 flex flex-col min-h-[420px]">
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
              {messages.map(m => (
                <div key={m.id} className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'assistant' ? 'bg-white/10 text-white' : 'bg-white text-black ml-auto'}`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button
                aria-label="Hold to speak"
                className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/20 transition">
                <Mic className="h-5 w-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="w-full h-11 rounded-xl bg-white text-black placeholder-black/50 pl-4 pr-12 focus:outline-none"
                />
                <button
                  onClick={onSend}
                  aria-label="Send"
                  className="absolute right-1 top-1 bottom-1 my-auto inline-flex items-center justify-center h-9 w-9 rounded-lg bg-black text-white hover:bg-neutral-900">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Explanation card */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">What can it do?</h3>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li>
                • Welcome guests, check registrations, and provide directions to rooms, booths, or stages.
              </li>
              <li>
                • Answer questions about agenda, speakers, Wi‑Fi, dietary options, and accessibility.
              </li>
              <li>
                • Switch seamlessly between voice and text, perfect for loud venues.
              </li>
              <li>
                • Multi-lingual small talk that makes every attendee feel seen.
              </li>
            </ul>
            <p className="mt-6 text-white/70 text-sm">
              This demo shows the interface and animations. Connect your event data and voice provider to go fully live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
