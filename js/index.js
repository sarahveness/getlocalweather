require('dotenv').config()

$(document).ready(function() {

  var x = document.getElementById("demo");

  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {
    var long = position.coords.longitude;
    var lat = position.coords.latitude;

    function getWeather() {
      var url= `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

      $.getJSON(url, function(data) {
        console.log(data)
      });
    };
  }





window.onload = getLocation();
});
