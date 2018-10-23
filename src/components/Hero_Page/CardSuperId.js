import React, { Component } from "react";

export default class CardSuperId extends Component {
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
          <ol>
            {this.props.aliases.map(
              (alias, idx) => (
                <li key={idx}>{alias}</li>
              )
              // (alias, idx) => idx < 4 && <li key={idx}>{alias}</li>
            )}
          </ol>
        </li>
      );
    }

    return (
      <div
        onClick={e => this.props.hideGivenList("superIdList", e)}
        className="idCard"
      >
        <h4 onClick={this.props.funcDisplayTogg}>Super Identity Card</h4>
        <ul style={{ display: "none" }} id="superIdList">
          {alignment}
          {aliases}
          {firstAppearance}
        </ul>
      </div>
    );
  }
}
