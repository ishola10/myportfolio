import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/Project.css";
import Strengthy from "../assets/images/strenghty.png";
import Vaccine from "../assets/images/Desktop - 1.png";
import Scissors from "../assets/images/linkswift.png";
import Predictify from "../assets/images/predictify.png";

function Project() {
  const projects = [
    {
      id: "strengthy",
      name: "Strengthy",
      description:
        "A Fitness App that helps you keep track of your daily activities and also provides you with a time table to follow. Strengthy operates on a robust technological foundation to ensure optimal performance and seamless user experience. The platform leverages React for its frontend development, providing a sleek and responsive interface that caters to users' needs effectively.",
      image: Strengthy,
      link: "https://strengthy.netlify.app/",
    },
    {
      id: "scissors",
      name: "LinkSwift",
      description:
        "An advanced URL shortening app that helps you shorten your long URL to a shorter one.",
      image: Scissors,
      link:
        "https://linkswift.netlify.app",
    },
    {
      id: "vaccineapp",
      name: "VaccineApp",
      description:
        "A Vaccine site to promote the use of vaccines and also to help show the instruction to download the vaccine app.",
      image: Vaccine,
      link: "https://vacineapp.netlify.app/",
    },
    {
      id: "predictify",
      name: "Predictify",
      description:
        "A Prediction site where user can predict matches with different features and a user dashboard.",
      image: Predictify,
      link: "https://vacineapp.netlify.app/",
    },
    
  ];

  return (
    <div className="projectsb">
      <div className="wrapper">
        <div className="wrapper__content">
        <div className="writing__big-text">
            <div data-aos="fade-right" data-aos-delay="300">
              M
            </div>
            <div data-aos="fade-right" data-aos-delay="400">
              Y
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div data-aos="fade-right" data-aos-delay="500">
              P
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
              R
            </div>
            <div data-aos="fade-right" data-aos-delay="700">
              O
            </div>
            <div data-aos="fade-right" data-aos-delay="900">
              G
            </div>
            <div data-aos="fade-right" data-aos-delay="1000">
              E
            </div>
            <div data-aos="fade-right" data-aos-delay="1100">
              C
            </div>
            <div data-aos="fade-right" data-aos-delay="1200">
              T
            </div>
            <div data-aos="fade-right" data-aos-delay="1200">
              S
            </div>
          </div>
          <div>
            <hr className="lines" />
          </div>
          <div className="projects__wrapper">
            <h1>Some of my projects</h1>
            <div className="projects__grids">
           
              {projects.map((project, index) => (
                <div className="projects__grid__items" key={index}>
                  <div className="projects__grid__items__img">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                    </a>
                  </div>
                  <div className="projects__grid__items__text">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <h1>{project.name}</h1>
                    </a>
                    <p>
                      <Link
                        to={`/projects/${project.id}`}
                        className="description-link"
                      >
                        {project.description}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h1>Still more to come....</h1>
            </div>
          </div>


        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;
