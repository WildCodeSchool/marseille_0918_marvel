import React, {Component} from 'react';
import '../../Variables.scss';
import {NavLink} from 'react-router-dom';

// Import Pictures
 import mystique from './Pictures/mystique.jpg';
 import quinn from './Pictures/quinn.jpg';
import jean from './Pictures/jean.jpg';
import batgirl from './Pictures/batgirl.jpg';
import cpt from './Pictures/captainMarvel2.jpg';
import catWoman from './Pictures/catWoman.jpg';
import supergirl from './Pictures/superGirl.jpg';
import wonderWoman from './Pictures/wonderWoman.jpg';
import scarlett from './Pictures/scarlett.jpeg';
import tornade from './Pictures/tornade.jpg'


class TopWomen extends Component{

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
        sibling.style.color = "#222222";
    })
        let contentSibling = sibling.lastElementChild;
        contentSibling.style.bottom = "-100%";
        })
        let content = lis[i].lastElementChild;
            content.style.bottom = "0";
            content.style.opacity = "1";
            content.style.transitionDelay= "0.5s";
            num[i].style.background= "#113971";
            num[i].style.color= "#f3f3f3";
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
            <li className="li-10" onClick={this.GetSiblings} style={{backgroundImage: `url(${cpt})`}}>
            <h3>10<span>th</span></h3>
            <div className="content">
                <h2>Captain Marvel</h2>
            </div>
            </li>
            <li className="li-9" onClick={this.GetSiblings}style={{backgroundImage: `url(${tornade})`}}>
            <h3>9<span>th</span></h3>
            <div className="content">
                    <h2>Tornade</h2>
            </div>
            </li>
            <li className="li-8" onClick={this.GetSiblings}style={{backgroundImage: `url(${catWoman})`}}>
            <h3>8<span>th</span></h3>
            <div className="content">
                <h2>CatWoman</h2>
            </div>
            </li>
            <li className="li-7" onClick={this.GetSiblings}style={{backgroundImage: `url(${mystique})`}}>
            <h3>7<span>th</span></h3>
            <div className="content">
                <h2>Mystique</h2>
            </div>
            </li>
            <li className="li-6" onClick={this.GetSiblings} style={{backgroundImage: `url(${quinn})`}}>
            <h3>6<span>th</span></h3>
            <div className="content">
                <h2>Harley Quinn</h2>

            </div>
            </li>
            <li className="li-5" onClick={this.GetSiblings} style={{backgroundImage: `url(${jean})`}}>
            <h3>5<span>th</span></h3>
            <div className="content">
                <h2>Jean Grey</h2>

            </div>
            </li>
            <li className="li-4" onClick={this.GetSiblings} style={{backgroundImage: `url(${supergirl})`}}>
            <h3>4<span>th</span></h3>
            <div className="content">
                <h2>Supergirl</h2>

            </div>
            </li>
            <li className="li-3" onClick={this.GetSiblings} style={{backgroundImage: `url(${wonderWoman})`}}>
            <h3>3<span>rd</span></h3>
            <div className="content">
                <h2>Wonder Woman</h2>
            </div>
            </li>
            <li className="li-2" onClick={this.GetSiblings} style={{backgroundImage: `url(${scarlett})`}}>
            <h3>2<span>nd</span></h3>
            <div className="content">
                <h2>Scarlett Spider</h2>
            </div>
            </li>
            <li className="li-1" onClick={this.GetSiblings} style={{backgroundImage: `url(${batgirl})`}}>
            <h3>1<span>st</span></h3>
            <div className="content">
                <h2>Batgirl</h2>
            </div>
            </li>
        </ul>
        <NavLink className="link" to='/'> <i className="fas fa-undo"/> </NavLink>
        </div>
    )
    }
}
export default TopWomen;
