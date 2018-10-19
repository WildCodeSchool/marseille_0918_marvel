import React, {Component} from 'react';
//import {getSiblings, Get} from './helpers'
import './Top.scss';

class Tops extends Component{

  GetSiblings(){
    // getSiblings()
    // Get()
    // créer une classe avec les différents attributs pour les mettre par defaut dans les li, et le switcher avec une autre classe ou je souahite agrandir la width , pour éviter le problème du clic;

    
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
}
  render(){
    return(
        <div className="bod">
        <ul >
          <li onClick={this.GetSiblings}>
            <h3>10</h3>
            <div className="content">
              <h2>Captain America</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>9</h3>
            <div className="content">
              <h2>Deadpool</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>8</h3>
            <div className="content">
              <h2>Hulk</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>7</h3>
            <div className="content">
              <h2>Wolverine</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>6</h3>
            <div className="content">
              <h2>Captain Marvel</h2>

            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>5</h3>
            <div className="content">
              <h2>Invisibility Woman</h2>

            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>4</h3>
            <div className="content">
              <h2>Daredevil</h2>

            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>3<span>rd</span></h3>
            <div className="content">
              <h2>The Punisher</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>2<span>nd</span></h3>
            <div className="content">
              <h2>Thor</h2>
            </div>
          </li>
          <li onClick={this.GetSiblings}>
            <h3>1<span>st</span></h3>
            <div className="content">
              <h2>Spiderman</h2>
            </div>
          </li>

        </ul>
        </div>
    )
  }
}
export default Tops;
