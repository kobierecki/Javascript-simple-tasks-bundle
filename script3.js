//WYSWIETLANIE DATY W SYSTEMIE DZIESIETNTM

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}

console.log(month + '-' + day + '-' + year);

console.log(month + '/' + day + '/' + year);

console.log(day+ '-' + month + '-' + year);

console.log(day + '/' + month + '/' + year);