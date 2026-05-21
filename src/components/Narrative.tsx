import React from "react";
import { motion } from "framer-motion";
import { GoldLeafDivider } from "./Ornaments";

export default function Narrative() {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center py-24 px-6 text-center overflow-hidden bg-[#0d0d0d] select-none">
      {/* Top and Bottom Fading Masks */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0d0d0d] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />

      {/* Narrative Background Graphic Couple (Very Low Opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.16] filter brightness-[0.15] blur-[2px]" 
          style={{ backgroundImage: "url('/couple.jpg')" }}
        />
        {/* Subtle radial shadow to highlight central narrative */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(13,13,13,0.9)_80%)]" />
      </div>

      <div className="max-w-md mx-auto flex flex-col items-center relative z-20 w-full">
        {/* Cursive Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-gold font-mea text-2xl md:text-3xl leading-none my-0"
        >
          written in
        </motion.p>
        
        {/* Cinzel Serif Main Header */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
          className="text-[#f0ebe0] text-3xl md:text-4xl font-cinzel tracking-[0.2em] uppercase mt-1.5 mb-2"
        >
          The Stars
        </motion.h2>

        {/* Reusable Gold Leaf Flourish Divider */}
        <GoldLeafDivider className="opacity-80" delay={0.3} />

        {/* Custom Narrative Paragraph (Oranienbaum Font look) */}
        <div className="overflow-hidden px-4 mt-4">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.45 }}
            className="text-[#f0ebe0]/75 text-sm md:text-base font-oranienbaum leading-[2] tracking-wide text-center uppercase"
          >
            As we prepare to walk hand-in-hand into a new chapter of our lives, we find our greatest joy is in the people who have walked beside us along the way. Your love and friendship have shaped our story, and it would mean the world to us to have you there as we exchange our vows. Please join us for a day of laughter, love, and a celebration of the beautiful journey ahead.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
