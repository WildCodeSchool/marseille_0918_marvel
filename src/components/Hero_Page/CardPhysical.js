import React, { Component } from "react";

export default class CardPhysical extends Component {
  render() {
    let eyes;
    let hair;
    let height;
    let weight;
    let card;

    // * * * * * * * * * *   LET'S DEFINE EYES:   * * * * * * * * * * //
    if (this.props.eyes !== "-") {
      eyes = (
        <li>
          <strong className="cardDetailSubTitle">Eye-color:</strong>{" "}
          {this.props.eyes}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE HEIGHT:   * * * * * * * * * * //
    if (this.props.height !== "0 cm") {
      height = (
        <li>
          <strong className="cardDetailSubTitle">Height:</strong>{" "}
          {this.props.height}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE WEIGHT:   * * * * * * * * * * //
    if (this.props.weight !== "0 kg") {
      weight = (
        <li>
          <strong className="cardDetailSubTitle">Weight:</strong>{" "}
          {this.props.weight}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE HAIR:   * * * * * * * * * * //
    if (this.props.hair !== "-") {
      hair = (
        <li>
          <strong className="cardDetailSubTitle">Hair-color:</strong>{" "}
          {this.props.hair}
        </li>
      );
    }

    // * * * * * * * * * *   IF THERE IS AT LEAST ONE INFORMATION IN ONE OF THESE GROUPS THE DIV WILL APPEAR ON SCREEN... ELSE IT WILL NOT   * * * * * * * * * * //
    if (eyes || hair || height || weight) {
      card = (
        <div
          onClick={e => this.props.hideGivenList("physicalList", e)}
          className="idCard"
        >
          <h4 onClick={this.props.funcDisplayTogg}>Physical Card</h4>
          <ul style={{ display: "none" }} id="physicalList">
            {eyes}
            {hair}
            {height}
            {weight}
          </ul>
        </div>
      );
    }

    return <React.Fragment>{card}</React.Fragment>;
  }
}
