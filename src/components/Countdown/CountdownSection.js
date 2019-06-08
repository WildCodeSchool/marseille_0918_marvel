import React, { Component } from "react";
import "./Countdown.scss";
import RealCountdown from "./RealCountdown";
import Video from "../Youtube/Youtube";
import SpiderMan from './SpiderMan.png'

class CountdownSection extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <React.Fragment >
        <h2>COMING SOON</h2>
        <h3 className="filmTitle">
          <img src={SpiderMan}/>
        </h3>
        <p className="dateOut">July 5, 2019</p>
        <div className="videoCountGrid">
          <Video />
          <RealCountdown />
        </div>
      </React.Fragment>
    );
  }
}

export default CountdownSection;
