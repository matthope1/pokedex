import React, { Component } from 'react';
import Pokedex from './Pokedex';

// Pokegame should take your list of 8 pokemon and randomly assign
// them into two hands of 4 cards each
// it should then render two pokedex compoenents one for each hand

function getRandomNumbers(n) {
    const randomNumList = [];

    let randomNum;

    while (randomNumList.length < n){ 
        randomNum = Math.floor(Math.random() * 8);
        if (!randomNumList.includes(randomNum)) {
            randomNumList.push(randomNum);
        }
    }
    return randomNumList;
}

function populateHands(data) {

    const randomIndexes = getRandomNumbers(4);
    
    let handOne = [];
    let handTwo = []; 

    // grab entries from data based
    // on the randomly generated numbers

    randomIndexes.forEach(index => {
        const item = data[index];
        handOne.push(item);
    });
    
    // push remaining items onto hand2
    data.forEach(item => {
        if(!handOne.includes(item)) {
            handTwo.push(item);
        }
    });

    return [handOne, handTwo];
}

class Pokegame extends Component {

    render() {
        const data = this.props.data;
        // pick 4 random indexes from data
        let handOne = [];
        let handTwo = [];

        const hands = populateHands(data);

        handOne = hands[0];
        handTwo = hands[1];

        return(
            <div className="Pokegame">
                <div className="hand">
                    <Pokedex data={handOne} />
                </div>


                <div className="hand">
                    <Pokedex data={handTwo} />
                </div>
            </div>
        )
    }
}

export default Pokegame;