/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10,001st prime number?
 *
 * @return {number}
 */
exports.q5 = function () {
    let num_of_primes = 0;
    let current_num = 1;
    while (num_of_primes < 10001) {
        current_num++;
        if (isPrime(current_num)) {
            num_of_primes++;
        }
    }
    return current_num;
};

/**
 * Is number p a prime number
 *
 * @return {boolean}
 */
function isPrime(p) {
    if (p < 2) {
        return false;
    } else if (p === 2) {
        return true;
    }
    for (let i = 2; i < Math.sqrt(p) + 1; i++) {
        if (p % i === 0) {
            return false;
        }
    }
    return true;
}
