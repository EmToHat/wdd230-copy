/*
Wind Chill Formula
f = 35.74 + 0.6215 * t - 35.75 * s * Math.pow(0.16) + 0.4275 * t * s * Math.pow(0.16)

f = wind chill factor in fahrenheit
t = average air temp in fahrenheit
s = wind spped in miles per hour
*/ 

// Variables
let temp = document.getElementById("temp");
let speed = document.getElementById("speed");
let chill = document.getElementById("chill");

// Computes the wind chill
let f = 35.74 + 0.6215 * t - 35.75 * s * Math.pow(0.16) + 0.4275 * t * s * Math.pow(0.16);


document.getElementById("chill").innerHTML = f;
