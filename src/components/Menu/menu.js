import React, {Component} from 'react';
import './menu.scss';

// Import Images
import Img1 from './pictures/hulk.jpg';
import Img2 from './pictures/flash3.jpg';
import Img3 from './pictures/antman.jpg';
import Img4 from './pictures/vs2.png';
import Img5 from './pictures/venom.jpg';
import logo from './pictures/logo.png';


class Menu extends Component {
    render() {
        return (
        <div className="container-hexa">

            {/* Menu */}
            <div className="menu-hexa">

                {/* Top VS 1 */}
                <div className="btn-hexa" id="hexaTop">
                    <div className="front" style={{backgroundImage: `url(${Img4})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>Marvel<br /><span>VS</span><br />DC Comics</h3>
                        </div>
                    </div> 
                </div>
            
                {/* Top Heroes */}
                <div className="btn-hexa" id="hexaTopLeft">
                    <div className="front" style={{backgroundImage: `url(${Img2})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>Top 10 <br />SuperHeroes</h3>
                        </div>
                    </div> 
                </div>

                {/* Index */}
                <div className="btn-hexa" id="hexaMiddle">
                    <div className="front" style={{backgroundImage: `url(${logo})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>See Them All</h3>
                        </div>
                    </div> 
                </div>

                {/* Top Vilains  */}

                <div className="btn-hexa" id="hexaTopRight">
                    <div className="front" style={{backgroundImage: `url(${Img5})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>Top 10<br />Vilains</h3>
                        </div>
                    </div> 
                </div>

                {/* Top Smallest  */}

                <div className="btn-hexa" id="hexaBottomLeft">
                    <div className="front" style={{backgroundImage: `url(${Img3})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>Top 10<br />Smallest</h3>
                        </div>
                    </div> 
                </div>

                {/* Top Biggest  */}

                <div className="btn-hexa" id="hexaBottomRight">
                    <div className="front" style={{backgroundImage: `url(${Img1})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>Top 10<br />Biggest</h3>
                        </div>
                    </div> 
                </div>

                {/* Top VS 2  */}

                <div className="btn-hexa" id="hexaBottom">
                    <div className="front" style={{backgroundImage: `url(${Img4})`}}>
                    </div>
                    <div className="back">
                        <div className="details">
                            <h3>X-Men<br /><span>VS</span><br />Avengers</h3>
                        </div>
                    </div> 
                </div>

            {/* END Menu */}
            </div>
        </div>
        )
    }
}

export default Menu;