function sanitizeInput(location) {
  return location.toLowerCase().split(" ").join("");
}

function clearInputBox(inputElement) {
  inputElement.value = ''
}

function convertTo12HourFormat(time24) {
  let [hours, minutes] = time24.split(":").map(Number);
  const period = hours < 12 ? "am" : "pm";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")}${period}`;
}

function getDayOfWeek(num) {
  const day = {
    0: 'Sun', 
    1: 'Mon', 
    2: 'Tues', 
    3: 'Wed', 
    4: 'Thurs', 
    5: 'Fri', 
    6: 'Sat'
  }
  return day[num]
}

function getMonth(num) {
  const month = {
    0: 'Jan',
    1: 'Feb', 
    2: 'Mar', 
    3: 'Apr', 
    4: 'May', 
    5: 'Jun', 
    6: 'Jul', 
    7: 'Aug', 
    8: 'Sep', 
    9: 'Oct', 
    10: 'Nov', 
    11: 'Dec'
  }
  return month[num];
}

function getDateString(date) {
  const dayOfWeek = getDayOfWeek(date.getDay());
  const month = getMonth(date.getMonth());
  const day = date.getDate()
  return `${dayOfWeek} ${day} ${month}`;
}

function convertTempUnits(temp, currUnit) {
  const convert = {
    'f': (temp) => (temp - 32) * 5 / 9,
    'c': (temp) => (temp * 9 / 5) + 32,
  };
  return convert[currUnit](temp).toFixed(1);
}


export {
  sanitizeInput,
  clearInputBox,
  convertTo12HourFormat, 
  getDateString,
  convertTempUnits,
};