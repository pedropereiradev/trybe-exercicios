const randomNumber = () => Math.floor(Math.random() * 100);

const transformToUpperCase = (text) => text.toUpperCase();

const stringFirstLetter = (text) => text.charAt(0);

const concatStrings = (string1, string2) => string1 + string2;

module.exports = {
  randomNumber,
  transformToUpperCase,
  stringFirstLetter,
  concatStrings,
}
