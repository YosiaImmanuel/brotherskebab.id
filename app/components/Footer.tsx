"use client";

import { MapPin, Clock, Instagram, MessageCircle, UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#8B0000] rounded flex items-center justify-center">
                <UtensilsCrossed size={18} color="white" strokeWidth={2} />
              </div>
              <div>
                <p
                  className="text-white font-bold tracking-wider text-sm"
                  style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.12em" }}
                >
                  BROTHERS
                </p>
                <p
                  className="text-[#C9A84C] text-[10px] tracking-[0.2em]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  KEBAB SIGNATURE
                </p>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Kebab & Shawarma dengan rasa autentik Timur Tengah. Dibuat segar,
              setiap saat.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://instagram.com/brotherskebabsignature"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white font-bold mb-5"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
            >
              NAVIGASI
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Kenapa Kami", href: "#why-us" },
                { label: "Lokasi", href: "#location" },
                { label: "Pesan Online", href: "#order" },
                { label: "Galeri", href: "#gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold mb-5"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
            >
              KONTAK & LOKASI
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8B0000] mt-0.5 flex-shrink-0" />
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Jl. Kp. Baru Griya Pekapuran Indah No.10
                  <br />
                  Curug, Kec. Cimanggis, Depok 16453
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#8B0000] flex-shrink-0" />
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Buka setiap hari: <span className="text-[#C9A84C]">10.00 – 22.00</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#8B0000] flex-shrink-0" />
                {/* Ganti dengan nomor WhatsApp asli */}
                <a
                  href="https://wa.me/6281234567890"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            © {new Date().getFullYear()} Brothers Kebab Signature. All rights reserved.
          </p>
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Made with ❤️ in Depok
          </p>
        </div>
      </div>
    </footer>
  );
}
