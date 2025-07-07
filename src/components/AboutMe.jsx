import React, { useRef } from "react";
import gif from "../assets/starrysky.gif";
import droPhoto from "../assets/droPhoto.jpg";
import { motion, useInView } from "framer-motion";
import "../styling/Aboutme.css";

const Aboutme = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, rootMargin: "-300px" });

  const letterAnimation = {
    hidden: { y: 100, opacity: 0, color: "#0000FF", fontWeight: 300 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      color: "#fff",
      fontWeight: 700,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  const headerText = ["Alessandro's", "Portfolio"];

  return (
    <section className="aboutme-section">

      <div className="background-image-wrapper">
        <img src={gif} alt="starry sky" className="background-image" />
      </div>

      <div className="content-overlay">
        {/* Falling Header */}
        <h1 className="falling-header">
          {headerText.map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.split("").map((char, i) => (
                <motion.span
                  key={`${lineIndex}-${i}`}
                  custom={lineIndex * 10 + i}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  className={char === " " ? "space-char" : ""}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          ))}
        </h1>
        <div className="contact-info">
        Email:{" "}
          <span className="contact-detail">alessandro.ramos.it@gmail.com</span>{" | "}
          Phone:{" "}
          <span className="contact-detail">(416)878-5924</span>{" | "}
          Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/d-alessandro-ramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-detail"
          >
            https://www.linkedin.com/in/d-alessandro-ramos/
          </a>
        </div>

        <div>

        <div ref={containerRef} className="aboutme-content">
          <motion.img
            src={droPhoto}
            alt="Photo of Alessandro"
            initial={{ x: -600, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="aboutme-photo"
            />

          
          <motion.div
            initial={{ x: 600, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="aboutme-text"
            >
            <h2>About Me</h2>
            <p>
              Hello, my name is{" "}
              <span className="highlight">Alessandro Ramos</span>, but you can
              call me <span className="highlight">Dro</span>! I'm a bootcamp-trained
              full-stack developer with <span className="highlight">1+ years</span> of hands-on coding experience
              and 7+ years in operational leadership. I specialize in building
              and deploying responsive web applications using{" "}
              <span className="highlight">
                React, React Native, Node.js, Express, APIs (REST/HTTP),
                SASS/SCSS or Tailwind, WebSockets and PostgreSQL{" "}
              </span>
               and so much more.
            </p>
            <p>
            I’ve developed multiple full-stack projects, including an e-commerce platform, a recipe discovery app, and a real-time task scheduler. I’m passionate about building intuitive user experiences, leveraging real-time technologies, and solving real-world problems through code.
            </p>
            <p>
              I’m currently seeking opportunities as a junior developer, QA
              automation engineer, or in an apprenticeship program with a
              growth-focused team.
            </p>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
