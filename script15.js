
function calculate(first, second){
    var difference;
    if (first == second) {
        difference = (first + second) * 3;
    } else {
        difference = first + second;
    }   
    return difference;
}

console.log(calculate(13,10));