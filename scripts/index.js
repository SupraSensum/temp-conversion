// upon text field change
//    perform calculation
// 
// upon temp format button click
//    update the formula to use
//    perform calculation

const inputField = document.getElementById('input-temp');
const resultField = document.getElementById('temp-result');
const celsiusButton = document.getElementById('c-temp-button');
const fahrenheitButton = document.getElementById('f-temp-button');

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

inputField.addEventListener('input', calculate);


function calculate() {

}