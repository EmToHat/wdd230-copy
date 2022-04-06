let apiURL =
"https://api.openweathermap.org/data/2.5/weather?lat=-12.043&lon=-77.028&appid=5e8bfdfbf705960fd8680dfebfbf0726&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const countryTimeZone = document.querySelector("#country-time-zone");
    const countryCityName = document.querySelector("#country-city-name");
    const countryName = document.querySelector("#country-name");
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weathericon");
    const caption = document.querySelector("#skies");
    const speed = document.querySelector("#speed");

    countryCityName.textContent = jsObject.name
    countryName.textContent = jsObject.sys.country
    //countryTimeZone = jsObject.timezone
    
    //toFixed(#) = 00.00
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    speed.textContent = jsObject.wind.speed.toFixed(0);

    let imgsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;

    let imgalt = jsObject.weather[0].description;
    weatherIcon.setAttribute("src", imgsrc);
    weatherIcon.setAttribute("alt", imgalt);
    caption.innerHTML = `${imgalt}`;
  });