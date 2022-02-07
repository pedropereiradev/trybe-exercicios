/* let lado = 5;
let linha = "";

for (let index = lado; index >= 0; index -= 1) {
  for (let index2 = lado; index2 >= 0; index2 -= 1) {
    if (index <= index2) {
      linha += "*";
    }

  }
  console.log(linha);
  linha = "";
}
 */

let lado = 5;
let linha = "";
let espacoBranco = lado - 1;

for (let index = 0; index < lado; index += 1) {
  for (let index2 = 0; index2 < lado; index2 += 1) {
    if (index2 < (espacoBranco)) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);
  espacoBranco -= 1;
  linha = "";
}