import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-6xl font-bold">
            About{" "}
            <span className="text-[#D4AF37]">
              Do IT Consultancy
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Empowering Businesses Through Technology,
            Innovation & Digital Transformation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-4xl font-bold text-[#D4AF37]">
            Our Story
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Do IT Consultancy was founded in 2025 with a clear vision of
            empowering businesses through technology, innovation, and digital
            transformation.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            Established in Sagar, Madhya Pradesh, the company aims to create
            opportunities for local talent, support businesses with modern
            technology solutions, and contribute to the growth of the IT
            ecosystem in Tier-2 and Tier-3 cities.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            From technology training and skill development initiatives, Do IT
            Consultancy expanded into Website Development, Software Solutions,
            Cloud Services, Technical Support, BPO Operations, Artificial
            Intelligence Solutions, and Business Consulting.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-bold text-[#D4AF37]">
              Our Vision
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              To establish Sagar as a recognized IT and Innovation Hub by
              creating employment opportunities, enabling digital
              transformation, and delivering world-class technology solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-bold text-[#D4AF37]">
              Our Mission
            </h2>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✓ Deliver innovative technology solutions</li>
              <li>✓ Create employment opportunities for local youth</li>
              <li>✓ Support startups and growing businesses</li>
              <li>✓ Promote skill development and entrepreneurship</li>
              <li>✓ Drive digital transformation across industries</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Leadership{" "}
            <span className="text-[#D4AF37]">Team</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-bold">
              Harshit Sahu
            </h3>

            <p className="mt-2 text-[#D4AF37] font-semibold">
              Co-Founder – Technology & HR
            </p>

            <p className="mt-4 text-gray-400">
              Leads technology initiatives, software development, cloud
              solutions, human resource management and team development.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-bold">
              Mayank Rajoriya
            </h3>

            <p className="mt-2 text-[#D4AF37] font-semibold">
              Co-Founder – Client & Team Management
            </p>

            <p className="mt-4 text-gray-400">
              Responsible for client engagement, relationship management,
              project coordination and team operations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-bold">
              Raghvendra Patkar
            </h3>

            <p className="mt-2 text-[#D4AF37] font-semibold">
              Co-Founder – Strategy & Operations
            </p>

            <p className="mt-4 text-gray-400">
              Focuses on strategic planning, operational excellence, business
              growth and process optimization.
            </p>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Certifications &{" "}
            <span className="text-[#D4AF37]">Recognition</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {[
            "MSME",
            "GST",
            "GeM",
            "Startup India",
            "ISO",
            "IEC",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <h3 className="font-semibold text-[#D4AF37]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Company{" "}
            <span className="text-[#D4AF37]">Timeline</span>
          </h2>
        </div>

        <div className="space-y-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              2025
            </h3>

            <p className="mt-3 text-gray-300">
              Foundation of Do IT Consultancy
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              2025
            </h3>

            <p className="mt-3 text-gray-300">
              Technology Training & Development Services
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              2026
            </h3>

            <p className="mt-3 text-gray-300">
              Business Expansion, BPO & IT Services
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              Future
            </h3>

            <p className="mt-3 text-gray-300">
              AI Solutions, Cloud Services, Startup Support and Digital
              Transformation.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
          <h2 className="text-5xl font-bold">
            Lets Build The Future Together
          </h2>

          <p className="mt-6 text-gray-400">
            Ready to transform your business with technology?
          </p>

          <button className="mt-8 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}