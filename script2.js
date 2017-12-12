//DRUKOWANIE WIDOKU

var button = document.getElementById('btn-print');

button.addEventListener('click', function(){windowPrint();});

function windowPrint() {
    window.print();
}