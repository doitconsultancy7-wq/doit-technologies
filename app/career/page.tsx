import Navbar from "@/components/Navbar";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          Join <span className="text-[#D4AF37]">Our Team</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Build your future with Do IT Consultancy. Work on innovative
          projects, learn new technologies and grow your career.
        </p>
      </section>

      {/* Open Positions */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold">
            Open <span className="text-[#D4AF37]">Positions</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Technical Support Executive",
              type: "Full Time",
            },
            {
              title: "Web Developer",
              type: "Full Time",
            },
            {
              title: "BPO Executive",
              type: "Full Time",
            },
            {
              title: "Cloud Engineer",
              type: "Internship",
            },
            {
              title: "Digital Marketing Executive",
              type: "Part Time",
            },
            {
              title: "AI Research Intern",
              type: "Internship",
            },
          ].map((job) => (
            <div
              key={job.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#D4AF37] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#D4AF37]">
                {job.title}
              </h3>

              <p className="mt-3 text-gray-400">
                Employment Type: {job.type}
              </p>

              <button className="mt-6 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12">
          <h2 className="text-center text-5xl font-bold">
            Why Join <span className="text-[#D4AF37]">Us?</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>🚀 Career Growth</div>
            <div>💻 Latest Technologies</div>
            <div>🎯 Real Projects</div>
            <div>📚 Continuous Learning</div>
          </div>
        </div>
      </section>
<section className="mx-auto max-w-7xl px-6 pb-24">
  <div className="text-center">
    <h2 className="text-5xl font-bold">
      Life At <span className="text-[#D4AF37]">Do IT Consultancy</span>
    </h2>

    <p className="mt-6 text-gray-400">
      We believe in innovation, learning and creating opportunities
      for talented professionals.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      🚀 Fast Career Growth
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      💻 Work On Real Projects
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      📚 Continuous Learning
    </div>
  </div>
</section>
      {/* Apply Form */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-center text-4xl font-bold">
            Apply <span className="text-[#D4AF37]">Now</span>
          </h2>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl bg-black p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-black p-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-xl bg-black p-4"
            />

            <input
              type="text"
              placeholder="Position Applied For"
              
              className="w-full rounded-xl bg-black p-4"
            />
            <select
  className="w-full rounded-xl border border-white/10 bg-black p-4"
>
  <option>Experience Level</option>
  <option>Fresher</option>
  <option>0-1 Year</option>
  <option>1-3 Years</option>
  <option>3-5 Years</option>
  <option>5+ Years</option>
</select>
<input
  type="file"
  accept=".pdf,.doc,.docx"
  className="w-full rounded-xl border border-white/10 bg-black p-4"
/>
            <button
              className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black"
            >
              Submit Application
            </button>
          <a
  href="https://wa.me/91YOURNUMBER?text=Hello%20Do%20IT%20Consultancy,%20I%20want%20to%20apply%20for%20a%20job."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block w-full rounded-xl bg-green-600 py-4 text-center font-bold text-white hover:bg-green-500"
>
  Apply via WhatsApp
</a>
          
          </form>
        </div>
      </section>
    </main>
  );
}