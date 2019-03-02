var goodCardsData = [
  {
      price: 557,
      img: 'img/1.png',
      name: 'rb41rr erica club',
      buttonTag: 'span'
  }, {
      price: 523,
      img: 'img/2.png',
      name: 'rb41rr erica vhr-16',
      buttonTag: 'span'
  }, {
      price: 447,
      img: 'img/3.png',
      name: 'rb41rr chris vh-2992',
      buttonTag: 'span'
  }, {
      price: 552,
      img: 'img/4.png',
      name: 'rb41rr jacobs all in',
      buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/2.png',
    name: 'rb41rr erica vhr-16',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }, {
    price: 577,
    img: 'img/4.png',
    name: 'rb41rr jacobs all in',
    buttonTag: 'span'
  }
];

var cardList = document.querySelector('.good-in-cart');

// This code is a machine that construct elements of a card of good
var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
      element.textContent = text;
  }
  return element;
};

// This function creates the whole card Item when adding to the cart button is pressed, step by step(tag by tag)
var createCard = function (product) {
  var listItem = makeElement('div', 'product');

  var picture = makeElement('img', 'product-image');
  picture.src = product.img;
  listItem.appendChild(picture);

  var title = makeElement ('h2', 'product-title', product.name);
  listItem.appendChild(title);

  var price = makeElement('p', 'product-price', product.price);
  listItem.appendChild(price);

  return listItem;
};



var listOfGoods = document.querySelector('.goods-container');

var listOfGoodsTwo = document.querySelector('.list-two');

// This is the function thad authomatically adds goods to the page using information from the array of objects 
var createCardOfGood = function (goodAtributes) {
  var goodContainer = makeElement('a', 'good-source');

  var goodDiv = makeElement('div', 'good');
// Firstly append to the goodDiv and then append goodDiv to the goodContainer
  var pictureOfGood = makeElement('img', 'lolkek');
  pictureOfGood.src = goodAtributes.img;
  goodDiv.appendChild(pictureOfGood);

  var border = makeElement('div', 'border');
  goodDiv.appendChild(border);

  var titleOfGood = makeElement('h1', 'title', goodAtributes.name);
  goodDiv.appendChild(titleOfGood);

  var priceOfGood = makeElement('p', 'alala', goodAtributes.price + ',00 usd');
  goodDiv.appendChild(priceOfGood);

  var buttonToCart = makeElement(goodAtributes.buttonTag, 'add-to-cart-button', 'Add to cart');
  goodDiv.appendChild(buttonToCart);

  goodContainer.appendChild(goodDiv);

  return goodContainer;
};

// Here we call the function to create each element of the array right on the page
for (var j = 0; j < goodCardsData.length; j++) {
  var completeCardOfGood = createCardOfGood(goodCardsData[j]);
  listOfGoods.appendChild(completeCardOfGood);
}

for (var j = 0; j < goodCardsData.length; j++) {
  var completeCardOfGood = createCardOfGood(goodCardsData[j]);
  listOfGoodsTwo.appendChild(completeCardOfGood);
}


// ADDING TO CART WHILE CLICKNG ON 'Addto cart' BUTTON
var addToCartButton = document.querySelectorAll('.add-to-cart-button');

// Tis function takes array of the 'Add to cart' buttons and the array 'goodCardsData'.
// And while you click the 'Add to cart' button it triggers built-in function and certain element
// of the array with similar index as button creates in the cart
var callAddToCartFunction = function (buttonWePress, certainItem) {
  buttonWePress.addEventListener('click', function () {
  cardList.appendChild(certainItem);
  return cardList;
});
  return cardList;
}

  for (var i = 0; i < goodCardsData.length; i++) {
    var cardItem = createCard(goodCardsData[i]);
    callAddToCartFunction(addToCartButton[i], cardItem);
  }
