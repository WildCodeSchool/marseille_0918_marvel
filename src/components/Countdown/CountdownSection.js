import React, { Component } from "react";
import "./Countdown.scss";
import RealCountdown from "./RealCountdown";
import Video from "../Youtube/Youtube";

class CountdownSection extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <React.Fragment >
        <h2>COMING SOON</h2>
        <h3 className="filmTitle">Aquaman</h3>
        <p>December 21</p>
        <div className="videoCountGrid">
          <Video />
          <RealCountdown />
        </div>
      </React.Fragment>
    );
  }
}

export default CountdownSection;
