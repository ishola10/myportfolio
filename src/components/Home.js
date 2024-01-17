import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/Home.css";
import CV from "../assets/files/BADMUS MUHAMMED CVv.pdf";
import Strengthy from "../assets/images/strenghty.png";
import Vaccine from "../assets/images/Desktop - 1.png";
import Scissors from "../assets/images/scissors.png";
// import Footer from "./Footer.js";
import Footer from "./Footer.js";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Badmus Muhammed. ",
        " a Frontend Developer. ",
        " a Physics Enthusiast. ",
      ],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <h4>Nice to meet you</h4>
          <h2>
            I'm <span ref={el}></span>
          </h2>
          <p>
            Based in Nigeria.I'm a <strong>Front-end Developer</strong> and a
            Physics enthusiast passionate about building accessible web apps and
            designs that users love.
          </p>
          <div className="home__content__btns">
            <a href="/contact" className="btn">
              Contact Me
            </a>
            <a href={CV} className="btn" download={CV}>
              Download CV
            </a>
          </div>
        </div>
        <div className="about">
          <div className="about__content">
            <h2>About Me</h2>
            <p>
              Hi, I am Muhammed, a passionate frontend engineer with a deep
              fascination for the secrets of the universe. The synergy between
              web development and the study of physics has become an integral
              part of my professional and personal journey. As a frontend
              engineer, I thrive on designing captivating user experiences that
              seamlessly blend aesthetics and functionality. The ability to
              transform ideas into visually stunning interfaces and deliver
              seamless interactions has been a driving force behind my work.
              Meanwhile, my study of physics has opened doors to a world of
              profound scientific understanding. Exploring the essence of
              quantum mechanics, relativity, and cosmology has instilled in me a
              sense of wonder and a desire to Know the mysteries that shape our
              presence or existence. The combination of frontend engineering and
              physics has enhanced my perspective. Scientific reasoning,
              analytical thinking, and the desire to push boundaries are firmly
              fixed in my approach to web development. I thrive on crafting
              interfaces that co-ordinate natural laws with digital
              interactions, bridging the gap between science and technology.
              Through this unique combination of disciplines, I am constantly
              seeking new ways to push the limits of innovation and learning.
              Whether it's solving complex physics calculations or communicating
              scientific concepts through intuitive design, I strive to make a
              meaningful impact. Join me as I navigate through web development
              and the mysteries of physics. Together, we can create solutions
              that inspire the world. Let's embark on this exciting journey of
              technology and the universe.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills__content">
            <h2>Skills</h2>
            <div className="skills__grid">
              <div className="skills__grid__item">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>Styled Components</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skills__grid__item">
                <h3>Others</h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Netlify</li>
                  <li>Heroku</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="education__content">
            <h2>Education</h2>
            <div className="education__grid">
              <div className="education__grid__item">
                <h3>Ekiti State University (EKSU)</h3>
                <p>B.ScEd Physics</p>
                <p>2022 - 2026.</p>
              </div>
              <div className="education__grid__item">
                <h3>Altschool Africa</h3>
                <p>Diploma in Frontend Development</p>
                <p>2023 - 2024</p>
              </div>
              <div className="education__grid__item">
                <h3>Alx Africa</h3>
                <p>Certificate in Frontend development</p>
                <p>2023 - 2024</p>
              </div>
              <div className="education__grid__item">
                <h3>Future Academy Africa (FAA)</h3>
                <p>Certificate in Frontend development</p>
                <p>2022 - 2023 [Completed]</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="projects__content">
            <h2>Projects</h2>
            <div className="projects__grid">
              <div className="projects__grid__item">
                <h3>
                  <a href="https://strengthy.netlify.app/" alt="">
                    Strenthy
                  </a>
                </h3>
                <a
                  href="https://strengthy.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects__grid__item__image"
                    src={Strengthy}
                    alt="Strengthy"
                  />
                </a>
                <p>
                  A Fitness App that helps you keep track of your daily
                  activities and also provides you with a time table to follow.
                  <br />
                  Technologies: Reactjs and Nodejs
                </p>
                <div className="projects__grid__item__btns">
                  <a
                    href="https://github.com/ishola10/fitness-app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <div id="lineh1"></div>
              <div className="projects__grid__item">
                <h3>
                  <a href="https://vacineapp.netlify.app/" alt="">
                    Vacine App
                  </a>
                </h3>
                <a
                  href="https://vacineapp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects__grid__item__image"
                    src={Vaccine}
                    alt="Strengthy"
                  />
                </a>
                <p>
                  A Vacine site to promote the use of vacine and also to help
                  show the instruction to dowload the vacine app.
                  <br />
                  Technologies: Html, CSS and JavaScript
                </p>
                <div className="projects__grid__item__btns">
                  <a
                    href="https://vacineapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <div id="lineh2"></div>
              <div className="projects__grid__item">
                <h3>
                  <a
                    href="https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/"
                    alt=""
                  >
                    Scissors
                  </a>
                </h3>
                <a
                  href="https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects__grid__item__image"
                    src={Scissors}
                    alt="Strengthy"
                  />
                </a>
                <p>
                  An advanced Url shortening app that helps you shorten your
                  long url to a shorter one.
                  <br />
                  Technologies: Reactjs
                </p>
                <div className="projects__grid__item__btns">
                  <a
                    href="https://github.com/ishola10/scissors-altschool-project/tree/master/react-version"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    href="https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__btn">
              <a href="/projects" className="">
                View More..
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
