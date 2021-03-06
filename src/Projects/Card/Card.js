import React from "react";
import "../Projects/Projects.css";
import weatherImg from "../Assets/weatherAppImg.png";

function Projects(props) {
  return (
    <div className="projectsMain">
      <div className="projectCard">
        <div className="projectContent">
          <p className="projectOverline">Featured Project</p>
          <h3 className="projectTitle">OctoProfile</h3>
          <div className="productImage">
            <img src={weatherImg} alt="Logo" className="weatherImg" />
          </div>
          <div className="projectDescription">
            <p>
              A single page React weather app, displaying real live weather
              using API, and changes background image according to the fetched
              temp.
            </p>
          </div>
          <ul className="projectTechList">
            <li>React.js</li>
            <li>openweather API</li>
          </ul>
          <div className="projectLinks">
            <div class="circle-sm-links">
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
            <div class="circle-sm-links">
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
        </div>{" "}
      </div>
      <div className="projectCard1">
        <div className="projectContent">
          <p className="projectOverline">Featured Project</p>
          <h3 className="projectTitle">OctoProfile</h3>
          <div className="productImage">
            <box-icon name="cloud-light-rain" color="#6c6ed3"></box-icon>{" "}
          </div>
          <div className="projectDescription">
            <p></p>
          </div>
          <ul className="projectTechList">
            <li>Next.js</li>
            <li>Chart.js</li>
            <li>GitHub API</li>
          </ul>
          <div className="projectLinks">
            <div class="circle-sm-links">
              <a
                href="https://github.com/bchiang7/octoprofile"
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
            <div class="circle-sm-links">
              <a
                href="https://octoprofile.now.sh"
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
        </div>{" "}
      </div>
      <div className="projectCard">
        <div className="projectContent">
          <p className="projectOverline">Featured Project</p>
          <h3 className="projectTitle">OctoProfile</h3>
          <div className="productImage">
            <img src={weatherImg} alt="Logo" className="weatherImg" />
          </div>
          <div className="projectDescription">
            <p>
              A nicer look at your GitHub profile and repository stats with data
              visualizations of your top languages and stars. Sort through your
              top repos by number of stars, forks, and size.
            </p>
          </div>
          <ul className="projectTechList">
            <li>Next.js</li>
            <li>Chart.js</li>
            <li>GitHub API</li>
          </ul>
          <div className="projectLinks">
            <div class="circle-sm-links">
              <a
                href="https://github.com/bchiang7/octoprofile"
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
            <div class="circle-sm-links">
              <a
                href="https://octoprofile.now.sh"
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
        </div>{" "}
      </div>
    </div>
  );
}

export default Projects;
