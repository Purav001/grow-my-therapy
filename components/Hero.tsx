import { ArrowRight } from 'lucide-react';

interface HeroProps {
  version: 'clone' | 'redesign';
}

export default function Hero({ version }: HeroProps) {
  if (version === 'clone') {
    return (
      <section className="bg-[#F5EFE6] py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-[#C8D9E6] rounded-full aspect-square w-full max-w-md mx-auto overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Therapy and mental wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl leading-tight text-[#2F4156]">
              Find clarity and peace
            </h1>
            <p className="text-lg text-[#567C8D]">
              Therapy for Adults in Santa Monica, CA
            </p>
            <a
              href="#contact"
              className="inline-block border-2 border-[#2F4156] text-[#2F4156] px-8 py-3 hover:bg-[#2F4156] hover:text-white transition-all"
            >
              CONNECT WITH ME →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-[#F5EFE6] to-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#567C8D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C8D9E6] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#C8D9E6]/30 rounded-full">
              <p className="text-sm font-medium text-[#567C8D] tracking-wide">
                Licensed Clinical Psychologist
              </p>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-[#2F4156]">
              Find clarity<br />
              and peace
            </h1>
            <p className="text-xl text-[#567C8D] leading-relaxed max-w-lg">
              Compassionate, evidence-based therapy for adults navigating anxiety, trauma, and burnout in Santa Monica, CA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#2F4156] text-white px-8 py-4 rounded-lg hover:bg-[#567C8D] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2F4156] text-[#2F4156] px-8 py-4 rounded-lg hover:bg-[#2F4156] hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#567C8D]/20 to-[#C8D9E6]/20 rounded-full blur-2xl"></div>
            <div className="relative bg-[#C8D9E6]/50 rounded-full aspect-square w-full max-w-lg mx-auto overflow-hidden ring-8 ring-white/50 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Peaceful therapy environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
