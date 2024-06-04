import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer__content">
          <div className="footer__social">
            <a
              href="linkedin.com/in/muhammed-badmus-a02303258"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ishola10"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://medium.com/@akoredeishola10"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-medium"></i>
            </a>
            <a
              href="https://twitter.com/Atomdevv"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a
              href="https://codesandbox.io/u/ishola10"
              target="_blank"
              rel="noreferrer"
            >
              <p >CodeSandBox</p>
            </a>
          </div>
          <div className="footer__copy">
            <p>&copy; 2023 Badmus Muhammed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
