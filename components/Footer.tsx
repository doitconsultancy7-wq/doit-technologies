export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold">
              Do IT <span className="text-[#D4AF37]">Consultancy</span>
            </h3>

            <p className="mt-4 text-gray-400">
              Empowering businesses with IT Services,
              BPO Solutions, Digital Transformation
              and Technology Consulting.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#D4AF37]">
              Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>BPO Services</li>
              <li>IT Support</li>
              <li>Cloud Services</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#D4AF37]">
              Company
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#D4AF37]">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>📍 Sagar, Madhya Pradesh</li>
              <li>📞 +91 8770283156</li>
              <li>✉️ doitconsultancy7@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 Do IT Consultancy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}