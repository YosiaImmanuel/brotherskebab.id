"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show tooltip after button appears
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setTooltipOpen(true), 800);
      const t2 = setTimeout(() => setTooltipOpen(false), 4000);
      return () => { clearTimeout(t); clearTimeout(t2); };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                className="bg-white text-[#1A1A1A] text-sm px-4 py-3 rounded-xl shadow-xl border border-[#1A1A1A]/8 max-w-[180px] relative"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center"
                >
                  <X size={10} />
                </button>
                <p className="font-semibold text-xs">Pesan via WhatsApp!</p>
                <p className="text-[#1A1A1A]/60 text-xs mt-0.5">Respon cepat & mudah 🚀</p>
                {/* Arrow */}
                <div className="absolute -right-2 bottom-4 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl"
            aria-label="Hubungi via WhatsApp"
          >
            <MessageCircle size={26} color="white" strokeWidth={2} />

            {/* Pulse ring */}
            <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
