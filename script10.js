//MNOZENIE I DZIELENIE

var multiplyButton =  document.getElementById('js-multiply-button');
var divideButton =  document.getElementById('js-divide-button');

multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);

function multiply() {
    var firstNumber = document.getElementById('js-first-number').value;
    var secondNumber = document.getElementById('js-second-number').value;
    document.getElementById('js-result').innerText = firstNumber * secondNumber;
}

function divide() {
    var firstNumber = document.getElementById('js-first-number').value;
    var secondNumber = document.getElementById('js-second-number').value;
    document.getElementById('js-result').innerText = firstNumber / secondNumber;
}