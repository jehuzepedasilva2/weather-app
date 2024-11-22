import {
  getLocationContainer,
  getDateContainer,
  getSunriseContainer, 
  getSunsetContainer, 
  getTemperatureContainer,
  getWeatherIcon,
  getActiveIcon,
  getHumidity,
  getPrecipitation,
  getUVIdex,
  getFeelsLike,
  getChanceOfRain
} from './cachedElements.js';

import { 
  convertTo12HourFormat,
  getDateString, 
 } from './utility.js';

 function renderLeft(data) {
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
 }
 

 function renderHumidity(humidity) {
  const humidityUnrounded = humidity;
  humidity = humidity.toFixed(0);
  const humidityCard = getHumidity();
  const bars = humidityCard.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.style.backgroundColor = 'rgb(231, 229, 229)';
  })

  let condition = '';
  if (humidity >= 30) {
    bars[0].style.backgroundColor = '#60a5fa';
    condition = 'good'
  }
  if (humidity >= 60) {
    bars[1].style.backgroundColor = '#60a5fa';
    condition = 'normal'
  }
  if (humidity >= 90) {
    bars[2].style.backgroundColor = '#60a5fa';
    condition = 'bad';
  }
  const mid = humidityCard.querySelector('.mid');
  mid.innerHTML = `
  <h2>${humidityUnrounded}%</h2> 
  <h4>${condition}</h4>`;
 }

 function renderWind(windspeed) {

 }

 function renderUVIndex(uvindex) {
  const uvCard = getUVIdex();
  const bars = uvCard.querySelectorAll('.bar');
  bars.forEach((bar) => {
    bar.style.backgroundColor = 'rgb(231, 229, 229)';
    if (uvindex > parseInt(bar.classList[1])) {
      bar.style.backgroundColor = '#60a5fa';
    }
  })
  let condition = 'low';
  if (uvindex > 2) {
    condition = 'moderate';
  }
  if (uvindex > 5) {
    condition = 'high';
  }
  if (uvindex > 7) {
    condition = 'very high';
  }
  if (uvindex > 10) {
    condition = 'extreme';
  }
  const mid = uvCard.querySelector('.mid');
  mid.innerHTML = `
    <h2>${uvindex}</h2>
    <h4>${condition}</h4>
  `;
 }

 function renderPrecipitation(precipitation) {
  if (precipitation == null) {
    precipitation = 0
  }
  const precipitationCard = getPrecipitation();
  const bars = precipitationCard.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    bar.style.backgroundColor = 'rgb(231, 229, 229)';
    if (precipitation > index * 10) {
      bar.style.backgroundColor = '#60a5fa';
    }
  })
  const mid = precipitationCard.querySelector('.mid');
  mid.innerHTML = `
    <h2>${precipitation}</h2>
    <h4>cm</h4>
  `;
 }

 function renderFeelsLike(feelslike) {
    const feelsLikeCard = getFeelsLike();
    const bars = feelsLikeCard.querySelectorAll('.bar');
    bars.forEach(bar => {
      bar.style.backgroundColor = 'rgb(231, 229, 229)';
      if (feelslike > parseInt(bar.classList[1])) {
        bar.style.backgroundColor = '#60a5fa';
      }
    })
    const mid = feelsLikeCard.querySelector('.mid');
    mid.innerHTML = `
      <h2 class="f">${feelslike}</h2>
    `;
 }

 function renderChanceOfRain(precipprob) {
  const chanceOfRainCard = getChanceOfRain();
  const bars = chanceOfRainCard.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.style.backgroundColor = 'rgb(231, 229, 229)';
    if (precipprob >= parseInt(bar.classList[1])) {
      bar.style.backgroundColor = '#60a5fa';
    }
  })
  const mid = chanceOfRainCard.querySelector('.mid');
  mid.innerHTML = `
    <h2>${precipprob}%</h2>
  `;
 }

 function renderRightMid(data) {
  console.log(data);
  renderHumidity(data.currentConditions.humidity)
  renderWind(data.currentConditions.windspeed);
  renderPrecipitation(data.currentConditions.precip);
 }

 function renderRightBottom(data) {
  renderRightMid(data);
  renderUVIndex(data.currentConditions.uvindex);
  renderFeelsLike(data.currentConditions.feelslike);
  renderChanceOfRain(data.currentConditions.precipprob);
 }

 function renderRightTop(dataWithHours) {
  const today = dataWithHours.days[0];
  const todayByHours = today.hours;
 }

function displayData(data, dataWithHours) {
  console.log(data);
  renderLeft(data);
  renderRightTop(dataWithHours);
  renderRightBottom(data);
}

export {
  displayData, 
  renderFeelsLike, 
};