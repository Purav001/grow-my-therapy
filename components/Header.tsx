interface HeaderProps {
  version: 'clone' | 'redesign';
}

export default function Header({ version }: HeaderProps) {
  if (version === 'clone') {
    return (
      <header className="bg-[#F5EFE6] py-6 px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-[#2F4156] text-lg font-normal">
            Dr. Maya Reynolds
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-[#2F4156] text-base hover:text-[#567C8D] transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#2F4156] text-base hover:text-[#567C8D] transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-white/90 backdrop-blur-sm py-6 px-8 sticky top-0 z-40 border-b border-[#C8D9E6]/30">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-[#2F4156] text-xl font-semibold tracking-tight">
          Dr. Maya Reynolds, <span className="font-normal text-[#567C8D]">PsyD</span>
        </div>
        <div className="flex gap-10">
          <a
            href="#about"
            className="text-[#2F4156] text-base font-medium hover:text-[#567C8D] transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#567C8D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#approach"
            className="text-[#2F4156] text-base font-medium hover:text-[#567C8D] transition-colors relative group"
          >
            Approach
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#567C8D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-[#2F4156] text-base font-medium hover:text-[#567C8D] transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#567C8D] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
}
