let apiURL =
"https://api.openweathermap.org/data/2.5/weather?lat=-12.043&lon=-77.028&appid=5e8bfdfbf705960fd8680dfebfbf0726&units=imperial";


//"https://api.openweathermap.org/data/2.5/onecall?lat=-12.043&lon=-77.028&units=imperial&appid=5e8bfdfbf705960fd8680dfebfbf0726";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let timeZone = document.querySelector("#timezone");
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weathericon");
    const caption = document.querySelector("#skies");
    const speed = document.querySelector("#speed");

    timeZone.textContent = jsObject.main.timezone.toFixed(0);
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    speed.textContent = jsObject.wind.speed.toFixed(0);

    let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    let imgalt = jsObject.weather[0].description;
    weatherIcon.setAttribute("src", imgsrc);
    weatherIcon.setAttribute("alt", imgalt);
    caption.innerHTML = `${imgalt}`;
  });