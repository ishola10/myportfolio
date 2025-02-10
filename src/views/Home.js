import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import StrengthyImage from "../assets/images/strenghty.png";
import VaccineImage from "../assets/images/Desktop - 1.png";
import ScissorsImage from "../assets/images/linkswift.png";
import ProfileImage from "../assets/images/mee.png";
import CV from "../assets/files/Muhammed Badmus.pdf";
import "../styles/Home.css";

const Home = () => {
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

    AOS.init({
      duration: 1000,
      delay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const projects = [
    {
      title: "Strenthy",
      description:
        "A Fitness App that helps you keep track of your daily activities and also provides you with a time table to follow.",
      image: StrengthyImage,
      demoLink: "https://strengthy.netlify.app/",
      githubLink: "https://github.com/ishola10/fitness-app",
      technologies: "Reactjs and Nodejs",
    },
    {
      title: "Vacine App",
      description:
        "A Vacine site to promote the use of vacine and also to help show the instruction to dowload the vacine app.",
      image: VaccineImage,
      demoLink: "https://vacineapp.netlify.app/",
      technologies: "Html, CSS and JavaScript",
    },
    {
      title: "LinkSwift",
      description:
        "An advanced Url shortening app that helps you shorten your long url to a shorter one.",
      image: ScissorsImage,
      demoLink: "https://linkswift.netlify.app",
      githubLink: "https://github.com/ishola10/Link-Swift.io",
      technologies: "Vuejs, Typescript, Firebase, and Axios",
    },
  ];

  // const experience = [
  //   {
  //     title: "Frontend Developer",
  //     company: "Build Together NG",
  //     date: "2024 - Present",
  //     description:
  //       "I am currently working as a Frontend Developer at Build Together where I work on various projects using Vue, React, and other technologies.",
  //   },
  //   {
  //     title: "Frontend Developer Intern",
  //     company: "Adebayo Adeleke LLC ~ Texas, USA",
  //     date: "2024 - Present",
  //     description:
  //       "I'm currently interning as a Frontend Developer at Adebayo Adeleke LLC where I worked on various projects using React, Next, and other technologies.",
  //   },
  // ];

  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className="home__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>

        <div className="main-skill">
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill">
              <i className="fab fa-html5"></i>
              <span>HTML</span>
            </div>
            <div className="skill">
              <i class="fa-brands fa-css3-alt"></i>
              <span>CSS</span>
            </div>
            <div className="skill">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div class="skill">
              <i class="fab fa-react"></i>
              <span>React-js</span>
            </div>
            <div class="skill">
              <i class="fab fa-vuejs"></i>
              <span>Vue-js</span>
            </div>
            <div class="skill">
              <i class="fab fa-sass"></i>
              <span>Sass</span>
            </div>
            <div class="skill">
              <i class="fa-brands fa-css3-alt"></i>
              <span>TailwindCss</span>
            </div>
            <div class="skill">
              <i class="fab fa-js"></i>
              <span>Typescript</span>
            </div>
            <div class="skill">
              <i class="fab fa-js"></i>
              <span>Next-js</span>
            </div>
            <div class="skill">
              <i class="fa-brands fa-wordpress"></i>
              <span>WordPress</span>
            </div>
            <div class="skill">
              <i class="fa-brands fa-figma"></i>
              <span>Figma</span>
            </div>
            <div class="skill">
              <i class="fa-brands fa-git"></i>
              <span>Git</span>
            </div>
            <div class="skill">
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </div>
          </div>
        </div>

        {/* <motion.div
          className="experiences"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="experiences__content"
            data-aos="fade-up"
            data-aos-delay="300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            
          </motion.div>
        </motion.div> */}

        <motion.div
          className="projects"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="projects__content"
            data-aos="fade-up"
            data-aos-delay="300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 data-aos="fade-up" data-aos-delay="300">
              Portfolio
            </h2>
            <div className="projects__grid">
              {projects.map((project, index) => (
                <div key={index} className="projects__grid__item">
                  <h3>
                    <a href={project.demoLink} alt={project.title}>
                      {project.title}
                    </a>
                  </h3>
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <img
                      className="projects__grid__item__image"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                  <p>
                    {project.description}
                    <br />
                    Technologies: {project.technologies}
                  </p>
                  <div className="projects__grid__item__btns">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Demo
                    </a>
                  </div>
                  {index !== projects.length - 1 && (
                    <div className="moving-lines">
                      <svg
                        width="100%"
                        height="100%"
                        style={{
                          position: "absolute",
                          color: "white",
                          zIndex: 1,
                          left: "100%",
                          top: "20%",
                          // animation: "moveLines 3s linear infinite",
                        }}
                      >
                        <path
                          d={`M0 20 C50 10, 50 410, 700 950`}
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                          strokeDashoffset="0"
                          color="white"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="projects__btn">
              <a href="/projects" className="">
                View More..
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className="blog"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="blog__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2>Some of my Writings</h2>
            <div className="blog__grid">
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="blog__grid__item"
              >
                <h3>
                  <a
                    href="https://medium.com/@akoredeishola10/bridging-the-gap-the-symbiotic-relationship-between-physics-and-frontend-development-65ef2928f8be"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bridging the Gap: The Symbiotic Relationship Between Physics
                    and Frontend Development
                  </a>
                </h3>
                <p className="date">
                  November 7, 2023 * 2 min read *{" "}
                  <strong>frontend development - Physics</strong>
                </p>
                <p>
                  When we think of physics, our minds often create images of
                  scientists in lab coats and complex equations on blackboards.
                  Frontend development, on the other hand, is often associated
                  with the sleek, user-friendly interfaces we ...
                </p>
                <div className="blog__grid__item__btn">
                  <a
                    href="https://medium.com/@akoredeishola10/bridging-the-gap-the-symbiotic-relationship-between-physics-and-frontend-development-65ef2928f8be"
                    className="btnnn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="blog__grid__item"
              >
                <h3>
                  <a
                    href="https://medium.com/@akoredeishola10/getting-started-with-vue-js-a-beginners-guide-f73c48db1bc5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Getting Started with Vue.js: A Beginner’s Guide
                  </a>
                </h3>
                <p className="date">
                  April 30, 2024 * 3 min read *{" "}
                  <strong>frontend development - Vue - Vue js</strong>
                </p>
                <p>
                  Introduction: Are you eager to start building awesome web
                  applications but don’t know where to begin? Vue.js might just
                  be the perfect starting point for you! In this
                  beginner-friendly guide, we’ll explore Vue.js — a friendly and
                  approachable JavaScript framework that makes web development a
                  breeze. Let’s embark on this exciting ...
                </p>
                <div className="blog__grid__item__btn">
                  <a
                    href="https://medium.com/@akoredeishola10/getting-started-with-vue-js-a-beginners-guide-f73c48db1bc5"
                    className="btnnn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="blog__grid__item"
              >
                <h3>
                  <a
                    href="https://medium.com/@akoredeishola10/bridging-the-gap-the-symbiotic-relationship-between-physics-and-frontend-development-65ef2928f8be"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend Technologies with Quantum-Inspired Optimization
                    Algorithms
                  </a>
                </h3>
                <p className="date">
                  April 30, 2024 * 3 min read *{" "}
                  <strong>
                    frontend development - Physics - Quantum Physics
                  </strong>
                </p>
                <p>
                  Frontend tech has come a long way, but there’s always room for
                  improvement. Imagine a world where your website loads faster,
                  looks better, and feels more personalized. Well, that future
                  might be closer than you think, thanks to quantum physics! ...
                </p>
                <div className="blog__grid__item__btn">
                  <a
                    href="https://medium.com/@akoredeishola10/quantum-leap-revolutionizing-frontend-technologies-with-quantum-inspired-optimization-algorithms-32b07f4e405f"
                    className="btnnn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="blog__grid__item"
              >
                <h3>
                  <a
                    href="https://medium.com/@muhammed_dev_10/mastering-react-hooks-advanced-techniques-for-state-management-and-side-effects-1ec98dd61e55"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mastering React Hooks: Advanced Techniques for State
                    Management and Side Effects
                  </a>
                </h3>
                <p className="date">
                  April 30, 2024 * 3 min read *{" "}
                  <strong>
                    frontend development - Physics - Quantum Physics
                  </strong>
                </p>
                <p>
                  React Hooks have revolutionized the way we manage state and
                  side effects in React applications, offering powerful tools
                  for building robust and maintainable UIs. In this advanced
                  guide, we’ll delve deeper into React Hooks ...
                </p>
                <div className="blog__grid__item__btn">
                  <a
                    href="https://medium.com/@muhammed_dev_10/mastering-react-hooks-advanced-techniques-for-state-management-and-side-effects-1ec98dd61e55"
                    className="btnnn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="blog__btn">
              <a href="/blog" className="">
                To see all my writings
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className="about"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="about__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="about_content_img">
              <img src={ProfileImage} alt="my_pic" />
            </div>
            <div className="about_content_text">
              <p>
                I'm Badmus Muhammed Akorede, A Frontend Developer based in
                Nigeria. I have a passion for creating accessible and
                user-friendly web apps and designs. I have experience working
                with Vuejs, React, Typescript, and other technologies. I am also
                a Physics enthusiast and enjoy learning about the relationship
                between physics and frontend development.
              </p>
              <div className="about_content_btn">
                <a href="/about">Click here to read more about me</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
