import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/images/me.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={Logo} alt="logo" />
          <h2>BM</h2>
        </div>
        <div className="footer__social">
          <a
            href="linkedin.com/in/badmus-muhammed-a02303258"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin">LinkeDin</i>
          </a>
          <a
            href="https://github.com/ishola10"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-github">GitHub</i>
          </a>
          <a
            href="https://medium.com/@akoredeishola10"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-medium">Medium</i>
          </a>
          <a
            href="https://twitter.com/Atomdevv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-twitter">Twitter</i>
          </a>
        </div>
        <div className="footer__copy">
          <p>&copy; 2023 Badmus Muhammed</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
