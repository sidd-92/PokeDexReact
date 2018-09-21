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
            <ListPoke key={p.name} all={p} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
