//ZAMIANA TEMPERATUR

function toCelsius(fahrenheit){
    var celsius = fahrenheit * 9 / 5 + 32;
    return celsius;
}

function toFahrenheit(celsius){
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

console.log(toCelsius(-50));
console.log(toFahrenheit(60));