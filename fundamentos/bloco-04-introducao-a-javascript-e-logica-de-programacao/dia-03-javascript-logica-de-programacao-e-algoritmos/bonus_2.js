let lado = 5;
let linha = "";

for (let index = 0; index < lado; index += 1) {
  for (let index2 = 0; index2 < lado; index2 += 1) {
    if (index >= index2) {
      linha += "*";  
    }
  }
  console.log(linha);
  linha = "";
}