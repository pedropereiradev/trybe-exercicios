//Parte 1

// Exercício 1:
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

// Exercício 2:
// REFERENCIA:
// https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const orderArray = (oddsAndEvens) => oddsAndEvens.sort((a, b) => a - b);

console.log(orderArray(oddsAndEvens)); // será necessário alterar essa linha 😉

//Parte 2

// Exercício 1:

// const fatorial = num => {
//    let resultado = num;
//   for (let i = 1; i < num; i += 1) {
//     resultado *= i;
//   }
//   return resultado;

// }

const fatorial = (num) => (num === 1 ? 1 : num * fatorial(num - 1));

console.log(fatorial(1));

// Exercício 2:
const longestWord = phrase => {
  let biggerWord = "";

  phrase.split(" ").forEach((word) => {
    if (word.length > biggerWord.length) {
      biggerWord = word;
    }
  });
  console.log(biggerWord);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
