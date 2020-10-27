import React, { Component } from 'react';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';

// Pokegame should take your list of 8 pokemon and randomly assign
// them into two hands of 4 cards each
// it should then render two pokedex compoenents one for each hand

function getRandomNumbers(n) {
    const randomNumList = [];

    let randomNum;

    while (randomNumList.length < 4){ 
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
        handTwo = hands[0];

        console.log(handOne);
        console.log(handTwo);

        return(
            <div className="Pokegame">
                <div className="hand">
                    {handOne.map(item => 
                        <Pokecard
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            exp={item.base_experience}
                        />
                    )}
                </div>

                <div className="hand">
                    {handTwo.map(item => 
                        <Pokecard
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            exp={item.base_experience}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Pokegame;