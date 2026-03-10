"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
    alt: "Brother Shawarma Signature",
    emoji: "🌯",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=600&auto=format&fit=crop",
    alt: "Daddy Shawarma Medium",
    emoji: "🥙",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    alt: "Shawarma Rice Bowl",
    emoji: "🍚",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    alt: "Beef Cheese Burger",
    emoji: "🍔",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
    alt: "Authentic Middle Eastern Vibe",
    emoji: "🌿",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    alt: "Chef's Preparation",
    emoji: "🔥",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-crimson text-xs tracking-[0.3em] font-medium mb-3 font-poppins uppercase">
            BIKIN NGILER
          </p>
          <h2
            className="text-charcoal font-oswald font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            GALERI <span className="text-crimson">MAKANAN</span>
          </h2>
          <div className="w-16 h-1.5 bg-crimson mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid — 2 kolom di mobile, 3 di desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="relative overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={i < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/60 transition-all duration-500 flex flex-col items-center justify-center p-4">
                <p className="text-white font-oswald font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-lg text-center leading-tight">
                  {item.alt}
                </p>
                <div className="w-8 h-0.5 bg-gold mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/brotherskebabsignature"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-charcoal text-sm font-bold border-2 border-charcoal/10 px-10 py-4 rounded-sm hover:bg-charcoal hover:text-white transition-all duration-300 font-oswald tracking-[0.15em] uppercase"
          >
            <Instagram size={18} />
            IKUTI DI INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}