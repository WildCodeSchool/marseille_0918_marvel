import React, { Component } from "react";
import axios from "axios";

import "./Hero.scss";

import CardIdentity from "./CardIdentity";
import CardSuperId from "./CardSuperId";
import CardPhysical from "./CardPhysical";
import CardStats from "./CardStats";
import CardAffiliation from "./Affiliation";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Router from "../Router";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: [],
      currentID: ""
    };
  }

  hideGivenList(id, e) {
    if (
      e.target.textContent !== "CLICK FOR MORE!!!" &&
      e.target.textContent !== "CLICK FOR LESS!!!"
    ) {
      let list = document.getElementById(id);
      list.style.display = list.style.display == "none" ? "flex" : "none";
    }
  }

  componentDidMount() {
    axios
      .get(
        `http://www.superheroapi.com/api.php/10217009184163084/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        const heroData = response.data;
        this.setState({
          hero: heroData,
          currentID: this.state.hero.id
        });
      });
  }

  render() {
    if (this.state.hero.name) {
      return (
        <React.Fragment>
          <NavBar />
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
                  hideGivenList={(id, e) => this.hideGivenList(id, e)}
                  fullName={this.state.hero.biography["full-name"]}
                  gender={this.state.hero.appearance.gender}
                  occupation={this.state.hero.work.occupation}
                  location={this.state.hero.work.base}
                  race={this.state.hero.appearance.race}
                />
                <CardSuperId
                  hideGivenList={(id, e) => this.hideGivenList(id, e)}
                  aliases={this.state.hero.biography.aliases}
                  firstAppearance={
                    this.state.hero.biography["first-appearance"]
                  }
                  alignment={this.state.hero.biography.alignment}
                />
                <CardPhysical
                  hideGivenList={(id, e) => this.hideGivenList(id, e)}
                  hair={this.state.hero.appearance["hair-color"]}
                  eyes={this.state.hero.appearance["eye-color"]}
                  weight={this.state.hero.appearance.weight[1]}
                  height={this.state.hero.appearance.height[1]}
                />
                <CardStats
                  hideGivenList={(id, e) => this.hideGivenList(id, e)}
                  combat={this.state.hero.powerstats.combat}
                  intelligence={this.state.hero.powerstats.intelligence}
                  power={this.state.hero.powerstats.power}
                  speed={this.state.hero.powerstats.speed}
                />
                <CardAffiliation
                  hideGivenList={(id, e) => this.hideGivenList(id, e)}
                  group={this.state.hero.connections["group-affiliation"]}
                  relatives={this.state.hero.connections.relatives}
                  firstAppearance={
                    this.state.hero.biography["first-appearance"]
                  }
                  id={this.state.hero.id}
                />
              </div>
            </section>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    return null;
  }
}
