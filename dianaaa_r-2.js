//* Calculates the minimal number of moves to win the game
// "Towers of Hanoi", with given number of disks.
let stacks = prompt('How many stacks do you have?');
let moves = (2 ** stacks) - 1;
alert(moves);
if (stacks === '0')
    alert ('Bring here some stacks!');
else if (stacks < 0)
    alert ('Are you sure it is possible?');