/*
Wind Chill Formula
f = 35.74 + 0.6215 * t - 35.75 * s * Math.pow(0.16) + 0.4275 * t * s * Math.pow(0.16)

f = wind chill factor in fahrenheit
t = average air temp in fahrenheit
s = wind spped in miles per hour
*/ 

// Variables
let t = document.getElementById("temp");
let s = document.getElementById("speed");

let speed = parseInt(s);
let temp = parseInt(t);

// Computes the wind chill
if (temp <= 50 && speed > 3){
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(s,0.16)
    
    document.getElementById("chill").innerHTML = `${Math.round(wc)}&#176;`;
}
else {
    document.getElementById("chill").innerHTML = "N/A"
}



// OpenWeatherMap API Key
const apiKey = '5e8bfdfbf705960fd8680dfebfbf0726'; 
// OpenWeatherMap API URL
const apiURL = 'https://api.openweathermap.org/data/2.5/weather';

const stGeorge = "5546220";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });


    function getWeather() {
        let temperature = document.getElementById('temp');
        let description = document.getElementById("description");
        let location = document.getElementById("location");
      
        let api = "https://api.openweathermap.org/data/2.5/weather";
        let apiKey = '5e8bfdfbf705960fd8680dfebfbf0726';
      
        location.innerHTML = "Locating...";
      
        navigator.geolocation.getCurrentPosition(success, error);
      
        function success(position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
      
          let url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=imperial";
      
          fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              let temp = data.main.temp;
              temperature.innerHTML = temp + "° F";
              location.innerHTML =
                data.name + " (" + latitude + "°, " + longitude + "°)";
              description.innerHTML = data.weather[0].main;
            });
        }
      
        function error() {
          location.innerHTML = "Unable to retrieve your location";
        }
      }
      
      getWeather();