import React, { Component } from "react";
import axios from "axios";

import "./Hero.scss";

import CardIdentity from "./CardIdentity";
import CardSuperId from "./CardSuperId";
import CardPhysical from "./CardPhysical";
import CardStats from "./CardStats";
import CardAffiliation from "./Affiliation";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: []
    };
  }

  displayToggle(e) {
    console.log(e.target.nextSibling);
    if (e.target.nextSibling.style.display == "none") {
      e.target.nextSibling.style.display = "flex";
    } else {
      e.target.nextSibling.style.display = "none";
    }
  }

  hideMe(e) {
    if (e.target.innerHTML.includes("strong")) {
      e.target.parentNode.style.display = "none";
    }
    //  else if (e.target.innerHTML.includes("span")) {
    //   console.log(e.target);
    // } else {
    //   e.target.parentNode.parentNode.style.display = "none";
    // }
  }

  componentDidMount() {
    axios
      .get(
        `http://www.superheroapi.com/api.php/10217009184163084/481`
        // .get(
        //   `http://www.superheroapi.com/api.php/10217009184163084/${
        //     this.props.match.params.id
        //   }`
      )
      .then(response => {
        const heroData = response.data;
        this.setState({
          hero: heroData
        });
      });
  }

  render() {
    if (this.state.hero.name) {
      return (
        <div className="card-container">
          <header>
            <h2>{this.state.hero.name}</h2>
            <h4>{this.state.hero.biography.publisher}</h4>
          </header>

          <section className="card-grid-container">
            <div className="leftSide">
              <div className="idCard cardImg">
                <img
                  src={this.state.hero.image.url}
                  alt={this.state.hero.name}
                />
              </div>
            </div>

            <div className="rightSide">
              <CardIdentity
                funcDisplayTogg={this.displayToggle}
                funcHideMe={this.hideMe}
                fullName={this.state.hero.biography["full-name"]}
                gender={this.state.hero.appearance.gender}
                occupation={this.state.hero.work.occupation}
                location={this.state.hero.work.base}
                race={this.state.hero.appearance.race}
              />
              <CardSuperId
                funcDisplayTogg={this.displayToggle}
                funcHideMe={this.hideMe}
                aliases={this.state.hero.biography.aliases}
                firstAppearance={this.state.hero.biography["first-appearance"]}
                alignment={this.state.hero.biography.alignment}
              />
              <CardPhysical
                funcDisplayTogg={this.displayToggle}
                funcHideMe={this.hideMe}
                hair={this.state.hero.appearance["hair-color"]}
                eyes={this.state.hero.appearance["eye-color"]}
                weight={this.state.hero.appearance.weight[1]}
                height={this.state.hero.appearance.height[1]}
              />
              <CardStats
                funcDisplayTogg={this.displayToggle}
                funcHideMe={this.hideMe}
                combat={this.state.hero.powerstats.combat}
                intelligence={this.state.hero.powerstats.intelligence}
                power={this.state.hero.powerstats.power}
                speed={this.state.hero.powerstats.speed}
              />
              <CardAffiliation
                funcDisplayTogg={this.displayToggle}
                funcHideMe={this.hideMe}
                group={this.state.hero.connections["group-affiliation"]}
                relatives={this.state.hero.connections.relatives}
                firstAppearance={this.state.hero.biography["first-appearance"]}
                id={this.state.hero.id}
              />
            </div>
          </section>
        </div>
      );
    }
    return null;
  }
}
