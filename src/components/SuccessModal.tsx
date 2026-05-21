"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestName: string;
}

export default function SuccessModal({ isOpen, onClose, guestName }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 30 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#000000]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md p-8 md:p-10 rounded-2xl glass text-center shadow-2xl z-10 border border-gold/40 bg-[#0d0d0d]/95 max-h-[90vh] overflow-y-auto"
          >
            {/* Elegant Corner Framing */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/40" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/40" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40" />

            {/* Glowing Gold Ring and Checkmark */}
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center shadow-lg relative z-10 border border-gold-light/40"
              >
                <Check className="w-8 h-8 text-[#0d0d0d] stroke-[3]" />
              </motion.div>
              {/* Pulsing Backlight */}
              <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-60" />
            </div>

            {/* Title / Headings */}
            <h4 className="text-peach font-cormorant text-xs tracking-[0.3em] uppercase mb-2 font-semibold animate-pulse">
              RSVP Confirmed
            </h4>
            <h3 className="text-2xl md:text-3xl font-cinzel text-[#fdfbf7] tracking-wider mb-4 font-normal">
              Seat Secured!
            </h3>
            
            {/* Main Specific Success Text Message */}
            <div className="my-6 p-5 bg-black/45 rounded-xl border border-gold/15">
              <p className="text-xs font-cormorant tracking-widest text-gold font-medium uppercase mb-2">
                Honored Guest
              </p>
              <p className="text-base md:text-lg text-gold-light font-oranienbaum leading-snug tracking-wide">
                {guestName}
              </p>
              <p className="text-xs text-[#fdfbf7]/75 font-oranienbaum leading-relaxed mt-2.5">
                Thank you for confirming. Knexa System has successfully registered your response!
              </p>
            </div>

            <p className="text-xs text-[#fdfbf7]/60 leading-relaxed font-oranienbaum mb-8 tracking-wide">
              We look forward to celebrating this celestial union of Chammi & Dhanuka with you on Monday, July 20, 2026.
            </p>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="w-full py-4 rounded-full bg-gradient-to-r from-gold-dark to-gold hover:from-peach hover:to-peach/80 text-[#0d0d0d] hover:text-[#0d0d0d] font-bold text-xs uppercase tracking-[0.25em] font-cormorant shadow-lg hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all duration-300 border border-gold/10 cursor-pointer"
            >
              Close & Return
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
