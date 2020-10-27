import React, { Component } from 'react';
import Pokedex from './Pokedex';


// Pokegame should take your list of 8 pokemon and randomly assign
// them into two hands of 4 cards each
// it should then render two pokedex compoenents one for each hand

function getRandomNumbers(n) {
    const randomNumList= [];

    let randomNum;

    while (randomNumList.length < 4){ 
        randomNum = Math.floor(Math.random() * 8);
        if (!randomNumList.includes(randomNum)) {
            randomNumList.push(randomNum);
        }
    }

    return randomValues;
}


function populateHands(data) {

    const randomIndexes = getRandomNumbers(4);

}

class Pokegame extends Component {

    render() {
        const data = this.props.data;
        // pick 4 random indexes from data

        populateHands(data);

        const handOne = [];
        const handTwo = [];

        return(
            <div className="Pokegame">
                <div className="hand">

                </div>

                <div className="hand">

                </div>
            </div>
        )
    }
}

export default Pokegame;