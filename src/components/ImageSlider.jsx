import React, { useState, useRef } from 'react'
import { motion, useInView  } from 'framer-motion'
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
  const [positionIndexes, setPostionIndexes] = useState([0, 1, 2, 3, 4])

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true })

  const handleNext = () => {
    setPostionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    )
  }

  const gifs = [
    { gif: comment, still: commentStill },
    { gif: favorite, still: favoriteStill },
    { gif: bookmark, still: bookmarkStill },
    { gif: posting, still: postingStill },
    { gif: recipesearch, still: recipesearchStill },
  ];

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1',
  ]

  const gifVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-150px', scale: 0.8, zIndex: 2 },
    left: { x: '-300px', scale: 0.5, zIndex: 1 },
    right: { x: '300px', scale: 0.5, zIndex: 1 },
    right1: { x: '150px', scale: 0.8, zIndex: 2 },
  }

  return (
    <div className="flex items-center justify-center bg-black h-screen px-8 relative">
        {gifs.map((item, index) => {
          const position = positions[positionIndexes[index]];
          const isCenter = position === "center";
  
          return (
            <motion.img
              key={index}
              src={isCenter ? item.gif : item.still}
              alt={`gif-${index}`}
              className="rounded-[12px] absolute w-[400px]"
              initial="center"
              animate={position}
              variants={gifVariants}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute" }}
            />
          );
        })}
  
        <div className="z-10 mt-96">
          <button
            className="text-white mt-[400px] bg-indigo-600 py-2 px-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

      <div className="absolute top-20 left-[50px] max-w-lg text-white">
        <h1 className="text-4xl font-bold mb-6">Byte to Bite: A React Native Expo Project</h1>
        <p className="text-lg mb-4">
          A mobile recipe app where users can post, save, and share their favorite recipes—plus discover new ones based on ingredients using the Spoonacular API.
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>Post your own recipes to share with others</li>
          <li>Discover recipes by ingredient with Spoonacular</li>
          <li>User login and profile system via Clerk</li>
          <li>Bookmark recipes with real-time updates from Convex</li>
          <li>Clean, responsive UI with recipe detail modals</li>
        </ul>

        <div className="absolute top-0 left-350 text-white whitespace-nowrap">
          <h1 className="text-4xl font-bold mb-6">GitHub Link:</h1>
          <a
            href="https://github.com/dartRamos/byte-to-bite"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-400 text-3xl"
          >
            Visit GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
  
  
}

export default ImageSlider
