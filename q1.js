/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * @returns {number}
 */
exports.q1 = function () {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
        if (divisibleBy(i, 3) || divisibleBy(i, 5)) {
            total += i;
        }
    }
    return total;
};

/**
 * Is number a divisible by number b.
 * @return {boolean}
 */
function divisibleBy(a, b) {
    return a % b === 0;
}