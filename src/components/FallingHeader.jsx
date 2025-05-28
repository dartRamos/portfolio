import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

const FallingHeader = ({ text }) => {
  
  const letterAnimation = {
    hidden: { y: 100, opacity: 0, color: "#0000FF", fontWeight: 300 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      color: "#fff",
      fontWeight: 700,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };;

  return (
    <h1 className="min-w-100 min-h-100 font-space text-8xl text-white flex space-x-1 mb-75">
      {text.split("").map((char, i) =>
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterAnimation}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      )}
    </h1>
  )
}

export default FallingHeader