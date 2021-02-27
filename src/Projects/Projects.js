import React from "react";
import "../Projects/Projects.css";

function Projects(props) {
  return (
    <div className="projectsMain">
      <div className="container">
        <p className="projectsHeader">Projects</p>

        <div className="row">
          <div className="col-sm-6">
            {" "}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" id="card1">
                  <h3 className="projectTitle">React weather app</h3>
                </div>
                <div className="flip-card-back">
                  <h1>React weather app</h1>
                  <p>
                    {" "}
                    A simple react weather app using an api to fetch <br></br>
                    the weather data, <br></br>and some weather visualizations
                    shown if hot or cold.
                  </p>
                  <p className="cardTech">
                    Technologies: React.js, open weather map API.
                  </p>
                  <div className="projectLinks">
                    <div className="circle-sm-links">
                      <a
                        href="https://github.com/raz2222/react-live-weather-app"
                        aria-label="GitHub Link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherGithub"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="circle-sm-links">
                      <a
                        href="https://react-weather-live-app.herokuapp.com/"
                        aria-label="External Link"
                        className="external"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherExternalLink"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {" "}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" id="card2">
                  <h3 className="projectTitle">React weather app</h3>
                </div>
                <div className="flip-card-back">
                  <h1>React weather app</h1>
                  <p>
                    {" "}
                    A simple react weather app using an api to fetch <br></br>
                    the weather data, <br></br>and some weather visualizations
                    shown if hot or cold.
                  </p>
                  <p className="cardTech">
                    Technologies: React.js, open weather map API.
                  </p>
                  <div className="projectLinks">
                    <div className="circle-sm-links">
                      <a
                        href="https://github.com/raz2222/react-live-weather-app"
                        aria-label="GitHub Link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherGithub"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="circle-sm-links">
                      <a
                        href="https://react-weather-live-app.herokuapp.com/"
                        aria-label="External Link"
                        className="external"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherExternalLink"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {" "}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" id="card3">
                  <h3 className="projectTitle">React weather app</h3>
                </div>
                <div className="flip-card-back">
                  <h1>React weather app</h1>
                  <p>
                    {" "}
                    A simple react weather app using an api to fetch <br></br>
                    the weather data, <br></br>and some weather visualizations
                    shown if hot or cold.
                  </p>
                  <p className="cardTech">
                    Technologies: React.js, open weather map API.
                  </p>
                  <div className="projectLinks">
                    <div className="circle-sm-links">
                      <a
                        href="https://github.com/raz2222/react-live-weather-app"
                        aria-label="GitHub Link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherGithub"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="circle-sm-links">
                      <a
                        href="https://react-weather-live-app.herokuapp.com/"
                        aria-label="External Link"
                        className="external"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherExternalLink"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {" "}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" id="card4">
                  <h3 className="projectTitle">PolyWeb</h3>
                </div>
                <div className="flip-card-back">
                  <h1>Polyweb web development</h1>
                  <p>
                    {" "}
                    This is my "side hustle", i decided to offer my web services
                    to gain more experiance with real life projects. <br></br>
                    with polyweb i wanted to show clients my abilities.
                  </p>
                  <p className="cardTech">Technologies: HTML, CSS, JS.</p>
                  <div className="projectLinks">
                    <div className="circle-sm-links">
                      <a
                        href="https://github.com/raz2222/polyweb"
                        aria-label="GitHub Link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherGithub"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="circle-sm-links">
                      <a
                        href="https://www.polyweb.me/"
                        aria-label="External Link"
                        className="external"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather featherExternalLink"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
