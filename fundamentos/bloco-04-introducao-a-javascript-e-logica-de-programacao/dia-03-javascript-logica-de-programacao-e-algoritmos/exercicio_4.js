let numeroPrimo = 0;
let contaDiv = 0;

for (let index = 0; index <= 50; index += 1) {
  for (let index2 = 0; index2 <= index; index2 += 1) {
    if (index % index2 === 0) {
      contaDiv += 1;
    }
  }
  if (contaDiv === 2 && index > numeroPrimo) {
    numeroPrimo = index;
  }
  contaDiv = 0;
}

console.log("O maior número primo entre 0 e 50 é " + numeroPrimo);