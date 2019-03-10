    // MOVE CART HANDLER

    var popupHandle = document.querySelector('.popup-top');
    var popupBlock = document.querySelector('.popup');
    
    popupHandle.addEventListener('mousedown', function(evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
    
      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
    
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };
    
        popupBlock.style.top = (popupBlock.offsetTop - shift.y) + 'px';
        popupBlock.style.left = (popupBlock.offsetLeft - shift.x) + 'px';
      };
    
      var onMouseUp = function (upEvt) {
          upEvt.preventDefault();
    
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
      };
    
    
    
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });



//     var ball = document.querySelector('.popup');

// ball.onmousedown = function(e) {

//   var coords = getCoords(ball);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;

//   ball.style.position = 'absolute';
//   document.body.appendChild(ball);
//   moveAt(e);

//   ball.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     ball.style.left = e.pageX - shiftX + 'px';
//     ball.style.top = e.pageY - shiftY + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   };

// }

// ball.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }