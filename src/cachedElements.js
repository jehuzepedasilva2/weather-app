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
  getAllTempElements
};