//* This file is to give image to each card based on the name of the poekemon

//! TODO
/* //? 1. Store name and URL of image */
let names = require("./getAllPokeNames");
let imageMap = new Map();
//! Function that returns url and name of pokemon
let giveImageName = imageName => {
  imageMap.set(
    imageName,
    "../../assets/images/" + imageName.toLowerCase() + ".png"
  );
  return imageMap;
};

names.names.map(name => giveImageName(name));
console.log(imageMap);
module.exports = imageMap;
