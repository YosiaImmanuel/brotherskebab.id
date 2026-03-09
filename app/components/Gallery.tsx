"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

// Placeholder gallery items — ganti dengan foto makanan asli di public/images/
const galleryItems = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Brother Shawarma", emoji: "🌯", span: "col-span-2 row-span-2" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Daddy Shawarma", emoji: "🥙", span: "" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Rice Bowl", emoji: "🍚", span: "" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Beef Burger", emoji: "🍔", span: "" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Suasana Warung", emoji: "🌿", span: "" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Kebab Fresh", emoji: "🔥", span: "" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 bg-[#FDF6EC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
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
            BIKIN NGILER
          </p>
          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            GALERI <span style={{ color: "#8B0000" }}>MAKANAN</span>
          </h2>
          <div className="w-16 h-1 bg-[#8B0000] mx-auto mt-4" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 grid-rows-2 gap-4 h-[480px]"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className={`${item.span} relative rounded-xl overflow-hidden bg-[#E8DDD0] group cursor-pointer`}
            >
              {/* Placeholder / emoji (ganti dengan Image next.js saat foto sudah ada) */}
              <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                {item.emoji}
              </div>

              {/* Real image — uncomment when photos are ready:
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              */}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#8B0000]/0 group-hover:bg-[#8B0000]/50 transition-all duration-300 flex items-center justify-center">
                <p
                  className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/brotherskebabsignature"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1A1A1A] text-sm font-medium border border-[#1A1A1A]/20 px-8 py-3 rounded hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
            style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
          >
            <Instagram size={16} />
            IKUTI DI INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}
