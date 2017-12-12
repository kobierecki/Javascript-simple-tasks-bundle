//OBLICZANIE POLA ZA POMOCA WZORU HARONA 

function triangleArea(a, b, c) {
var circuit = (a + b + c)/2;
var area = Math.sqrt(circuit * (circuit - a) * (circuit - b) * (circuit - c));
return area;
}

console.log(triangleArea(5,6,7));