//DNI DO KONCA GWIAZDKI
var today = new Date();
var christmas = new Date(today.getFullYear(), 11, 25);
var todayTime = today.getTime(); // czas do wartosci w msec.
var christmasTime = christmas.getTime();
var timeLeft = (christmasTime - todayTime)/(1000 * 60 * 60 * 24); //zamieniam na dni
var timeLeft = Math.floor(timeLeft);

console.log(timeLeft + ' days has left');