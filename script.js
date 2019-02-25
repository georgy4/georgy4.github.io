var openCart = document.querySelector('.cart');
var closeBtn = document.querySelector('.close-btn');
var field = document.querySelector('.close--cart');

openCart.addEventListener('click', function () {
    field.classList.toggle('open--cart');
});

closeBtn.addEventListener('click', function () {
    field.classList.toggle('open--cart');
});



