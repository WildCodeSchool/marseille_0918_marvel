import React, { Component } from "react";
import axios from "axios";

import "./Hero.scss";
import filteredData from "../Indexx/superFiltered.json";

import CardIdentity from "./CardIdentity";
import CardSuperId from "./CardSuperId";
import CardPhysical from "./CardPhysical";
import CardStats from "./CardStats";
import CardAffiliation from "./Affiliation";
import NavBarHero from "../NavBarHero/NavBarHero";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import Router from "../Router";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

import ImgHeader from "./headerimg.jpg";

// These variables will allow us to use a random button to change to another hero
const randomId = Math.floor(Math.random() * filteredData.length);
const randomHero = filteredData[randomId].id;

export default class Hero extends Component {
  constructor(props) {
    super(props);

    //WITH THE NEXT FEW LINES WE FIND THE CURRENT HERO DISPLAYED ID IN THE FILTEREDDATA.JSON FILE
    //WHICH WILL ALLOW US TO FIND WHICH ONE IS THE NEXT ONE OR THE PREVIOUS ONE
    let currentfilteredDataID;
    filteredData.filter((element, idx) => {
      if (element.id === this.props.match.params.id) {
        return (currentfilteredDataID = idx);
      }
    });

    let previousId;
    if (currentfilteredDataID === 0) {
      previousId = filteredData[filteredData.length - 1].id;
    } else {
      previousId = filteredData[currentfilteredDataID - 1].id;
    }
    let nextId;
    if (currentfilteredDataID === filteredData.length - 1) {
      nextId = 1;
    } else {
      nextId = filteredData[currentfilteredDataID + 1].id;
    }

    this.state = {
      hero: [],
      currentID: "",
      nextId: nextId,
      previousId: previousId
    };
  }

  hideGivenList(id, e) {
    if (
      !e.target.className.includes("cardBtnMore") &&
      !e.target.className.includes("cardBtnLess")
    ) {
      let list = document.getElementById(id);
      list.style.display = list.style.display === "none" ? "flex" : "none";
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
    console.log(this.state.nextId);
    if (this.state.hero.name) {
      return (
        <React.Fragment>
          <NavBarHero />
          <div className="card-container">
            <header
              className="header-hero"
              style={{ backgroundImage: `url(${ImgHeader})` }}
            >
              <h2>{this.state.hero.name}</h2>
              <h4>{this.state.hero.biography.publisher}</h4>
            </header>
            <section className="card-grid-container">
            <NavLink
                className="arrows arrowLeft"
                to={`/character/${this.state.previousId}`}
                onClick={`/character/${this.state.previousId}`}
              >
                <i class="fas fa-arrow-alt-circle-left"></i>
              </NavLink>
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

              <NavLink
                className="arrows arrowRight"
                to={`/character/${this.state.nextId}`}
                onClick={`/character/${this.state.nextId}`}
              >
                <i className="fas fa-arrow-alt-circle-right"></i>
              </NavLink>
            </section>
              
              <NavLink
                className="random"
                to={`/character/${randomHero}`}
                onClick={`/character/${randomHero}`}
              >
                <i class="fas fa-random"></i>
              </NavLink>

          </div>
          <Footer />
        </React.Fragment>
      );
    }
    return null;
  }
}
