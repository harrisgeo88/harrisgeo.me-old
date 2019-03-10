import React from "react";
import { Link } from "react-scroll";
import { Image } from "semantic-ui-react";
import img from "./assets/me-snow.jpg";

export default class About extends React.Component {
  render() {
    let props = {
      target: "_blank"
    };
    return (
      <div id="about" className="section">
        <div className="section-container ">
          <h1 className="">About me</h1>
          <p className="about-text">
            <Image
              src={img}
              size={window.innerWidth < 762 ? "small" : "medium"}
              circular
              floated="left"
            />
            <br />
            During my more than 6 years of commercial experience, I have done
            plenty of projects in <b>React</b>, <b>Node.js</b>,{" "}
            <b>Typescript</b> and <b>Golang</b>.
            <br />I have great experience developing <b>UIs</b> and <b>UX</b>{" "}
            designs but also dealt a lot with <b>Databases</b>,{" "}
            <b>RESTful APIs</b>, <b>Microservices</b> and <b>Big Data</b>.
            <br />I am excited about new technologies and "Always be learning"
            is my motto.
            <br />
            Check out some of my
            <Link
              to="projects"
              style={{ paddingLeft: 5 }}
              smooth={true}
              duration={500}
              className="active item"
            >
              projects
            </Link>
            .
            <br />
            Let's talk. Feel free to contact me at{" "}
            <b>charilaoss [ at ] gmail.com</b>
            <br />
            <br />
            <a href="https://github.com/harrisgeo88" {...props}>
              <i className="fab fa-github fa-2x ic" />
            </a>
            <a
              href="https://www.linkedin.com/in/charilaos-georgakakis/"
              {...props}
            >
              <i className="fab fa-linkedin-in fa-2x ic" />
            </a>
            <a href="https://twitter.com/harrisgeo88" {...props}>
              <i className="fab fa-twitter fa-2x ic" />
            </a>
            <a href="https://www.instagram.com/harrisgeo88/" {...props}>
              <i className="fab fa-instagram fa-2x ic" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}
