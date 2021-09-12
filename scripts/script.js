function doit() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = 9 * (celsius / 5) + 32;
    document.getElementById('output').innerHTML = fahrenheit;
}
