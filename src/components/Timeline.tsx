"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoldVineCorner, GoldLeafDivider } from "./Ornaments";

interface ScheduleItem {
  timeStr: string;
  ampm: string;
  title: string;
  desc: string;
}

export default function Timeline() {
  const schedule: ScheduleItem[] = [
    { 
      timeStr: "09:30", 
      ampm: "AM", 
      title: "Groom Welcome", 
      desc: "Receiving the groom and the family with traditional warmth and blessings." 
    },
    { 
      timeStr: "10:00", 
      ampm: "AM", 
      title: "Poruwa Ceremony", 
      desc: "The sacred traditional rites, exchange of rings, and beautiful wedding customs." 
    },
    { 
      timeStr: "12:45", 
      ampm: "PM", 
      title: "Lunch & Celebration", 
      desc: "A curated gastronomic experience followed by toasts, music, and joy." 
    },
    { 
      timeStr: "03:30", 
      ampm: "PM", 
      title: "Send-off / Grand Finale", 
      desc: "Cheering the newlyweds as they embark on their beautiful eternal journey together." 
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#0d0d0d] overflow-hidden bg-sparkles">
      {/* Background Vine Ornaments */}
      <GoldVineCorner position="top-right" className="opacity-30" />
      <GoldVineCorner position="bottom-left" className="opacity-30" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-peach/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col pt-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center flex flex-col items-center select-none"
        >
          <span className="text-gold font-cormorant text-xs md:text-sm tracking-[0.3em] uppercase mb-3 block">
            The Celebration Sequence
          </span>
          <h2 className="text-[#fdfbf7] text-4xl md:text-5xl font-cinzel font-normal tracking-[0.15em] uppercase leading-tight">
            Order
          </h2>
          <span className="text-gold font-mea text-4xl my-1 block">
            of the
          </span>
          <h2 className="text-[#fdfbf7] text-4xl md:text-5xl font-cinzel font-normal tracking-[0.15em] uppercase leading-tight">
            Day
          </h2>
          <GoldLeafDivider className="mt-6 opacity-80" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 pr-2 md:pl-8">
          {/* Vertical Connecting Line with gold gradient */}
          <div 
            className="absolute top-2 bottom-8 w-[1px] bg-gradient-to-b from-gold/10 via-gold/45 to-gold/10 pointer-events-none"
            style={{ left: "calc(6.5rem + 16px)" }}
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-14">
            {schedule.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.15, duration: 1.0, ease: "easeOut" }}
                className="flex items-start w-full relative group"
              >
                {/* Time Column */}
                <div className="flex flex-col items-end w-[6.5rem] pr-6 shrink-0 select-none pt-1">
                  <span className="text-[#fdfbf7] text-2xl md:text-3xl font-oranienbaum leading-none tracking-wide font-medium">
                    {item.timeStr}
                  </span>
                  <span className="text-gold font-cormorant text-xs tracking-widest uppercase mt-1.5 font-medium">
                    {item.ampm}
                  </span>
                </div>

                {/* Elegant Hanging Gold Leaf Vector Connector */}
                <div className="relative flex items-center justify-center shrink-0 w-8 h-8 z-10 mt-0.5">
                  {/* Outer glowing layer */}
                  <div className="absolute w-8 h-8 rounded-full border border-gold/10 group-hover:border-gold/30 group-hover:scale-125 transition-all duration-500 bg-[#0d0d0d]/80 backdrop-blur-sm" />
                  
                  {/* Custom Leaf SVG */}
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gold group-hover:text-gold-light transition-colors duration-300"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: idx * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Hanging leaf outline and veins */}
                    <path
                      d="M12 2C12 2 15 7 15 11C15 14.866 11.866 18 8 18C8 18 10 14 10 11C10 7 12 2 12 2Z"
                      fill="currentColor"
                      fillOpacity="0.25"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 5Q12.5 9 10.5 13"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 2C12 2 11 4 9 5"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                    />
                  </motion.svg>

                  {/* Pulse Ring */}
                  <span className="absolute -inset-1 rounded-full border border-gold/20 animate-ping opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Event details card */}
                <div className="pl-6 text-left flex-1">
                  <div className="glass p-5 rounded-lg border border-gold/15 hover:border-gold/35 transition-all duration-500 group-hover:translate-x-1 group-hover:shadow-[0_4px_20px_rgba(201,169,110,0.06)] relative overflow-hidden">
                    {/* Corner decorative light */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none rounded-tr-lg" />
                    
                    <h3 className="text-gold-light text-base md:text-lg font-cinzel tracking-wider font-normal leading-tight mb-2 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-cream/70 text-xs md:text-sm font-oranienbaum leading-relaxed tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
