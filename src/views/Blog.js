import React from "react";
import "../styles/Blog.css";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div className="writing">
      <div className="writing-container">
        <div className="writing-container-content">
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
              B
            </div>
            <div data-aos="fade-right" data-aos-delay="600">
              L
            </div>
            <div data-aos="fade-right" data-aos-delay="700">
              O
            </div>
            <div data-aos="fade-right" data-aos-delay="800">
              G
            </div>
          </div>
          <div>
            <hr className="line" />
          </div>

          <div className="writing__wrapper">
            <div data-aos="fade-up" data-aos-delay="300" className="blog">
              <div className="blog__contentt">
                <h2>Some of my Writings</h2>
                <div className="blog__gridd">
                  <div data-aos="fade-up" data-aos-delay="600" className="blog__grid__itemm">
                    <h3>
                      <a
                        href="https://medium.com/@akoredeishola10/bridging-the-gap-the-symbiotic-relationship-between-physics-and-frontend-development-65ef2928f8be"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bridging the Gap: The Symbiotic Relationship Between
                        Physics and Frontend Development
                      </a>
                    </h3>
                    <p className="date">
                      November 7, 2023 * 2 min read *{" "}
                      <strong>frontend development - Physics</strong>
                    </p>
                    <p>
                      When we think of physics, our minds often create images of
                      scientists in lab coats and complex equations on
                      blackboards. Frontend development, on the other hand, is
                      often associated with the sleek, user-friendly interfaces
                      we ...
                    </p>
                    <div className="blog__grid__itemm__btn">
                      <a
                        href="https://medium.com/@akoredeishola10/bridging-the-gap-the-symbiotic-relationship-between-physics-and-frontend-development-65ef2928f8be"
                        className="read-more-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="600" className="blog__grid__itemm">
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
                      Frontend tech has come a long way, but there’s always room
                      for improvement. Imagine a world where your website loads
                      faster, looks better, and feels more personalized. Well,
                      that future might be closer than you think, thanks to
                      quantum physics! ...
                    </p>
                    <div className="blog__grid__itemm__btn">
                      <a
                        href="https://medium.com/@akoredeishola10/quantum-leap-revolutionizing-frontend-technologies-with-quantum-inspired-optimization-algorithms-32b07f4e405f"
                        className="read-more-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="600" className="blog__grid__itemm">
                    <h3>
                      <a
                        href="https://medium.com/@akoredeishola10/getting-started-with-vue-js-a-beginners-guide-f73c48db1bc5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Getting Started with Vue.js: A Beginner’s Guide to learning 
                      </a>
                    </h3>
                    <p className="date">
                      April 30, 2024 * 3 min read *{" "}
                      <strong>frontend development - Vue - Vue js</strong>
                    </p>
                    <p>
                      Introduction: Are you eager to start building awesome web
                      applications but don’t know where to begin? Vue.js might
                      just be the perfect starting point for you! In this
                      beginner-friendly guide, we’ll explore Vue.js — a friendly
                      and approachable JavaScript framework that makes web
                      development a breeze. Let’s embark on this exciting ...
                    </p>
                    <div className="blog__grid__itemm__btn">
                      <a
                        href="https://medium.com/@akoredeishola10/getting-started-with-vue-js-a-beginners-guide-f73c48db1bc5"
                        className="read-more-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="600" className="blog__grid__itemm">
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
                      React Hooks have revolutionized the way we manage state
                      and side effects in React applications, offering powerful
                      tools for building robust and maintainable UIs. In this
                      advanced guide, we’ll delve deeper into React Hooks ...
                    </p>
                    <div className="blog__grid__itemm__btn">
                      <a
                        href="https://medium.com/@muhammed_dev_10/mastering-react-hooks-advanced-techniques-for-state-management-and-side-effects-1ec98dd61e55"
                        className="read-more-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
