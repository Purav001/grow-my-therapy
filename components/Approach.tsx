import { Check } from 'lucide-react';

interface ApproachProps {
  version: 'clone' | 'redesign';
}

export default function Approach({ version }: ApproachProps) {
  const specializations = [
    'Anxiety & Panic Disorders',
    'Trauma & PTSD',
    'Burnout & Compassion Fatigue',
    'Perfectionism & High Achievement',
    'Relationship Difficulties',
    'Life Transitions & Identity'
  ];

  const modalities = [
    'Cognitive Behavioral Therapy (CBT)',
    'Eye Movement Desensitization and Reprocessing (EMDR)',
    'Mindfulness-Based Stress Reduction',
    'Somatic & Body-Oriented Techniques',
    'Trauma-Focused Therapy',
    'Acceptance and Commitment Therapy (ACT)'
  ];

  if (version === 'clone') {
    return (
      <section id="approach" className="bg-[#F5EFE6] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-[#2F4156] mb-12 text-center">Areas of Focus</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl text-[#2F4156] mb-6">Specializations</h3>
              <ul className="space-y-3">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#567C8D]">
                    <span className="text-[#2F4156] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl text-[#2F4156] mb-6">Treatment Approaches</h3>
              <ul className="space-y-3">
                {modalities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#567C8D]">
                    <span className="text-[#2F4156] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="approach" className="bg-[#F5EFE6] py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-[#2F4156] mb-6">
            Specialized Areas & Approach
          </h2>
          <p className="text-xl text-[#567C8D] leading-relaxed">
            Integrating evidence-based methods tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="w-16 h-1 bg-[#567C8D]"></div>
                <h3 className="text-3xl font-bold text-[#2F4156]">
                  I Specialize In
                </h3>
              </div>

              <ul className="space-y-4">
                {specializations.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-7 h-7 bg-[#C8D9E6] rounded-full flex items-center justify-center group-hover:bg-[#567C8D] transition-colors">
                      <Check className="w-4 h-4 text-[#2F4156] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg text-[#2F4156] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2F4156] to-[#567C8D] p-10 rounded-3xl shadow-lg text-white">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="w-16 h-1 bg-white/50"></div>
                <h3 className="text-3xl font-bold">
                  Treatment Modalities
                </h3>
              </div>

              <ul className="space-y-4">
                {modalities.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg leading-relaxed opacity-95">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-10 rounded-3xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#2F4156] mb-6 text-center">
              Who I Work With
            </h3>
            <p className="text-lg text-[#567C8D] leading-relaxed text-center">
              I frequently support entrepreneurs, creatives, and professionals who feel disconnected
              from themselves after years of pushing through stress. Many clients are navigating professional
              burnout, perfectionism, and high internal pressure. Therapy becomes a space to slow down,
              reconnect, and develop more sustainable ways of living and working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
