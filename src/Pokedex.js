import React, { Component } from 'react';
import Pokecard from './Pokecard';



class Pokedex extends Component {
    render(){

        const data = this.props.data;

        return(
            <div className="Pokedex">
                <h1>Pokedex</h1>
                {data.map((item) => 
                    <Pokecard 
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        exp={item.base_experience}
                    />
                )}
            </div>
        );
    }
}


export default Pokedex;