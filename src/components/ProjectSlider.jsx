// ProjectSlider.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styling/ProjectSlider.css';

import ByteToBite from './ByteMobile.jsx';
import Earth from './Earth.jsx';
import Gleam from './Gleam.jsx';
import ByteWeb from './ByteWeb.jsx';

const slides = [<ByteToBite />, <Earth />, <Gleam />, <ByteWeb />];

export default function ProjectSlider() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <div className="slider-wrapper">
      <button className="slider-btn prev" onClick={handlePrev}>
        ‹
      </button>
      <button className="slider-btn next" onClick={handleNext}>
        ›
      </button>

      <div className="slider-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0 }}
            className="slide"
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
