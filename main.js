const API_KEY = `482e82cc35b87520eba955b72f1e498d`;

async function checkWeather(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(API);
  const data = await response.json();



  if (data.cod == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".main").style.display = "none";
  } else {
    document.querySelector(".search input").value = "";

    const weather__condition = document.querySelector(
      ".weather__condition img"
    );


    if (data.weather[0].main == "Clear") {
      weather__condition.src = "./images/clear.png";
    } 
    else if (data.weather[0].main == "Clouds") {
      weather__condition.src = "./images/clouds.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
      weather__condition.src = "./images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
      weather__condition.src = "./images/mist.png";
    } 
    else if (data.weather[0].main == "Rain") {
      weather__condition.src = "./images/rain.png";
    } 
    else if (data.weather[0].main == "Snow") {
      weather__condition.src = "./images/snow.png";
    } 
    else if (data.weather[0].main == "Wind") {
      weather__condition.src = "./images/wind.png";
    }
    else if (data.weather[0].main == "Haze") {
      weather__condition.src = "./images/haze.png";
    }

    document.querySelector(".weather__condition h1").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".weather__condition h2").innerHTML = data.name;
    document.querySelector(".wind__details h3").innerHTML =
      Math.round(data.wind.speed) + " km/h";
    document.querySelector(".Humidity__details h3").innerHTML =
      Math.round(data.main.humidity) + "%";

    document.querySelector(".error").style.display = "none";
    document.querySelector(".main").style.display = "block";
  }
}

const search = document.querySelector(".search button");
search.addEventListener("click", () => {
  const city = document.querySelector(".search input");
  checkWeather(city.value);
});
