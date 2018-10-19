import React, { Component } from "react";

export default class CardPhysical extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let eyes;
    let hair;
    let height;
    let weight;
    let card;

    if (this.props.eyes !== "-") {
      eyes = (
        <li>
          <strong>Eye-color:</strong> {this.props.eyes}
        </li>
      );
    }
    if (this.props.height !== "0 cm") {
      height = (
        <li>
          <strong>Height:</strong> {this.props.height}
        </li>
      );
    }
    if (this.props.weight !== "0 kg") {
      weight = (
        <li>
          <strong>Weight:</strong> {this.props.weight}
        </li>
      );
    }
    if (this.props.hair !== "-") {
      hair = (
        <li>
          <strong>Hair-color:</strong> {this.props.hair}
        </li>
      );
    }

    if (eyes || hair || height || weight) {
      card = (
        <div className="idCard">
          <h4 onClick={this.props.funcDisplayTogg}>Physical Card</h4>
          <ul onClick={this.props.funcHideMe}>
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
