const buttonMenu = document.querySelector('#btn-menu');

buttonMenu.addEventListener('click', () => {
  const menuMobile = document.querySelector("#menu-mobile");
  
  menuMobile.classList.toggle("show-menu");
});

const chapterTitle = document.querySelector("#chapter-title");
const infoTitle = document.querySelector("#information-title");

chapterTitle.addEventListener('click', () => {
  const chapterList = document.querySelector("#chapters-list-mobile");
  chapterList.classList.toggle("show-aside-chapters");
});

infoTitle.addEventListener("click", () => {
  const infoList = document.querySelector("#info-list-mobile");

  infoList.classList.toggle("show-aside-info");
});
