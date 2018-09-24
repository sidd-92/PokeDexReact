//* This file will help to get all pokemon names and export them to imageGiver

let pokeDict = require("../pokemonJSON.json");
let names = pokeDict.map(poke => poke.name);

module.exports = { names };
