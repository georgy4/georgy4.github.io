// COUNTER OF GOOD IN CART

var openingCart = function () {
  var plusOneButton = document.querySelectorAll('.quantity-plus');
  var countOfGood = document.querySelectorAll('.quantity-of-good');
  var minusOneButton = document.querySelectorAll('.quantity-minus');
  var el = document.querySelectorAll('.quantity');
  var removeButton = document.querySelectorAll('.remove-good');
  var prod = document.querySelectorAll('.product');
  var contGoods = document.querySelector('.good-in-cart');

var countGoods = function (psul, minuz, schet, remover, pro) {
  psul.addEventListener('click', function (){
    schet.textContent++;
    return schet.textContent;
  });
  minuz.addEventListener('click', function (){
    while (schet.textContent > 1) {
      schet.textContent--;
    return schet.textContent;
    };
  });
  remover.addEventListener('click', function (){
    contGoods.removeChild(pro);
  });
};

  for (var i = 0; i < el.length; i++) {
    countGoods(plusOneButton[i], minusOneButton[i], countOfGood[i], removeButton[i], prod[i]);
  }
};

