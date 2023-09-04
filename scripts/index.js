// upon text field change
//    perform calculation
// 
// upon temp format button click
//    update the formula to use
//    perform calculation

const fromTempFormatButtons = document.querySelectorAll('.from-temp-column-buttons-container button');
const toTempFormatButtons = document.querySelectorAll('.to-temp-column-buttons-container button');

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

let fromTempFormat = 'fahrenheit';
let toTempFormat = 'fahrenheit';

function calculate() {

}