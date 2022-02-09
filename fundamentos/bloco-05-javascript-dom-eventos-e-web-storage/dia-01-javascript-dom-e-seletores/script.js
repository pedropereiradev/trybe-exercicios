/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()

*/

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeTagText(tagText, index, content) {
  let newDescription = document.getElementsByTagName(tagText);
  newDescription[index].innerText = content;
}

changeTagText(
  "p",
  1,
  "Daqui a 2 anos serei um desenvolvedor pleno trabalhando no exterior ganhando em uma moeda forte."
);


// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorClass(changeClass, index, color) {
  let newColor = document.getElementsByClassName(changeClass);
  newColor[index].style.backgroundColor = color;
}

changeColorClass("main-content", 0, "green");


//  3. Crie uma função que mude a cor do quadrado vermelho para branco.
changeColorClass("center-content", 0, "white");


//  4. Crie uma função que corrija o texto da tag <h1>.



//  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.



//  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.


