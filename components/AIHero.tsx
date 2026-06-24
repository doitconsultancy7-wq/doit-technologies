"use client";

import { motion } from "framer-motion";

export default function AIHero() {
  return (
    <div className="relative flex items-center justify-center h-[500px]">

      {/* Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-[#D4AF37]/20 blur-3xl" />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[420px] h-[420px] rounded-full border border-[#D4AF37]/30"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/30"
      />

      {/* Logo */}
      <motion.img
        src="/logo.png"
        alt="Do IT Consultancy"
        className="h-64 w-64 object-contain"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Floating Labels */}
      <div className="absolute top-10 left-10 text-[#D4AF37]">
        AI
      </div>

      <div className="absolute top-20 right-10 text-[#D4AF37]">
        Cloud
      </div>

      <div className="absolute bottom-16 left-16 text-[#D4AF37]">
        Security
      </div>

      <div className="absolute bottom-10 right-10 text-[#D4AF37]">
        BPO
      </div>
    </div>
  );
}