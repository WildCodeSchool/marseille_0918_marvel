import React, {Component} from 'react';
import './Top.scss';
import Router from '../Router';
import Menu from '../Menu/menu';
import Home from '../Home';
import {NavLink} from 'react-router-dom'
class Tops extends Component{

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
// Responsive(){
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
        sibling.style.background = "black";
        lis[i].style.width = "100%";
    })
        let contentSibling = sibling.lastElementChild;
        contentSibling.style.bottom = "-100%";
        })
        let content = lis[i].lastElementChild;
            content.style.bottom = "0";
            content.style.opacity = "1";
            content.style.transitionDelay= "0.5s";
            num[i].style.background= "red";
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
          <li className="li-10" onClick={this.GetSiblings}>
            <h3>10<span>th</span></h3>
            <div className="content">
              <h2>Cpt America</h2>
            </div>
          </li>
          <li className="li-9" onClick={this.GetSiblings}>
            <h3>9<span>th</span></h3>
            <div className="content">
              <h2>Deadpool</h2>
            </div>
          </li>
          <li className="li-8" onClick={this.GetSiblings}>
            <h3>8<span>th</span></h3>
            <div className="content">
              <h2>Hulk</h2>
            </div>
          </li>
          <li className="li-7" onClick={this.GetSiblings}>
            <h3>7<span>th</span></h3>
            <div className="content">
              <h2>Wolverine</h2>
            </div>
          </li>
          <li className="li-6" onClick={this.GetSiblings}>
            <h3>6<span>th</span></h3>
            <div className="content">
              <h2>Cpt Marvel</h2>

            </div>
          </li>
          <li className="li-5" onClick={this.GetSiblings}>
            <h3>5<span>th</span></h3>
            <div className="content">
              <h2>Invisibility Woman</h2>

            </div>
          </li>
          <li className="li-4" onClick={this.GetSiblings}>
            <h3>4<span>th</span></h3>
            <div className="content">
              <h2>Daredevil</h2>

            </div>
          </li>
          <li className="li-3" onClick={this.GetSiblings}>
            <h3>3<span>rd</span></h3>
            <div className="content">
              <h2>The Punisher</h2>
            </div>
          </li>
          <li className="li-2" onClick={this.GetSiblings}>
            <h3>2<span>nd</span></h3>
            <div className="content">
              <h2>Thor</h2>
            </div>
          </li>
          <li className="li-1" onClick={this.GetSiblings}>
            <h3>1<span>st</span></h3>
            <div className="content">
              <h2>Spiderman</h2>
            </div>
          </li>
        </ul>
        <NavLink className="link" to='/' onClick='/'> <i className="fas fa-undo"/> </NavLink>
        </div>
    )
  }
}
export default Tops;
