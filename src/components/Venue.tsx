"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { GoldLeafDivider } from "./Ornaments";

export default function Venue() {
  const mapUrl = "https://www.google.com/maps/dir//Summerfields+Restaurant+%26+Reception+Hall,+139+Piliyandala+Road,+Palanwatta,+Pannipitiya+10230/@6.9751817,79.9735808,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3ae2502daed63ce9:0x7e7813e42712a0f6!2m2!1d79.9608933!2d6.8243794?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-24 px-6 text-center overflow-hidden bg-[#0d0d0d] select-none">
      {/* Top and Bottom Fading Masks */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />

      {/* User Uploaded Venue Drapes Asset Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.28] filter brightness-[0.2]" 
          style={{ backgroundImage: "url('/venue.jpg')" }}
        />
        {/* Soft radial overlay shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(13,13,13,0.9)_80%)]" />
      </div>

      {/* Inner Elegant Content Border */}
      <div className="max-w-md mx-auto flex flex-col items-center relative z-20 w-full pt-10">
        
        {/* Cursive text 'the' */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold font-mea text-2xl md:text-3xl leading-none my-0"
        >
          the
        </motion.p>
        
        {/* Cinzel Serif Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-[#f0ebe0] text-3xl md:text-4xl font-cinzel tracking-[0.2em] uppercase mt-2 mb-2"
        >
          Venue
        </motion.h2>

        <GoldLeafDivider className="opacity-80" delay={0.3} />

        {/* Summerfield's Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-gold-light text-lg md:text-xl font-cormorant tracking-[0.18em] uppercase mb-4 font-semibold"
        >
          Summerfield’s Restaurant & Reception Hall
        </motion.h3>

        {/* Location Info & Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="flex items-start justify-center gap-3 mb-8 w-full px-4"
        >
          <span className="text-gold text-lg shrink-0 mt-0.5">📍</span>
          <p className="text-xs md:text-sm text-[#f0ebe0]/75 font-oranienbaum leading-relaxed text-left tracking-[0.08em] uppercase max-w-[280px]">
            Summerfield’s Restaurant & Reception Hall<br />
            139 Piliyandala Road, Palanwatta, Pannipitiya
          </p>
        </motion.div>

        {/* Description text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-xs text-[#f0ebe0]/60 leading-relaxed font-oranienbaum px-4 mb-8 uppercase tracking-[0.12em] max-w-sm"
        >
          Experience our special day in an elegant, beautifully lit space surrounded by luxurious cream curtains, grand chandeliers, and gorgeous golden floral centerpieces.
        </motion.p>

        {/* Contact Numbers Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="flex flex-col gap-2 border-y border-gold/15 py-4 w-full px-6 mb-10"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase text-gold font-semibold font-oranienbaum mb-1 block">
            RSVP Contact Assistance
          </span>
          <div className="flex justify-center items-center gap-6">
            <a href="tel:0755921734" className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#f0ebe0]/80 hover:text-gold font-oranienbaum transition-colors duration-300">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>075 592 1734</span>
            </a>
            <a href="tel:0755921737" className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#f0ebe0]/80 hover:text-gold font-oranienbaum transition-colors duration-300">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>075 592 1737</span>
            </a>
          </div>
        </motion.div>

        {/* Get Directions Interactive button */}
        <motion.div 
          whileHover={{ scale: 1.03 }} 
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-[240px]"
        >
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl border border-gold/40 bg-gold/5 hover:bg-gold text-gold hover:text-[#0d0d0d] font-oranienbaum font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_15px_rgba(201,169,110,0.25)]"
          >
            <span>Get Directions</span>
            <MapPin className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
