import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.08)]">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Do IT Consultancy"
    width={70}
    height={70}
    priority
    className="rounded-xl"
  />

  <div>
    <h2 className="text-lg font-bold text-white">
      Do IT Consultancy
    </h2>

    <p className="text-xs text-[#D4AF37]">
      AI • Cloud • Software
    </p>
  </div>
</Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/" className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full">
            Home
          </Link>

          <Link href="/about" className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full">
            About
          </Link>
          <Link href="/career">
          Career
          </Link>
          <Link href="/services" className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full">
            Services
          </Link>

          <Link href="/portfolio" className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full">
            Portfolio
          </Link>

          <Link href="/contact" className="relative transition duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full">
            Contact
          </Link>
        </div>
<div className="hidden lg:block text-sm text-gray-300">
  📞 +91 8770283156
</div>
        {/* Button */}
        <Link
  href="/contact"
  className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#F5C86B]"
>
  Book Consultation
</Link>    </div>
    </nav>
  );
}