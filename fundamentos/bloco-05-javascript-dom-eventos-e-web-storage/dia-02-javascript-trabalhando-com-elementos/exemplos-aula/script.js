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
console.log(pai);
let thirdChild = father.children[2];

console.log(thirdChild);


