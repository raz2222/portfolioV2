import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Reactlogo from "./Assets/reactLogo.png";
import jslogo from "./Assets/jsLogo.png";
import gitlogo from "./Assets/gitLogo.png";
import razImg from "./Assets/razImage.png";
import Mail from "./Mail/Mail";

import "../src/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Main">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="#2C3032"
            variant="dark"
            fixed="top"
          >
            <Navbar.Brand href="#home">
              Raz <span>Avramov</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div data-aos="fade-left" data-aos-delay="200">
                  <div className="circle-purple"></div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                  <div className="circle-green"></div>
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                  <div className="circle-sm"></div>
                  <img src={gitlogo} alt="Logo" className="gitLogo" />
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  <div className="circle-md">
                    <img src={jslogo} alt="Logo" className="jsLogo" />
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="600">
                  <div className="circle-lg">
                    {" "}
                    <img src={Reactlogo} alt="Logo" className="reactLogo" />
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="100">
                  <div className="circle-xl">
                    <img src={razImg} alt="Logo" className="razLogo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <p className="header-title">Front-End Developer</p>
                <h1>Talk is cheap.</h1>
                <h2>Show me the code</h2>
                <p>
                  I design and code beautifully simple things,<br></br>and i
                  love what i do.
                </p>
                <button>LET'S CHAT!</button>
              </div>
            </div>
          </div>
        </div>
        <Mail />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
