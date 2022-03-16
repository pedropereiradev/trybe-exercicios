const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];
const gol = ["Gol", "VolksWagen", 2019];

// escreva toObject abaixo
const toObject = (...cars) =>
  cars.map((car) => ({
    model: car[0],
    brand: car[1],
    releaseYear: car[2],
  }));

console.log(toObject(palio, shelbyCobra, chiron, gol));
