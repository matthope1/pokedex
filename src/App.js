import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import {pokeData} from './pokedata';

function App() {
  return (
    <div className="App wrapper">
      <h1>Pokedex</h1>
      {/* <Pokedex data={pokeData}/> */}
      <Pokegame data={pokeData}/>
    </div>
  );
}

export default App;
