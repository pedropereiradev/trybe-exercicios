let backgroundColor = document.querySelector("#background-color");
let fontColor = document.querySelector("#font-color");
let fontSize = document.querySelector("#font-size");
let fontFamily = document.querySelector("#background-color");

console.log(backgroundColor.value);
console.log(fontColor.value);
console.log(fontSize.value);
console.log(fontFamily.value);

function pickBackColor(){
  let pickColor = document.querySelector("#background-color");
  pickColor.addEventListener('click', function (originEvent) {
    console.log(originEvent.target);
  })
}

function pickFontColor() { }

function pickFontSize() { }

function pickFontFamily() {}