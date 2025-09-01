import React, { useRef } from 'react';
import webImage from '../assets/earth.gif';
import tabletImage from '../assets/earth-tablet.png';
import mobileImage from '../assets/earth-phone.png';
import { motion, useInView } from "framer-motion";
import "../styling/Earth.css"

export default function Showcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, rootMargin: "-200px" })

  return (
    <div className="earth-showcase-container">
      {/* Links Above Images */}
      <div className="earth-showcase-links">
        <a
          href="https://github.com/TayrineSoares/earth-table"
          target="_blank"
          rel="noopener noreferrer"
          className="earth-showcase-button"
        >
          GitHub Repo
        </a>

        <a
          href="https://www.earthtableco.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="earth-showcase-button"
        >
          Website
        </a>
      </div>

      {/* Image Section */}
      <div className="earth-device-wrapper">
        <div ref={containerRef} className="earth-device web">
          <motion.img
            src={webImage}
            alt="Web version"
            initial={{ y: -200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.75, ease: "backInOut" }}
            className='earth-version'
          />
        </div>
        <div className="earth-device tablet">
          <motion.img
            src={tabletImage}
            alt="Tablet version"
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "backInOut" }}
            className='earth-version'
          />
        </div>
        <div className="device mobile">
          <motion.img
            src={mobileImage}
            alt="Mobile version"
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "backInOut" }}
            className='earth-version'
          />
        </div>
      </div>

      {/* Description Below */}
      <div className="slider-text">
        <h1>
          <span className="project-name">Earth Table:</span>
          {" "}Custom E-Commerce Site<span className='project-name'></span><span className="project-name"></span>
        </h1>
        <p>
        A holistic e-commerce platform for Earth Table, a personal chef and meal prep service offering organic, nutrient-dense, seed oil-free meals.
        </p>
        <ul>
        <li>Welcoming home page showcasing Earth Table’s mission and featured categories.</li>
        <li>Order page with shoppable, filterable menu items in clear categories.</li>
        <li>About and Contact pages to share the story and handle inquiries.</li>
        <li>Smooth cart & checkout flow with Stripe integration.</li>
        <li>Built with React, Tailwind, Node.js, Express, and Supabase; mobile-friendly and deployed on Vercel/Netlify.</li>
      </ul>
      </div>
    </div>
  );
}
