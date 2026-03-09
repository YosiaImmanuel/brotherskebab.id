"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-24 bg-[#1A1A1A]" ref={ref}>
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
            TEMUKAN KAMI
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            KUNJUNGI <span style={{ color: "#8B0000" }}>KAMI</span>
          </h2>
          <div className="w-16 h-1 bg-[#8B0000] mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-2xl h-80 lg:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d106.88!3d-6.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInNDguMCJTIDEwNsKwNTInNDguMCJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Brothers Kebab Signature"
            />
            {/* 
              CATATAN: Ganti URL iframe di atas dengan embed Google Maps yang benar.
              Caranya:
              1. Buka Google Maps
              2. Cari lokasi toko
              3. Klik Share > Embed a map
              4. Salin iframe URL-nya ke sini
            */}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address card */}
            <div className="bg-[#242424] rounded-xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} color="white" />
                </div>
                <div>
                  <h3
                    className="text-white font-bold mb-2"
                    style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem" }}
                  >
                    ALAMAT
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Jl. Kp. Baru Griya Pekapuran Indah No.10 RT.001/RW.07,
                    <br />
                    Curug, Kec. Cimanggis,
                    <br />
                    Kota Depok, Jawa Barat 16453
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-[#242424] rounded-xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} color="white" />
                </div>
                <div>
                  <h3
                    className="text-white font-bold mb-3"
                    style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem" }}
                  >
                    JAM BUKA
                  </h3>
                  <div className="space-y-2">
                    {[
                      { day: "Senin – Jumat", time: "10.00 – 22.00" },
                      { day: "Sabtu – Minggu", time: "10.00 – 22.00" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between gap-8">
                        <span
                          className="text-white/50 text-sm"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {h.day}
                        </span>
                        <span
                          className="text-[#C9A84C] text-sm font-medium"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span
                      className="text-green-400 text-xs"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Buka setiap hari
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="https://maps.google.com/?q=Jl+Kp+Baru+Griya+Pekapuran+Indah+No.10+Cimanggis+Depok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#8B0000] hover:bg-[#A50000] text-white rounded-xl transition-colors font-semibold"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em" }}
            >
              <MapPin size={18} />
              BUKA DI GOOGLE MAPS
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
