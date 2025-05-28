"use client";
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedText({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // Force re-animation on content change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}