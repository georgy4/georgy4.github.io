var openCart = document.querySelector('.cart');
var closeBtn = document.querySelector('.close-btn');
var field = document.querySelector('.close--cart');
var menuButton = document.querySelector('.menu-btn');
var mobileMunu = document.querySelector('.menu');

openCart.addEventListener('click', function () {
    field.classList.toggle('open--cart');
    mobileMunu.classList.remove('mobile-menu-visible');
});

closeBtn.addEventListener('click', function () {
    field.classList.toggle('open--cart');
});

menuButton.addEventListener('click', function () {
    mobileMunu.classList.toggle('mobile-menu-visible');
    field.classList.remove('open--cart');
});





