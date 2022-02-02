/* //Parte 1 - Variáveis 
const myName = "Pedro";
const birthCity = "Pelotas-RS";

let birthYear = 2000;

birthYear = 2030;
//birthCity = "São Paulo"; Exibe uma mensagem de erro pois estou tentando modificar o valor que foi atribuido a uma constante.

console.log(myName);
console.log(birthCity);
console.log(birthYear); */

// Parte 2 - Tipos primitivis, Tipagem Dinâmica e Operações Aritméticas
/* let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);


const base = 5;
let height = 8;

let area;
let perimeter;

area = base * height;
console.log(area);

perimeter = (base*2) + (height*2);
console.log(perimeter);*/

//Parte 3 - Condições If e Else
/* const nota = 70;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(O)");
}
else if (nota<80 && nota>=60) {
  console.log("Você está na lista de espera")
}
else {
  console.log("Você foi reprovada(o)");
} */

//Parte 5 - Opreadores Lógicos
/* const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} */

/* const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); */

// AND Condition exemplo
/* const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao; */

//AND Condition exercicio
/* const currentHour = 23; //Valor entre 4 e 24
let message;

if (currentHour >= 22) {
  message = "Não devemos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheirinho de café passado";
} else {
  message = "Horário fora do escopo.";
}

console.log(message); */

//OR Condition exemplo
/* const bebidaPrincipal = "cafezinho";
const bebidaAlternativa = "suco de laranja";

if (
  bebidaPrincipal === "cafezinho" ||
  bebidaAlternativa === "suco de laranja"
) {
  console.log("Obrigado por me atender :D");
} else {
  console.log("Ei, eu não pedi isso!");
}
 */

//OR Condition exercício
let weekDay = "sabado";

if (
  weekDay == "segunda-feira" ||
  weekDay == "terça-feira" ||
  weekDay == "quarta-feira" ||
  weekDay == "quinta-feira" ||
  weekDay == "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay == "sabado" || weekDay == "domingo") {
  console.log("FINALMENTE, descanso merecido UwU");
}
