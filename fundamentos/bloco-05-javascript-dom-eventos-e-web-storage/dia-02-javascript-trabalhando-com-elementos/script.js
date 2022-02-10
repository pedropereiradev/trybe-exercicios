// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let addTitle = document.createElement("h1");
addTitle.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
document.body.appendChild(addTitle);

// 2. Adicione a tag main com a classe main-content como filho da tag body
let addMain = document.createElement('main');
addMain.className = 'main-content'
document.body.appendChild(addMain);

// Função para criar sections na main
function mainSectionCreate(classe) {
  let addSection = document.createElement('section');
  addSection.className = classe;
  addMain.appendChild(addSection);
}

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2
mainSectionCreate('center-content');

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let addParagraph = document.createElement('p');
addParagraph.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ante ex, sed condimentum tellus mollis sit amet. Sed at justo molestie nisl viverra finibus a vitae dui. Suspendisse et dictum est, ac pellentesque lorem. Nullam viverra est ac convallis volutpat. Integer facilisis libero vitae neque lacinia, in mattis est commodo. Praesent vitae tincidunt mi. Integer quis urna lectus. Donec eu ante libero. Nulla fringilla leo id nibh volutpat, id hendrerit nibh posuere. Nullam dictum tincidunt justo pulvinar fermentum. Etiam vestibulum ultricies dapibus. Nunc sagittis libero et elit posuere euismod.";
addMain.firstChild.appendChild(addParagraph);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
mainSectionCreate('left-content');

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
mainSectionCreate('right-content');
