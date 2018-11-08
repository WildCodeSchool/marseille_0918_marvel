import React from "react";
import "./Countdown.scss";
import RealCountdown from "./RealCountdown";
import Video from "../Youtube/Youtube";
import Aquaman from './aquaman.png'

const CountdownSection = ({ details , index }) => (
  <React.Fragment >
    <h2>COMING SOON</h2>
    <h3 className="filmTitle">
      <img src={Aquaman} alt="Logo Aquaman"/>
    </h3>
    <p className="dateOut">December 21, 2018</p>
    <div className="videoCountGrid">
      <Video />
      <RealCountdown />
    </div>
  </React.Fragment>
)

export default CountdownSection;
