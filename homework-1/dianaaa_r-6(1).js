// Rearranges the digits to create the highest possible number.
function highestNum(n) {
    let number = String(n);
    let strNumber = number.split("").map(function(n) {
        return +n;
    });

    let digits = strNumber.sort(function(a,b){
        return b-a;
    });

    let arrangedStr = digits.join("");
    console.log(arrangedStr); }

highestNum()