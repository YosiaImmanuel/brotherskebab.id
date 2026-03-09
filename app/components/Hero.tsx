"use client";

import { motion } from "framer-motion";
import { ShoppingCart, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Crimson accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-crimson/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-widest font-poppins"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          BUKA SETIAP HARI 10.00 – 22.00
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white mb-4 font-oswald font-bold leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
          }}
        >
          KEBAB & SHAWARMA
          <br />
          <span className="text-gold">TERENAK DI DEPOK</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-poppins"
        >
          Nikmati kebab, shawarma, dan burger dengan rasa autentik Timur Tengah.
          Dibuat segar, langsung saat kamu pesan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            <ShoppingCart size={18} />
            Pesan Sekarang
          </a>
          <a href="#location" className="btn-outline text-base px-8 py-4">
            <MapPin size={18} />
            Lihat Lokasi
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/20 pt-8"
        >
          {[
            { value: "1000+", label: "Pelanggan Puas" },
            { value: "4.9★", label: "Rating GoFood" },
            { value: "10+", label: "Menu Pilihan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center min-w-[100px]">
              <p
                className="text-gold font-oswald font-bold"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                }}
              >
                {stat.value}
              </p>
              <p className="text-white/60 text-xs mt-1 font-poppins uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
