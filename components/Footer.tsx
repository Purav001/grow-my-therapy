interface FooterProps {
  version: 'clone' | 'redesign';
}

export default function Footer({ version }: FooterProps) {
  if (version === 'clone') {
    return (
      <footer className="bg-[#2F4156] text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-4">
          <p className="text-lg">Dr. Maya Reynolds, PsyD</p>
          <p className="text-[#C8D9E6]">Licensed Clinical Psychologist</p>
          <p className="text-sm text-[#C8D9E6]">
            123th Street 45 W, Santa Monica, CA 90401
          </p>
          <p className="text-sm text-[#C8D9E6] pt-4">
            © 2026 Dr. Maya Reynolds. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#2F4156] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* ================= BRAND ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-serif mb-3">
            Dr. Maya Reynolds
          </h3>

          <p className="text-[#C8D9E6] leading-relaxed text-sm">
            Licensed Clinical Psychologist offering thoughtful,
            evidence-based therapy for adults navigating anxiety,
            trauma, and burnout.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">

          {/* ---------- QUICK LINKS ---------- */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-white uppercase mb-6">
              Explore
            </p>

              <ul className="space-y-3">
                {['About', 'Approach', 'The Space', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="relative inline-block group text-[#C8D9E6] hover:text-white transition-colors"
                    >
                      {item}
                      <span
                        className="absolute left-0 -bottom-1 h-px w-0
                        bg-white
                        transition-all duration-300
                        group-hover:w-full"
                      />
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          {/* ---------- CONTACT ---------- */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-white uppercase mb-6">
              Contact
            </p>

            <div className="space-y-2 text-sm text-[#C8D9E6]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>

              <a
                href="tel:3105550123"
                className="block hover:text-white transition-colors"
              >
                (310) 555-0123
              </a>

              <a
                href="mailto:contact@drmayareynolds.com"
                className="block hover:text-white transition-colors break-all"
              >
                contact@drmayareynolds.com
              </a>
            </div>
          </div>

          {/* ---------- CTA ---------- */}
          <div className="flex flex-col justify-between">
            <p className="text-[#C8D9E6] text-sm leading-relaxed mb-6">
              Therapy begins with a conversation.
              If you’re ready to explore next steps,
              I invite you to reach out.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center
              px-7 py-3 rounded-full
              border border-[#C8D9E6]/60
              text-white text-sm
              hover:bg-white hover:text-[#2F4156]
              transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        {/* ================= HORIZONTAL DIVIDER ================= */}
        <div className="h-px bg-[#C8D9E6]/25 mb-6" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-[#C8D9E6]/80">
          <p>
            © 2026 Dr. Maya Reynolds. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group text-[#C8D9E6] hover:text-white transition-colors"
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 h-px w-0
                  bg-white
                  transition-all duration-300
                  group-hover:w-full"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}