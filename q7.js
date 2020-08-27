/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *
 * (3)
 * (7) 4
 * 2 (4) 6
 * 8 5 (9) 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom in triangle.txt (attached to the email), a 15K text file containing a triangle with one-hundred rows.
 *
 * @return {number}
 */
exports.q7 = function (triangle) {
    for (let i = (triangle.length - 1); i > 0; i--) {
        for (let j = 0; j < (triangle[i].length - 1); j++) {
            let tmp_a = triangle[i][j];
            let tmp_b = triangle[i][j + 1];
            if (tmp_a > tmp_b) {
                triangle[i - 1][j] += tmp_a;
            } else {
                triangle[i - 1][j] += tmp_b;
            }
        }
        triangle.pop();
    }
    return triangle[0][0];
};
