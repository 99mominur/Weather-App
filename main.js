const API_KEY = `482e82cc35b87520eba955b72f1e498d`;

async function checkWeather(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(API);
  const data = await response.json();
  document.querySelector(".weather__condition h1").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".weather__condition h2").innerHTML = data.name;
  document.querySelector(".wind__details h3").innerHTML =
    Math.round(data.wind.speed) + " km/h";
  document.querySelector(".Humidity__details h3").innerHTML =
    Math.round(data.main.humidity) + "%";
}

const search = document.querySelector(".search button");
search.addEventListener("click", () => {
  const city = document.querySelector(".search input");
  checkWeather(city.value);
});
