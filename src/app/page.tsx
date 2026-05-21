"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import RSVPPortal from "@/components/RSVPPortal";

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize luxury ambient romantic background music
  useEffect(() => {
    // Exact wedding loop song from the reference site
    audioRef.current = new Audio("/audio/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    
    // Automatically attempt to play music on envelope open (highly cinematic!)
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio autoplay prevented by browser. Guest can toggle manually.", err);
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0d0d] select-none text-[#fdfbf7]">
      
      {/* 1. Interactive Tap Envelope Intro */}
      <Envelope onOpen={handleEnvelopeOpen} />

      {/* 2. Main Premium Invitation Site (Fades in post-envelope click) */}
      <AnimatePresence>
        {envelopeOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col w-full"
          >
            {/* Elegant Floating Music Controller */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              onClick={toggleAudio}
              className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glass hover:bg-gold hover:text-[#0d0d0d] text-gold shadow-lg hover:shadow-gold/25 transition-all duration-300 border border-gold/40 flex items-center justify-center cursor-pointer active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-5 h-5 animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                </>
              ) : (
                <VolumeX className="w-5 h-5 opacity-60" />
              )}
            </motion.button>

            {/* Core Visual Invitation Sections (Aligned to reference site layout) */}
            <Hero />
            
            <Narrative />
            
            <Venue />
            
            <Timeline />
            
            <RSVPPortal />

            <Countdown />

            {/* Premium Knexa Brand Footer */}
            <footer className="relative bg-[#2d1e18] text-[#fdfbf7]/60 py-12 px-4 border-t border-gold/15 text-center overflow-hidden">
              {/* Inner ornaments */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              
              <div className="max-w-md mx-auto flex flex-col items-center gap-4 relative z-10">
                <span className="text-gold text-lg font-serif italic tracking-[0.25em] uppercase">
                  C &amp; D
                </span>
                
                <p className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#fdfbf7]/40 leading-relaxed font-semibold">
                  CHAMMI &amp; DHANUKA • 20 JULY 2026
                </p>
                
                <div className="h-[1px] w-12 bg-gold/20 my-2" />
                
                <div className="flex flex-col items-center justify-center gap-1.5 mt-2">
                  <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-semibold text-gold-light/60">
                    POWERED BY KNEXA SYSTEM
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.15em] uppercase opacity-40">
                    CREATING NEXT-LEVEL DIGITAL EXPERIENCES
                  </span>
                </div>
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
