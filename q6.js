/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 *
 * @return {number}
 */
exports.q6 = function () {
    const size = 20;
    let two_dim_array = twoDimArray(size, size);
    two_dim_array[0][0] = 1;
    for (let i = 0; i <= size; i++) {
        for (let j = 0; j <= size; j++) {
            if (i) {
                two_dim_array[i][j] += two_dim_array[i - 1][j];
            }
            if (j) {
                two_dim_array[i][j] += two_dim_array[i][j - 1];
            }
        }
    }
    return two_dim_array[size][size];
};

/**
 * Makes a two-dimensional array sized: m x n
 *
 * @return {any[]}
 */
function twoDimArray(m, n) {
    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    return dp;
}
