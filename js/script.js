var elem = document.querySelector('.carousel');
var progressBar = document.querySelector('.progress-bar');

(function () {
   var templateItem = document.getElementById('template').innerHTML;


   Mustache.parse(templateItem);

   var listItems = '';

   for (var i = 0; i < imagesData.length; i++) {
      //            console.log(imagesData);
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

//reset button

document.getElementById('reset').addEventListener('click', function () {
   flkty.selectCell(0);
})


flkty.on('scroll', function (progress) {
   progress = Math.max(0, Math.min(1, progress));
   progressBar.style.width = progress * 100 + '%';
});


//MAP

(function () {

      // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
      window.initMap = function () {

         // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
         var coords1 = {
            lat: 50.064382,
            lng: 19.943420
         };
         var coords2 = {
            lat: 49.987239,
            lng: 20.064183
         };
         var coords3 = {
            lat: 52.229870,
            lng: 21.019985
         };
         var coords4 = {
            lat: 50.265687,
            lng: 19.029957
         }
         var coords5 = {
            lat: 50.040690,
            lng: 21.996066
         }

         var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: imagesData[0].coords,
         });

         for (var i = 0; i < imagesData.length; i++) {

            var marker = new google.maps.Marker({
               position: imagesData[i].coords,
               map: map
            });
            //            2 solusions
            //         first if var

            marker.addListener('click', (function (i) {
               return function () {
                  flkty.selectCell(i);
               }
            })(i));

            //         second if let

            //         marker.addListener('click', function () {
            //            flkty.selectCell(i);
            //         })

            
            flkty.on('change', function (index) {
               map.panTo(imagesData[index].coords);
            });

         };
      }
   })();