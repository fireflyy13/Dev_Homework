<<<<<<< HEAD
//* Calculates the minimal number of moves to win the game
// "Towers of Hanoi", with given number of disks.
let stacks = prompt('How many stacks do you have?');
let moves = (2 ** stacks) - 1;
alert(moves);
if (stacks === '0')
    alert ('Bring here some stacks!');
else if (stacks < 0)
    alert ('Are you sure it is possible?');
=======
function findEvenIndex(arr) {
    let i, j;
    let sum1;
    let sum2;

    for (i = 0; i < arr.length; ++i) {
        sum1 = 0;
        for (j = 0; j < i; j++)
            sum1 += arr[j];

        sum2 = 0;
        for (let c = i + 1; c < arr.length; c++)
            sum2 += arr[c];

        if (sum1 === sum2)
            return i;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = findEvenIndex(arr);
console.log(result);
>>>>>>> hw-2
