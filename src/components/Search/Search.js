import React from "react";
import axios from "axios";
import './Search.scss'

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
        let affichage = e.target.value.replace(/[*_,/@éàè><;:?!$§%ùµø.]/i, "")
        e.target.value = affichage;
        if (e.target.value.length >= 1) {
            return (
                this.startRequest()
            )
        } else if (e.target.value.length < 1) {
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

            <div>
                
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
                        if(/\bmarvel\b|\bcomics\b|\bsharon carter\b/gi.test(character.biography.publisher)){

                            // Filtre les 10 premiers
                            if(index < 10) {

                                // Condition affichage name (full name)
                                if (character.biography["full-name"] !== "" && character.biography["full-name"] !== "-" && character.biography["full-name"] !== character.name) {

                                    return (<li>{character.name} <span className="FullName">({character.biography["full-name"]})</span></li>)

                                } else {

                                    return (<li>{character.name}</li>)

                                }
                            }
                        }
                    })}
                </ul>
                }
            </div>
        )
    }
}

export { Search as default };