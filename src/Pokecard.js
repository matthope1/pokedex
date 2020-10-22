import React, { Component } from 'react';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

class Pokecard extends Component {
    render(){
        
        const {id, name, type, exp} = this.props;
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return(
            <div className="Pokecard">
                <h2>{name}</h2>
                <img src={imgSrc} alt={`picture of ${name}`}/>
                <p>type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        );
    }
}


export default Pokecard;