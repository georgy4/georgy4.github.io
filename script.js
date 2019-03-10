var openCart = document.querySelector('.cart');
var closeBtn = document.querySelector('.close-btn');
var field = document.querySelector('.close--cart');
var menuButton = document.querySelector('.menu-btn');
var mobileMunu = document.querySelector('.menu');

var cartClickHandler = function () {
    field.classList.toggle('open--cart');
    mobileMunu.classList.remove('mobile-menu-visible');
    document.addEventListener('keydown', onCartEscPress);
    };

var menuClickHandler = function () {
    mobileMunu.classList.toggle('mobile-menu-visible');
    field.classList.remove('open--cart');
    document.addEventListener('keydown', onMenuEscPress);
};

var onMenuEscPress = function(evt) {
    if (evt.keyCode === 27) {
        mobileMunu.classList.remove('mobile-menu-visible');
    } 
};

var onCartEscPress = function(evt) {
    if (evt.keyCode === 27) {
        field.classList.remove('open--cart');
    } 
};

openCart.addEventListener('click', cartClickHandler);
openCart.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
    cartClickHandler();
    }
});

closeBtn.addEventListener('click', cartClickHandler);
closeBtn.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
    cartClickHandler();
    }
});

menuButton.addEventListener('click', menuClickHandler);

menuButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        menuClickHandler();
    }
});




var linkOnGood = document.querySelectorAll('.good-source');
for (var i = 0; i < linkOnGood.length; i++) {
    linkOnGood[i].addEventListener('click', function (evt) {
    evt.preventDefault();
});
}

