// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

/* let soma = 0;

for (let index = 1; index <= 50; index += 1) {
  soma += index;
}
console.log("O resultado da soma é: " + soma);
 */

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

/* let quantidade = 0;

for (let index = 2; index <= 150; index += 1) {
  if ((index % 3) === 0) {
    quantidade += 1;
  }
}

console.log(quantidade);

if (quantidade === 50) {
  console.log("Vamo que Vamo!!");
}
 */


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

/* let player1 = "pedra";
let player2 = "pedra";

if (player1 === player2) {
  console.log('A Ties');
} else if (
  (player1 === "pedra" && player2 === "tesoura") ||
  (player1 === "papel" && player2 === "pedra") ||
  (player1 === "tesoura" && player2 === "papel")
)
{
  console.log('Player 1 won');
} else if (
  (player1 === "tesora" && player2 === "pedra") ||
  (player1 === "pedra" && player2 === "papel") ||
  (player1 === "papel" && player2 === "tesoura")
)
{
  console.log("Player 2 won");
} */



//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

/* 
let idade = 28;

console.log(idade >= 18 ? 'A pessoa é maior de idade' : 'A pessoa não é maior de idade');
 */

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 20;
let idadeMurilo = 25;
let idadeBaeta = 30;

if (idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta) {
  console.log('Carolzita é a mais nova');
} else if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
  console.log('Murilo é o mais novo');
} else if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
  console.log('Baêta é a mais nova');
} else {
  console.log('Pessoas com idades iguais');
}