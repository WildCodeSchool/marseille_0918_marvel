import React, {Component} from 'react';
import './TopBad.scss';
import '../../Variables.scss';
import {NavLink} from 'react-router-dom';

// Import Pictures
import mystique from './topBad/mystique.jpg';
import venom from './topBad/venom.jpg';
import magneto from './topBad/magneto.jpg';
import galactus from './topBad/galactus.jpg';
import lady from './topBad/lady.jpg';
import joker from './topBad/joker.jpg';
import quinn from './topBad/quinn.jpg';
import carnage from './topBad/carnage.jpg';
import lex from './topBad/lex.jpg';
import thanos from './topBad/thanos.jpg';

class TopBad extends Component{

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
          <li className="li-10" onClick={this.GetSiblings} style={{backgroundImage: `url(${mystique})`}}>
            <h3>10<span>th</span></h3>
            <div className="content">
              <h2>Mystique</h2>
            </div>
          </li>
          <li className="li-9" onClick={this.GetSiblings} style={{backgroundImage: `url(${venom})`}}>
            <h3>9<span>th</span></h3>
            <div className="content">
              <h2>Venom</h2>
            </div>
          </li>
          <li className="li-8" onClick={this.GetSiblings} style={{backgroundImage: `url(${magneto})`}}>
            <h3>8<span>th</span></h3>
            <div className="content">
              <h2>Magneto</h2>
            </div>
          </li>
          <li className="li-7" onClick={this.GetSiblings} style={{backgroundImage: `url(${galactus})`}}>
            <h3>7<span>th</span></h3>
            <div className="content">
              <h2>Galactus</h2>
            </div>
          </li>
          <li className="li-6" onClick={this.GetSiblings} style={{backgroundImage: `url(${lady})`}}>
            <h3>6<span>th</span></h3>
            <div className="content">
              <h2>Lady Deathstrike</h2>

            </div>
          </li>
          <li className="li-5" onClick={this.GetSiblings} style={{backgroundImage: `url(${carnage})`}}>
            <h3>5<span>th</span></h3>
            <div className="content">
              <h2>Carnage</h2>

            </div>
          </li>
          <li className="li-4" onClick={this.GetSiblings} style={{backgroundImage: `url(${thanos})`}}>
            <h3>4<span>th</span></h3>
            <div className="content">
              <h2>Thanos</h2>

            </div>
          </li>
          <li className="li-3" onClick={this.GetSiblings} style={{backgroundImage: `url(${lex})`}}>
            <h3>3<span>rd</span></h3>
            <div className="content">
              <h2>Lex Luthor</h2>
            </div>
          </li>
          <li className="li-2" onClick={this.GetSiblings} style={{backgroundImage: `url(${joker})`}}>
            <h3>2<span>nd</span></h3>
            <div className="content">
              <h2>Joker</h2>
            </div>
          </li>
          <li className="li-1" onClick={this.GetSiblings} style={{backgroundImage: `url(${quinn})`}}>
            <h3>1<span>st</span></h3>
            <div className="content">
              <h2>Harley Quinn</h2>
            </div>
          </li>
        </ul>
        <NavLink className="link" to='/'> <i className="fas fa-undo"/> </NavLink>
        </div>
    )
  }
}
export default TopBad;
