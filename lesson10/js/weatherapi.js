// Variables
let celsius;

// API key from https://openweathermap.org/
const apiKey = "12345";

// Functions


// Formula
// Fahrenheit = (1.8 * Celsius) + 32
// Celsius = (Fahrenheit - 32) * 1.8
// 1.8 = 5/9 
//function toFahrenheit() {
    //document.getElementById("demo").innerHTML = "Loaded";
//}

document.getElementById("temp").addEventListener("load", toFahrenheit);

function toFahrenheit() {
  document.getElementById("demo").innerHTML = "Loaded";
}

