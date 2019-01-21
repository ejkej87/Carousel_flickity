var elem = document.querySelector('.carousel');

(function () {
   var templateItem = document.getElementById('template').innerHTML;
   

   Mustache.parse(templateItem);

   var listItems = '';

   for (var i = 0; i < imagesData.length; i++) {
//      console.log(imagesData);
      var render = Mustache.render(templateItem, imagesData[i]);
      elem.insertAdjacentHTML('beforeEnd', render);
   }
})();


var flkty = new Flickity(elem, {
   // options
   cellAlign: 'left',
   contain: true,
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


//MAP

(function () {

   // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
   window.initMap = function () {

      // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
      var uluru = {
         lat: -25.363,
         lng: 131.044
      };

      // W zmiennej map zapisujemy nową instancję obiektu Map. 
      var map = new google.maps.Map(document.getElementById('map'), {
         // Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
         zoom: 4,
         center: uluru
      });

      // Definiujemy marker jako nową instancję obiektu Marker.
      var marker = new google.maps.Marker({
         // I podajemy opcje tego markera, np. na której mapie ma być dodany oraz jakie są jego współrzędne. 
         position: uluru,
         map: map
      });
   }

})();