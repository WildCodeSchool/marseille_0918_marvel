import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
    // THE ACTIVE SELECTION'S INDEX
    activeSuggestion: 0,
    // THE SUGGESTIONS THAT MATCH THE USER'S INPUT
    filteredSuggestions: [],
    // WHETHER OR NOT THE SUGGESTION LIST IS SHOWN
    showSuggestions: false,
    // CHARACTERS FROM API
    characters: [],
    //CHARACTERS AFTER FILTER PUBLISHER AND ID
    suggestions: []
    };
  }

  // REMISE A ZERO SUGGESTIONS, MINUMUM CARACTERES AVANT REQUETE API
  minInput = e => {
    this.setState({suggestions : []})
    if (this.refs.searchBar.value.length >= 1) {
      return (
        this.startRequest()
      )
    } else {
        this.setState({characters: []})
    }
  }

  // API RESQUEST
  startRequest(){

    let url = `http://www.superheroapi.com/api.php/10209955207355299/search/${this.refs.searchBar.value}`
        
    axios.get(url)
        
    .then((response) => {
      // BIND STATE
      const { suggestions } = this.state;
      
      if (response.status === 200 && response.data !== "" && response.data.response === "success") {
        this.setState({characters: response.data.results});
        
        this.state.characters.map((character, index) => {

          // REGEX INCLURE PUBLISHER ET EXCLURE ID
          if(/\bMarvel Comics\b|\bDC Comics\b|\bSharon Carter\b|\bPhoenix\b|\bDark Horse Comics\b|\bWildstorm\b|\bGiant-Man\b|\bToxin\b|\bAngel\b|\bGoliath\b|\bSpectre\b|\bOracle\b|\bHawkfire\b|\bHanna-Barbera\b|\bIcon Comics\b|\bMeltdown\b|\bBinary\b|\bEvil Deadpool\b|\bIDW Publishing\b|\bGemini V\b|\bArchangel\b|\bTempest\b|\bCaptain Marvel\b/gi.test(character.biography.publisher)
          && !/\b18\b|\b46\b|\b54\b|\b65\b|\b67\b|\b74\b|\b77\b|\b101\b|\b117\b|\b124\b|\b128\b|\b131\b|\b132\b|\b133\b|\b134\b|\b139\b|\b143\b|\b164\b|\b173\b|\b176\b|\b184\b|\b193\b|\b205\b|\b244\b|\b245\b/gi.test(character.id)){
            // AFFICHE 10 CHARACTERS
            if (index < 10) {
              this.setState({
                showSuggestions: true,
                activeSuggestion: -1,
                suggestions: [...this.state.suggestions, character]
              });
            }
          } // SI LE REGEX EST PAS REMPLIE, J'AFFICHE "NO SUGGESTIONS"
          else {
            let suggestionsListComponent = (
              <div className="no-suggestions">
                <em>No suggestions !</em>
              </div>
            );
          }
            })
        } // SI MA CONDITION STATUS, DATA, DATA.RESPONSE N'EST PAS REMPLIE
        else {
          this.setState({suggestions: []})
        }
    })
    
    .catch((error) => {
      this.setState({suggestions: []})
    });
  }

    // EVENT FIRED WHEN THE USER CLICKS ON A SUGGESTION
  onClick = e => {
    // UPDATE THE USER INPUT AND RESET THE REST OF THE STATE
    this.setState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    });
  };

    // EVENT FIRED WHEN THE USER PRESSES A KEY DOWN
  onKeyDown = e => {
    // BIND STATES
    const { activeSuggestion, filteredSuggestions, suggestions } = this.state;

    // USER PRESSED THE ENTER KEY, UPDATE THE INPUT AND CLOSE THE
    // SUGGESTIONS
    if (e.keyCode === 13) {
      this.setState({
        showSuggestions: false,
      });
      this.refs.searchBar.value = suggestions[activeSuggestion].name;
      console.log(suggestions[activeSuggestion].id)
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
  };

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
        filteredSuggestions,
        showSuggestions,
        suggestions,
        characters
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && this.refs.searchBar.value) {
      if (suggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {
          suggestions.map((character, index) => {
          let className;

          // FLAG THE ACTIVE SUGGESTION WITH A CLASS
          if (index === activeSuggestion) {
              className = "suggestion-active";}

          if (character.biography["full-name"] !== "" && character.biography["full-name"] !== "-" && character.biography["full-name"] !== character.name) {
                                      
            return (
              <Link className="SearchLink" to={`/character/${character.id}`} onClick={`/character/${character.id}`}>
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
              <Link to={`/character/${character.id}`} onClick={`/character/${character.id}`} >
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
        onChange={minInput}
        onKeyDown={onKeyDown}
        autoFocus
        />
          {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Search;