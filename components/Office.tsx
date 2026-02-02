'use client';

import { MapPin, Video, Leaf } from 'lucide-react';

export default function Office() {
  return (
    <section id="thespace" className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-8">

        {/* ================= HEADER + IMAGES ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">

          {/* ---------- TEXT (LEFT) ---------- */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#567C8D]" />
              <span className="text-sm tracking-widest text-[#567C8D] uppercase">
                The Space
              </span>
            </div>

            <h2 className="text-[3.2rem] leading-tight text-[#2F4156] font-serif mb-6">
              A sanctuary for{' '}
              <span className="italic text-[#567C8D]">
                healing & growth
              </span>
            </h2>

            <p className="text-lg text-[#567C8D] leading-relaxed">
              Step into an environment thoughtfully designed to help you feel
              safe, grounded, and ready to explore what matters most.
            </p>
          </div>

          {/* ---------- IMAGES (RIGHT) ---------- */}
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-[1.75rem] overflow-hidden group">
              <img
                src="/images/office1.jpeg"
                alt="Therapy office interior"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="aspect-[4/3] rounded-[1.75rem] overflow-hidden group translate-y-6">
              <img
                src="/images/office2.jpeg"
                alt="Therapy waiting area"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* ================= QUOTE ================= */}
        <div className="max-w-4xl mx-auto text-center mb-32">
        <Leaf className="w-8 h-8 text-office-sage mx-auto mb-6" />
          <p className="font-serif text-[1.8rem] italic text-[#567C8D] leading-relaxed">
            “The environment we create together—physical or virtual—
            is the foundation upon which transformation becomes possible.”
          </p>
        </div>

        {/* ================= INFO CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">

          {/* In-Person Card */}
          <div
            className="bg-[#F5EFE6]/60 rounded-[2rem] p-10
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_40px_-20px_rgba(47,65,86,0.35)]
            hover:bg-[#F5EFE6]"
          >
            <div className="w-12 h-12 rounded-full bg-white ring-1 ring-[#2F4156]/20 flex items-center justify-center mb-6">
              <MapPin className="w-5 h-5 text-[#2F4156]" />
            </div>

            <h3 className="text-xl font-serif text-[#2F4156] mb-4">
              In-Person Sessions
            </h3>

            <p className="text-[#567C8D] leading-relaxed mb-6">
              My Santa Monica office offers a warm, private retreat designed
              to help you feel at ease from the moment you arrive.
            </p>

            <p className="text-sm text-[#567C8D]">
              <strong className="text-[#2F4156]">
                123 Ocean Avenue, Suite 400
              </strong>
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

          {/* Telehealth Card */}
          <div
            className="bg-[#F5EFE6]/60 rounded-[2rem] p-10
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_40px_-20px_rgba(47,65,86,0.35)]
            hover:bg-[#F5EFE6]"
          >
            <div className="w-12 h-12 rounded-full bg-white ring-1 ring-[#567C8D]/30 flex items-center justify-center mb-6">
              <Video className="w-5 h-5 text-[#567C8D]" />
            </div>

            <h3 className="text-xl font-serif text-[#2F4156] mb-4">
              Telehealth Sessions
            </h3>

            <p className="text-[#567C8D] leading-relaxed mb-6">
              Secure, HIPAA-compliant video sessions allow you to receive
              care wherever you feel most comfortable.
            </p>

            <p className="text-sm text-[#567C8D]">
              <strong className="text-[#2F4156]">
                Available Throughout California
              </strong>
              <br />
              Flexible scheduling options
            </p>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <p className="text-[#567C8D] mb-8 max-w-xl mx-auto">
            Whether we connect in person or online, you’ll find a consistent
            space of warmth, confidentiality, and genuine understanding.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
            bg-[#2F4156] text-white font-medium
            hover:bg-[#1F2F3F] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>

      </div>
    </section>
  );
}