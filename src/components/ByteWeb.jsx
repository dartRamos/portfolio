import React, { useRef }  from 'react';
import webImage from '/gifs/webbyte.gif';
import tabletImage from '../assets/tablet-landscape.png';
import mobileImage from '../assets/phoneview-portrait.png';
import { motion, useInView } from "framer-motion";
import "../styling/ByteWeb.css"

export default function Showcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-200px"})




  return (
    <div className="showcase-container">
      {/* Links Above Images */}
      <div className="showcase-links">
        <a
          href="https://github.com/dartRamos/byte-to-bite-webapp"
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-button"
        >
          GitHub Repo
        </a>

        <a
          href="https://byte-to-bite-webapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-button"
        >
          Web Page
        </a>
      </div>
  
      {/* Existing Image Section */}
      <div className="device-wrapper">
        <div ref={containerRef} className="device web">
          <motion.img 
            src={webImage} 
            alt="Web version" 
            initial={{ y: -200, opacity: 0}}
            animate={isInView ? { y: 0, opacity: 1} : {}}
            transition={{ duration: 0.75, ease: "backInOut" }}
            className='byte-web-version'
          />
        </div>
        <div className="device tablet">
          <motion.img 
            src={tabletImage} 
            alt="Tablet version"
            initial={{ x: 200, opacity: 0}}
            animate={isInView ? { x: 0, opacity: 1} : {}}
            transition={{ duration: 1.5, ease: "backInOut" }}
            className='byte-web-version' 
          />
        </div>
        <div className="device mobile">
          <motion.img 
            src={mobileImage} 
            alt="Mobile version"
            initial={{ x: -200, opacity: 0}}
            animate={isInView ? { x: 0, opacity: 1} : {}}
            transition={{ duration: 1.5, ease: "backInOut"}}
            className='byte-web-version'
          />
        </div>
      </div>
  
      {/* Description Below */}
      <div className="slider-text">
        <h1>Byte to Bite: A React Project</h1>
        <p>
          A web-based recipe app where users can search for meals by entering ingredients they have on hand. Features a refined and intuitive search experience.
        </p>
        <ul>
          <li>Discover recipes by ingredient with Spoonacular</li>
          <li>Favorite recipes with real-time updates</li>
          <li>Clean, responsive UI with recipe detail modals</li>
        </ul>
      </div>
    </div>
  );
}