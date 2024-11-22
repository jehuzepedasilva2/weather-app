import { displayData } from "./render.js";

const API_KEY = '5EFQUX38XM2N7ULDYGFFFABAM'; // kept public for now...

async function fetchData(url) {
  try {
    const response = await fetch(url); // fetch returns a promise
    const locData = await response.json();
    return locData
  } catch (e) {
    throw new Error(e);
  }
}

async function getLocationData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
  return fetchData(url);
}

async function getLocationDataHours(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&include=hours`;
  return fetchData(url);
}

async function locationLookUp(location) {
  console.log(location);
  const data = await getLocationData(location);
  const dataWithHours = await getLocationDataHours(location);
  displayData(data, dataWithHours);
}

export {
  locationLookUp,
};
