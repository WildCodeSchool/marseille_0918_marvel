import React, { Component } from "react";

import Countdown from "react-countdown-now";

// Random component
const Completionist = () => <span>Already on Screen!</span>;
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  let dayOrDays = "";
  let hourOrHours = "hrs";
  let minOrMins = "mins";
  let secOrSecs = "secs";

  if (days === 0) {
    days = "";
  } else if (days <= 1) {
    dayOrDays = "day";
  } else {
    dayOrDays = "days";
  }

  if (hours == 0) {
    hours = "0";
    hourOrHours = "hour";
  } else if (hours == 1) {
    hours = "1";
    hourOrHours = "hour";
  } else {
    if (hours == 2) {
      hours = "2";
    } else if (hours == 3) {
      hours = "3";
    } else if (hours == 4) {
      hours = "4";
    } else if (hours == 5) {
      hours = "5";
    } else if (hours == 6) {
      hours = "6";
    } else if (hours == 7) {
      hours = "7";
    } else if (hours == 8) {
      hours = "8";
    } else if (hours == 9) {
      hours = "9";
    }
  }

  if (minutes == 0) {
    minutes = "0";
    minOrMins = "min";
  } else if (minutes == 1) {
    minutes = "1";
    minOrMins = "min";
  } else {
    if (minutes == 2) {
      minutes = "2";
    } else if (minutes == 3) {
      minutes = "3";
    } else if (minutes == 4) {
      minutes = "4";
    } else if (minutes == 5) {
      minutes = "5";
    } else if (minutes == 6) {
      minutes = "6";
    } else if (minutes == 7) {
      minutes = "7";
    } else if (minutes == 8) {
      minutes = "8";
    } else if (minutes == 9) {
      minutes = "9";
    }
  }

  if (seconds == 0) {
    seconds = "0";
    secOrSecs = "sec";
  } else if (seconds == 1) {
    seconds = "1";
    secOrSecs = "sec";
  } else {
    if (seconds == 2) {
      seconds = "2";
    } else if (seconds == 3) {
      seconds = "3";
    } else if (seconds == 4) {
      seconds = "4";
    } else if (seconds == 5) {
      seconds = "5";
    } else if (seconds == 6) {
      seconds = "6";
    } else if (seconds == 7) {
      seconds = "7";
    } else if (seconds == 8) {
      seconds = "8";
    } else if (seconds == 9) {
      seconds = "9";
    }
  }

  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="clock">
        <p className="spanTop">{days}</p>
        <p className="spanTop">{hours}</p>
        <p className="spanTop">{minutes}</p>
        <p className="spanTop">{seconds}</p>

        <p className="spanBottom">{dayOrDays}</p>
        <p className="spanBottom">{hourOrHours}</p>
        <p className="spanBottom">{minOrMins}</p>
        <p className="spanBottom">{secOrSecs}</p>
      </div>
    );
  }
};

class RealCountown extends Component {
  render() {
    return (
      <div className="clockContainer">
        <Countdown
          date={new Date("Dec 21, 2018 00:00:00")}
          renderer={renderer}
        />
      </div>
    );
  }
}

export default RealCountown;
