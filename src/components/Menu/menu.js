import React, {Component} from 'react';
import './menu.scss';
import Img1 from './pictures/hulk.jpg';
import Img2 from './pictures/flash3.jpg';
import Img3 from './pictures/antman.jpg';
import Img4 from './pictures/vs.jpg';
import Img5 from './pictures/venom.jpg';
import logo from './pictures/logo.png';


class MenuHexa extends Component {
    
    render() {
        return(
            <div className="container-hexa">
                <div className="menu-hexa">
                    <div class="btn-hexa" id="hexa1" style={{backgroundImage: `url(${Img4})`}}>
                        <h3 class="title-hexa">VS</h3>
                    </div>
                    <div class="btn-hexa" id="hexa2" style={{backgroundImage: `url(${Img2})`}}>
                        <h3 class="title-hexa">Top Heroes</h3>
                    </div>
                    <div class="btn-hexa hexa-middle" id="hexa3" style={{backgroundImage: `url(${logo})`}}>
                        <h3 class="title-hexa">See Them All</h3>
                    </div>
                    <div class="btn-hexa" id="hexa4" style={{backgroundImage: `url(${Img5})`}}>
                        <h3 class="title-hexa">Top Vilains</h3>
                    </div>
                    <div class="btn-hexa" id="hexa5" style={{backgroundImage: `url(${Img3}`}}>
                        <h3 class="title-hexa">Top little</h3>
                    </div>
                    <div class="btn-hexa" id="hexa6" style={{backgroundImage: `url(${Img1})`}} >
                        <h3 class="title-hexa">Top fattest</h3>
                    </div>
                    <div class="btn-hexa" id="hexa7" style={{backgroundImage: `url(${Img4})`}}>
                        <h3 class="title-hexa">VS</h3>
                    </div>
                </div>
            </div>
        )
    }
};

export default MenuHexa;