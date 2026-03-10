"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideInterval = 5000; // 5 seconds

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoSlideInterval);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleManualInteraction = (action: () => void) => {
    stopTimer();
    action();
    startTimer();
  };

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] font-medium mb-3 uppercase"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            KATA MEREKA
          </p>
          <h2
            className="text-white font-oswald font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            PELANGGAN <span className="text-[#8B0000]">BAHAGIA</span>
          </h2>
          <div className="w-16 h-1 bg-[#8B0000] mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px] flex items-center justify-center">
          {/* Cards Display */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute w-full max-w-lg bg-[#242424] rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl"
              >
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-20">
                  <Quote size={48} color="#C9A84C" />
                </div>

                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-white/90 text-lg italic leading-relaxed mb-8 relative z-10"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div
                    className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p
                      className="text-white font-bold text-base tracking-wide"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {testimonials[currentIndex].name}
                    </p>
                    <p
                      className="text-[#C9A84C] text-xs font-medium tracking-wider"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controller (Dots & Arrows) */}
        <div className="flex flex-col items-center gap-8 mt-8">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualInteraction(() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                })}
                className={`h-2 transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 bg-[#C9A84C]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => handleManualInteraction(slidePrev)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] shadow-xl hover:bg-[#8B0000] hover:text-white transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleManualInteraction(slideNext)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1A1A1A] shadow-xl hover:bg-[#8B0000] hover:text-white transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Summary stat */}
        <div className="mt-16 text-center">
          <p
            className="text-white/40 text-sm tracking-wide"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Bergabung dengan{" "}
            <span className="text-[#C9A84C] font-semibold">1000+ pelanggan puas</span>{" "}
            Brothers Kebab Signature
          </p>
        </div>
      </div>
    </section>
  );
}
