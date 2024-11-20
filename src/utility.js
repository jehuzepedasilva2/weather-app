function sanitizeInput(location) {
  return location.toLowerCase().split(" ").join("");
}

function clearInputBox(inputElement) {
  inputElement.value = ''
}

export {
  sanitizeInput,
  clearInputBox,
};