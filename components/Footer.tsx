interface FooterProps {
  version: 'clone' | 'redesign';
}

export default function Footer({ version }: FooterProps) {
  if (version === 'clone') {
    return (
      <footer className="bg-[#2F4156] text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-4">
            <p className="text-lg">Dr. Maya Reynolds, PsyD</p>
            <p className="text-[#C8D9E6]">Licensed Clinical Psychologist</p>
            <p className="text-sm text-[#C8D9E6]">
              123th Street 45 W, Santa Monica, CA 90401
            </p>
            <p className="text-sm text-[#C8D9E6] pt-4">
              © 2026 Dr. Maya Reynolds. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-br from-[#2F4156] to-[#567C8D] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-[#C8D9E6] leading-relaxed">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy for adults in Santa Monica, California.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-[#C8D9E6] hover:text-white transition-colors">
                About
              </a>
              <a href="#approach" className="text-[#C8D9E6] hover:text-white transition-colors">
                Approach
              </a>
              <a href="#contact" className="text-[#C8D9E6] hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-[#C8D9E6]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="pt-2">
                <a href="tel:3105550123" className="hover:text-white transition-colors">
                  (310) 555-0123
                </a>
              </p>
              <p>
                <a href="mailto:contact@drmayareynolds.com" className="hover:text-white transition-colors">
                  contact@drmayareynolds.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C8D9E6]">
            <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
