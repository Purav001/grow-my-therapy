'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  version: 'clone' | 'redesign';
}

const HEADER_HEIGHT = 80;

export default function Hero({ version }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (version === 'clone') return null;

  return (
    <section
      className="relative bg-gradient-to-b from-[#F5EFE6] to-white overflow-hidden"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-72 h-72 bg-[#567C8D] rounded-full blur-3xl opacity-10 animate-slowFloat" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8D9E6] rounded-full blur-3xl opacity-20 animate-slowFloat delay-300" />
      </div>

      <div
        className="relative h-full flex items-center"
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE — ORGANIC OVAL */}
          <div
            className={`order-2 lg:order-1 flex justify-center lg:justify-start
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="w-80 sm:w-96 lg:w-[26rem] xl:w-[30rem] aspect-[3/4] overflow-hidden image-organic">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200" // replace with your image path
                alt="Woman holding lilac flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 lg:order-2 space-y-12">
            {/* Badge */}
            <div
              className={`inline-block px-4 py-2 bg-[#C8D9E6]/30 rounded-full
                transition-all duration-700 delay-100
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
            >
              <p className="text-sm font-medium text-[#567C8D] tracking-wide">
                Licensed Clinical Psychologist
              </p>
            </div>

            {/* Heading */}
            <h1
              className={`text-6xl lg:text-7xl font-semibold leading-[1.08] text-[#2F4156]
                transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              Find clarity
              <br />
              and peace
            </h1>

            {/* Subtext */}
            <p
              className={`text-xl text-[#567C8D] leading-relaxed max-w-lg
                transition-all duration-700 delay-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Compassionate, evidence-based therapy for adults navigating
              anxiety, trauma, and burnout.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-8
                transition-all duration-700 delay-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 text-[#2F4156] text-base font-medium group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#2F4156] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#about"
                className="relative inline-flex items-center text-[#567C8D] text-base font-medium group"
              >
                Learn More
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#567C8D] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
