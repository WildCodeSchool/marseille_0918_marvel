import React, { Component } from "react";
import "./Countdown.scss";
import RealCountdown from "./RealCountdown";
import Video from "../Youtube/Youtube";
import captainmarvel from './captainmarvel.png'

class CountdownSection extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <React.Fragment >
        <h2>COMING SOON</h2>
        <h3 className="filmTitle">
          <img src={captainmarvel}/>
        </h3>
        <p className="dateOut">March 8, 2019</p>
        <div className="videoCountGrid">
          <Video />
          <RealCountdown />
        </div>
      </React.Fragment>
    );
  }
}

export default CountdownSection;
