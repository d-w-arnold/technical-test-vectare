/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * @return {number}
 */
exports.q4 = function () {
    let index = 0;
    while (true) {
        let all_divisible = true;
        for (let i = 20; i > 0; i--) {
            if (index > i) {
                if (!divisibleBy(index, i)) {
                    all_divisible = false;
                    break;
                }
            } else {
                all_divisible = false;
                break;
            }
        }
        if (all_divisible) {
            return index;
        }
        index++;
    }
};

/**
 * Is number a divisible by number b.
 *
 * @return {boolean}
 */
function divisibleBy(a, b) {
    return a % b === 0;
}
