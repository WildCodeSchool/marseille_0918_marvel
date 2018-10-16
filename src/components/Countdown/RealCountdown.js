import React, { Component } from 'react';

import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>Already on Screen!</span>;
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    let dayOrDays = "";

    if (days === 0) {
        days = "";
    } else if (days <= 1) {
        dayOrDays = "day";
    } else {
        dayOrDays = "days";
    }

    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <div>
                <p>{days}  {dayOrDays}</p>
                <p>{hours} : {minutes} : {seconds}</p>
            </div>
        );
    }
};

class RealCountown extends Component {
    render() {
        return (
            <div className="clock">
                <Countdown date={new Date("Dec 19, 2018 09:00:00")}
                    renderer={renderer}
                />
            </div>
        );
    }
}

export default RealCountown;