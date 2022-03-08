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

function techList() {
  
}


module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
};