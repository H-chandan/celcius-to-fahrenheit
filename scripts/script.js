function celsiusToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    console.log(isNaN(celsius));
    if (isNaN(celsius) || celsius == '') {
        alert("PLEASE ENTER A NUMBER");
        return false;
    }
    const fahrenheit = 9 * (celsius / 5) + 32;
    document.getElementById('output').innerHTML = fahrenheit.toFixed(2);
    return true;
};
