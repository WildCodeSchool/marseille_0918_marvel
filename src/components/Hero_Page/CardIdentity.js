import React, { Component } from "react";

export default class CardIdentity extends Component {

  render() {
    let fullName;
    let race;
    let occupation;
    let location;
    let gender;

    if (this.props.fullName !== "" && this.props.fullName !== "-") {
      fullName = (
        <li>
          <strong>Full-name:</strong> {this.props.fullName}
        </li>
      );
    }
    if (this.props.gender !== "-") {
      gender = (
        <li>
          <strong>Gender:</strong> {this.props.gender}
        </li>
      );
    }
    if (this.props.race !== "null") {
      race = (
        <li>
          <strong>Race:</strong> {this.props.race}
        </li>
      );
    }
    if (this.props.occupation !== "-" && this.props.occupation !== "Unknown") {
      occupation = (
        <li>
          <strong>Occupation:</strong> {this.props.occupation}
        </li>
      );
    }
    if (this.props.location !== "-") {
      location = (
        <li>
          <strong>Location:</strong> {this.props.location}
        </li>
      );
    }

    return (
      <div className="idCard">
        <h4 onClick={this.props.funcDisplayTogg}>Identity Card</h4>
        <ul onClick={this.props.funcHideMe}>
          {fullName}
          {race}
          {gender}
          {occupation}
          {location}
        </ul>
      </div>
    );
  }
}
