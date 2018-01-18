// USUWANIE KONKRETNEJ LITERY W STRINGU

function removeChar(word, position) {
    word = word.split("");
    word.splice(position, 1);
    return word.join("");
}

console.log(removeChar("parasol", 3));