import React, { Component } from "react";

export default class CardStats extends Component {
  render() {
    let intelligence;
    let power;
    let combat;
    let speed;
    let card;

    if (this.props.intelligence !== "null") {
      intelligence = (
        <li>
          <strong>Intelligence:</strong> {this.props.intelligence}
        </li>
      );
    }
    if (this.props.power !== "null") {
      power = (
        <li>
          <strong>Power:</strong> {this.props.power}
        </li>
      );
    }
    if (this.props.combat !== "null") {
      combat = (
        <li>
          <strong>Combat:</strong> {this.props.combat}
        </li>
      );
    }
    if (this.props.speed !== "null") {
      speed = (
        <li>
          <strong>Speed:</strong> {this.props.speed}
        </li>
      );
    }

    if (intelligence || power || combat || speed) {
      card = (
        <div
          onClick={e => this.props.hideGivenList("statsList", e)}
          className="idCard"
        >
          <h4 onClick={this.props.funcDisplayTogg}>Statistics Card</h4>
          <ul style={{ display: "none" }} id="statsList">
            {intelligence}
            {power}
            {combat}
            {speed}
          </ul>
        </div>
      );
    }

    return <React.Fragment>{card}</React.Fragment>;
  }
}
