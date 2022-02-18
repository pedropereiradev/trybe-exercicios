/*Utilizado como base: https://cursos.alura.com.br/forum/topico-escreva-um-codigo-que-imprima-um-quadrado-de-asteriscos-161926 */

let lado = 5; 
let linha = '';

for (let index = 0; index < lado; index += 1) {
  for (let index2 = 0; index2 < lado; index2 += 1) {
    linha += '*';
  }
  console.log(linha);
  linha = '';
}