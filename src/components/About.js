import React from "react";
import Footer from "./Footer";
import "../styles/About.css";

function About() {
  return (
    <div className="aboutt">
      <div className="wrapperr">
        <div className="wrapper__contentt">
          <div className="about__big-text">
            <h1>About</h1>
          </div>
          <div className="about__wrapper">
            <div className="about__grid__items">
              <h3>Who am I?</h3>
              <p>
                I am a full-stack web developer with a background in
                environmental science. I have a passion for learning and
                creating new things. I am a team player and I love working with
                others. I am a creative problem solver and I am always looking
                for ways to improve my skills and knowledge.
              </p>
            </div>
            <div className="about__grid__items">
              <h3>What do I do?</h3>
              <p>
                I am a full-stack web developer with a background in
                environmental science. I have a passion for learning and
                creating new things. I am a team player and I love working with
                others. I am a creative problem solver and I am always looking
                for ways to improve my skills and knowledge.
              </p>
            </div>
            <div className="about__grid__items">
              <h3>Why hire me?</h3>
              <p>
                I am a full-stack web developer with a background in
                environmental science. I have a passion for learning and
                creating new things. I am a team player and I love working with
                others. I am a creative problem solver and I am always looking
                for ways to improve my skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;