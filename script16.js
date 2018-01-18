// UZYWANIE METODY CONCAT 

function addPy(word){
    var enteredWord = word;
    var firstLetters = enteredWord.substring(0, 2);
    if (firstLetters == "Py") {
        return enteredWord;
    } else {
         enteredWord = enteredWord.concat("Py");
         return enteredWord;
    }
}

console.log(addPy("Oskar"));
console.log(addPy("Pytanie"));