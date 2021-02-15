import React from "react";
import "../Contact/Contact.css";

function Contact(props) {
  return (
    <div className="contactMain">
      <div className="container" id="Contact">
        <div className="row">
          <div className="col">
            <h1>Get in touch</h1>
            <div className="circle-xl-contact">
              <img
                src="/static/media/razImage.0aacfca2.png"
                alt="Logo"
                class="razLogo"
              ></img>
            </div>
            <p>
              I'm currently looking for new opportunities,<br></br>my inbox is
              always open. <br></br>Whether you have a job opportunity for me or
              just want to say hi.
            </p>
            <h2>
              Start by{" "}
              <a id="button" href="mailto:razavramov2@gmail.com">
                saying hi.
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12" id="social">
            <ul>
              <li>
                <a href="https://github.com/bchiang7" aria-label="GitHub">
                  <box-icon
                    name="github"
                    type="logo"
                    color="#6c6ed3"
                  ></box-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bchiang7"
                  aria-label="Instagram"
                >
                  <box-icon
                    name="instagram"
                    type="logo"
                    color="#6c6ed3"
                  ></box-icon>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/bchiang7"
                  aria-label="Linkedin"
                >
                  <box-icon
                    name="linkedin"
                    type="logo"
                    color="#6c6ed3"
                  ></box-icon>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="col-sm-12" id="credits">
            <p>Raz Avramov</p>
            <p>Designed & Built by Raz Avramov</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
