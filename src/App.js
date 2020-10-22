import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import {pokeData} from './pokedata';

function App() {
  return (
    <div className="App">
      <Pokedex data={pokeData}/>
    </div>
  );
}

export default App;
