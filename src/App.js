import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import Pokegame from './PokeGame';
import {pokeData} from './pokedata';

function App() {
  // TODO: App should render a pokegame
  return (
    <div className="App wrapper">
      <h1>Pokedex</h1>
      <Pokedex data={pokeData}/>
    </div>
  );
}

export default App;
