'use client';

import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}
      `}
    >
      {children}
    </div>
  );
}

export default function Approach() {
  const specializations = [
    'Anxiety & Panic Disorders',
    'Trauma & PTSD',
    'Burnout & Compassion Fatigue',
    'Perfectionism & High Achievement',
    'Relationship Difficulties',
    'Life Transitions & Identity',
  ];

  const modalities = [
    'Cognitive Behavioral Therapy (CBT)',
    'Eye Movement Desensitization and Reprocessing (EMDR)',
    'Mindfulness-Based Stress Reduction',
    'Somatic & Body-Oriented Techniques',
    'Trauma-Focused Therapy',
    'Acceptance and Commitment Therapy (ACT)',
  ];

  return (
    <section id="approach" className="bg-[#F5EFE6] py-40">
      <div className="relative max-w-6xl mx-auto px-8">
        {/* HERO */}
        <div className="mb-28 text-center">
          <h2 className="text-[clamp(3rem,5.2vw,4.6rem)] font-semibold text-[#2F4156] leading-tight">
            Therapy is not a technique.
            <br />
            <span className="text-[#567C8D]">It’s a process.</span>
          </h2>

          <p className="mt-8 text-[20px] text-[#567C8D] max-w-2xl mx-auto leading-relaxed">
            Thoughtful, evidence-based work shaped around your nervous system,
            values, and lived experience.
          </p>
        </div>

        {/* Vertical journey line */}
        <div
          className="absolute left-1/2 top-[360px] h-[820px] w-px -translate-x-1/2 
          bg-gradient-to-b from-transparent via-[#567C8D]/40 to-transparent 
          opacity-0 animate-fadeIn delay-300 hidden md:block"
        />

        {/* SPECIALIZATIONS */}
        <div className="mb-44 grid md:grid-cols-2 gap-24 items-start">
          <div className="md:text-right">
            <h3 className="text-[2.25rem] font-medium text-[#2F4156] mb-6">
              What Clients Often Bring
            </h3>
            <p className="text-[18px] text-[#567C8D] leading-relaxed">
              Patterns of stress, pressure, and emotional fatigue that have
              quietly accumulated over time.
            </p>
          </div>

          <ul className="space-y-6 md:pl-3">
            {specializations.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <li
                  className="group flex items-start gap-4 text-[19px] text-[#2F4156]
                  transition-all duration-300 delay-75 hover:translate-x-1"
                >
                  <span
                    className="mt-1 w-7 h-7 rounded-full border border-[#567C8D] 
                    flex items-center justify-center transition-all duration-300
                    group-hover:bg-[#567C8D]"
                  >
                    <Check className="w-4 h-4 text-[#567C8D] transition-colors duration-300 group-hover:text-white" />
                  </span>

                  <span className="transition-colors duration-300 group-hover:text-[#1F2F3F]">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* MODALITIES */}
        <div className="mb-44 grid md:grid-cols-2 gap-24 items-start">
          <ul className="space-y-6 md:pr-3 order-2 md:order-1">
            {modalities.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <li
                  className="group flex items-start gap-4 text-[19px] text-[#2F4156]
                  transition-all duration-300 delay-75 hover:translate-x-1"
                >
                  <span
                    className="mt-1 w-7 h-7 rounded-full bg-[#C8D9E6]
                    flex items-center justify-center transition-all duration-300
                    group-hover:bg-[#567C8D]"
                  >
                    <Check className="w-4 h-4 text-[#2F4156] transition-colors duration-300 group-hover:text-white" />
                  </span>

                  <span className="transition-colors duration-300 group-hover:text-[#1F2F3F]">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="order-1 md:order-2">
            <h3 className="text-[2.25rem] font-medium text-[#2F4156] mb-6">
              How We Work Together
            </h3>
            <p className="text-[18px] text-[#567C8D] leading-relaxed">
              I draw from multiple therapeutic modalities, adapting the work to
              what feels most supportive and sustainable for you.
            </p>
          </div>
        </div>

        {/* WHO I WORK WITH */}
        <div className="mt-48 text-center max-w-3xl mx-auto">
          <h3 className="text-[2.4rem] font-medium text-[#2F4156] mb-6">
            Who This Work Is For
          </h3>
          <p className="text-[21px] text-[#567C8D] leading-relaxed">
            Entrepreneurs, creatives, and professionals navigating burnout,
            perfectionism, and chronic internal pressure — seeking a more
            grounded way of living and working.
          </p>
        </div>
      </div>

      {/* Reduced motion support */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}