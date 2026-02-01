import { Heart, Brain, Users, Shield } from 'lucide-react';

interface AboutProps {
  version: 'clone' | 'redesign';
}

export default function About({ version }: AboutProps) {
  if (version === 'clone') {
    return (
      <section id="about" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl text-[#2F4156] mb-8">About Dr. Maya Reynolds, PsyD</h2>

          <div className="space-y-6 text-[#2F4156] leading-relaxed">
            <p>
              I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
              who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of
              the people I work with are high-achieving, thoughtful, and self-aware—but internally feel
              exhausted, stuck in overthinking, or emotionally on edge.
            </p>

            <p>
              My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me
              feeling "functional" on the outside while quietly struggling with constant worry, tension in their
              body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
              Others are navigating the impact of earlier life experiences that continue to affect their
              relationships, confidence, or sense of safety.
            </p>

            <p>
              I take a warm, collaborative, and grounded approach to therapy. Sessions are structured
              enough to feel supportive, while still leaving space for reflection and depth. I integrate
              evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to help clients understand both the
              emotional and physiological sides of what they're experiencing.
            </p>

            <p>
              I believe therapy works best when clients feel respected, understood, and actively involved in
              the process. My goal is not just symptom relief, but helping clients develop insight, resilience,
              and a stronger relationship with themselves over time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-[#2F4156] leading-tight">
                About Dr. Maya Reynolds
              </h2>
              <div className="w-24 h-1 bg-[#567C8D]"></div>
            </div>

            <div className="space-y-6 text-lg text-[#2F4156]/80 leading-relaxed">
              <p>
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults
                who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>

              <p>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel
                exhausted, stuck in overthinking, or emotionally on edge. They're functional on the outside while quietly struggling with constant worry, tension, difficulty sleeping, or always bracing for something to go wrong.
              </p>

              <p>
                My approach is warm, collaborative, and grounded. I integrate evidence-based methods like CBT, EMDR, mindfulness practices, and body-oriented techniques to help you understand both the emotional and physiological aspects of what you're experiencing.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#2F4156] rounded-full flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F4156]">
                  Evidence-Based
                </h3>
                <p className="text-[#567C8D] leading-relaxed">
                  CBT, EMDR, and mindfulness techniques grounded in research
                </p>
              </div>

              <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#567C8D] rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F4156]">
                  Compassionate Care
                </h3>
                <p className="text-[#567C8D] leading-relaxed">
                  A warm, collaborative space for healing and growth
                </p>
              </div>

              <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#567C8D] rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F4156]">
                  Trauma-Informed
                </h3>
                <p className="text-[#567C8D] leading-relaxed">
                  Specialized support for trauma, anxiety, and burnout
                </p>
              </div>

              <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#2F4156] rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2F4156]">
                  Safe Space
                </h3>
                <p className="text-[#567C8D] leading-relaxed">
                  Confidential, judgment-free environment for exploration
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2F4156] to-[#567C8D] p-8 rounded-2xl text-white space-y-4">
              <h3 className="text-2xl font-semibold">My Philosophy</h3>
              <p className="leading-relaxed opacity-90">
                Therapy works best when you feel respected, understood, and actively involved.
                My goal isn't just symptom relief—it's helping you develop insight, resilience,
                and a stronger relationship with yourself over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
