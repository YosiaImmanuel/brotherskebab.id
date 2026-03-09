"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, BookOpen, Zap, Banknote } from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Daging Berkualitas",
    desc: "Menggunakan daging pilihan yang dimarinasi rempah khas, menghasilkan tekstur juicy dan rasa yang kaya.",
  },
  {
    icon: BookOpen,
    title: "Resep Autentik",
    desc: "Resep kebab khas Timur Tengah yang sudah teruji, menghadirkan cita rasa yang tidak bisa ditemukan di tempat lain.",
  },
  {
    icon: Zap,
    title: "Cepat & Fresh",
    desc: "Semua menu dibuat langsung saat dipesan. Tidak ada makanan yang dipanaskan ulang — selalu fresh!",
  },
  {
    icon: Banknote,
    title: "Harga Terjangkau",
    desc: "Nikmati kebab premium dengan harga yang ramah di kantong. Menu mulai dari Rp 15.000 saja.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 bg-[#FDF6EC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#8B0000] text-xs tracking-[0.3em] font-medium mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              KENAPA HARUS KAMI
            </p>
            <h2
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.1,
              }}
            >
              LEBIH DARI SEKADAR
              <br />
              <span style={{ color: "#8B0000" }}>KEBAB BIASA</span>
            </h2>
            <div className="w-16 h-1 bg-[#8B0000] mt-4 mb-6" />
            <p
              className="text-[#1A1A1A]/60 text-sm leading-relaxed max-w-md"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Brothers Kebab Signature hadir dengan misi membawa pengalaman makan
              kebab yang sesungguhnya ke Depok. Setiap gigitan adalah cerita
              tentang rempah dan kesegaran.
            </p>

            <a
              href="#order"
              className="inline-flex items-center gap-2 mt-8 btn-primary"
            >
              Pesan Sekarang
            </a>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#1A1A1A]/5 hover:shadow-md hover:border-[#8B0000]/20 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8B0000] transition-colors duration-200">
                    <Icon
                      size={20}
                      className="text-[#8B0000] group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                  <h3
                    className="text-[#1A1A1A] font-bold mb-2"
                    style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem", letterSpacing: "0.03em" }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-[#1A1A1A]/55 text-xs leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {r.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
