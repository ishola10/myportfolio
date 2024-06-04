import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Logo from "../assets/images/me.jpg";

function About() {
  AOS.init({
    duration: 1000,
    delay: 500,
  });
  return (
    <div className="aboutt">
      <div className="wrapperr">
        <div className="wrapper__contentt">
          <div className="about__big-text">
            <div data-aos="fade-right" data-aos-delay="300">
              A
            </div>
            <div data-aos="fade-right" data-aos-delay="500">
              B
            </div>
            <div data-aos="fade-right" data-aos-delay="700">
              O
            </div>
            <div data-aos="fade-right" data-aos-delay="900">
              U
            </div>
            <div data-aos="fade-right" data-aos-delay="1100">
              T
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div data-aos="fade-right" data-aos-delay="1300">
              M
            </div>
            <div data-aos="fade-right" data-aos-delay="1500">
              E
            </div>
          </div>
          <div>
            <hr className="linee" />
          </div>
          <div className="about__wrapper">
            <div data-aos="fade-up" data-aos-delay="300" className="about">
              <div className="about__contentt">
                <div className="about_content_img">
                  <img src={Logo} alt="my_pic" />
                </div>
                <div className="about_content_text">
                  <p>
                    I'm Badmus Muhammed Akorede, A Frontend Developer based in
                    Lagos, Nigeria. I have a passion for creating accessible and
                    user-friendly web apps and designs. I have experience
                    working with Vuejs, React, Typescript, and other
                    technologies. I am also a Physics enthusiast and enjoy
                    writing about the relationship between physics and frontend
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-me">
              <section data-aos="fade-up" data-aos-delay="300" className="me">
                <h1>About Me 🧑</h1>
                <p>
                  I'm Muhammed. I'm a web developer, passionate about the stuffs
                  I build from Lagos, Nigeria 🇳🇬 who loves to work with
                  JavaScript, Typescript Vuejs, Reactjs and TailwindCss. I love
                  to solve problems compared to focusing of the technology
                  howbeit.{" "}
                  <strong>
                    I have keen interest in roles around Frontend Engineering,
                    Developer Experience and Full-Stack roles.
                  </strong>{" "}
                  I sometimes teach web development related courses to entry
                  level developers. I focus on all the stuffs that will make the
                  difference and make learning interesting. I'm a Physics
                  enthusiast and I enjoy writing about the relationship between
                  physics and frontend development. I intend to bring the two
                  together as one in terms of a single source of truth. I'm a
                  big fan of open-source and I'm always looking for ways to give
                  back to the community. I'm also a technical writer and I write
                  articles on my blog.
                </p>
              </section>

              <section
                data-aos="fade-up"
                data-aos-delay="300"
                className="family"
              >
                <h1>Family 👩‍👩‍👦‍👦</h1>
                <p>
                  I'm the first child of my family. I have three siblings, a
                  brother and two sisters. I love my family and I'm grateful for
                  their support. I'm single on the relationship side of things
                  but I'm in a relationship with my code and my laptop.


                </p>
              </section>

              <section
                data-aos="fade-up"
                data-aos-delay="300"
                className="education"
              >
                <h1>Education 📚</h1>
                <p>
                  I'm currently pursuing a Bachelor's degree in Physics at Ekiti
                  state University. I also have a Diploma in Software
                  Development from Altschool Africal and also a certificate in
                  frontend engineering from Future Academy Africa.
                </p>
              </section>

              <section data-aos="fade-up" data-aos-delay="300" className="skil">
                <h1>Skills 🚀</h1>
                <p>
                  I have experience working with HTML, CSS, JavaScript, Vuejs,
                  Reactjs, Typescript, and other technologies.I also have
                  experience in styling librabries like Tailwind css, Bootstrap.
                  I also have experience with ui/ux design tools like Figma,
                  Adobe XD, Adobe Photoshop. Also version control tools like Git
                  and Github. I am also a Physics enthusiast and enjoy writing
                  about the relationship between physics and frontend
                  development.
                </p>
              </section>

              
              <section
                data-aos="fade-up"
                data-aos-delay="300"
                className="location"
              >
                <h1>Location 🌍</h1>
                <p>
                  I'm currently based in Lagos, Nigeria. I love travelling and
                  exploring new places. 
                </p>
              </section>

              <section
                data-aos="fade-up"
                data-aos-delay="300"
                className="interests"
              >
                <h1>Interests 🎉</h1>
                <p>
                  I love to read, write, code, watch anime, watch and play
                  football. I also love to teach and mentor entry level
                  developers.
                </p>
              </section>

              <section
                data-aos="fade-right"
                data-aos-delay="300"
                className="socials"
              >
                <h1>Get in touch 📞</h1>
                <p>
                  <nav>
                    <p>
                      Email:{" "}
                      <strong>
                        <a href="mailto:akoredeishola10@gmail.com">
                          akoredeishola10@gmail.com
                        </a>
                      </strong>
                    </p>
                    <p>
                      Call:{" "}
                      <strong>
                        <a href="tel:+2349160314529">+2349160314529</a>
                      </strong>
                    </p>
                  </nav>
                  <span>
                    <h2>You can also reach me on</h2> <br />
                    <nav>
                      <a
                        href="https://twitter.com/Atomdevv"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-square-x-twitter"></i>
                      </a>
                      {" "}
                      <a
                        href="linkedin.com/in/muhammed-badmus-a02303258"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      {" "}
                      <a
                        href="https://www.instagram.com/muhammed.b__10/"
                        target="_blank"
                      >
                        <i class="fa-brands fa-square-instagram"></i>
                      </a>
                      {" "}
                      <a
                        href="https://github.com/ishola10"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-square-github"></i>
                      </a>
                      {" "}
                      <a
                        href="https://medium.com/@akoredeishola10"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-medium"></i>
                      </a>
                    </nav>
                  </span>
                  {/* lets add email and number */}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
