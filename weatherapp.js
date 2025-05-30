
function handleSearch(event) {
    event.preventDefault();

let searchInput = document.querySelector("#enter-city-form");
let city = searchInput.value;
let h1 = document.querySelector("h1");
h1.innerHTML = `Weather in ${city}`;
searchCity(city);
}

function searchCity(city) {
let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ff3f6c762d03ea64t3ab6978450d240o`;
axios.get(api).then(displayWeather)};

function displayWeather(city){
let temperature = city.data.temperature.current;
temperature = Math.round(temperature);
let displayTemperature = document.querySelector(".current-temperature");
displayTemperature.innerHTML = `${temperature}`;

let windSpeed = city.data.wind.speed;
windSpeed = Math.round(windSpeed);
let displayWind = document.querySelector(".wind");
displayWind.innerHTML = `${windSpeed}`;

let condition = city.data.condition.description;
console.log(condition);
let displayCondition = document.querySelector(".weather-description");
displayCondition.innerHTML = `${condition}`;

let conditionIcon = city.data.condition.icon_url;
let displayConditionIcon = document.querySelector(".weather-icon");
displayConditionIcon.innerHTML =`${conditionIcon}`;

let humidity = city.data.temperature.humidity;
console.log(humidity);
let displayHumidity = document.querySelector(".humidity");
displayHumidity.innerHTML = `${humidity}%`;
}


let searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", handleSearch);


  //cityElement.innerHTML = response.data.city; 