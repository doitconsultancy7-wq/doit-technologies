"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-black/80 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Do IT Consultancy"
            width={60}
            height={60}
            priority
            className="rounded-xl"
          />

          <div>
            <h2 className="text-sm md:text-lg font-bold text-white">
              Do IT Consultancy
            </h2>

            <p className="text-[10px] md:text-xs text-[#D4AF37]">
              AI • Cloud • Software
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Phone */}
        <div className="hidden lg:block text-sm text-gray-300">
          📞 +91 8770283156
        </div>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden lg:block rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#F5C86B]"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-black">
          <div className="flex flex-col gap-4 p-6 text-white">

            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/career" onClick={() => setIsOpen(false)}>
              Career
            </Link>

            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>

            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <div className="pt-3 border-t border-white/10">
              📞 +91 8770283156
            </div>

            <Link
              href="/contact"
              className="mt-3 rounded-xl bg-[#D4AF37] px-5 py-3 text-center font-semibold text-black"
            >
              Book Consultation
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}