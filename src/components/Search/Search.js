import React from "react";
import axios from "axios";
import './Search.scss';
import Router from '../Router'
import { Link } from 'react-router-dom';

//////////////////////////////////////// CLASS /////////////////////////////////


class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            characters: []
        };
        this.startRequest = this.startRequest.bind(this)
        this.minInput = this.minInput.bind(this)
    }

    minInput(e) {
        let affichage = e.target.value;
        affichage = affichage.replace(/[*_,/@éàè><;:?!$§%ùµø.]/i, "")
        if (affichage.length >= 1) {
            return (
                this.startRequest()
            )
        } else if (affichage.length < 1) {
            this.setState({characters: []})
        }
    }

    startRequest() {

        let url = `http://www.superheroapi.com/api.php/10209955207355299/search/${this.refs.searchBar.value}`
        
        axios.get(url)
        
        
        .then((response) => {
            if (response.status === 200 && response.data !== "" && response.data.response === "success") {
                this.setState({characters: response.data.results});
            } else {
                this.setState({characters: []})
            }
        })

        
        .catch((error) => {
            this.setState({characters: []})
        });
    }

    render(){
        return ( 
            <React.Fragment>
                
                <input 
                    className="form-control form-control-lg"
                    placeholder="Search your hero"
                    ref="searchBar"
                    onChange={this.minInput}
                    autoFocus
                >
                </input>

                { // Condition Si Characters défini et nb caractères sup a 0
                this.state.characters && this.state.characters.length > 0 &&

                    <ul className="ListSearch">

                    {//Map characters
                    this.state.characters.map((character, index) => {

                        // Regex Affiche personnage Comics
                        if(/\bmarvel\b|\bcomics\b|\bsharon carter\b|\bphoenix\b/gi.test(character.biography.publisher)){

                            // Filtre les 10 premiers
                            if(index < 10) {

                                // Condition affichage name (full name)
                                if (character.biography["full-name"] !== "" && character.biography["full-name"] !== "-" && character.biography["full-name"] !== character.name) {
                                    

                                    return (
                                                                                
                                            <Link to={`/character/${character.id}`} onClick={`/character/${character.id}`} >
                                                <li>{character.name} <span className="FullName">({character.biography["full-name"]})</span></li>

                                            </Link>
                                        
                                    )
                                } else {
                                    return (
                                    <Link to={`/character/${character.id}`} onClick={`/character/${character.id}`}>
                                        <li>{character.name}</li>
                                    </Link>
                                    )
                                }
                            }
                        }
                    })}
                </ul>
                }
            </React.Fragment>
        )
    }
}

export { Search as default };