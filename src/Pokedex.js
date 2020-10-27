import React, { Component } from 'react';
import Pokecard from './Pokecard';


class Pokedex extends Component {
    render(){

        const data = this.props.data;
        const isWinner = this.props.isWinner;
        let result = (isWinner ? 'This deck wins!' : '');

        return(

            <>
                <h1>{result}</h1>
                <div className="Pokedex">
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
            </>
        );
    }
}



export default Pokedex;
