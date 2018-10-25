import React, { Component } from "react";

export default class CardStats extends Component {
  render() {
    let intelligence;
    let power;
    let combat;
    let speed;
    let card;

    // * * * * * * * * * *   LET'S DEFINE INTELLIGENCE:   * * * * * * * * * * //
    if (this.props.intelligence !== "null") {
      intelligence = (
        <li>
          <strong className="cardDetailSubTitle">Intelligence:</strong>{" "}
          {this.props.intelligence}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE POWER:   * * * * * * * * * * //
    if (this.props.power !== "null") {
      power = (
        <li>
          <strong className="cardDetailSubTitle">Power:</strong>{" "}
          {this.props.power}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE COMBAT:   * * * * * * * * * * //
    if (this.props.combat !== "null") {
      combat = (
        <li>
          <strong className="cardDetailSubTitle">Combat:</strong>{" "}
          {this.props.combat}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE SPEED:   * * * * * * * * * * //
    if (this.props.speed !== "null") {
      speed = (
        <li>
          <strong className="cardDetailSubTitle">Speed:</strong>{" "}
          {this.props.speed}
        </li>
      );
    }

    // * * * * * * * * * *   IF THERE IS AT LEAST ONE INFORMATION IN ONE OF THESE GROUPS THE DIV WILL APPEAR ON SCREEN... ELSE IT WILL NOT   * * * * * * * * * * //
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
