import React, { useRef } from 'react'
import gif from "../assets/starrysky.gif"
import droPhoto from "../assets/droPhoto.jpg"
import { motion, useInView } from "framer-motion";
import FallingHeader from './FallingHeader';

const Aboutme = () => {

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: false, margin: "-300px" });
  
  return (
    <section className="relative w-full min-h-[160vh] overflow-hidden ">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <img
          src={gif}
          alt="starry-sky-gif"
          className="min-w-full min-h-full object-cover"
        />
      </div>
      {/* Overlay and Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[160vh] text-white bg-black/50">
        {/* Content Container */}

        <FallingHeader text="Alessandro's Portfolio" />
        
        <div ref={containerRef} className="flex flex-row items-center min-h-150 gap-45 ">
          
          {/* Photo to the left */}
            <motion.img
              src={droPhoto}
              alt="Photo of web creator"
              initial={{ x: -600, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="min-w-130 min-h-100 rounded-3xl border-2 border-yellow-500 object-cover slid -mt-70"
            />


          {/* Text Block */}
          <motion.div
            initial={{
              x: 600, 
              opacity: 0 
            }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ 
              duration: 0.5,
              delay: 0.1, 
              ease: "easeOut" 
            }}
            className="text-white"
          >
            <div className="-mt-70">
              <h1 className="font-space text-6xl font-bold mb-2">About Me</h1>
              <p className="font-space max-w-lg text-[20px] leading-relaxed ">
              Hello, my name is <span className='text-cyan-300 font-semibold'>Alessandro Ramos</span>, but you can call me <span className='text-cyan-300 font-semibold'>Dro</span>!
              I'm a bootcamp-trained full-stack developer with 500+ hours of hands-on coding experience and 7+ years in operational leadership. I specialize in building and deploying responsive web applications using <span className='text-cyan-300 font-semibold'>React, React Native, Node.js, Express, APIs (REST/HTTP), SASS/SCSS or Tailwind, WebSockets and PostgreSQL</span>.

              I’ve developed multiple full-stack projects, including a real-time quiz app and a task scheduler, and I’m passionate about automation, intuitive user experiences, and learning by building.

              I’m currently seeking opportunities as a junior developer, QA automation engineer, or in an apprenticeship program with a growth-focused team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
