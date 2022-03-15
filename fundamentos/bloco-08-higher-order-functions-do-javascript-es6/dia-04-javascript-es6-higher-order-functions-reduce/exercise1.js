const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const concatArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return concatArray;
}

console.log(flatten());
