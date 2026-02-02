'use client';

import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white py-36 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-8">

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* ================= LEFT ================= */}
          <div className="space-y-10">
            <h2 className="text-[3rem] leading-[1.15] text-[#2F4156] font-serif">
              Let’s begin
              <br />
              <span className="italic text-[#567C8D]">
                something meaningful
              </span>
            </h2>

            <p className="text-base text-[#567C8D] leading-relaxed max-w-md">
              Reaching out doesn’t require certainty.
              It simply requires curiosity — and a willingness
              to take the first step.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white ring-1 ring-[#2F4156]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2F4156]" />
                </div>
                <a
                  href="tel:3105550123"
                  className="text-[#2F4156] font-medium hover:underline"
                >
                  (310) 555-0123
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white ring-1 ring-[#567C8D]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#567C8D]" />
                </div>
                <a
                  href="mailto:contact@drmayareynolds.com"
                  className="text-[#2F4156] font-medium break-all hover:underline"
                >
                  contact@drmayareynolds.com
                </a>
              </div>
            </div>
            {/* Gentle reassurance */}
            <p className="pt-6 text-sm text-[#567C8D] leading-relaxed max-w-md text-center">
              There’s no pressure to know what to say. Many people begin with a few simple sentences.
              <span className="italic">
                This is a space where questions, uncertainty, and honesty are welcome.
              </span>
            </p>
          </div>

          {/* ================= RIGHT — FORM ================= */}
          <div
            className="relative bg-white rounded-[2.5rem] p-12"
            style={{
              boxShadow: `
                -18px -18px 42px rgba(245, 239, 230, 0.7),
                26px  26px 60px rgba(47, 65, 86, 0.22)
              `,
            }}
          >
            <h3 className="text-xl font-serif text-[#2F4156] mb-8">
              Send a message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-[#567C8D] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#F5EFE6]/40
                  border border-transparent
                  focus:outline-none focus:border-[#567C8D]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#567C8D] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#F5EFE6]/40
                  border border-transparent
                  focus:outline-none focus:border-[#567C8D]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#567C8D] mb-2">
                  What brings you here?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl
                  bg-[#F5EFE6]/40
                  border border-transparent
                  focus:outline-none focus:border-[#567C8D]
                  resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-full
                bg-[#2F4156] text-white text-base font-medium
                hover:bg-[#1F2F3F]
                transition-colors
                flex items-center justify-center gap-2"
              >
                Begin the Conversation
              </button>

              <p className="text-xs text-[#567C8D] text-center">
                Your message is private and treated with care.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}