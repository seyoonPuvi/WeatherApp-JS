const apiKeys = "cbf0971e9c427d58ec283234c8b2eb4c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let inputElement = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let bgVideo = document.querySelector(".video");
let weatherVedioEl = document.querySelector(".video source");

let weatherCont = document.getElementById("weatherReport");
let weatherIcon = document.querySelector(".weather-icon");
let cityName = document.querySelector(".city");
let tempEl = document.querySelector(".temp");
let humidityEl = document.querySelector(".humidity");
let windEl = document.querySelector(".wind");
let humidityTextEl = document.getElementById("humidityText");
let windSpeedTextEl = document.getElementById("windSpeedText");


async function getWeatherReport(city) {
    let responseData = await fetch(apiUrl + city + `&appid=${apiKeys}`);


    try {

        if (!responseData.ok) {
            alert("enter a valid city name");
            throw new Error("city not found");
        }



        let data = await responseData.json();
        cityName.textContent = data.name;
        tempEl.textContent = Math.round(data.main.temp) + "°C";
        humidityEl.textContent = data.main.humidity + "%";
        windEl.textContent = data.wind.speed + "kmph";

        weatherCont.classList.remove("hide");

        let weatherId = data.weather[0].id;

        console.log(data);
        console.log(weatherId);
        console.log(data.name);






        if (weatherId < 300) {
            weatherIcon.src = "rain.png";
            weatherVedioEl.src = "ThunderStrom.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("rainStyle");
            humidityTextEl.classList.add("rainStyle");
            windSpeedTextEl.classList.add("rainStyle");
            tempEl.classList.add("rainStyle");
        }



        else if (weatherId < 500) {
            weatherIcon.src = "drizzle.png";
            weatherVedioEl.src = "Drizzle.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("rainStyle");
            humidityTextEl.classList.add("rainStyle");
            windSpeedTextEl.classList.add("rainStyle");
            tempEl.classList.add("rainStyle");
        }

        else if (weatherId < 600) {
            weatherIcon.src = "rain.png";
            weatherVedioEl.src = "Rain.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("rainStyle");
            humidityTextEl.classList.add("rainStyle");
            windSpeedTextEl.classList.add("rainStyle");
            tempEl.classList.add("rainStyle");
        }


        else if (weatherId < 700) {
            weatherIcon.src = "snow.png";
            weatherVedioEl.src = "Snow.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("snowStyle");
            humidityTextEl.classList.add("snowStyle");
            windSpeedTextEl.classList.add("snowStyle");
            tempEl.classList.add("snowStyle");
        }


        else if (weatherId < 800) {
            weatherIcon.src = "mist.png";
            weatherVedioEl.src = "Mist.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("snowStyle");
            humidityTextEl.classList.add("snowStyle");
            windSpeedTextEl.classList.add("snowStyle");
            tempEl.classList.add("snowStyle");
        }


        else if (weatherId === 800) {
            weatherIcon.src = "clear.png";
            weatherVedioEl.src = "Clear.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("bright");
            humidityTextEl.classList.add("bright");
            windSpeedTextEl.classList.add("bright");
            tempEl.classList.add("bright");
        }

        else if (weatherId > 800) {
            weatherIcon.src = "clouds.png";
            weatherVedioEl.src = "Clouds.mp4";
            bgVideo.load();
            bgVideo.play();
            cityName.classList.add("cloudStyle");
            humidityTextEl.classList.add("cloudStyle");
            windSpeedTextEl.classList.add("cloudStyle");
            tempEl.classList.add("cloudStyle");
        }

    }
    catch (error) {
        console.error(error.message);

    }



}


inputElement.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        let city = event.target.value.trim();
        cityName.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
        humidityTextEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
        windSpeedTextEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
        tempEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");

        getWeatherReport(city);
    }

});



searchBtn.addEventListener("click", function (event) {
    let city = inputElement.value.trim();
    cityName.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
    humidityTextEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
    windSpeedTextEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");
    tempEl.classList.remove("cloudStyle", "bright", "snowStyle", "rainStyle");

    getWeatherReport(city);

});