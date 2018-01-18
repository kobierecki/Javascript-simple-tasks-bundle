// ODWRACANIE SLOWA

function reverseWord(word){
    word = word.split("").reverse().join("");
    return word;
}

console.log(reverseWord("Oskar"));

function reverseLetters(word){
    word.length >= 1 ? word = word.substr(0, 1) + word +  word.substr(0, 1):alert("Too short");
    return word;
}

console.log(reverseLetters("Oskar"));