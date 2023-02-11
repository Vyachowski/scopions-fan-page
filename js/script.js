const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.site-menu');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('site-menu--opened');
});