
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

function largestRadialSum(arr, d) {
    let chunked_arr = [];
    let honours = [];
    let n = arr.length;
    let groups_number = n / d;

    for(let j = 0; j < n; j++)
        for(let i = 0; i < n; i += groups_number) {
            chunked_arr.push(arr[j + i]);

        } chunked_arr.splice(n, chunked_arr.length);
    const group = (step=d, arr=chunked_arr) =>
        Array.from({length: Math.ceil(n / step)}, (_, i) => // Sums up every d items in an array
            arr.slice(i*step, (i+1)*step).reduce((a, b) => a+b)
        );

    for (let value of group()) {
        honours.push(value);
    }

    let combined_honour = Math.max(...honours);
    if (d < 1 || d > 31) {
        return undefined;
    }

    if(d === n) {
        combined_honour = arr.reduce((partialSum, a) => partialSum + a, 0);
    }
    return combined_honour

} largestRadialSum([3], 1)

