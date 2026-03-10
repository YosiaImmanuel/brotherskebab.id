"use client";

import { motion } from "framer-motion";
import { ShoppingCart, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-crimson/90 text-white text-xs font-medium px-4 py-2 rounded-full mb-6 tracking-widest"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          BUKA SETIAP HARI 10.00 – 22.00
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white font-oswald font-bold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          }}
        >
          KEBAB & SHAWARMA
          <br />
          <span className="text-gold">TERENAK DI DEPOK</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nikmati kebab, shawarma, dan burger dengan rasa autentik Timur Tengah.
          Dibuat segar, langsung saat kamu pesan.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="btn-primary text-base px-8 py-4"
          >
            <ShoppingCart size={18} />
            Pesan Sekarang
          </a>

          <a
            href="#location"
            className="btn-outline text-base px-8 py-4"
          >
            <MapPin size={18} />
            Lihat Lokasi
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center flex-wrap gap-12 border-t border-white/20 pt-10"
        >
          {[
            { value: "1000+", label: "Pelanggan Puas" },
            { value: "4.9★", label: "Rating GoFood" },
            { value: "10+", label: "Menu Pilihan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gold text-3xl font-oswald font-bold">
                {stat.value}
              </p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}