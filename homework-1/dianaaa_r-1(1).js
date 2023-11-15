// To sum the multiples of 3 or 5 below the given number
let n = prompt("Give me a number: ");
let sum = 0;
for (let i = 1; i < n; i++)
    if (i % 3 === 0 ||
        i % 5 === 0)
    { sum += i; }
    else if (n < 0)
    { sum = 0; }
alert(sum)