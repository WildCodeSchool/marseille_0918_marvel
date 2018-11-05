import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import filteredData from "../Indexx/superFiltered.json";
import axios from "axios";
import './Search.scss';

class Search extends Component {
  state = {
    // THE ACTIVE SELECTION'S INDEX
    activeSuggestion: 0,
    // // WHETHER OR NOT THE SUGGESTION LIST IS SHOWN
    showSuggestions: false,
    // CHARACTERS AFTER FILTER PUBLISHER AND ID
    suggestions: [],
    // REDIRECT TO HERO PAGE
    toHeroPage: false,
    }

  // REMISE A ZERO SUGGESTIONS, MINUMUM CARACTERES ET FILTRE RECHERCHE
  onChange = e => {
    this.setState({suggestions : []})
    if (this.refs.searchBar.value.length >= 1) {
      return (
        this.setState({suggestions : filteredData.filter((character) => 
        character.name.toLowerCase().startsWith(this.refs.searchBar.value.toLowerCase()) || character.biography["full-name"].toLowerCase().startsWith(this.refs.searchBar.value.toLowerCase())
        ), showSuggestions: true})
      )
    } else {
      return (
        this.setState({suggestions: []})
      )
    }
  }

    // EVENT FIRED WHEN THE USER CLICKS ON A SUGGESTION
  onClick = e => {
    // UPDATE THE USER INPUT AND RESET THE REST OF THE STATE
    this.setState({
    activeSuggestion: 0,
    showSuggestions: false,
    toHeroPage: true
    });
  };

    // EVENT FIRED WHEN THE USER PRESSES A KEY DOWN
  onKeyDown = e => {
    // BIND STATES
    const { activeSuggestion, suggestions } = this.state;

    // USER PRESSED THE ENTER KEY, UPDATE THE INPUT AND CLOSE THE
    // SUGGESTIONS
    if (e.keyCode === 13) {
      this.setState({
        showSuggestions: false,
        toHeroPage: true
      });
      this.refs.searchBar.value = suggestions[activeSuggestion].name;
    }
    // USER PRESSED THE UP ARROW, DECREMENT THE INDEX
    else if (e.keyCode === 38) {
      if (activeSuggestion === -1) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // USER PRESSED THE DOWN ARROW, INCREMENT THE INDEX
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === this.state.suggestions.length -2) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  }

  render() {

    // BIND STATES PROPS AND FUNCTIONS
    const {
      startRequest,
      minInput,
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        showSuggestions,
        suggestions,
        toHeroPage
      }
    } = this;


    if (toHeroPage === true) {
      return <Redirect to={`/character/${suggestions[activeSuggestion].id}`} 
      />
      this.setState({toHeroPage: false})
    }

    let suggestionsListComponent;

    if (showSuggestions && this.refs.searchBar.value) {
      if (suggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {
          suggestions.map((character, index) => {
            if (index < 7) {

            let className;

              // FLAG THE ACTIVE SUGGESTION WITH A CLASS
              if (index === activeSuggestion) {
                  className = "suggestion-active";}

              if (character.biography["full-name"] !== "" && character.biography["full-name"] !== "-" && character.biography["full-name"] !== character.name) {
                                          
                return (
                  <Link className="SearchLink" to={`/character/${character.id}`}>
                    <li
                    className={className}
                    key={character.id}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    >
                      {character.name}<span className="FullName"> ({character.biography["full-name"]})</span>
                    </li>
                  </Link>                          

                )
              } else {
                return (
                  <Link to={`/character/${character.id}`} >
                    <li
                    className={className}
                    key={character.id}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    >
                      {character.name}
                    </li>
                  </Link>
                )
              }
            }
          })}
        </ul>
      );
      } else {
          suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions !</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
        type="text"
        className="form-control form-control-lg"
        ref="searchBar"
        placeholder="Search your hero !"
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus
        />
          {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Search;