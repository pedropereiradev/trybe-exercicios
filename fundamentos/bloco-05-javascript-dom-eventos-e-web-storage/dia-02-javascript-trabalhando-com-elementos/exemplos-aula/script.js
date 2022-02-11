//Parte 1

// Acesse o elemento elementoOndeVoceEsta
let whereAreYou = document.querySelector("#elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele
let fatherElement = whereAreYou.parentNode;
fatherElement.style.color = "red";
/* console.log(fatherElement);  */

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele
let childrenOfChildren = document.getElementById("primeiroFilhoDoFilho");
childrenOfChildren.innerText = 'Adiciona texto ao filho do filho';

// Acesse o primeiroFilho a partir de pai 
//let childElement = fatherElement.firstChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
//let childElement = whereAreYou.previousElementSibling;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
//let childElement = whereAreYou.nextElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
//let childElement = whereAreYou.nextElementSibling.innerText;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
//let childElement = whereAreYou.nextElementSibling;


//console.log(childElement);


// Agora acesse o terceiroFilho a partir de pai
let father = document.querySelector("#pai");
//console.log(pai);
let thirdChild = father.children[2];

//console.log(thirdChild);


// Parte 2
// Crie um irmão para elementoOndeVoceEsta
let newSibling = document.createElement('section');
newSibling.innerText = 'Nova seção criada pelo Javascript';
father.appendChild(newSibling);

// Crie um filho para elementoOndeVoceEsta
let newChild = document.createElement("section");
newChild.innerText = "Nova seção criada pelo Javascript";
whereAreYou.appendChild(newChild);

// Crie um filho para primeiroFilhoDoFilho
let newChildOfFirstChild = document.createElement("section");
newChildOfFirstChild.innerText = "Nova seção criada pelo Javascript";
childrenOfChildren.appendChild(newChildOfFirstChild);

// A partir desse filho criado, acesse terceiroFilho
let acessThirdChild = childrenOfChildren.lastChild;
//console.log(acessThirdChild.parentElement.parentElement.nextElementSibling);

/* let fatherOfFather = document.getElementById("paiDoPai");
let fatherOfFatherSections = document.getElementsByTagName("section");
//console.log(fatherOfFatherSections);

for (let i = 0; i < fatherOfFatherSections.length; i += 1) {
  let idName = fatherOfFatherSections[i].id;
  console.log(idName);
   if (
    idName !== "pai" &&
    idName !== "elementoOndeVoceEsta" &&
    idName !== "primeiroFilhodoFilho"
  ) {
    fatherOfFatherSections.remove(section);
  } 
  console.log(fatherOfFatherSections);
}
 */

