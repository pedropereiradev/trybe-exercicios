const num1 = 100;
const num2 = 50;
const num3 = 200;
let result;

if (num1>num2 && num1>num3) {
  result = "O PRIMEIRO número é o MAIOR.";
} else if (num2>num1 && num2>num3) {
    result = "O SEGUNDO número é o MAIOR.";
} else {
    result = "O TERCEIRO número é o MAIOR.";
}

console.log(result);
