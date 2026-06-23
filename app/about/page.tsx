import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            Do IT <span className="text-cyan-400">Consultancy</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-black hover:bg-cyan-400">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-4 text-cyan-400 uppercase tracking-[0.3em]">
            Software Development • Cloud • AI • IT Services
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
            Building Digital Solutions
            <span className="block text-cyan-400">
              That Drive Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
            We help startups, enterprises and government organizations build
            scalable software, cloud infrastructure, AI-powered applications
            and digital transformation solutions.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400">
              Start Your Project
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
            <p className="mt-2 text-gray-400">Projects Delivered</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">98%</h3>
            <p className="mt-2 text-gray-400">Client Satisfaction</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
            <p className="mt-2 text-gray-400">Technical Support</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="mt-2 text-gray-400">Technology Domains</p>
          </div>
        </div>
      </section>
    </main>
  );
}