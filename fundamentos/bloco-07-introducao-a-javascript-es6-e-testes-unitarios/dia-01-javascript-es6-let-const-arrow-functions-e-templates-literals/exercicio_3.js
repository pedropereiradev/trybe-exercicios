const button = document.querySelector('#button');

button.addEventListener('click', () => {
  let clickCount = document.querySelector("#number-of-clicks");
  let click = parseInt(clickCount.innerText);
  click += 1;
  clickCount.innerText = click;
  console.log(clickCount.innerText);
})