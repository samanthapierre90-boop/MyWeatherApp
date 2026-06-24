let searchFormElement = document.querySelector(".search-form");
let searchInputElement = document.querySelector(".search-form-input");

function getWeatherEmoji(icon) {
  let emojis = {
    "clear-sky-day": "☀️",
    "clear-sky-night": "🌙",
    "few-clouds-day": "🌤️",
    "few-clouds-night": "☁️",
    "scattered-clouds-day": "⛅",
    "scattered-clouds-night": "☁️",
    "broken-clouds-day": "☁️",
    "broken-clouds-night": "☁️",
    "shower-rain-day": "🌦️",
    "shower-rain-night": "🌧️",
    "rain-day": "🌧️",
    "rain-night": "🌧️",
    "thunderstorm-day": "⛈️",
    "thunderstorm-night": "⛈️",
    "snow-day": "❄️",
    "snow-night": "❄️",
    "mist-day": "🌫️",
    "mist-night": "🌫️",
  };

  return emojis[icon] || "🌡️";
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function searchCity(city) {
  let apiKey = "ad3c7o6300fb8ft9aa13f3a888020254";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(function (response) {
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    let description = capitalizeFirstLetter(
      response.data.condition.description,
    );

    let emoji = getWeatherEmoji(response.data.condition.icon);

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = `${emoji} ${Math.round(
      response.data.temperature.current,
    )}°`;

    descriptionElement.innerHTML = `Description: ${description}`;
    humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
    windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} mph`;
  });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  let searchInputValue = searchInputElement.value.trim();

  searchCity(searchInputValue);
}

searchFormElement.addEventListener("submit", handleSearchFormSubmit);
