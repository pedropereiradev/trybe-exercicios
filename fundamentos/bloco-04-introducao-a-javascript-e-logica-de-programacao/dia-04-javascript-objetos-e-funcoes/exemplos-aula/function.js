// Exercício 1:
function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function resto(num1, num2) {
  return num1 % num2;
}

console.log('Soma:' + soma(10, 35));
console.log("Subtração:" + subtracao(100, 18));
console.log("Multiplicação:" + multiplicacao(10, 3));
console.log("Divisão:" + divisao(50, 25));
console.log("Resto:" + resto(45, 4));

//Exercício 2
function maiorNum(num1, num2) {
  if (num1 > num2) {
    return  num1 + ' é maior que ' + num2;
  } else if (num1 < num2) {
    return  num2 + ' é maior que ' + num1;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 11));

//Exercício 3
function maiorDeTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "o PRIMEIRO número é o MAIOR.";
  } else if (num2 > num1 && num2 > num3) {
    return "o SEGUNDO número é o MAIOR.";
  } else if (num3 > num1 && num3 > num2) {
    return "o TERCEIRO número é o MAIOR.";
  }
}

console.log(maiorDeTres(25, 36, 44));

//Exercício 4
function positiveNumber(num1) {
  if (num1 > 0) {
    return 'POSITIVE';
  } else if (num1 < 0) {
    return 'NEGATIVE';
  } else {
    return 'zero';
  }
}

console.log(positiveNumber(-3));

//Exercício 5


function checkTriangle(ang1, ang2, ang3) {
  let triangle;
  if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
    return "Angulo inválido";
  } else if (ang1 + ang2 + ang3 === 180) {
    triangle = true;
  } else {
    triangle = false;
  }
  return triangle;
}

console.log(checkTriangle(50, 50, 60));

