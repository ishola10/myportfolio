import React from "react";

function Contact() {
    return (
        <div className="contact">
        <div className="containe">
            <div className="contact__content">
            <h1>Contact</h1>
            <p>
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
            </p>
            <a
                href="mailto:akoredeishola10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >
                Say Hello
            </a>
            </div>
        </div>
        </div>
    );
}

export default Contact;