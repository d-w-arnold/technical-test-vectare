/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * @returns {number}
 */
exports.q3 = function () {
    let largest_palindrome = 0;
    for (let i = 999; i >= 100 ; i--) {
        for (let j = 999; j >= 100; j--) {
            let tmp = i * j;
            if (isPalindrome(tmp) && (tmp > largest_palindrome)) {
                largest_palindrome = tmp;
            }
        }
    }
    return largest_palindrome;
};

/**
 * Is the number a palindrome.
 *
 * @return {boolean}
 */
function isPalindrome(a) {
    let tmp = a.toString();
    return tmp.localeCompare(tmp.split("").reverse().join("")) === 0;
}
