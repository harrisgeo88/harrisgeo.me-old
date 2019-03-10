import React from "react";
import { Link } from "react-scroll";
import { Button } from "semantic-ui-react";

export default class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div className="section-container">
          <h1 className="inverted">Harris Geo</h1>
          <h2 className="inverted">Full stack developer & traveler</h2>
          <Link
            to="about"
            offset={1}
            style={{ paddingLeft: 5 }}
            smooth={true}
            duration={500}
          >
            <Button id="find-out-more" size="huge">
              Find out More
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
