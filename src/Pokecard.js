import React, { Component } from 'react';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

class Pokecard extends Component {
    render(){
        
        const {id, name, type, exp} = this.props;

        return(
            <div className="Pokecard">

            </div>
        );
    }
}


export default Pokecard;