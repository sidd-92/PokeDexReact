import React, { Component } from "react";
import "./App.css";
import ListPoke from "./Components/ListPoke/ListPoke";
const pokeDictionary = require("./pokemonJSON.json");
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-deck">
          {pokeDictionary.map(p => (
            <ListPoke
              key={p.name}
              name={p.name}
              abilities={p.abilities}
              attack={p.attack}
              defense={p.defense}
              hp={p.hp}
              speed={p.speed}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
