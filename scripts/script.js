function doit() {
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = 9 * (celcius / 5) + 32;
    document.getElementById('output').innerHTML = fahrenheit;
}
