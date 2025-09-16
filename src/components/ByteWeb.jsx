import React, { useRef }  from 'react';
import webImage from '/gifs/webbyte.gif';
import tabletImage from '../assets/tablet-landscape.png';
import mobileImage from '../assets/phoneview-portrait.png';
import { motion, useInView } from "framer-motion";
import "../styling/ByteWeb.css"

export default function Showcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, rootMargin: "-200px"})




  return (
    <div className="showcase-container">

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
  
      <div className="slider-text">
        <h1>
          <span className="project-name">Byte to Bite:</span>{" "}Web Recipe App<span className='project-name'></span>
        </h1>
        <p>A web-based recipe app where users can discover, save, and explore meals based on the ingredients they already have at home.
        </p>
        <ul>
          <li>Search for recipes by entering available ingredients, powered by the Spoonacular API.</li>
          <li>Bookmark favorite recipes with real-time updates using Convex.</li>
          <li>Enjoy an intuitive, responsive interface with recipe detail modals for easy browsing.</li>
        </ul>
      </div>
    </div>
  );
}