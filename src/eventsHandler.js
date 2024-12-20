import { 
  getSubmitButton,
  getLocationInput,
  getCheckBox,
  getAllTempElements, 
} from "./cachedElements.js";
import { renderFeelsLike } from './render.js';
import { locationLookUp } from "./handleWeatherAPI.js";
import { 
  clearInputBox, 
  convertTempUnits 
} from "./utility.js";

function getSearchInput() {
  const input = getLocationInput();
  const cleanInput = input.value;
  locationLookUp(cleanInput);
  clearInputBox(input);
}

function handleButton() {
  const button = getSubmitButton();
  button.addEventListener('click', getSearchInput);
}

function handleEnterKey() {
  const searchBox = getLocationInput();
  searchBox.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return
    }
    getSearchInput();
  })
}

function changeTemp(temps, oldUnit, newUnit) {
  temps.forEach((div, index) => {
    const currTemp = parseFloat(div.innerHTML);
    const newTemp = convertTempUnits(currTemp, oldUnit);
    div.innerHTML = `${newTemp}`;
    div.classList.remove(oldUnit);
    div.classList.add(newUnit);
    if (index === 0) {
      renderFeelsLike(newTemp);
    }
  });
}

function handleToggleSwitch() {
  const toggleSwitch = getCheckBox(); 
  toggleSwitch.addEventListener('change',  () => {
    if (toggleSwitch.checked) {
      // not checked means we are in F
      const temps = getAllTempElements('f');
      changeTemp(temps, 'f', 'c');
    } else {
      const temps = getAllTempElements('c');
      changeTemp(temps, 'c', 'f')
    }
  })

}

function handleStart() {
  handleButton();
  handleEnterKey();
  handleToggleSwitch();
  locationLookUp('San Francisco');
}

export {  
  handleStart, 
};