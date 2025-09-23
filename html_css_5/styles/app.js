const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
});