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
    // TODO: Speed up implementation, it's currently running 2^(99) iterations of a for-loop, try going downwards row-by-row keeping record of the greatest total so far.
    let largest_total = 0;
    let exponent = triangle.length - 1;
    for (let i = 0; i < Math.pow(2, exponent); i++) {
        let path = i.toString(2);
        let path_len = path.length;
        for (let j = 0; j < (exponent - path_len); j++) {
            path = '0' + path;
        }
        let x = 0;
        let y = 0;
        let tmp_total = triangle[x][y];
        for (let j = 0; j < path.length; j++) {
            let c = path.charAt(j);
            if (c === '0') {
                x++;
                tmp_total += triangle[x][y];
            } else if (c === '1') {
                x++;
                y++;
                tmp_total += triangle[x][y];
            }
        }
        if (tmp_total > largest_total) {
            largest_total = tmp_total;
        }
    }
    return largest_total;
};
