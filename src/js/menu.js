let menuBtn = document.querySelector('.header__toggle-wrapper');
let menuBurger = document.querySelector('.header__toggle');
let menuMobile = document.querySelector('.menu__mobile');
let header = document.querySelector('.header');

menuBtn.onclick = function() {
    menuBurger.classList.toggle('active');
    menuMobile.classList.toggle('active');
    header.classList.toggle('open');
}
