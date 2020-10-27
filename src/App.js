import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import {pokeData} from './pokedata';

function App() {
  return (
    <div className="App wrapper">
      {/* <Pokedex data={pokeData}/> */}
      <Pokegame data={pokeData}/>
    </div>
  );
}

export default App;
