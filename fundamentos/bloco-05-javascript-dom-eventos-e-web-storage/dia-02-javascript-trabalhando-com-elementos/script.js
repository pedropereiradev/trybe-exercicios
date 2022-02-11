// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let addTitle = document.createElement("h1");
addTitle.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
document.body.appendChild(addTitle);

// 2. Adicione a tag main com a classe main-content como filho da tag body
let addMain = document.createElement('main');
addMain.className = 'main-content'
document.body.appendChild(addMain);

// Função para criar sections na main
function mainSectionCreate(elemento, classe) {
  let addSection = document.createElement(elemento);
  addSection.className = classe;
  addMain.appendChild(addSection);
}

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2
mainSectionCreate("section", "center-content");

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let addParagraph = document.createElement('p');
addParagraph.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ante ex, sed condimentum tellus mollis sit amet. Sed at justo molestie nisl viverra finibus a vitae dui. Suspendisse et dictum est, ac pellentesque lorem. Nullam viverra est ac convallis volutpat. Integer facilisis libero vitae neque lacinia, in mattis est commodo. Praesent vitae tincidunt mi. Integer quis urna lectus. Donec eu ante libero. Nulla fringilla leo id nibh volutpat, id hendrerit nibh posuere. Nullam dictum tincidunt justo pulvinar fermentum. Etiam vestibulum ultricies dapibus. Nunc sagittis libero et elit posuere euismod.";
addMain.firstChild.appendChild(addParagraph);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
mainSectionCreate("section", "left-content");

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
mainSectionCreate("section", "right-content");

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let addImage = document.createElement('img');
addImage.src = "https://picsum.photos/20";
addImage.className = 'small-image'
addMain.children[1].appendChild(addImage);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let valuesList = [
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez'
];

let addList = document.createElement('ul');
addList.className = 'list-item';
addMain.children[2].appendChild(addList);

let numberList = addMain.children[2].firstElementChild;

for (let i = 0; i < valuesList.length; i += 1) {
  let numberItem = valuesList[i];

  let numberListItens = document.createElement('li');
  numberListItens.innerText = numberItem;

  numberList.appendChild(numberListItens);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// 11. Adicione a classe description nas 3 tags h3 criadas;
mainSectionCreate('h3', 'description');
mainSectionCreate('h3', 'description');
mainSectionCreate('h3', 'description');


// 10. Adicione a classe title na tag h1 criada;
addTitle.className = 'title';

// 12. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
addMain.removeChild(addMain.children[1]);

// 13. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
let centralizeSection = addMain.children[1];
centralizeSection.style.marginRight = 'auto';

// 14. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let changeBackgrund = addMain.children[0].parentElement
changeBackgrund.style.backgroundColor = 'green';