function getLocationInput() {
  return document.querySelector('input');
}

function getSubmitButton() {
  return document.getElementById('search-button');
}

function getDataContainer() {
  return document.querySelector('.data');
}

export {
  getLocationInput,
  getSubmitButton,
  getDataContainer,
};