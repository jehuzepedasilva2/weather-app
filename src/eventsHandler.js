import { getSubmitButton, getLocationInput } from "./cachedElements.js";
import { locationLookUp } from "./handleWeatherAPI.js";
import { sanitizeInput, clearInputBox } from "./utility.js";

function handleButton() {
  const button = getSubmitButton();
  button.addEventListener('click', () => {
    const input = getLocationInput();
    const cleanInput = sanitizeInput(input.value);
    locationLookUp(cleanInput);
    clearInputBox(input);
  })
}

export { 
  handleButton 
};