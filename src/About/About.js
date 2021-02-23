import React from "react";
import "../About/About.css";
import htmlLogo from "../Assets/htmlLogo.png";
import jsLogoSm from "../Assets/jsLogo.png";
import reactLogoSm from "../Assets/reactLogo.png";
import gitLogoSm from "../Assets/gitLogo.png";
import wordpressLogo from "../Assets/wordpressLogo.png";
import cssLogoSm from "../Assets/cssLogo.png";

function About(props) {
  return (
    <div className="aboutMain">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <p id="aboutHeader">Introduction</p>
            <h1>
              Hello! I'm Raz<br></br>Avramov{" "}
            </h1>
            <p>Hi! I'm Raz, a Front-End Developer based in Ramat-Gan, IL.</p>
            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between.
            </p>
            <p>
              Shortly after receiving my Front-End Developer certificate from{" "}
              <a id="netcraft" href="https://netcraftacademy.co.il/">
                Netcraft Academy
              </a>
              , I started my own freelance business, I work on a variety of
              interesting projects.
            </p>
            <p>
              Now i'm looking for my first Junior Front-End Developer position.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="technologies">
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img src={htmlLogo} alt="Logo" className="htmlLogo" />
                </div>
              </li>
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img src={cssLogoSm} alt="Logo" className="cssLogoSm" />
                </div>
              </li>
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img src={jsLogoSm} alt="Logo" className="jsLogoSm" />
                </div>
              </li>
            </ul>
            <ul className="technologies">
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img src={reactLogoSm} alt="Logo" className="reactLogoSm" />
                </div>
              </li>
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img src={gitLogoSm} alt="Logo" className="gitLogoSm" />
                </div>
              </li>
              <li>
                {" "}
                <div className="circle-sm tech">
                  <img
                    src={wordpressLogo}
                    alt="Logo"
                    className="wordpressLogo"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default About;
