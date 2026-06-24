"use client";
import { motion } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaCode,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaMobileAlt,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen lg:min-h-[90vh] flex items-center py-10 lg:py-0">

  <div className="absolute inset-0">
    <NetworkBackground />
  </div>

  <motion.div
    animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"
  />

  <motion.div
    animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute right-0 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* LEFT SIDE */}
      <div>

        <p className="mb-8 uppercase tracking-[0.3em] text-[#D4AF37]">
          SOFTWARE • CLOUD • AI • CONSULTING
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Transforming

          <span className="block text-[#D4AF37]">
            Businesses
          </span>

          <span className="block text-white">
            Through AI &
          </span>

          <span className="block text-[#D4AF37]">
            Technology
          </span>
        </motion.h1>

        <p className="mt-8 text-lg text-gray-400 max-w-2xl">
          Delivering AI-powered software, cloud infrastructure,
          BPO services and digital transformation solutions
          for startups, enterprises and government organizations.
        </p>
        
        {/* STATS */}
        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-4">

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">20+</h3>
            <p className="mt-2 text-gray-300">Projects</p>
          </div>

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">10+</h3>
            <p className="mt-2 text-gray-300">Clients</p>
          </div>

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">24/7</h3>
            <p className="mt-2 text-gray-300">Support</p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-5">

          <button className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:bg-[#F5C86B]">
            Start Project
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10">
            View Services
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="order-first lg:order-last relative flex items-center justify-center min-h-[320px] md:min-h-[600px]">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[260px] w-[260px] md:h-[500px] md:w-[500px] rounded-full border-2 border-[#D4AF37]/40 shadow-[0_0_80px_rgba(212,175,55,0.35)]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[380px] w-[380px] rounded-full border border-[#D4AF37]/40"
        />

        <div className="absolute h-[300px] w-[300px] rounded-full bg-[#D4AF37]/20 blur-[90px]" />

        <motion.img
          src="/logo.png"
          alt="Do IT Consultancy"
          className="relative h-40 w-40 md:h-80 md:w-80 rounded-full object-cover border-4 border-[#D4AF37]/30"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
  <p className="text-[#D4AF37] text-center text-sm font-semibold tracking-[0.35em]">
    AI • CLOUD • BPO • CYBER SECURITY
  </p>
</div>
      </div>

    </div>

  </div>

</section>
       
     <section className="py-20 overflow-hidden">
  
  <div className="max-w-7xl mx-auto px-6">
  <div className="text-center mb-12">
      <h2 className="text-5xl font-bold">
        Trusted & <span className="text-[#D4AF37]">Certified</span>
      </h2>

      <p className="mt-4 text-gray-400">
        Recognized by Government of India and Industry Certification Bodies
      </p>
    </div>

    <div className="relative overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">

        <img src="/certifications/startupindia.png" alt="Startup India" className="h-24 w-auto object-contain" />
        <img src="/certifications/msme.jpg" alt="MSME" className="h-24 w-auto object-contain" />
        <img src="/certifications/gst.jfif" alt="GST" className="h-24 w-auto object-contain" />
        <img src="/certifications/iso.png" alt="ISO" className="h-24 w-auto object-contain" />
        <img src="/certifications/IMPORT.jpg" alt="IEC" className="h-24 w-auto object-contain" />
        <img src="/certifications/gem.png" alt="GeM" className="h-24 w-auto object-contain" />

        {/* Duplicate for infinite loop */}
        <img src="/certifications/startupindia.png" alt="Startup India" className="h-24 w-auto object-contain" />
        <img src="/certifications/msme.jpg" alt="MSME" className="h-24 w-auto object-contain" />
        <img src="/certifications/gst.jfif" alt="GST" className="h-24 w-auto object-contain" />
        <img src="/certifications/iso.png" alt="ISO" className="h-24 w-auto object-contain" />
        <img src="/certifications/IMPORT.jpg" alt="IEC" className="h-24 w-auto object-contain" />
        <img src="/certifications/gem.png" alt="GeM" className="h-24 w-auto object-contain" />

      </div>
    </div>

  </div>
</section>
     

        {/* Trust Section */}
     <section className="py-24 bg-[#080808]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Our <span className="text-[#D4AF37]">Impact</span>
      </h2>

      <p className="mt-4 text-gray-400">
        Delivering reliable IT, BPO and Digital Transformation solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-5xl font-bold text-[#D4AF37]">20+</h3>
        <p className="mt-3 text-gray-400">Projects Delivered</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-5xl font-bold text-[#D4AF37]">10+</h3>
        <p className="mt-3 text-gray-400">Clients Served</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-5xl font-bold text-[#D4AF37]">5+</h3>
        <p className="mt-3 text-gray-400">Dedicated Team Members</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-5xl font-bold text-[#D4AF37]">24/7</h3>
        <p className="mt-3 text-gray-400">Support Available</p>
      </div>

    </div>

  </div>
</section>
      
      {/* Our Process */}
{/* Trust & Certifications */}
 {/* About Company */}
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
          {/* Portfolio*/}
        {/* Testimonials */}
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
      {/* Footer */}
     <Footer />
     </main>
  );
}