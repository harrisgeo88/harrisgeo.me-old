import React from "react";
import { Button } from "semantic-ui-react";

export default class Cards extends React.Component {
  click = (previous = false) => {
    let { onClick, selected, roles } = this.props;

    if (onClick) {
      let all = roles.length - 1;
      let nextPage = 0;
      if (previous) nextPage = selected === 0 ? all : selected - 1;
      else nextPage = selected === all ? 0 : selected + 1;

      onClick(nextPage);
    }
  };

  render() {
    let { roles, selected } = this.props;
    let { header, description, extra, meta } = roles[selected];
    return (
      <div>
        <h2 className="black">
          {header} <small>@ {meta}</small>
        </h2>
        <div>{extra}</div>
        <p>{description}</p>
        <div className="responsive-row">
          <Button
            circular
            style={{ float: "left" }}
            onClick={() => this.click(true)}
            icon="arrow left"
          />
          <Button
            circular
            style={{ float: "right" }}
            onClick={() => this.click()}
            icon="arrow right"
          />
        </div>
      </div>
    );
  }
}
