const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.site-menu');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('site-menu--opened');
});

/*
navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav--mobile-opened')) {
    navToggle.classList.remove('main-nav--closed');
    navToggle.classList.add('main-nav--mobile-opened');
  } else {
    navToggle.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav--opened');
  }
});
*/