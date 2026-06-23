import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 uppercase tracking-[0.3em] text-[#D4AF37]">
                SOFTWARE • CLOUD • AI • CONSULTING
              </p>

              <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                Building
                <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F5C86B] to-[#FFD700] bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-400">
                We design, develop and scale world-class software solutions,
                cloud infrastructure and AI-powered products for startups,
                enterprises and government organizations.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:bg-[#F5C86B]">
                  Start Project
                </button>

                <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10">
                  View Services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="mb-6 text-xl font-semibold">
                  Business Dashboard
                </h3>

                <div className="space-y-4">
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-gray-400">Project Success Rate</p>
                    <h4 className="text-3xl font-bold text-[#D4AF37]">
                      98%
                    </h4>
                  </div>

                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-gray-400">Client Satisfaction</p>
                    <h4 className="text-3xl font-bold text-[#F5C86B]">
                      100%
                    </h4>
                  </div>

                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-gray-400">Support Availability</p>
                    <h4 className="text-3xl font-bold text-yellow-300">
                      24/7
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Trust Section */}
{/* Trust & Certifications */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center mb-14">
    <h2 className="text-5xl font-bold">
      Trusted & <span className="text-[#D4AF37]">Certified</span>
    </h2>

    <p className="mt-4 text-gray-400">
      Recognized by government and industry certification bodies.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

    {[
      { img: "/certifications/msme.png", title: "MSME" },
      { img: "/certifications/gem.png", title: "GeM" },
      { img: "/certifications/startup-india.png", title: "Startup India" },
      { img: "/certifications/gst.png", title: "GST" },
      { img: "/certifications/iec.png", title: "IEC" },
      { img: "/certifications/iso.png", title: "ISO" },
    ].map((item) => (
      <div
        key={item.title}
        className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
      >
        <img
          src={item.img}
          alt={item.title}
          className="mx-auto h-20 object-contain"
        />

        <h3 className="mt-5 text-center font-semibold text-white group-hover:text-[#D4AF37]">
          {item.title}
        </h3>
      </div>
    ))}

  </div>
</section>
      {/* Trusted By */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="text-center mb-14">
    <h2 className="text-5xl font-bold">
      Trusted <span className="text-[#D4AF37]">By</span>
    </h2>

    <p className="mt-4 text-gray-400">
      Organizations and businesses that trust Do IT Consultancy.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      "Government Projects",
      "Educational Institutes",
      "Startups",
      "Small Businesses",
      "Training Organizations",
      "Corporate Clients",
      "IT Companies",
      "BPO Operations",
    ].map((client) => (
      <div
        key={client}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-[#D4AF37]"
      >
        <h3 className="font-semibold">{client}</h3>
      </div>
    ))}

  </div>
</section>
      
      {/* Our Process */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Our <span className="text-[#D4AF37]">Process</span>
    </h2>

    <p className="mt-4 text-gray-400">
      A proven approach to deliver successful technology solutions.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-4">

    {[
      {
        no: "01",
        title: "Discovery",
        desc: "Understand business goals and requirements.",
      },
      {
        no: "02",
        title: "Planning",
        desc: "Create roadmap, architecture and strategy.",
      },
      {
        no: "03",
        title: "Development",
        desc: "Build scalable and secure digital solutions.",
      },
      {
        no: "04",
        title: "Support",
        desc: "Continuous monitoring and maintenance.",
      },
    ].map((step) => (
      <div
        key={step.no}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#D4AF37] transition-all"
      >
        <h3 className="text-5xl font-bold text-[#D4AF37]">
          {step.no}
        </h3>

        <h4 className="mt-4 text-2xl font-semibold">
          {step.title}
        </h4>

        <p className="mt-3 text-gray-400">
          {step.desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* About Company */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid gap-12 lg:grid-cols-2 items-center">

    <div>
      <h2 className="text-5xl font-bold">
        About <span className="text-[#D4AF37]">Do IT Consultancy</span>
      </h2>

      <p className="mt-6 text-gray-400 text-lg leading-8">
        Do IT Consultancy is a technology-driven company delivering
        software development, cloud solutions, AI automation,
        cyber security and IT consulting services.

        We help startups, enterprises and government organizations
        transform their ideas into scalable digital products.
      </p>

      <div className="mt-8 flex gap-8">
        <div>
          <h3 className="text-4xl font-bold text-[#D4AF37]">5+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D4AF37]">20+</h3>
          <p className="text-gray-400">Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D4AF37]">100%</h3>
          <p className="text-gray-400">Commitment</p>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
      <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">
        Why Businesses Choose Us
      </h3>

      <ul className="space-y-4 text-gray-300">
        <li>✓ Custom Software Development</li>
        <li>✓ Cloud & DevOps Solutions</li>
        <li>✓ AI & Automation Services</li>
        <li>✓ Cyber Security Expertise</li>
        <li>✓ 24/7 Technical Support</li>
      </ul>
    </div>

  </div>
</section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["5+", "Years Experience"],
            ["20+", "Projects Delivered"],
            ["100%", "Client Commitment"],
            ["24/7", "Technical Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-[#D4AF37]">
                {value}
              </h3>
              <p className="mt-2 text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      {/* Services */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Our <span className="text-[#D4AF37]">Services</span>
    </h2>

    <p className="mt-4 text-gray-400">
      End-to-end technology solutions for startups, enterprises and government organizations.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    {[
      {
        icon: "💻",
        title: "Software Development",
        desc: "Custom enterprise software and business applications."
      },
      {
        icon: "🌐",
        title: "Web Development",
        desc: "Modern responsive websites and web platforms."
      },
      {
        icon: "☁️",
        title: "Cloud Services",
        desc: "AWS, Azure and scalable cloud infrastructure."
      },
      {
        icon: "🤖",
        title: "AI Solutions",
        desc: "AI-powered automation and intelligent systems."
      },
      {
        icon: "🔒",
        title: "Cyber Security",
        desc: "Security assessment and protection solutions."
      },
      {
        icon: "📱",
        title: "Mobile Apps",
        desc: "Android and iOS application development."
      },
      {
        icon: "🎧",
        title: "BPO Services",
        desc: "Customer support and business process outsourcing."
      },
      {
        icon: "📊",
        title: "IT Consulting",
        desc: "Technology strategy and digital transformation."
      },
    ].map((service) => (
      <div
        key={service.title}
        className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-2"
      >
        <div className="mb-4 text-5xl">
          {service.icon}
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37]">
          {service.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {service.desc}
        </p>
      </div>
    ))}

  </div>
</section>
      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Trusted <span className="text-[#D4AF37]">Technologies</span>
          </h2>

          <p className="mt-4 text-gray-400">
            We build modern, scalable and enterprise-grade solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "MongoDB",
            "PostgreSQL",
            "Spring Boot",
            "Python",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#D4AF37]"
            >
              <h3 className="font-semibold">{tech}</h3>
            </div>
          ))}
        </div>
      </section>
          
          {/* Portfolio*/}
      <section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Our <span className="text-[#D4AF37]">Portfolio</span>
    </h2>

    <p className="mt-4 text-gray-400">
      Delivering impactful solutions across multiple industries.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        title: "Government Training Programs",
        desc: "Delivered technical and IT training programs for government and institutional organizations."
      },
      {
        title: "Software Development Projects",
        desc: "Custom software applications, business portals and enterprise solutions."
      },
      {
        title: "Website Development",
        desc: "Professional websites, business portals and e-commerce platforms."
      },
      {
        title: "Cloud Infrastructure",
        desc: "AWS and Azure deployment, migration and cloud management services."
      },
      {
        title: "BPO & Support Operations",
        desc: "Customer support, technical support and business process outsourcing."
      },
      {
        title: "AI & Automation Solutions",
        desc: "AI-powered tools, automation workflows and intelligent business solutions."
      }
    ].map((project) => (
      <div
        key={project.title}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.20)]"
      >
        <h3 className="text-2xl font-bold text-[#D4AF37] transition-all duration-300">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {project.desc}
        </p>
      </div>
    ))}

  </div>
</section>
      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Why Choose{" "}
            <span className="text-[#D4AF37]">
              Do IT Consultancy
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Delivering innovation, quality and scalable digital solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Enterprise Development",
            "Cloud Expertise",
            "AI & Automation",
            "Cyber Security",
            "Agile Delivery",
            "Dedicated Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold text-[#D4AF37]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
   {/* Testimonials */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Client <span className="text-[#D4AF37]">Testimonials</span>
    </h2>

    <p className="mt-4 text-gray-400">
      What our clients say about our services.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    {[
      {
        name: "Government Training Client",
        text: "Professional training delivery with excellent technical expertise."
      },
      {
        name: "Business Client",
        text: "The team delivered our project on time with outstanding quality."
      },
      {
        name: "Technology Partner",
        text: "Reliable support, strong communication and scalable solutions."
      },
    ].map((item) => (
      <div
        key={item.name}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#D4AF37] transition-all"
      >
        <div className="mb-4 text-[#D4AF37] text-2xl">
          ★★★★★
        </div>

        <p className="text-gray-300">
          {item.text}
        </p>

        <h4 className="mt-6 font-bold text-[#D4AF37]">
          {item.name}
        </h4>
      </div>
    ))}
  </div>
</section>
  {/* Certifications */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Trust & <span className="text-[#D4AF37]">Certifications</span>
    </h2>

    <p className="mt-4 text-gray-400">
      Registered, recognized and trusted technology partner.
    </p>
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
        className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-[#D4AF37] hover:-translate-y-2"
      >
        <div className="mb-4 text-4xl text-[#D4AF37]">
          ✓
        </div>

        <h3 className="font-bold">
          {item}
        </h3>
      </div>
    ))}
  </div>
</section>
     <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
          <h2 className="text-5xl font-bold">
            Ready To Build Something
            <span className="block text-[#D4AF37]">
              Exceptional?
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Lets discuss your next software, cloud or AI project.
          </p>

          <button className="mt-8 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:bg-[#F5C86B]">
            Schedule Consultation
          </button>
        </div>
      </section>
{/* Contact Section */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <h2 className="text-5xl font-bold">
      Get In <span className="text-[#D4AF37]">Touch</span>
    </h2>

    <p className="mt-4 text-gray-400">
      Lets discuss your project and business requirements.
    </p>
  </div>

  <div className="grid gap-10 lg:grid-cols-2">

    {/* Contact Info */}
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-3xl font-bold text-[#D4AF37]">
        Contact Information
      </h3>

      <div className="mt-8 space-y-5 text-gray-300">
        <p>📞 +91 XXXXXXXXXX</p>
        <p>📧 info@doitconsultancy.in</p>
        <p>🌐 www.doitconsultancy.in</p>
        <p>📍 Sagar, Madhya Pradesh, India</p>
      </div>
    </div>

    {/* Form */}
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-white/10 bg-black p-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/10 bg-black p-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-white/10 bg-black p-4"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-xl border border-white/10 bg-black p-4"
        />

        <button
          className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black"
        >
          Send Inquiry
        </button>
      </form>
    </div>

  </div>
</section>

      {/* Footer */}
<footer className="border-t border-white/10 py-10">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-10 md:grid-cols-3">

      <div>
        <h3 className="text-2xl font-bold text-[#D4AF37]">
          Do IT Consultancy
        </h3>

        <p className="mt-4 text-gray-400">
          Empowering Businesses Through Technology.
        </p>
      </div>

      <div>
        <h4 className="mb-4 font-semibold">Services</h4>

        <ul className="space-y-2 text-gray-400">
          <li>Software Development</li>
          <li>Web Development</li>
          <li>Cloud Services</li>
          <li>Cyber Security</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-semibold">Contact</h4>

        <ul className="space-y-2 text-gray-400">
          <li>📧 info@doitconsultancy.in</li>
          <li>📞 +91 8770283156</li>
          <li>📍 Sagar, Madhya Pradesh</li>
        </ul>
      </div>

    </div>

    <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
      © 2026 Do IT Consultancy. All Rights Reserved.
    </div>

  </div>
</footer>
     </main>
  );
}