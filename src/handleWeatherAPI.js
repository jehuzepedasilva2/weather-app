import { displayData } from "./render.js";

const API_KEY = '5EFQUX38XM2N7ULDYGFFFABAM'; // kept public for now...

async function getLocationData(location) {
  const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  try {
    const response = await fetch(url); // fetch returns a promise
    const locData = await response.json();
    return locData
  } catch (e) {
    throw new Error(e);
  }
}

async function locationLookUp(location) {
  const data = await getLocationData(location);
  displayData(data);
}

export {
  locationLookUp,
};
