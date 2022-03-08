// Exercício 1
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

// Exercício 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Exercício 3
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Exercício 4
function encodeMatch(match) {
  let code = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5",
  };
  return code[match];
}

function decodeMatch(match) {
  let code = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return code[match];
}

function encode(str) {
  let newStr = str.replace(/a|e|i|o|u/gi, encodeMatch);
  return newStr;
}

function decode(str) {
  let newStr = str.replace(/1|2|3|4|5/gi, decodeMatch);
  return newStr;
}

// Exercício 5
function techList(techs, name) {
  techs.sort();
  let techArray = [];
  if (!techs.length) return 'Vazio!';

  for (let i = 0; i < techs.length; i += 1) {
    techArray[i] = {
      tech: techs[i],
      name: name,
    }
  }
  return techArray;
}

// Exercício 6
function hydrate(str) {
  let add = 0;
  let regex = /\d+/g;

  let matches = str.match(regex);

  for (let i = 0; i < matches.length; i += 1) {
    add += parseInt(matches[i], 10);
  }

  if (add <= 1) return `${add} copo de água`;

  return `${add} copos de água`;
}

// Exercício Bônus
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {

}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};