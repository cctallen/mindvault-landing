"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 font-bold text-xl tracking-tight transition-colors duration-300 ${
          scrolled ? "text-slate-900" : "text-white"
        }`}>
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">M</span>
          MindVault
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-600 hover:text-indigo-600"
                    : "text-white/90 hover:text-white font-medium"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://app.getmindvault.ai" className={`text-sm transition-colors duration-300 ${
            scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
          }`}>
            Sign in
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm"
          >
            Get early access
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
            scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/90 hover:text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2 text-sm text-slate-700 hover:text-indigo-600 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <Link
              href="#contact"
              className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get early access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
