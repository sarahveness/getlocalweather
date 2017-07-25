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
      var url= `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
      $.getJSON(url, function(data) {
        console.log(data);
      });
    };
  }





window.onload = getLocation();
});
