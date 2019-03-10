import React from "react";
import { Step, Icon } from "semantic-ui-react";
import _ from "lodash";

export default class Steps extends React.Component {
  onClick = (i, j) => {
    let { onClick } = this.props;
    if (onClick) onClick(i);
  };

  calculateDates = when => {
    if (when === 0) return "now";
    let now = new Date();
    let date = _.split(when, ",");
    let then = new Date(date[0], date[1], 1);
    let months = Math.abs(now - then) / 2629800000;
    if (months > 12) {
      // years
      months = _.round(months / 12);
      months += months > 1 ? " years" : " year";
      months += " ago";
    } else {
      months = _.round(months);
      months += months > 1 ? " months" : " month";
      months += " ago";
    }

    return months;
  };

  renderSteps = () => {
    let { roles, selected } = this.props;

    if (roles) {
      return roles.map((role, i) => {
        let active = i === selected;
        let { icon, when } = role;
        let date = this.calculateDates(when);
        return (
          <Step key={i} active={active} onClick={() => this.onClick(i)}>
            <Icon name={icon} />
            <Step.Content>
              <Step.Description>{date}</Step.Description>
            </Step.Content>
          </Step>
        );
      });
    }
  };

  render() {
    return (
      <div className="steps">
        <Step.Group size="small">{this.renderSteps()}</Step.Group>
      </div>
    );
  }
}
