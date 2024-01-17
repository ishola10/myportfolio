import React from "react";
import Footer from "./Footer";
import "../styles/Project.css";
import Strengthy from "../assets/images/strenghty.png";
import Vaccine from "../assets/images/Desktop - 1.png";
import Scissors from "../assets/images/scissors.png";

function Project() {
  return (
    <div className="projectsb">
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="project__big-text">
            <h1>Projects</h1>
          </div>
          <div className="projects__wrapper">
            <h1>Projects</h1>
            <div className="projects__grids">
              <div className="projects__grid__items">
                <div className="projects__grid__items__img">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Strengthy} alt="project" />
                  </a>
                </div>
                <div className="projects__grid__items__text">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <h1>Strengthy</h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                  </p>
                </div>
              </div>
              <div className="projects__grid__items">
                <div className="projects__grid__items__img">
                  <a
                    href="https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Scissors} alt="project" />
                  </a>
                </div>
                <div className="projects__grid__items__text">
                  <a
                    href="https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <h1>Scissors</h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                  </p>
                </div>
              </div>
              <div className="projects__grid__items">
                <div className="projects__grid__items__img">
                  <a
                    href="https://vacineapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Vaccine} alt="project" />
                  </a>
                </div>
                <div className="projects__grid__items__text">
                  <a
                    href="https://vacineapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <h1>Vacine App</h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                  </p>
                </div>
              </div>
              <div className="projects__grid__items">
                <div className="projects__grid__items__img">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Strengthy} alt="project" />
                  </a>
                </div>
                <div className="projects__grid__items__text">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <h1>Strengthy</h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                  </p>
                </div>
              </div>
              <div className="projects__grid__items">
                <div className="projects__grid__items__img">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Strengthy} alt="project" />
                  </a>
                </div>
                <div className="projects__grid__items__text">
                  <a
                    href="https://strengthy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <h1>Strengthy</h1>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                    Quisquam voluptates, voluptatum, tempora, quibusdam quia
                    voluptate voluptatibus quas natus doloremque quos atque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;
