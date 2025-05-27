
let city = document.querySelector("#enter-city");

function changeCity(event){
    event.preventDefault();
let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${city.value}`;

    let apiUrl = 
    `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=ff3f6c762d03ea64t3ab6978450d240o&units=metric`;

    axios.get(apiUrl).then(response => { //calls once instead of mutliple times
        displayTemperature(response);
        displayCondition(response);
        displayData(response);
        displayHumidity(response);
        displayWind(response);
        displayIcon(response);
}).catch(error => {
        console.error("Error fetching data:", error);
        // Optional: Display an error message in the console
    });
}

function displayData(response){
console.log(response.data);
}

function displayTemperature(response){
console.log(response.data.temperature.current);
let currentTemp = document.querySelector(".current-temp");
currentTemp.innerHTML = Math.round(response.data.temperature.current)+"°C";
}

function displayCondition(response){
let currentCondition = document.querySelector(".current-condition");
currentCondition.innerHTML = response.data.condition.description;
}

function displayHumidity(response){
    console.log(response.data.temperature.humidity);
    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = "Humidity: " + Math.round(response.data.temperature.humidity)+"%";
}

function displayWind(response){
    console.log(response.data.wind.speed);
    let wind = document.querySelector(".wind");
    wind.innerHTML = "Wind: " + Math.round(response.data.wind.speed)+"m/sec";
}

function displayIcon(response){
    console.log(response.data.condition.icon_url);
    let iconUrl = response.data.condition.icon_url;

    let currentIcon = document.querySelector(".current-icon");
    currentIcon.innerHTML = `<img src="${iconUrl}">`;
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

function getTime() {
    
let currentTime =  new Date();
let today = currentTime.getDay();

let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

today = daylist[today];

let hour = String(currentTime.getHours()).padStart(2, "0"); // Ensure two-digit format
let min = String(currentTime.getMinutes()).padStart(2, "0"); //padding, prefix
let timeInsert = document.querySelector(".current-day-time");

timeInsert.innerText = `${today}, ${hour}:${min}`; //innerText,textContent more secure ignores HTML
}

getTime();

//function displayTemperature(response) {
 // let temperatureElement = document.querySelector("#current-temperature");
  //let temperature = Math.round(response.data.temperature.current);
  //let cityElement = document.querySelector("#current-city");
  //cityElement.innerHTML = response.data.city;
  //temperatureElement.innerHTML = temperature;
//}

//function search(event) {
 // event.preventDefault();
  //let searchInputElement = document.querySelector("#search-input");
  //let city = searchInputElement.value;

  //let apiKey = "b2a5adcct04b33178913oc335f405433";
  //let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  //axios.get(apiUrl).then(displayTemperature);
//}

//function formatDate(date) {
  //let minutes = date.getMinutes();
  //let hours = date.getHours();
  //let day = date.getDay();

  //if (minutes < 10) {
    //minutes = `0${minutes}`;
  //}

  //if (hours < 10) {
   // hours = `0${hours}`;
  //}

 // let days = [
  //  "Sunday",
 //"Monday",
//    "Tuesday",
  //  "Wednesday",
   // "Thursday",
   // "Friday",
   // "Saturday"
  //];

  //let formattedDay = days[day];
  //return `${formattedDay} ${hours}:${minutes}`;
//}

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", search);

//let currentDateELement = document.querySelector("#current-date");
//let currentDate = new Date();

//currentDateELement.innerHTML = formatDate(currentDate);