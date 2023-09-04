const fromTempFormatButtons = document.querySelectorAll('.from-temp-column-buttons-container button');
const toTempFormatButtons = document.querySelectorAll('.to-temp-column-buttons-container button');
const userInputField = document.getElementById('input-temp');

// depth level #1 is the conversion from
// depth level #2 is the conversion to
const tempConversionAlgorithms = {
   'fahrenheit': {
      'fahrenheit': (temp) => temp,
      'celsius': (temp) => (temp - 32) * (5/9),
      'kelvin': (temp) => (temp + 459.67) * (5/9),
   },
   'celsius': {
      'fahrenheit': (temp) => (temp * (9/5) + 32),
      'celsius': (temp) => temp,
      'kelvin': (temp) => temp + 273.15,
   },
   'kelvin': {
      'fahrenheit': (temp) => (temp * (9/5) - 459.67),
      'celsius': (temp) => (temp - 273.15),
      'kelvin': (temp) => temp,
   },
};

const tempScaleShorthandMap = {
   '°F': 'fahrenheit',
   '°C': 'celsius',
   'K': 'kelvin',
};

let fromTempFormat = 'fahrenheit';
let toTempFormat = 'fahrenheit';

// event listeners
fromTempFormatButtons.forEach((button) => button.addEventListener('click', () => {
   fromTempFormat = tempScaleShorthandMap[button.textContent];
   fromTempFormatButtons.forEach((button) => button.classList.remove('selected'));
   button.classList.add('selected');
   calculate();
}));
toTempFormatButtons.forEach((button) => button.addEventListener('click', () => {
   toTempFormat = tempScaleShorthandMap[button.textContent];
   toTempFormatButtons.forEach((button) => button.classList.remove('selected'));
   button.classList.add('selected');
   calculate();
}));

function calculate() {
   tempConversionAlgorithms[fromTempFormat][toTempFormat]();
}

// upon text field change
//    update input temp variable
//    perform calculation: tempConversionAlgorithms[fromTempFormat][toTempFormat](inputTempVal)
// 
// anytime from/to button is pressed
//    update from/to variables
//    perform calculation: tempConversionAlgorithms[fromTempFormat][toTempFormat](inputTempVal)
