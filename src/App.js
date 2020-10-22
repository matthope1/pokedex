import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import {pokeData} from './pokedata';

function App() {
  console.log(pokeData);
  return (
    <div className="App">
      <h1>hello</h1>
      <Pokedex/>
    </div>
  );
}

export default App;
