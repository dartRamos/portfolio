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
                  I’m a full stack developer focused on building clean, scalable, real-world applications. Over the past year I’ve worked across 
                  <span className="highlight">React, Node.js, PostgreSQL, and cloud deployments</span>, while also improving my debugging, backend reasoning, and system design skills.
                </p>

                <p>
                  I’m currently looking for opportunities as a <span className="highlight">full stack or software engineer</span> on a team where I can grow, take ownership, and contribute to meaningful products. 
                  I have a strong learning mindset, a background in leadership, and a passion for building things that solve real problems.
                </p>
                    <div className="click-to-tech">
                      <span className="highlight">Click to see tech stack!</span>
                    </div>
                  </motion.div>
                </div>

                <div className="flip-card-back">
                  <h2>Tech Stack & Expertise</h2>
                  <ul>
                    <li><strong>Frontend:</strong> React, Next.js, React Native, Tailwind, SASS/SCSS, HTML5, CSS3, JavaScript, TypeScript</li>
                    <li><strong>Backend:</strong> Node.js, Express, REST APIs, WebSockets, Python, Flask fundamentals</li>
                    <li><strong>Database:</strong> PostgreSQL, relational schema design, data modeling, indexing, optimization</li>
                    <li><strong>Cloud & DevOps:</strong> Git, GitHub, CI/CD pipelines, Docker, Google Cloud Platform, Netlify, Vercel</li>
                    <li><strong>Testing & QA:</strong> Jest, React Testing Library, debugging, unit and integration testing</li>
                    <li><strong>Other Skills:</strong> Agile workflows, project ownership, cross-team collaboration, UX/UI principles, strong problem solving</li>
                  </ul>
                  <div className="click-to-tech">
                    <span className="highlight">Click to see bio!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Aboutme;
