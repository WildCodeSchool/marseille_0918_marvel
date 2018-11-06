import React, {Component} from 'react';
import '../../Variables.scss';
import './TopBiggest.scss';
import {NavLink} from 'react-router-dom';

// Import Pictures
import redHulk from './Pictures/redHulk.jpg';
import galactus from './Pictures/galactus2.jpg';
import finfangfour from './Pictures/fin.jpg';
import groot from './Pictures/groot.jpg';
import juggernaut from './Pictures/juggernaut.jpg';
import giganta from './Pictures/giganta.jpg';
import thanos from './Pictures/thanos.jpg';
import abomination from './Pictures/abo.jpg';
import doomsday from './Pictures/doomsday.jpg';
import antiVenom from './Pictures/antiVenom.jpg';


class TopBiggest extends Component{

    GetSiblings(){
        if(window.matchMedia("(min-width: 576px)").matches){

        const getSiblings = (elem) => {
        let siblings = [];
        let sibling = elem.parentNode.firstChild;
        for (;sibling ; sibling = sibling.nextSibling ) {
        if (sibling.nodeType !== 1 || sibling === elem) continue;
        siblings.push(sibling);
        }
        return siblings;
    }
    const lis = document.querySelectorAll('li');

        for(let i = 0; i < lis.length; i++) {

            let hover = lis[i].addEventListener('click', (e) => {
                lis[i].style.width = "55%";


            let liSiblings = getSiblings(lis[i]);
            liSiblings.map( (sibling) => {
                sibling.style.width = "5%";
                let contentSibling = sibling.lastElementChild;
                contentSibling.style.bottom = "-100%";
                contentSibling.style.opacity = "0";
                contentSibling.style.transitionDelay= "0s";
                })

            let content = lis[i].lastElementChild;
                content.style.bottom = "0";
                content.style.opacity = "1";
                content.style.transitionDelay= "0.5s";
            })
        }
} else {
// responsive
    const getSiblings = (elem) => {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    for (;sibling ; sibling = sibling.nextSibling ) {
        if (sibling.nodeType !== 1 || sibling === elem) continue;
        siblings.push(sibling);
        }
        return siblings;
    }
    const lis = document.querySelectorAll('li');
    const num = document.getElementsByClassName('num');

    for(let i = 0; i < lis.length; i++ ){

    let menuWork = num[i].addEventListener('click', (e) =>{
        lis[i].style.display = "block";
        lis[i].style.width = "100%";

    let liSiblings = getSiblings(lis[i]);
    liSiblings.map( (sibling) => {
        sibling.style.display = "none";
        sibling.style.width = "100%";

    let nuSiblings = getSiblings(num[i]);
    nuSiblings.map( (sibling) => {
        sibling.style.background = "#f28f18";
        lis[i].style.width = "100%";
    })
        let contentSibling = sibling.lastElementChild;
        contentSibling.style.bottom = "-100%";
        })
        let content = lis[i].lastElementChild;
            content.style.bottom = "0";
            content.style.opacity = "1";
            content.style.transitionDelay= "0.5s";
            num[i].style.background= "#113971";
    })
    let hover = lis[i].addEventListener('click', (e) => {
        lis[i].style.width = "100%";

    let liSiblings = getSiblings(lis[i]);
    liSiblings.map( (sibling) => {
        sibling.style.width = "100%";
    })
    })
    }
    }
}
    render(){
    return(
        <div className="bod">
            <div className="menu-smartphone">
                <div className="num" onClick={this.GetSiblings}>10</div>
                <div className="num" onClick={this.GetSiblings}>9</div>
                <div className="num" onClick={this.GetSiblings}>8</div>
                <div className="num" onClick={this.GetSiblings}>7</div>
                <div className="num" onClick={this.GetSiblings}>6</div>
                <div className="num" onClick={this.GetSiblings}>5</div>
                <div className="num" onClick={this.GetSiblings}>4</div>
                <div className="num" onClick={this.GetSiblings}>3<span>rd</span></div>
                <div className="num" onClick={this.GetSiblings}>2<span>nd</span></div>
                <div className="num" onClick={this.GetSiblings}>1<span>st</span></div>
        </div>
        <ul >
            <li className="li-10" onClick={this.GetSiblings} style={{backgroundImage: `url(${antiVenom})`}}>
            <h3>10<span>th</span></h3>
            <div className="content">
                <h2>Anti Venom</h2>
            </div>
            </li>
            <li className="li-9" onClick={this.GetSiblings}style={{backgroundImage: `url(${doomsday})`}}>
            <h3>9<span>th</span></h3>
            <div className="content">
                    <h2>Doomsday</h2>
            </div>
            </li>
            <li className="li-8" onClick={this.GetSiblings}style={{backgroundImage: `url(${abomination})`}}>
            <h3>8<span>th</span></h3>
            <div className="content">
                <h2>Abomination</h2>
            </div>
            </li>
            <li className="li-7" onClick={this.GetSiblings}style={{backgroundImage: `url(${thanos})`}}>
            <h3>7<span>th</span></h3>
            <div className="content">
                <h2>Thanos</h2>
            </div>
            </li>
            <li className="li-6" onClick={this.GetSiblings} style={{backgroundImage: `url(${giganta})`}}>
            <h3>6<span>th</span></h3>
            <div className="content">
                <h2>Giganta</h2>

            </div>
            </li>
            <li className="li-5" onClick={this.GetSiblings} style={{backgroundImage: `url(${redHulk})`}}>
            <h3>5<span>th</span></h3>
            <div className="content">
                <h2>Red Hulk</h2>

            </div>
            </li>
            <li className="li-4" onClick={this.GetSiblings} style={{backgroundImage: `url(${juggernaut})`}}>
            <h3>4<span>th</span></h3>
            <div className="content">
                <h2>Juggernaut</h2>

            </div>
            </li>
            <li className="li-3" onClick={this.GetSiblings} style={{backgroundImage: `url(${groot})`}}>
            <h3>3<span>rd</span></h3>
            <div className="content">
                <h2>Groot</h2>
            </div>
            </li>
            <li className="li-2" onClick={this.GetSiblings} style={{backgroundImage: `url(${galactus})`}}>
            <h3>2<span>nd</span></h3>
            <div className="content">
                <h2>Galactus</h2>
            </div>
            </li>
            <li className="li-1" onClick={this.GetSiblings} style={{backgroundImage: `url(${finfangfour})`}}>
            <h3>1<span>st</span></h3>
            <div className="content">
                <h2>Fin Fang Four</h2>
            </div>
            </li>
        </ul>
        <NavLink className="link" to='/'> <i className="fas fa-undo"/> </NavLink>
        </div>
    )
    }
}
export default TopBiggest;
