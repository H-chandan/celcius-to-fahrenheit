const inputElement = document.getElementById('celsius');
const outputElement = document.getElementById('output');

function celsiusToFahrenheit() {
    celsius = inputElement.value
    if (isNaN(celsius) || celsius == '' || celsius == '-0') {
        alert("Please enter a proper number.");
        return false;
    }
    const fahrenheit = 9 * (celsius / 5) + 32;
    outputElement.innerHTML = `${fahrenheit.toFixed(2)} &degF`;
    return true;
};

inputElement.addEventListener('input', () => {
    document.getElementById('output').innerHTML = '';
})