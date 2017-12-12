//WYSWIETLANIE AKTUALNEJ DATY W KONSOLI

var today = new Date(); //Pobieram dzisiejsza ogolna date
var day = today.getDay(); //a teraz dzien
var listOfDays = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
console.log('Dziś jest ' + listOfDays[day] + '.');

var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();

var prepand;
hour > 12 ? prepand = 'AM':prepand = 'PM';

if (hour > 12 && hour <= 24) {
    hour = hour - 12 + ' PM';
} else if (hour <= 12 && hour > 0) {
    hour = hour + 'AM';
} else if (hour == 12) {
    hour = "Noon";
} else {
    hour = "Midnight";
}

console.log('Aktualny czas: ' + hour + ' : ' + minute + ' : ' + seconds + '.');