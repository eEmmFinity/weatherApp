const apikey = "72971a5b2a7ea098a08551afb77a8ea1";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatheIcon = document.querySelector(".wheather-icon");

async function checkwheather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            wheatheIcon.src = "images/clouds.png";
        }
        if (data.weather[0].main == "Clear") {
            wheatheIcon.src = "images/clear.png";
        }
        if (data.weather[0].main == "Rain") {
            wheatheIcon.src = "images/rain.png";
        }
        if (data.weather[0].main == "Drizzle") {
            wheatheIcon.src = "images/drizzle.png";
        }
        if (data.weather[0].main == "Snow") {
            wheatheIcon.src = "images/snow.png";
        }
        if (data.weather[0].main == "Mist") {
            wheatheIcon.src = "images/mist.png";
        }
        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkwheather(searchBox.value);
});

checkwheather("dhaka");