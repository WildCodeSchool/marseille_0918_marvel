import React, { Component } from 'react'
import './Countdown.scss';
import RealCountdown from './RealCountdown';
import Video from '../Youtube/Youtube';

class CountdownSection extends Component {
    render() {
        const { details, index } = this.props;
        return (
            <React.Fragment>
                <h2>COMING SOON</h2>
                <h3 className="filmTitle">Fantastic Beasts 2</h3>
                <p>14 nov 2018</p>
                <Video />
                <RealCountdown />
            </React.Fragment>
        );
    }
}

export default CountdownSection;

