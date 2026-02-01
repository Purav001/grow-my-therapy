import { ArrowRight } from "lucide-react";

interface HeroProps {
  version: "clone" | "redesign";
}

const HEADER_HEIGHT = 80; // must match Header

export default function Hero({ version }: HeroProps) {
  /* ---------------- CLONE VERSION ---------------- */
  if (version === "clone") {
    return (
      <section
        className="bg-[#F5EFE6] overflow-hidden"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <div
          className="h-full flex items-center"
          style={{ paddingTop: HEADER_HEIGHT }}
        >
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-[#C8D9E6] rounded-full aspect-square w-full max-w-md mx-auto overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Therapy and mental wellness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
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
        </div>
      </section>
    );
  }

  /* ---------------- REDESIGN VERSION ---------------- */
  return (
    <section
      className="relative bg-gradient-to-b from-[#F5EFE6] to-white overflow-hidden"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#567C8D] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C8D9E6] rounded-full blur-3xl" />
      </div>

      <div
        className="relative h-full flex items-center"
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE — LEFT */}
          <div className="order-1 relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#567C8D]/20 to-[#C8D9E6]/20 rounded-full blur-2xl" />
            <div className="relative bg-[#C8D9E6]/50 rounded-full aspect-square w-full max-w-lg overflow-hidden ring-8 ring-white/50">
              <img
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Peaceful therapy environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT — RIGHT */}
          <div className="order-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#C8D9E6]/30 rounded-full">
                <p className="text-sm font-medium text-[#567C8D] tracking-wide">
                  Licensed Clinical Psychologist
                </p>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-[#2F4156]">
                Find clarity
                <br />
                and peace
              </h1>

              <p className="text-xl text-[#567C8D] leading-relaxed max-w-lg">
                Compassionate, evidence-based therapy for adults navigating
                anxiety, trauma, and burnout in Santa Monica, CA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 text-[#2F4156] text-base font-medium group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#2F4156] transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="relative inline-flex items-center text-[#567C8D] text-base font-medium group"
              >
                Learn More

                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#567C8D] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}