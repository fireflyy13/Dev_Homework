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