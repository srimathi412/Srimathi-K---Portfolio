import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
  color: string;
  size: number;
  top: string;
  left: string;
  delay?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ color, size, top, left, delay = 0 }) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-40 z-0 pointer-events-none"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default FloatingShape;