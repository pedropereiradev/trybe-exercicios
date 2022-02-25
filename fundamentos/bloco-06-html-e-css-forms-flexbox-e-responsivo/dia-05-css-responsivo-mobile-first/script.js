const buttonMenu = document.querySelector('#btn-menu');

buttonMenu.addEventListener('click', () => {
  const menuMobile = document.querySelector("#menu-mobile");
  
  menuMobile.classList.toggle("show-menu");
});