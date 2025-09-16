import React from 'react'
import { motion } from "framer-motion";
import '../styling/FallingHeader.css'; // new CSS file

const FallingHeader = ({ text }) => {
  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  return (
    <h1 className="falling-header">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterAnimation}
          className={char === " " ? "space-char" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  )
}

export default FallingHeader;
