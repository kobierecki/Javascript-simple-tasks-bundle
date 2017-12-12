// ODWRÓCENIE SŁOWA 

function reverse(word){
    var wordArray = word.split("").reverse().join();
    wordArray = wordArray.replace(/\,/g, "");
    return wordArray;
}

console.log(reverse('w3resource'));

