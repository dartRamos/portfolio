import React, { useRef }  from 'react';
import webImage from '../assets/gleam-desktop.gif';
import tabletImage from '../assets/gleam-tablet.png';
import mobileImage from '../assets/gleam-phone.png';
import { motion, useInView } from "framer-motion";
import "../styling/Gleam.css"

export default function Showcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, rootMargin: "-200px"})




  return (
    <div className="gleam-showcase-container">
      {/* Links Above Images */}
      <div className="gleam-showcase-links">
        <a
          href="https://github.com/dartRamos/byte-to-bite-webapp"
          target="_blank"
          rel="noopener noreferrer"
          className="gleam-showcase-button"
        >
          GitHub Repo
        </a>

        <a
          href="https://gleamproject.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="gleam-showcase-button"
        >
          Site (In Progress)
        </a>
      </div>
  
      {/* Existing Image Section */}
      <div className="gleam-device-wrapper">
        <div ref={containerRef} className="gleam-device web">
          <motion.img 
            src={webImage} 
            alt="Web version" 
            initial={{ y: -200, opacity: 0}}
            animate={isInView ? { y: 0, opacity: 1} : {}}
            transition={{ duration: 0.75, ease: "backInOut" }}
            className='gleam-version'
          />
        </div>
        <div className="gleam-device tablet">
          <motion.img 
            src={tabletImage} 
            alt="Tablet version"
            initial={{ x: 200, opacity: 0}}
            animate={isInView ? { x: 0, opacity: 1} : {}}
            transition={{ duration: 1.5, ease: "backInOut" }}
            className='gleam-version' 
          />
        </div>
        <div className="gleam-device mobile">
          <motion.img 
            src={mobileImage} 
            alt="Mobile version"
            initial={{ x: -200, opacity: 0}}
            animate={isInView ? { x: 0, opacity: 1} : {}}
            transition={{ duration: 1.5, ease: "backInOut"}}
            className='gleam-version'
          />
        </div>
      </div>
  
      {/* Description Below */}
      <div className="slider-text">
        <h1>
          <span className="project-name">Gleam:</span>
          {" "}Steam Clone<span className='project-name'></span><span className="project-name">{" "}(In Progress)</span>
        </h1>
        <p>A web-based platform inspired by Steam, where users can browse games, post reviews, and engage with community comments.
        </p>
        <ul>
        <li>Fetches game data dynamically from the Steam API and stores it locally with Sequelize.</li>
        <li>Features a responsive front-page carousel showcasing popular games.</li>
        <li>Enables users to submit reviews and comment on others’ reviews via an interactive modal interface.</li>
        <li>Designed for scalability and engaging user experience.</li>
        </ul>
      </div>
    </div>
  );
}