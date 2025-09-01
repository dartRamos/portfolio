import React from 'react'
import AboutMe from './components/AboutMe'
import ByteToBite from './components/ByteMobile'
import ByteWeb from './components/ByteWeb'
import Gleam from './components/Gleam'
import Earth from './components/Earth'
import './assets/fonts/fonts.css';
import './index.css';


const App = () => {
  return (
    <main>
        <AboutMe />
        <ByteToBite />
        <Earth />
        <Gleam />
        <ByteWeb />
    </main>
  )
}

export default App
