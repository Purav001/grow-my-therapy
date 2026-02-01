"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  version: "clone" | "redesign";
}

interface NavLink {
  label: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ version }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navLinks: NavLink[] =
    version === "clone"
      ? [
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "About", href: "#about" },
          { label: "Approach", href: "#approach" },
          { label: "Contact", href: "#contact" },
        ];

  const headerClasses =
    version === "clone"
      ? "bg-[#F5EFE6]"
      : "bg-white/90 backdrop-blur-sm border-b border-[#C8D9E6]/30";

  return (
    <>
      {/* HEADER */}
      <header
        className={`${headerClasses} fixed top-0 left-0 right-0 z-50`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#2F4156]"
            onClick={() => setIsMenuOpen(false)}
          >
            {version === "clone" ? (
              <span className="text-lg font-normal">Dr. Maya Reynolds</span>
            ) : (
              <span className="text-xl font-semibold tracking-tight">
                Dr. Maya Reynolds,{" "}
                <span className="font-normal text-[#567C8D]">PsyD</span>
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#2F4156] text-base font-medium hover:text-[#567C8D] transition-colors relative group"
              >
                {link.label}
                {version === "redesign" && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#567C8D] group-hover:w-full transition-all duration-300" />
                )}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#2F4156] z-50"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5EFE6] lg:hidden flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#2F4156] text-2xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;