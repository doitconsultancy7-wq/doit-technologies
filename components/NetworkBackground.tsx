"use client";

import { motion } from "framer-motion";

export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Dots */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#D4AF37]"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="20%" x2="40%" y2="40%" stroke="#D4AF37" strokeOpacity="0.15" />
        <line x1="40%" y1="40%" x2="70%" y2="20%" stroke="#D4AF37" strokeOpacity="0.15" />
        <line x1="70%" y1="20%" x2="90%" y2="60%" stroke="#D4AF37" strokeOpacity="0.15" />
        <line x1="20%" y1="70%" x2="60%" y2="80%" stroke="#D4AF37" strokeOpacity="0.15" />
        <line x1="60%" y1="80%" x2="85%" y2="50%" stroke="#D4AF37" strokeOpacity="0.15" />
      </svg>

      {/* Shooting Star */}
      <motion.div
        className="absolute h-[2px] w-40 bg-gradient-to-r from-[#D4AF37] to-transparent"
        animate={{
          x: [-300, 1800],
          y: [0, 700],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}