import React, { Component } from "react";

export default class CardSuperId extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let alignment;
    let firstAppearance;
    let aliases;

    if (this.props.alignment !== "-") {
      alignment = (
        <li>
          <strong>Alignment:</strong> {this.props.alignment}
        </li>
      );
    }
    if (this.props.firstAppearance !== "-") {
      firstAppearance = (
        <li>
          <strong>First-appearance:</strong> {this.props.firstAppearance}
        </li>
      );
    }
    if (this.props.aliases[0] !== "-") {
      aliases = (
        <li>
          <strong>Aliases:</strong>
          <ul>
            {this.props.aliases.map(
              (alias, idx) => idx < 4 && <li key={idx}>{alias}</li>
            )}
          </ul>
        </li>
      );
    }

    return (
      <div className="idCard">
        <h4 onClick={this.props.funcDisplayTogg}>Super Identity Card</h4>
        <ul onClick={this.props.funcHideMe}>
          {alignment}
          {aliases}
          {firstAppearance}
        </ul>
      </div>
    );
  }
}
