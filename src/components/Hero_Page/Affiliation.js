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

  toggleRelative() {
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
  
    let groups;
    let relatives;
    let card;
    let separator;
    const {
      props: {
        group,
        hideGivenList,
      },
      state: {
        showMoreAffiliation,
        showMoreRelative
      }
    } = this;

    // * * * * * * * * * *   LET'S DEFINE GROUPS (AFFILIATION GROUP):   * * * * * * * * * * //

    if (group !== "-") {
      // * * * * * IF THERE IS 5 OR LESS GROUP AFFILIATIONS EACH OF THEM APPEAR IN A <P> * * * * * //

      if (group.split(",").length < 5) {
        groups = (
          <li>
            <strong className="cardDetailSubTitle">Affiliation:</strong>
            {group.split(",").map((group, idx) => (
              <p className="cardApiInfo" key={idx}>
                {group}
              </p>
            ))}
          </li>
        );

        // * * * * * IF THERE ARE MORE THAN 5 GROUP AFFILIATIONS: * * * * * //
      } else {
        groups = (
          <li>
            <strong className="cardDetailSubTitle">Affiliation:</strong>

            {/*   * * * * * 4 OF THEM EACH APPEAR IN A <P>  * * * * *   */}
            {group.split(",").map(
              (group, idx) =>
                idx < 4 && (
                  <p className="cardApiInfo" key={idx}>
                    {group}
                  </p>
                )
            )}

            {/*   * * * * * AND THEN WE CHECK IF showMoreAffiliation IS TRUE OR FALSE:  * * * * *   */}
            {showMoreAffiliation ? (
              // * * * * *  IF IT IS TRUE, WE SEE ON SCREEN THE NEXT ONES UP THE 10TH IN <P>s  * * * * * //
              <React.Fragment>
                {group.split(",").map(
                  (group, idx) =>
                    idx > 3 &&
                    idx < 10 && (
                      <p className="cardApiInfo" key={idx}>
                        {group}
                      </p>
                    )
                )}

                {/* * * * * *  AND WE CAND FIND A SPAN TO ALLOW US TO HIDE THOSE NEXT ELEMENTS  * * * * * */}
                <span>

                  <i
                    className="far fa-arrow-alt-circle-up cardBtnLess"
                    onClick={() => this.toggleAffiliation()}
                  />
                </span>
              </React.Fragment>
            ) : (
              // * * * * * IF showMoreAffiliation IS FALSE WE GO BACK TO THE 4 FIRST <P>s WE SEE AN ARROW ICON:  * * * * * //
              <span>

                <i
                  className="far fa-arrow-alt-circle-down cardBtnMore"
                  onClick={() => this.toggleAffiliation()}
                />
              </span>
            )}
          </li>
        );
      }
    }

    // * * * * * * * * * *   LET'S DEFINE RELATIVES:   * * * * * * * * * * //

    if (this.props.relatives !== "-") {
      // * * * * *  FIRST WE NEED TO FIND THE SEPARATOR IN THE STRING WHICH IS NOT ALWAYS THE SAME  * * * * * //
      if (this.props.relatives.includes(");")) {
        separator = ");";
      } else {
        separator = "),";
      }

      // * * * * * IF THERE IS 5 OR LESS RELATIVES EACH OF THEM APPEAR IN A <P> * * * * * //
      if (this.props.relatives.split(separator).length < 5) {
        relatives = (
          <li>
            <strong className="cardDetailSubTitle">Relatives:</strong>{" "}
            {this.props.relatives.split(separator).map(
              (relative, idx) =>
                // THIS CONDITION IS ONLY THERE BECAUSE OF A ) THAT WAS MISSING IN ALL BUT ONE <P> IN ONE CASE, OR BECAUSE THERE WAS ONE TOO MUCH IN THE LAST <P> IN THE OTHER CASE
                idx === this.props.relatives.split(separator).length - 1 ? (
                  <p className="cardApiInfo" key={idx}>
                    {relative}
                  </p>
                ) : (
                  <p className="cardApiInfo" key={idx}>
                    {relative})
                  </p>
                )
            )}
          </li>
        );

        // * * * * * IF THERE IS MORE THAN 5 relatives: * * * * * //
      } else {
        relatives = (
          <li>
            <strong className="cardDetailSubTitle">Relatives:</strong>{" "}
            {/*   * * * * * 4 OF THEM EACH APPEAR IN A <LI>  * * * * *   */}
            {this.props.relatives.split(separator).map(
              (relative, idx) =>
                idx < 4 && (
                  <p className="cardApiInfo" key={idx}>
                    {relative})
                  </p>
                )
            )}
            {/*   * * * * * AND THEN WE CHECK IF showMoreAffiliation IS TRUE OR FALSE:  * * * * *   */}
            {showMoreRelative ? (
              // * * * * *  IF IT IS TRUE, WE SEE ON SCREEN THE NEXT ONES UP THE 10TH IN <P>s  * * * * * //
              <React.Fragment>
                {this.props.relatives.split(separator).map(
                  (relative, idx) =>
                    idx > 3 &&
                    idx < 10 && (
                      <p className="cardApiInfo" key={idx}>
                        {relative})
                      </p>
                    )
                )}

                {/* * * * * *  AND WE CAND FIND A SPAN TO ALLOW US TO HIDE THOSE NEXT ELEMENTS  * * * * * */}
                <span>
                  <i
                    className="far fa-arrow-alt-circle-up cardBtnMore"
                    onClick={() => this.toggleRelative()}
                  />
                </span>
              </React.Fragment>
            ) : (
              // * * * * * IF showMoreRelative IS FALSE WE GO BACK TO THE 4 FIRST <P>s WE A SEE MORE SPAN:  * * * * * //
              <span>
                <i
                  className="far fa-arrow-alt-circle-down cardBtnMore"
                  onClick={() => this.toggleRelative()}
                />
              </span>
            )}
          </li>
        );
      }
    }

    // * * * * * * * * * *   IF THERE IS AT LEAST ONE INFORMATION IN ONE OF THESE GROUPS THE DIV WILL APPEAR ON SCREEN... ELSE IT WILL NOT   * * * * * * * * * * //
    if (groups || relatives) {
      card = (
        <div
          onClick={e => hideGivenList("affiliationList", e)}
          className="idCard"
        >
          <h4>Affiliation Card</h4>
          <ul style={{ display: "none" }} id="affiliationList">
            {groups}
            {relatives}
          </ul>
        </div>
      );
    }

    return <React.Fragment>{card}</React.Fragment>;
  }
}
