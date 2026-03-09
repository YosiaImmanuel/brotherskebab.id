"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "WhatsApp",
    desc: "Chat langsung & pesan sekarang",
    bg: "#25D366",
    textColor: "white",
    icon: "🟢",
    href: "https://wa.me/6281234567890",
  },
  {
    name: "GoFood",
    desc: "Pesan via aplikasi Gojek",
    bg: "#E5192A",
    textColor: "white",
    icon: "🛵",
    href: "https://gofood.co.id",
  },
  {
    name: "ShopeeFood",
    desc: "Pesan via aplikasi Shopee",
    bg: "#EE4D2D",
    textColor: "white",
    icon: "🍊",
    href: "https://shopeefood.co.id",
  },
  {
    name: "GrabFood",
    desc: "Pesan via aplikasi Grab",
    bg: "#00B14F",
    textColor: "white",
    icon: "🛍",
    href: "https://food.grab.com",
  },
];

export default function OrderOnline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="order" className="py-24 bg-[#FDF6EC]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#8B0000] text-xs tracking-[0.3em] font-medium mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            MUDAH & CEPAT
          </p>
          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            PESAN <span style={{ color: "#8B0000" }}>ONLINE</span> SEKARANG
          </h2>
          <div className="w-16 h-1 bg-[#8B0000] mx-auto mt-4 mb-4" />
          <p
            className="text-[#1A1A1A]/55 text-sm max-w-md mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Pilih platform favoritmu dan nikmati kebab lezat di rumah!
          </p>
        </motion.div>

        {/* Platform buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="group flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-[#1A1A1A]/8 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-4xl">{p.icon}</span>
              <div className="text-center">
                <p
                  className="font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.05rem" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[#1A1A1A]/50 text-xs mt-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
              <ExternalLink size={14} className="text-[#1A1A1A]/30 group-hover:text-[#8B0000] transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#8B0000] rounded-2xl p-10 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white/5 rounded-full" />

          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] font-medium mb-2 relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            CARA TERCEPAT
          </p>
          <h3
            className="text-white font-bold mb-3 relative"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            HUBUNGI KAMI LANGSUNG <br /> VIA WHATSAPP
          </h3>
          <p
            className="text-white/70 text-sm mb-8 max-w-sm mx-auto relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Respon cepat, mudah pesan, bisa tanya-tanya menu dulu!
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 bg-white text-[#8B0000] font-bold px-10 py-4 rounded-full hover:bg-[#FDF6EC] transition-colors shadow-lg"
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem", letterSpacing: "0.06em" }}
          >
            <MessageCircle size={22} />
            PESAN VIA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
