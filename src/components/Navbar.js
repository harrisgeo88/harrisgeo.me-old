import React from "react";
import { Menu, Visibility, Button } from "semantic-ui-react";
import { Link } from "react-scroll";

export default class Navbar extends React.Component {
  state = { primary: false, menu: false };

  primary = () => {
    this.setState({ primary: true });
  };

  secondary = () => {
    this.setState({ primary: false });
  };

  show = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    let { primary, menu } = this.state;
    let props = {
      className: primary ? "item" : "item-reversed",
      spy: true,
      smooth: true,
      duration: 500,
      onClick: this.show
    };
    return (
      <Visibility
        style={{ height: "100%" }}
        onBottomPassed={this.primary}
        onBottomPassedReverse={this.secondary}
        once={false}
      >
        <Menu
          fixed={primary ? "top" : null}
          size="large"
          className={!primary ? "fixed-top" : ""}
          id="navbar"
          secondary={!primary}
        >
          <Link
            to="intro"
            {...props}
            className={
              (primary ? "active item title" : "item-reversed title") +
              (menu ? "    open-menu" : "")
            }
          >
            <div id="title-desktop">HARRIS GEO</div>
            <div id="title-mobile">HG</div>
          </Link>
          <Menu.Menu
            id={menu ? "navbar-container-mobile" : "navbar-container"}
            position="right"
          >
            <Link to="intro" {...props}>
              Intro
            </Link>
            <Link to="about" offset={1} {...props}>
              About
            </Link>
            <Link to="projects" {...props}>
              Projects
            </Link>
            <Link to="xp" {...props}>
              Experience
            </Link>
          </Menu.Menu>
          <Button
            id={primary ? "navbar-bars-fixed" : "navbar-bars"}
            icon="bars"
            onClick={this.show}
          />
        </Menu>
        {this.props.children}
        <div className={primary ? "footer" : "footer-inverted"}>
          © 2018, Harris Geo. All Rights Reserved.
        </div>
      </Visibility>
    );
  }
}
