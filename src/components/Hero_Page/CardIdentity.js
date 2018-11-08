import React, { Component } from "react";

export default class CardIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreOccupation: false,
      showMoreLocation: false
    };
  }

  // Functions to toggle what we can see for Occupation and Location
  // This works with the props showMoreRelatve and showMoreAffilation
  // And the event listener is added to the arrows up and down

  toggleOccupation() {
    this.setState({
      showMoreOccupation: !this.state.showMoreOccupation
    });
  }

  toggleLocation() {
    this.setState({
      showMoreLocation: !this.state.showMoreLocation
    });
  }

  render() {
    let fullNames;
    let races;
    let occupations;
    let locations;
    let genders;
    let card;
    const {
      props: {
        fullName,
        gender,
        race,
        occupation,
        location
      }
    } = this;

    // * * * * * * * * * *   LET'S DEFINE FULLNAME:   * * * * * * * * * * //

    if (fullName !== "" && fullName !== "-") {
      fullNames = (
        <li>
          <strong className="cardDetailSubTitle">Full-name:</strong>{" "}
          {fullName}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE GENDER:   * * * * * * * * * * //
    if (gender !== "-") {
      genders = (
        <li>
          <strong className="cardDetailSubTitle">Gender:</strong>{" "}
          {gender}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE RACE:   * * * * * * * * * * //
    if (race !== "null") {
      races = (
        <li>
          <strong className="cardDetailSubTitle">Race:</strong>{" "}
          {race}
        </li>
      );
    }

    // * * * * * * * * * *   LET'S DEFINE OCCUPATION:   * * * * * * * * * * //
    if (occupation !== "-" && occupation !== "Unknown") {
      occupations = (
        <li>
          <strong className="cardDetailSubTitle">Occupation:</strong>{" "}
          {occupation}
        </li>
      );
    }

    if (occupation !== "-") {
      // * * * * * IF THERE IS 5 OR LESS OCCUPATIONS EACH OF THEM APPEARS IN A <P> * * * * * //

      if (occupation.split(",").length < 5) {
        occupations = (
          <li>
            <strong className="cardDetailSubTitle">Occupations:</strong>
            {occupation.split(",").map((occupation, idx) => (
              <p className="cardApiInfo" key={idx}>
                {occupation}
              </p>
            ))}
          </li>
        );

        // * * * * * IF THERE IS MORE THAN 5 OCCUPATIONS: * * * * * //
      } else {
        occupations = (
          <li>
            <strong className="cardDetailSubTitle">Occupations:</strong>

            {/*   * * * * * 4 OF THEM EACH APPEARS IN A <P>  * * * * *   */}
            {occupation.split(",").map(
              (occupation, idx) =>
                idx < 4 && (
                  <p className="cardApiInfo" key={idx}>
                    {occupation}
                  </p>
                )
            )}

            {/*   * * * * * AND THEN WE CHECK IF showMoreOccupation IS TRUE OR FALSE:  * * * * *   */}
            {this.state.showMoreOccupation ? (
              // * * * * *  IF IT IS TRUE, WE SEE ON SCREEN THE NEXT ONES UP THE 10TH IN <P>s  * * * * * //
              <React.Fragment>
                {occupation.split(",").map(
                  (occupation, idx) =>
                    idx > 3 &&
                    idx < 10 && (
                      <p className="cardApiInfo" key={idx}>
                        {occupation}
                      </p>
                    )
                )}

                {/* * * * * *  AND WE CAND FIND A SPAN TO ALLOW US TO HIDE THOSE NEXT ELEMENTS  * * * * * */}
                <span>
                  See Less...
                  <i
                    className="far fa-arrow-alt-circle-up cardBtnLess"
                    onClick={() => this.toggleOccupation()}
                  />
                </span>
              </React.Fragment>
            ) : (
              // * * * * * IF showMoreOccupation IS FALSE WE GO BACK TO THE 4 FIRST <P>s WE SEE AN ARROW ICON:  * * * * * //
              <span>
                See More...
                <i
                  className="far fa-arrow-alt-circle-down cardBtnMore"
                  onClick={() => this.toggleOccupation()}
                />
              </span>
            )}
          </li>
        );
      }
    }

    // * * * * * * * * * *   LET'S DEFINE LOCATION:   * * * * * * * * * * //
    if (location !== "-") {
      // * * * * * IF THERE IS 5 OR LESS LOCATIONS EACH OF THEM APPEARS IN A <P> * * * * * //

      if (location.split(";").length < 5) {
        locations = (
          <li>
            <strong className="cardDetailSubTitle">Locations:</strong>
            {location.split(";").map((location, idx) => (
              <p className="cardApiInfo" key={idx}>
                {location}
              </p>
            ))}
          </li>
        );

        // * * * * * IF THERE IS MORE THAN 5 LOCATIONS: * * * * * //
      } else {
        locations = (
          <li>
            <strong className="cardDetailSubTitle">Locations:</strong>

            {/*   * * * * * 4 OF THEM EACH APPEARS IN A <P>  * * * * *   */}
            {location.split(";").map(
              (location, idx) =>
                idx < 4 && (
                  <p className="cardApiInfo" key={idx}>
                    {location}
                  </p>
                )
            )}

            {/*   * * * * * AND THEN WE CHECK IF showMoreLocation IS TRUE OR FALSE:  * * * * *   */}
            {this.state.showMoreLocation ? (
              // * * * * *  IF IT IS TRUE, WE SEE ON SCREEN THE NEXT ONES UP THE 10TH IN <P>s  * * * * * //
              <React.Fragment>
                {location.split(";").map(
                  (location, idx) =>
                    idx > 3 &&
                    idx < 10 && (
                      <p className="cardApiInfo" key={idx}>
                        {location}
                      </p>
                    )
                )}

                {/* * * * * *  AND WE CAND FIND A SPAN TO ALLOW US TO HIDE THOSE NEXT ELEMENTS  * * * * * */}
                <span>
                  <i
                    className="far fa-arrow-alt-circle-up cardBtnLess"
                    onClick={() => this.toggleLocation()}
                  />
                </span>
              </React.Fragment>
            ) : (
              // * * * * * IF showMoreLocation IS FALSE WE GO BACK TO THE 4 FIRST <P>s WE SEE AN ARROW ICON:  * * * * * //
              <span>
                <i
                  className="far fa-arrow-alt-circle-down cardBtnMore"
                  onClick={() => this.toggleLocation()}
                />
              </span>
            )}
          </li>
        );
      }
    }

    // * * * * * * * * * *   IF THERE IS AT LEAST ONE INFORMATION IN ONE OF THESE GROUPS THE DIV WILL APPEAR ON SCREEN... ELSE IT WILL NOT   * * * * * * * * * * //
    if (fullName || race || gender || occupations || locations) {
      card = (
        <div
          onClick={e => this.props.hideGivenList("idList", e)}
          className="idCard"
        >
          <h4 onClick={this.props.funcDisplayTogg}>Identity Card</h4>
          <ul style={{ display: "none" }} id="idList">
            {fullName}
            {race}
            {gender}
            {occupations}
            {locations}
          </ul>
        </div>
      );
    }

    return <React.Fragment>{card}</React.Fragment>;
  }
}
