import React from "react";
import axios from "axios";

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


        if (this.state.characters && this.state.characters.length > 0) {

            return ( 
                <div>
                    <input 
                        className="form-control form-control-lg"
                        placeholder="Search hero"
                        ref="searchBar"
                        onChange={this.minInput}
                        autoFocus
                    >
                    </input>
                    <ul>
                        {this.state.characters.map((character, index) => {
                            if(index < 10) {
                                if (character.biography["full-name"] !== "" && character.biography["full-name"] !== "-") {
                                    return (<li>{character.name} ({character.biography["full-name"]})</li>)
                                } else {
                                    return (<li>{character.name}</li>)
                                }
                            }
                        })}
                        
                    </ul>
                </div>
            )


        }
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
            </div>
        )
        
        
    }
}

export { Search as default };