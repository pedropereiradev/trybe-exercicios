let array = ["java", "javascript", "python", "html", "css"];
let contaLetraMaior = 0;
let contaLetraMenor = 99; 
let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
  for (let index2 = 0; index2<array[index].length; index2 += 1) {
    if (index2 > contaLetraMaior) {
      maiorPalavra = array[index];
      contaLetraMaior = index2;
    }
  }
}

for (let index3 = 0; index3 < array.length; index3 += 1) {
  if(array[index3].length < contaLetraMenor){
    menorPalavra = array[index3];
    contaLetraMenor = array[index3].length;
  }
}

console.log(menorPalavra);
console.log(maiorPalavra);