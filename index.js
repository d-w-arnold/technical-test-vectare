var http = require('http');
const q1 = require('./q1.js');
const q2 = require('./q2.js');
const q3 = require('./q3.js');
const q4 = require('./q4.js');
const q5 = require('./q5.js');
const q6 = require('./q6.js');
const q7 = require('./q7.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Vectare Technical Test</h1>');
    res.write('<h3>By David W. Arnold</h3>');
    const q1_ans = q1.q1();
    const q2_ans = q2.q2();
    const q3_ans = q3.q3();
    const q4_ans = q4.q4();
    const q5_ans = q5.q5();
    const q6_ans = q6.q6();
    const q7_ans = q7.q7(readTxtFile("./triangle.txt"));
    res.write("Question 1 answer: " + q1_ans + "</br>");
    res.write("Question 2 answer: " + q2_ans + "</br>");
    res.write("Question 3 answer: " + q3_ans + "</br>");
    res.write("Question 4 answer: " + q4_ans + "</br>");
    res.write("Question 5 answer: " + q5_ans + "</br>");
    res.write("Question 6 answer: " + q6_ans + "</br>");
    res.write("Question 7 answer: " + q7_ans + "</br>");
    res.end();
}).listen(8080);

function readTxtFile(path) {
    let triangle = [];
    let fs = require("fs");
    let text = fs.readFileSync(path).toString('utf-8');
    let textByLine = text.split("\n");
    for (let i = 0; i < textByLine.length; i++) {
        let to_Add = true;
        let line = textByLine[i].split(" ");
        for (let j = 0; j < line.length; j++) {
            if (!isNaN(parseInt(line[j]))) {
                line[j] = parseInt(line[j]);
            } else {
                // Eliminate trailing empty line in TXT file.
                to_Add = false;
            }
        }
        if (to_Add) {
            triangle.push(line);
        }
    }
    return triangle;
}
