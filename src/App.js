import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Button } from "reactstrap";
import Background from "./img/keyboard.jpg";
import Background2 from "./img/keyboardtwo.jpg";
import Background3 from "./img/keyboardthree.jpg";
import Background4 from "./img/keyboardfour.jpg";
import Background5 from "./img/keyboardfive.jpg";
import Background6 from "./img/software.jpg";
import Background7 from "./img/softwaretwo.jpg";
import Background8 from "./img/code.jpg";
import Background9 from "./img/computer.jpg";
import video from "./img/project/triviavideo.mp4";
import Slides from "./Slides";
import Diamond from "./components/Diamond.js";
import Project from "./components/Project.js";
import Bar from "./components/Bar.js";
import { Link } from "react-scroll";
import React, { Component } from "react";
//import ReactCSSTransitionGroup from "react-transition-group";
//import ReactTransitionGroup from "react-addons-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      contactFlag: false,
      projectFlag: false,
      videoFlag: false,
    };
  }

  linkingA() {
    console.log(this.state);
    this.setState({
      aboutFlag: true,
      projectFlag: false,
      videoFlag: false,
      contactFlag: false,
    });
  }
  linkingH() {
    console.log(this.state);
    this.setState({
      aboutFlag: false,
      projectFlag: false,
      videoFlag: true,
      contactFlag: false,
    });
  }
  linkingP() {
    console.log("linking");
    this.setState({
      aboutFlag: false,
      projectFlag: true,
      videoFlag: false,
      contactFlag: false,
    });
  }
  linkingC() {
    console.log("linking");
    this.setState({
      aboutFlag: false,
      projectFlag: false,
      videoFlag: false,
      contactFlag: true,
    });
  }

  render() {
    var { videoFlag, aboutFlag, projectFlag, contactFlag } = this.state;
    const aboutMaze = (
      <div className="mazediamond">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );

    const contactMaze = (
      <div>
        <div className="mazediamond">
          <Diamond pixelSize="sml" height="10" />
        </div>
      </div>
    );

    const projectMaze = (
      <div className="mazediamond">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );

    const videoMaze = (
      <div className="mazediamond">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );
    console.log("render state");
    console.log(this.state);
    return (
      <div>
        <div className="top">
          <ul
            className="top"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                className="headerlink"
                to="about"
                spy={false}
                smooth={true}
                onClick={() => this.linkingA()}
              >
                About {aboutFlag ? aboutMaze : null}
              </Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                className="headerlink"
                to="contact"
                spy={true}
                smooth={true}
                onClick={() => this.linkingC()}
              >
                Contact {contactFlag ? contactMaze : null}
              </Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                className="headerlink"
                to="projects"
                spy={true}
                smooth={true}
                onClick={() => this.linkingP()}
              >
                Projects {projectFlag ? projectMaze : null}
              </Link>
            </li>

            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                className="headerlink"
                to="video"
                spy={true}
                smooth={true}
                onClick={() => this.linkingH()}
              >
                Video {videoFlag ? videoMaze : null}
              </Link>
            </li>
          </ul>
        </div>

        <div
          id="about"
          className="secondary"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>ABOUT</h1>

          <Col md="9" sm="0"></Col>
          <Col>
            <h6>Name: Benjamin Perkins</h6>
            <h6>Contact: perkinsben@yahoo.com </h6>
            <h6>Status: Open for employment.</h6>
            <h6>
              Education:{" "}
              <a id="edu" href="https://deepdiveeducation.com/">
                Deep Dive Learning Academy
              </a>
            </h6>

            <h6> Skills: </h6>
            <h6>• React, Redux, JavaScript, Python, Java, HTML, CSS, XML</h6>
            <h6>
              • MongoDB, SQL, Mongoose, Express,
              <h6>• GitHub, Heroku, Netlify, Visual Studio </h6>
            </h6>
            <h6>• FIX Protocol, PowerShell, FTP, TFS, JIRA</h6>
          </Col>
        </div>
        <div className="primary" id="projects">
          <h1>PROJECTS</h1>
          <Project />
        </div>
        <div
          id="contact"
          className="secondary"
          style={{
            backgroundImage: `url(${Background2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>CONTACT</h1>
          <h6>Email: perkinsben@yahoo.com</h6>

          <div class="bpad">
            <Button color="secondary">
              <a href="https://github.com/Ben8842">GitHub Profile</a>
            </Button>
          </div>
          <div class="bpad">
            <Button color="secondary">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                Linkedin Profile
              </a>
            </Button>
          </div>
          <div class="bpad">
            <h6>Schedule a Zoom meeting with me here:</h6>
            <Button color="secondary">
              <a href="https://calendly.com/perkinsben">
                Calendly.com/perkinsben
              </a>
            </Button>
          </div>
        </div>
        <div className="primary" id="video">
          <h1>VIDEO</h1>
          <video
            src={video}
            controls
            frameborder="0"
            allowfullscreen
            width="320"
            height="240"
          ></video>
        </div>
      </div>
    );
  }
}

export default App;

//  <Slides />
//<iframe src={video} frameborder="0" allowfullscreen></iframe>
