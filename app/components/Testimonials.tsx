"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi S.",
    role: "Pelanggan GoFood",
    text: "Kebabnya besar dan enak banget! Dagingnya juicy, sausnya pas. Udah jadi langganan mingguan nih.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Rina F.",
    role: "Pelanggan ShopeeFood",
    text: "Shawarma rice bowl favorit saya! Porsinya gede, harganya worth it banget. Rekomendasi banget deh!",
    rating: 5,
    avatar: "R",
  },
  {
    name: "Dimas P.",
    role: "Pelanggan GrabFood",
    text: "Harga murah tapi rasa premium. Beef cheese burger-nya juara, kejunya melt sempurna. Puas banget!",
    rating: 5,
    avatar: "D",
  },
  {
    name: "Sari W.",
    role: "Pelanggan WhatsApp",
    text: "Daddy shawarma-nya mantap! Respon ordernya cepat, makanannya sampai masih anget. Recommended!",
    rating: 5,
    avatar: "S",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] font-medium mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            KATA MEREKA
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            PELANGGAN <span style={{ color: "#8B0000" }}>BAHAGIA</span>
          </h2>
          <div className="w-16 h-1 bg-[#8B0000] mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-[#242424] rounded-xl p-6 border border-white/5 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-5 opacity-10">
                <Quote size={36} color="#C9A84C" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-white/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Bergabung dengan{" "}
            <span className="text-[#C9A84C] font-semibold">1000+ pelanggan puas</span>{" "}
            Brothers Kebab Signature
          </p>
        </motion.div>
      </div>
    </section>
  );
}
