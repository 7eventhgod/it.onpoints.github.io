'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * OnPoints SVG logo that animates out, then reveals the monogram (O with dot).
 * --------------------------------------------------
 * Usage:
 *   <OnPointsLogoAnimation />
 *
 * ‣ Requires framer‑motion (v10+) and Tailwind (for basic utility styles).
 * ‣ Place on a dark background (#252241) so the white monogram pops.
 * --------------------------------------------------
 */
export default function OnPointsLogoAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const run = async () => {
      // Animate the logo out
      await controls.start("collapse");
      // Reveal the monogram
      await controls.start("revealMono");
    };
    run();
  }, [controls]);

  const logoVariants = {
    initial: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    collapse: {
      x: 0,
      opacity: 0,
      scale: 0.7,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-40 bg-[#252241] overflow-hidden select-none">
      {/* SVG Logo */}
      <motion.div
        className="flex items-center justify-center"
        initial="initial"
        variants={logoVariants}
        animate={controls}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="337" height="64" viewBox="0 0 337 64" className="h-16 w-auto">
          <image href="/OnPoints_logo.svg" width="337" height="64" />
        </svg>
      </motion.div>

      {/* Monogram (hidden at first) */}
      <motion.svg
        width={96}
        height={96}
        viewBox="0 0 96 96"
        className="absolute"
        initial={{ scale: 0, opacity: 0 }}
        variants={{
          revealMono: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        animate={controls}
        fill="none"
      >
        <circle cx="48" cy="48" r="44" stroke="#FFFFFF" strokeWidth="8" />
        <circle cx="48" cy="48" r="16" fill="#FFFFFF" />
      </motion.svg>
    </div>
  );
} 