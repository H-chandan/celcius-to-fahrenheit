const submitElement = document.querySelector('#submit');
const inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');
const inputUnitElement = document.querySelector('#inp-units');
const outputUnitElement = document.querySelector('#out-units');

function celsiusToFahrenheit() {
    let inputUnit = inputUnitElement.value;
    let outputUnit = outputUnitElement.value;
    let inputValue = Number(inputElement.value);
    if (isNaN(inputValue) || inputValue == '' || inputValue === '-0') {
        alert("Please enter a proper number.");
        return false;
    }
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        const fahrenheit = 9 * (inputValue / 5) + 32;
        outputElement.textContent = `${fahrenheit.toFixed(2)}`;
        return true;
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
        const kelvin = inputValue + 273.15 ;
        outputElement.textContent = `${kelvin.toFixed(2)}`;
        return true;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        const celsius = (inputValue - 32) * (5/9) ;
        outputElement.textContent = `${celsius.toFixed(2)}`;
        return true;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        const kelvin = ((inputValue - 32) * (5/9)) + 273.15 ;
        outputElement.textContent = `${kelvin.toFixed(2)}`;
        return true;
    } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
        const celsius = inputValue - 273.15 ;
        outputElement.textContent = `${celsius.toFixed(2)}`;
        return true;
    } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        const fahrenheit = (inputValue - 273.15) * (9/5) + 32;
        outputElement.textContent = `${fahrenheit.toFixed(2)}`;
        return true;
    } else if (inputUnit === outputUnit) {
        alert('Please select different unit for input and output!');
        return false;
    }
    return false;
};

inputElement.addEventListener('input', () => {
    outputElement.textContent = '';
})

submitElement.addEventListener('click', () => {
    celsiusToFahrenheit();
})

for (let element of [inputUnitElement, outputUnitElement]) {
    element.addEventListener('change', () => {
        outputElement.textContent = '';
    })
}
