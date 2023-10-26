const apiKey = "73a3b998c7bb3e2ccd36941a4926fa0e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML = data.wind.speed;
  document.querySelector(".humid").innerHTML = data.main.humidity;
  
  if (data.weather[0].main == "Clouds") {
    weatherIcon.className = "bi bi-cloud-sun";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.className = "bi bi-brightness-high";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.className = "bi bi-cloud-rain";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.className = "bi bi-cloud-drizzle";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.className = "bi bi-cloud-haze2";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
