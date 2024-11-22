function getLocationInput() {
  return document.querySelector('input');
}

function getSubmitButton() {
  return document.getElementById('search-button');
}

function getLocationContainer() {
  return document.querySelector('.location')
}

function getDateContainer() {
  return document.querySelector('.date');
}

function getSunriseContainer() {
  return document.querySelector('.sunrise-time');
}

function getSunsetContainer() {
  return document.querySelector('.sunset-time');
}

function getTemperatureContainer() {
  return document.querySelector('.temp');
}

function getWeatherIcon(icon) {
  return document.getElementById(icon);
}

function getActiveIcon() {
  return document.querySelector('.active');
}

function getCheckBox() {
  return document.querySelector('.switch input');
}

function getAllTempElements(unit) {
  return document.querySelectorAll(`.${unit}`);
}

function getNextDayButton() {
  return document.querySelector('.right-top-header button');
}

function getHumidity() {
  return document.querySelector('.humidity');
}

function getWind() {
  return document.querySelector('.wind');
}

function getPrecipitation() {
  return document.querySelector('.precipitation');
}

function getUVIdex() {
  return document.querySelector('.uv-index');
}

function getFeelsLike() {
  return document.querySelector('.feels-like');
}

function getChanceOfRain() {
  return document.querySelector('.chance-of-rain');
}

export {
  getLocationInput,
  getSubmitButton,
  getLocationContainer,
  getDateContainer,
  getSunriseContainer, 
  getSunsetContainer, 
  getTemperatureContainer,
  getWeatherIcon,
  getActiveIcon,
  getCheckBox,
  getAllTempElements, 
  getNextDayButton,
  getHumidity, 
  getWind, 
  getPrecipitation,
  getUVIdex,
  getFeelsLike,
  getChanceOfRain,
};