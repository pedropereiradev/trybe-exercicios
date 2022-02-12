const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? Devido a classe .tech que tem uma propriedade transform transladando o li 20px no eixo y, ou seja, para cima.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", getClick);
secondLi.addEventListener("click", getClick);
thirdLi.addEventListener("click", getClick);

firstLi.classList.remove("tech");

function removeChecked(clicked) {
  if (clicked === 'first-li') {
    secondLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
  }
  if (clicked === "second-li") {
    firstLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
  }
  if (clicked === "third-li") {
    firstLi.classList.remove("tech");
    secondLi.classList.remove("tech");
  }
}

function getClick(originEvent) {
  let clicked = originEvent.target.id;

  originEvent.target.className = "tech";
  changeText(originEvent);
  removeChecked(clicked);
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'
function changeText(originEvent) {
  originEvent.target.innerText = inputText.value;
}

let inputText = document.querySelector("#input");
inputText.addEventListener('keyup', changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
// https://www.codexworld.com/how-to/open-url-in-new-browser-window-tab-javascript/#:~:text=If%20you%20want%20to%20open,the%20second%20parameter%20of%20window.
 let mySpotrybefy = document.querySelector("#my-spotrybefy");
mySpotrybefy.addEventListener('dblclick', function () {
  window.open('https://github.com/pedropereiradev', '_blank');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText() {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
