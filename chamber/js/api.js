function getWeather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5546220&appid=5e8bfdfbf705960fd8680dfebfbf0726';

    let temperature = document.getElementById('temp');
    let tempMeasure = document.getElementById('tempMeasure');
    let typeWeather = document.getElementById('type');
    let windSpeed = document.getElementById('speed');
    let windChill = document.getElementById('chill');

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
        });

}


// Output
getWeather();