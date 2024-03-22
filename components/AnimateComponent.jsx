"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function AnimateComponent({ children }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["0 1", "1.33 1"],
    layoutEffect: false,
  });
  return (
    <motion.div
      ref={itemRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
