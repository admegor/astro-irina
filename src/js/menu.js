let menuBtn = document.querySelector('.header__toggle-wrapper');
let menuBurger = document.querySelector('.header__toggle');

menuBtn.onclick = function() {
    menuBurger.classList.toggle('active');
}
