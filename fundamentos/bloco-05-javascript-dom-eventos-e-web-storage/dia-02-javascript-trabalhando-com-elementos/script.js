// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let addTitle = document.createElement("h1");
addTitle.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
document.body.appendChild(addTitle);

// 2. Adicione a tag main com a classe main-content como filho da tag body
let addMain = document.createElement('main');
addMain.className = 'main-content'
document.body.appendChild(addMain);

