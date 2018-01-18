// SPRAWDZANIE POCZATKU STRINGA

function checkIfJava(word){
    var checkIf = (word.substr(0, 4) == "Java") ? checkIf = true : checkIf = false;
    return checkIf;
}

console.log(checkIfJava("Javaticon"));
console.log(checkIfJava("Java is cool"));
console.log(checkIfJava("OJava is cool"));