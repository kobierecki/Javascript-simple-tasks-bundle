//ZGADYWANIE LICZBY 

var userGuess = prompt("Podaj liczbę");
var computerGuess = Math.floor(Math.random()*10);
console.log(computerGuess);
if (userGuess == computerGuess) {
    alert("Good work!");
} else {
    alert("Not matched!");
}