import React, { Component } from 'react';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

class Pokecard extends Component {
    render(){
        
        const {id, name, type, exp} = this.props;

        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
        // FIXME: This link doesn't work
        // let imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}`;
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return(
            <div className="Pokecard">
                <h2>{name}</h2>
                <img src={imgSrc} alt={`picture of ${name}`}/>
                <p>type: {type}</p>
                <p>EXP: {exp}</p>
                <p>{padToThree(id)}</p>
            </div>
        );
    }
}


export default Pokecard;