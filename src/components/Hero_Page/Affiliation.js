import React, { Component } from "react";

export default class CardAffiliation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreRelative: false,
      showMoreAffiliation: false
    };
  }

  // Functions to toggle what we can see for Affiliation and Relatives
  // This works with the props showMoreRelatve and showMoreAffilation
  // And the event listener is added to the arrows up and down

  toggleRelative(e) {
    this.setState({
      showMoreRelative: !this.state.showMoreRelative
    });
  }

  toggleAffiliation() {
    this.setState({
      showMoreAffiliation: !this.state.showMoreAffiliation
    });
  }

  render() {
    let group;
    let relatives;
    let firstAppearance;
    let card;

    // If there is something to show:
    if (this.props.group !== "-") {
      // If there is less than 3 group affiliation to show
      if (this.props.group.split(";").length < 2) {
        group = (
          // we show them normaly All in a li
          <li>
            <strong>Group Affiliation:</strong> {this.props.group}
          </li>
        );
        // If there is more to show
      } else {
        group = (
          // we show only the first one (let's if we want to show more)
          <li>
            <strong>Group Affiliation:</strong>{" "}
            {this.props.group
              .split(";")
              .slice(0, 1)
              .join(";")}
            {this.state.showMoreAffiliation ? (
              // and we hide the next ones we will show only if the props showMoreAffiliation (condition line above) is true
              <span>
                {this.props.group
                  .split(";")
                  .slice(1, 4)
                  .join(";")}{" "}
                <span
                  onClick={
                    () =>
                      this.toggleAffiliation() /**is also hidden in there an icon that will allow us to hide it back when it's displayed */
                  }
                >
                  CLICK FOR LESS!!!
                </span>
              </span>
            ) : (
              // Else if showMoreAffiliation is false, then we can only see the icon below that will allow us to change showMoreAffiliation to true if we click on it
              <span onClick={() => this.toggleAffiliation()}>
                CLICK FOR MORE!!!
              </span>
            )}
          </li>
        );
      }
    }
    // hoping that the explanations above were understanable 'cause it's the same idea for this next part
    if (this.props.relatives !== "-") {
      if (this.props.relatives.split("),").length < 2) {
        relatives = (
          <li>
            <strong>Relatives:</strong> {this.props.relatives}
          </li>
        );
      } else {
        relatives = (
          <li>
            <strong>Relatives:</strong>{" "}
            <ol>
              {console.log(this.props.relatives.split(" "))}
              <li>{this.props.relatives}</li>
            </ol>
          </li>
          // <li>
          //   <strong>Relatives:</strong>{" "}
          //   {this.props.relatives
          //     .split("),")
          //     .slice(0, 2)
          //     .join("),")}
          //   {/* here I had some troubles 'cause sometimes there were an ) at the end and sometimes not, the line below is supposed to see if there is one, if not one will be added if yes then none will be added*/}
          //   {this.props.relatives[1] !== ")" && <span>)</span>}
          //   {this.state.showMoreRelative ? (
          //     <span>
          //       {this.props.relatives
          //         .split("),")
          //         .slice(2, 3)
          //         .join("),")}
          //       {/* same story here than just above about the ) */}
          //       {this.props.relatives[4] !== ")" && <span>)</span>}
          //       <span onClick={() => this.toggleRelative()}>
          //         CLICK FOR LESS!!!
          //       </span>
          //     </span>
          //   ) : (
          //     <span onClick={() => this.toggleRelative()}>
          //       CLICK FOR MORE!!!
          //     </span>
          //   )}
          // </li>
        );
      }
    }
    if (this.props.firstAppearance !== "-") {
      firstAppearance = (
        <li>
          <strong>First-appearance:</strong> {this.props.firstAppearance}
        </li>
      );
    }
    if (group || relatives || firstAppearance) {
      card = (
        <div
          onClick={e => this.props.hideGivenList("affiliationList", e)}
          className="idCard"
        >
          <h4>Affiliation Card</h4>
          <ul style={{ display: "none" }} id="affiliationList">
            {group}
            {relatives}
            {firstAppearance}
          </ul>
        </div>
      );
    }

    return <React.Fragment>{card}</React.Fragment>;
  }
}
