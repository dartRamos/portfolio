import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styling/ByteMobile.css';

import comment from '/gifs/Commenting.gif';
import commentStill from '/gifs/Commenting_still.png';
import favorite from '/gifs/Favorites.gif';
import favoriteStill from '/gifs/Favorites_still.png';
import posting from '/gifs/Posting.gif';
import postingStill from '/gifs/Posting_still.png';
import bookmark from '/gifs/Bookmark.gif';
import bookmarkStill from '/gifs/Bookmark_still.png';
import recipesearch from '/gifs/RecipeSearch.gif';
import recipesearchStill from '/gifs/RecipeSearch_still.png';

const ImageSlider = () => {

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const gifs = [
    { gif: comment, still: commentStill },
    { gif: favorite, still: favoriteStill },
    { gif: bookmark, still: bookmarkStill },
    { gif: posting, still: postingStill },
    { gif: recipesearch, still: recipesearchStill },
  ];

  const positions = ['center', 'left1', 'left', 'right', 'right1'];

  const gifVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-40%', scale: 0.8, zIndex: 2 },
    left: { x: '-80%', scale: 0.5, zIndex: 1 },
    right: { x: '80%', scale: 0.5, zIndex: 1 },
    right1: { x: '40%', scale: 0.8, zIndex: 2 },
  };

  return (
    <section className="image-slider-container">
      <div className="slider-main">
        <div className="showcase-links">
          <a
            href="https://github.com/dartRamos/byte-to-bite-mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-button"
          >
            GitHub Repo
          </a>
          <a
            href="https://youtu.be/l-y88549DPc"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-button"
          >
            Live Demo
          </a>
        </div>

        {/* Carousel */}
        <div className="slider-carousel">
          {gifs.map((item, index) => {
            const position = positions[positionIndexes[index]];
            const isCenter = position === 'center';
            return (
              <motion.img
                key={index}
                src={isCenter ? item.gif : item.still}
                alt={`gif-${index}`}
                className={`carousel-img ${position}`}
                initial="center"
                animate={position}
                variants={gifVariants}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <div className="slider-button">
          <button onClick={handleNext}>Next Slide</button>
        </div>

        {/* Description */}
        <div className="slider-text">
        <h1>
          <span className="project-name">Byte to Bite:</span> A React Native Expo Project
        </h1>
          <p>
            A mobile recipe app where users can post, save, and share their favorite recipes...
          </p>
          <ul>
            <li>Post your own recipes</li>
            <li>Discover recipes by ingredient with Spoonacular</li>
            <li>User login and profile system via Clerk</li>
            <li>Bookmark recipes with real-time updates from Convex</li>
            <li>Clean, responsive UI with recipe detail modals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
