import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './page404.scss';
import img404 from './pictures/a.png';

class Page404 extends Component {
    render() {
        return (
            <div className="page404-container">
                <div className="img404left">
                    <img src={img404}/>
                </div>
                <div className="text404right">
                    <h1>404</h1>
                    <p className="text404">Looks like this page is missing. <br /> Don't worry though, the Justice League is on the case.</p>
                    <p className="text404-p2">Meanwhile, why don't you try again by going</p>
                    <NavLink to="/">Back Home</NavLink>
                </div>
                
            </div>
        )
    }
}

export default Page404;