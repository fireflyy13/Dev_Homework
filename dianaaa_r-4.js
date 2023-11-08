// Check if number is prime.
function is_prime(n) { let result
    for (let k = 2; k < n; k++)
        if (n % k === 0)
            result = 'The number is not prime.';
        else
            result = 'The number is prime!';
    if (n <= 0) console.log('That number is not prime either.')
    console.log(result);
}

is_prime(10)