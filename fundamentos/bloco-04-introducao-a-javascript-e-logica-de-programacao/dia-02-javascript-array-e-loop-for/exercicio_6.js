let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) != 0) {
    somaImpar += 1;
  }
}

if (somaImpar > 0) {
  console.log(somaImpar);
} else {
  console.log("Nenhum valor encontrado");
}