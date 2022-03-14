let apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84790&units=imperial&appid=5e8bfdfbf705960fd8680dfebfbf0726';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#weathericon');

        currentTemp.textContent = jsObject.main.temp.toFixed(0);

        let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        let imgalt = jsObject.weather[0].description;

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        weatherIcon.setAttribute('src', imgsrc);
        weatherIcon.setAttribute('alt', imgalt);
    });

