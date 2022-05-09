const randomNumber = () => Math.floor(Math.random() * 100);

const transformToUpperCase = (text) => text.toUpperCase();

const stringFirstLetter = (text) => text.charAt(0);

const concatStrings = (string1, string2) => string1 + string2;

function dogApi() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response
      .json()
      .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
    );
  }

module.exports = {
  randomNumber,
  transformToUpperCase,
  stringFirstLetter,
  concatStrings,
  dogApi,
}
