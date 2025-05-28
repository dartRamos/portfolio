import React from 'react'
import AboutMe from './components/AboutMe'
import ImageSlider from './components/ImageSlider'

const App = () => {
  return (
    <main>
      <div>
        <AboutMe />
        <ImageSlider />
        <section className='h-[25vh] bg-purple-950'></section>
      </div>
    </main>
  )
}

export default App
