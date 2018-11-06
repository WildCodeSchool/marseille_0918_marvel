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

import ImgHeader from "./headerimg.jpg";

// These variables will allow us to use a random button to change to another hero
const randomId = Math.floor(Math.random() * filteredData.length);
const randomHero = filteredData[randomId].id;

export default class Hero extends Component {
  constructor(props) {
    super(props);

    //WIT THE NEXT FEW LINES WE FIND THE CURRENT HERO DISPLAYED ID IN THE FILTEREDDATA.JSON FILE
    //WHICH WILL ALLOW US TO FIND WHICH ONE IS THE NEXT ONE OR THE PREVIOUS ONE
    let currentfilteredDataID = 500;
    // I CHOOSE A RANDOM VALID currentfilteredDataID JUST TO PREVENT AN ERROR PAGE IF THE CLIENT WRITE AN ID NUMBER INVALID IN THE URL
    // FOR EXAMPLE THERE IS NO ID 16 AVAILABLE, BUT IF WE WRITE  http://localhost:3000/character/16 WE WILL SEE THANOS
    filteredData.filter((element, idx) => {
      if (element.id === this.props.match.params.id) {
        return (currentfilteredDataID = idx);
      }
    });
    console.log(filteredData);

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
      previousId: previousId,
      idx: currentfilteredDataID
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
    console.log("component did mount");
    //   console.log(filteredData);
    //   axios
    //     .get(
    //       `http://www.superheroapi.com/api.php/10217009184163084/${
    //         this.props.match.params.id
    //       }`
    //     )
    //     .then(response => {
    //       const heroData = response.data;
    //       this.setState({
    //         hero: heroData,
    //         currentID: this.state.hero.id
    //       });
    //     });
  }

  render() {
    // if (this.state.hero.name) {
    return (
      <React.Fragment>
        <NavBarHero />
        <div className="card-container">
          <header
            className="header-hero"
            style={{ backgroundImage: `url(${ImgHeader})` }}
          >
            {/* <h2>{this.state.hero.name}</h2> */}
            <h2>{filteredData[this.state.idx].name}</h2>
            {/* <h4>{this.state.hero.biography.publisher}</h4> */}
            <h4>{filteredData[this.state.idx].biography.publisher}</h4>
          </header>
          <section className="card-grid-container">
            <NavLink
              className="arrows arrowLeft"
              to={`/character/${this.state.previousId}`}
              onClick={`/character/${this.state.previousId}`}
            >
              <i class="fas fa-arrow-alt-circle-left" />
            </NavLink>
            <div className="leftSide">
              <div className="idCard cardImg">
                <img
                  src={filteredData[this.state.idx].image.url}
                  alt={filteredData[this.state.idx].name}
                />
              </div>
            </div>

            <div className="rightSide">
              <CardIdentity
                hideGivenList={(id, e) => this.hideGivenList(id, e)}
                fullName={filteredData[this.state.idx].biography["full-name"]}
                gender={filteredData[this.state.idx].appearance.gender}
                occupation={filteredData[this.state.idx].work.occupation}
                location={filteredData[this.state.idx].work.base}
                race={filteredData[this.state.idx].appearance.race}
              />
              <CardSuperId
                hideGivenList={(id, e) => this.hideGivenList(id, e)}
                aliases={filteredData[this.state.idx].biography.aliases}
                firstAppearance={
                  filteredData[this.state.idx].biography["first-appearance"]
                }
                alignment={filteredData[this.state.idx].biography.alignment}
              />
              <CardPhysical
                hideGivenList={(id, e) => this.hideGivenList(id, e)}
                hair={filteredData[this.state.idx].appearance["hair-color"]}
                eyes={filteredData[this.state.idx].appearance["eye-color"]}
                weight={filteredData[this.state.idx].appearance.weight[1]}
                height={filteredData[this.state.idx].appearance.height[1]}
              />
              <CardStats
                hideGivenList={(id, e) => this.hideGivenList(id, e)}
                combat={filteredData[this.state.idx].powerstats.combat}
                intelligence={
                  filteredData[this.state.idx].powerstats.intelligence
                }
                power={filteredData[this.state.idx].powerstats.power}
                speed={filteredData[this.state.idx].powerstats.speed}
              />
              <CardAffiliation
                hideGivenList={(id, e) => this.hideGivenList(id, e)}
                group={
                  filteredData[this.state.idx].connections["group-affiliation"]
                }
                relatives={filteredData[this.state.idx].connections.relatives}
                firstAppearance={
                  filteredData[this.state.idx].biography["first-appearance"]
                }
                id={filteredData[this.state.idx].id}
              />
            </div>

            <NavLink
              className="arrows arrowRight"
              to={`/character/${this.state.nextId}`}
              onClick={`/character/${this.state.nextId}`}
            >
              <i className="fas fa-arrow-alt-circle-right" />
            </NavLink>
          </section>

          <NavLink
            className="random"
            to={`/character/${randomHero}`}
            onClick={`/character/${randomHero}`}
          >
            <i class="fas fa-random" />
          </NavLink>
        </div>
        <Footer />
      </React.Fragment>
    );
    // }
    // return null;
  }
}
