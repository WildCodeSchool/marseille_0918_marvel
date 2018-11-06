import React, { Component } from "react";
import Cards from "./Cards/Cards";
import filteredData from "./superFiltered.json";
import { NavLink } from "react-router-dom";
import NavBarHero from "../NavBarHero/NavBarHero";

class Indexx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementMax: 20,
      tab: filteredData.filter((character, idx) => idx < 20)
    };
  }

  loadMore() {
    this.setState({ elementMax: this.state.elementMax + 20 });
    let newData = filteredData.filter(
      (character, idx) =>
        idx >= this.state.elementMax &&
        idx < this.state.elementMax + 20 &&
        idx < filteredData.length
    );
    this.setState({
      tab: [...this.state.tab, ...newData]
    });
  }

  render() {
    return (
      <div className="indexx">
      <NavBarHero />
        <Cards characters={this.state.tab} />
        <button
          onClick={() => {
            this.loadMore();
          }}
        >
          Load More
        </button>
        <NavLink className="link" to="/" onClick="/">
          back home{" "}
        </NavLink>
      </div>
    );
  }
}

export default Indexx;
