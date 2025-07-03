import React from 'react'
import AboutMe from './components/AboutMe'
import ByteToBite from './components/ByteMobile'
import ByteWeb from './components/ByteWeb'
import Gleam from './components/Gleam'
import './assets/fonts/fonts.css';
import './index.css';


const App = () => {
  return (
    <main>
        <AboutMe />
        <ByteToBite />
        <ByteWeb />
        <Gleam />
    </main>
  )
}

export default App
