import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Do IT Consultancy"
            width={55}
            height={55}
            priority
            className="rounded-lg"
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-[#D4AF37] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#D4AF37] transition">
            About
          </Link>
          <Link href="/career">
          Career
          </Link>
          <Link href="/services" className="hover:text-[#D4AF37] transition">
            Services
          </Link>

          <Link href="/portfolio" className="hover:text-[#D4AF37] transition">
            Portfolio
          </Link>

          <Link href="/contact" className="hover:text-[#D4AF37] transition">
            Contact
          </Link>
        </div>

        {/* Button */}
        <button className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#F5C86B]">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}