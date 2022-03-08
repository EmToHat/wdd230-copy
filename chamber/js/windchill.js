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