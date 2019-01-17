var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
   // options
   cellAlign: 'left',
   contain: true,
   
});

// element argument can be a selector string
//   for an individual element

var flkty = new Flickity( '.carousel', {
   hash: true,
   pageDots: false,
});


var buttonGroup = document.querySelector('.button-group');

buttonGroup.addEventListener( 'click', function( event ) {
   // filter for button clicks
   if ( !matchesSelector( event.target, '.button' ) ) {
      return;
   }
   var selector = event.target.getAttribute('data-selector');
   flkty.selectCell( selector );
});