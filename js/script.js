var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
   // options
   cellAlign: 'left',
   contain: true,

});

// element argument can be a selector string
//   for an individual element

var flkty = new Flickity('.carousel', {
   hash: true,
   pageDots: false,
});


document.getElementById('reset').addEventListener('click', function () {
   flkty.selectCell(0);
})

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
   progress = Math.max(0, Math.min(1, progress));
   progressBar.style.width = progress * 100 + '%';
});