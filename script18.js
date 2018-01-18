// DODANIE PIERWSZEJ LITERY Z OBU STRON 

function firstLetter(word){
    if (word.length >= 1) {
        var first = word.charAt(0);
        word = first + word + first;
        return word;
    } else {
        alert("word is too short");
    }
}

console.log(firstLetter("Hello"));