import React, { Component } from "react";
import "./Countdown.scss";
import RealCountdown from "./RealCountdown";
import Video from "../Youtube/Youtube";
import Aquaman from './aquaman.png'

class CountdownSection extends Component {
  render() {
    const { details, index } = this.props;
    return (
      <React.Fragment >
        <h2>COMING SOON</h2>
        <h3 className="filmTitle">
          <img src={Aquaman}/>
        </h3>
        <p className="dateOut">December 21, 2018</p>
        <div className="videoCountGrid">
          <Video />
          <RealCountdown />
        </div>
      </React.Fragment>
    );
  }
}

export default CountdownSection;
