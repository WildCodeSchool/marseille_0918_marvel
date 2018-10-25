import React, { Component } from "react";

export default class CardSuperId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreAliases: false
    };
  }

  // Function to toggle what we can see for Aliases
  // This works with the props showMoreAliases
  // And the event listener is added to the arrows up and down

  toggleAliases() {
    this.setState({
      showMoreAliases: !this.state.showMoreAliases
    });
  }

  render() {
    let alignment;
    let firstAppearance;
    let aliases;
    let card;

    // * * * * * * * * * *   LET'S DEFINE ALIGNMENT:   * * * * * * * * * * //
    if (this.props.alignment !== "-") {
      alignment = (
        <li>
          <strong className="cardDetailSubTitle">Alignment:</strong>{" "}
          {this.props.alignment}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE APPEARANCE:   * * * * * * * * * * //
    if (this.props.firstAppearance !== "-") {
      firstAppearance = (
        <li>
          <strong className="cardDetailSubTitle">First-appearance:</strong>{" "}
          {this.props.firstAppearance}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE ALIASES:   * * * * * * * * * * //
    if (this.props.aliases[0] !== "-") {
      // * * * * * IF THERE IS 5 OR LESS ALIASES EACH OF THEM APPEARS IN A <P> * * * * * //
      if (this.props.aliases.length < 5) {
        aliases = (
          <li>
            <strong className="cardDetailSubTitle">Aliases:</strong>{" "}
            {this.props.aliases.map((alias, idx) => (
              <p className="cardApiInfo" key={idx}>
                {alias}
              </p>
            ))}
          </li>
        );

        // * * * * * IF THERE IS MORE THAN 5 ALIASES: * * * * * //
      } else {
        aliases = (
          <li>
            <strong className="cardDetailSubTitle">Aliases:</strong>{" "}
            {/*   * * * * * 4 OF THEM EACH APPEARS IN A <P>  * * * * *   */}
            {this.props.aliases.map(
              (alias, idx) =>
                idx < 4 && (
                  <p className="cardApiInfo" key={idx}>
                    {alias}
                  </p>
                )
            )}
            {/*   * * * * * AND THEN WE CHECK IF showMoreAliases IS TRUE OR FALSE:  * * * * *   */}
            {this.state.showMoreAliases ? (
              // * * * * *  IF IT IS TRUE, WE SEE ON SCREEN THE NEXT ONES UP THE 10TH IN <P>s  * * * * * //
              <React.Fragment>
                {this.props.aliases.map(
                  (alias, idx) =>
                    idx > 3 &&
                    idx < 10 && (
                      <p className="cardApiInfo" key={idx}>
                        {alias}
                      </p>
                    )
                )}

                {/* * * * * *  AND WE CAND FIND A SPAN TO ALLOW US TO HIDE THOSE NEXT ELEMENTS  * * * * * */}
                <span>
                  See Less...
                  <i
                    className="far fa-arrow-alt-circle-up cardBtnLess"
                    onClick={() => this.toggleAliases()}
                  />
                </span>
              </React.Fragment>
            ) : (
              // * * * * * IF showMoreAliases IS FALSE WE GO BACK TO THE 4 FIRST <P>s WE SEE AN ARROW ICON:  * * * * * //
              <span>
                See More...
                <i
                  className="far fa-arrow-alt-circle-down cardBtnMore"
                  onClick={() => this.toggleAliases()}
                />
              </span>
            )}
          </li>
        );
      }
    }

    // * * * * * * * * * *   IF THERE IS AT LEAST ONE INFORMATION IN ONE OF THESE GROUPS THE DIV WILL APPEAR ON SCREEN... ELSE IT WILL NOT   * * * * * * * * * * //
    if (alignment || aliases || firstAppearance) {
      card = (
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

    return <React.Fragment>{card}</React.Fragment>;
  }
}
