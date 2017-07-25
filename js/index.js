$(document).ready(function() {
  var long;
  var lat;
  var weatherType;
  var city;
  var cTemp;
  var fTemp;
  var tempChange = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      var url = `//api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${long}&APPID=APPID`;
      $.getJSON(url, function(data) {
        var weatherType = data.weather[0].description;
        var city = data.name;
        var kTemp = data.main.temp;
        var humidity = data.main.humidity;

        cTemp = Math.round(kTemp - 273);
        fTemp = Math.round(cTemp * 1.8 + 32);

        $("#city").html(city);
        $("#temperature").html(`${cTemp} <span class="temp">°C</span>`);

        $("#temperature").on('click', function() {
          if(tempChange === false) {
            $("#temperature").html(`${cTemp} <span class="temp">°C</span>`);
            tempChange = true;
          } else {
            $("#temperature").html(`${fTemp} <span class="temp">°C</span>`);
            tempChange = false;
          };
        })


      });
    })
  }
});
