import {
  getLocationContainer,
  getDateContainer,
  getSunriseContainer, 
  getSunsetContainer, 
  getTemperatureContainer,
  getWeatherIcon,
  getActiveIcon
} from './cachedElements.js';

import { 
  convertTo12HourFormat,
  getDateString, 
 } from './utility.js';

function displayData(data) {
  const icon = data.currentConditions.icon;
  const date = getDateString(new Date());
  const sunrise = convertTo12HourFormat(data.currentConditions.sunrise);
  const sunset = convertTo12HourFormat(data.currentConditions.sunset);
  const currTemp = data.currentConditions.temp;
  getDateContainer().textContent = date;
  getSunriseContainer().textContent = sunrise;
  getSunsetContainer().textContent = sunset;
  getTemperatureContainer().textContent = `${currTemp}`;
  getLocationContainer().textContent = data.resolvedAddress;
  const active = getActiveIcon();
  if (active !== null) {
    active.classList.remove('active');
  }
  getWeatherIcon(icon).classList.add('active');
  console.log(data);
}

export {
  displayData 
};