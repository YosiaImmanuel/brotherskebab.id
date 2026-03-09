"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const menus = [
  {
    id: 1,
    name: "Brother Shawarma",
    desc: "Shawarma jumbo dengan daging ayam / sapi pilihan, saus spesial, sayuran segar.",
    price: "45K",
    badge: "Terlaris",
    image: "/images/menu-shawarma.jpg",
    emoji: "🌯",
  },
  {
    id: 2,
    name: "Daddy Shawarma",
    desc: "Shawarma ukuran reguler dengan rempah khas Timur Tengah yang autentik.",
    price: "40K",
    badge: null,
    image: "/images/menu-daddy.jpg",
    emoji: "🥙",
  },
  {
    id: 3,
    name: "Shawarma Rice Bowl",
    desc: "Daging shawarma di atas nasi hangat dengan saus garlic spesial.",
    price: "30K",
    badge: "Favorit",
    image: "/images/menu-ricebowl.jpg",
    emoji: "🍚",
  },
  {
    id: 4,
    name: "Beef Cheese Burger",
    desc: "Burger daging sapi dengan keju melt, selada segar, dan saus special.",
    price: "45K",
    badge: null,
    image: "/images/menu-burger.jpg",
    emoji: "🍔",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="py-24 bg-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] font-medium mb-3 font-poppins uppercase">
            APA YANG KAMI SAJIKAN
          </p>
          <h2 className="text-white font-oswald font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            MENU <span className="text-crimson">FAVORIT</span> PELANGGAN
          </h2>
          <div className="w-16 h-1.5 bg-crimson mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menus.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative bg-[#242424] rounded-xl overflow-hidden border border-white/5 hover:border-crimson/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-crimson/20"
            >
              {/* Image */}
              <div className="relative h-56 bg-[#2E2E2E] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-700 opacity-20">
                  {item.emoji}
                </div>

                {/* Real image */}
                <Image
                  src={item.id === 1 ? "/images/menu-shawarma.png" : item.image}
                  alt={item.name}
                  fill
                  className={`object-cover group-hover:scale-110 transition-transform duration-700 ${item.id !== 1 ? 'opacity-0' : 'opacity-100'}`}
                />

                {item.badge && (
                  <span className="absolute top-4 left-4 bg-crimson text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase z-10 shadow-lg">
                    {item.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>
                <h3 className="text-white font-oswald font-bold text-xl mb-2 tracking-wide group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-poppins min-h-[3rem]">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-gold font-oswald font-bold text-2xl">
                    Rp {item.price}
                  </span>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center hover:bg-crimson-light transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-lg shadow-crimson/30"
                  >
                    <ArrowRight size={18} color="white" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold text-sm font-bold border-2 border-gold/30 px-10 py-4 rounded-sm hover:bg-gold hover:text-black transition-all duration-300 font-oswald tracking-[0.15em] uppercase"
          >
            LIHAT MENU LENGKAP
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
