const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
};

function capitalize(str) {
    return str[0].toUpperCase + str.slice[1];
}

let meteo;
let temp;
let name;
let conditions;
let description;
let icon;
let iconSrc;

async function recupMeteo() {
    let ville = document.getElementById("city_search").value;

    meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=d975023ae26327d5a8b41177f7769040`)
        .then(res => res.json())
        .then(resJson => resJson)

    name = meteo.name;
    temp = Math.round(meteo.main.temp) + "°C";
    conditions = meteo.weather[0].main;
    description = meteo.weather[0].description;
    conditions = meteo.weather[0].main;
    icon = meteo.weather[0].icon;
    iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";

    document.getElementById('ville').innerHTML = `${name}`;
    document.getElementById('icon').innerHTML = `<img src=http://openweathermap.org/img/w/${icon}.png>`;
    document.getElementById('temp').innerHTML = `${temp} (${description})`;
    document.querySelector('i.wi').className = weatherIcons[conditions];
    document.body.className = conditions.toLowerCase();





    return meteo;
}
