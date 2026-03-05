"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-accent">Base</span>wise
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/diensten" className="hover:text-accent transition-colors">
            Diensten
          </Link>
          <Link href="/over-ons" className="hover:text-accent transition-colors">
            Over ons
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-navy-light border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/diensten" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            Diensten
          </Link>
          <Link href="/over-ons" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            Over ons
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
