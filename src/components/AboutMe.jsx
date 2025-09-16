import React, { useRef, useState } from "react";
import droPhoto from "../assets/droPhoto.jpg";
import FallingHeader from './FallingHeader';
import { motion, useInView } from "framer-motion";
import "../styling/Aboutme.css";

const Aboutme = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, rootMargin: "-300px" });
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <section className="aboutme-section">
      <div className="content-overlay">
        <FallingHeader text="Alessandro's Portfolio" />

        <div className="contact-info">
          Email: <span className="contact-detail">alessandro.ramos.it@gmail.com</span>{" | "}
          Phone: <span className="contact-detail">(416) 878-5924</span>{" | "}
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/d-alessandro-ramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-detail"
          >
            linkedin.com/in/d-alessandro-ramos
          </a>
        </div>

        <div ref={containerRef} className="card-container">
          <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>

            <div className="flip-card-front">
              <motion.img
                src={droPhoto}
                alt="Alessandro"
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
                <p>
                  Hello! My name is <span className="highlight">Alessandro Ramos</span>, also known as <span className="highlight">Dro</span>. 
                  I’m a bootcamp-trained full-stack developer with <span className="highlight">1+ years</span> of experience building real-world web and mobile applications. 
                  I have <span className="highlight">7+ years</span> in operational leadership, which gives me strong problem-solving and project management skills.
                </p>
                    <p>
                      I’m currently seeking opportunities as a <span className="highlight">junior software developer</span>, QA automation engineer, or in an <span className="highlight">apprenticeship program</span> with a growth-focused team.
                    </p>
                    <div className="click-to-tech">
                      <span className="highlight">Click to see tech stack!</span>
                    </div>
                  </motion.div>
                </div>

                <div className="flip-card-back">
                  <h2>Tech Stack & Expertise</h2>
                  <ul>
                  <li><strong>Frontend:</strong> React, React Native, Tailwind, SASS/SCSS, HTML5, CSS3, JavaScript</li>
                  <li><strong>Backend:</strong> Node.js, Express, REST APIs, WebSockets, Python</li>
                  <li><strong>Database:</strong> PostgreSQL, relational design, queries, indexing, data modeling</li>
                  <li><strong>DevOps & Tools:</strong> Git, GitHub, CI/CD, Docker, GCP, Netlify, automated deployments</li>
                  <li><strong>Testing & QA:</strong> Jest, React Testing Library, unit/integration testing, code reviews</li>
                  <li><strong>Other:</strong> Agile/Scrum, project management, teamwork, problem-solving, UX/UI principles</li>
                  </ul>
                  <p>Click the card to see my bio again!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Aboutme;
