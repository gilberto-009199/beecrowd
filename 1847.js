const input = require('fs').readFileSync('stdin', 'utf-8');
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8');

let input_array = input.split('\n')[0];
let temperatura_array = input_array.split(" ");


let A = temperatura_array[0];
let B = temperatura_array[1];
let C = temperatura_array[2];


if (B < A && C >= B) console.log(":)");
else if (B > A && C <= B) console.log(":(");
else if (B > A && C > B && (C - B) < (B - A)) console.log(":(");
else if (B > A && C > B && (C - B) >= (B - A)) console.log(":)");
else if (B < A && C < B && (B - C) < (A - B)) console.log(":)");
else if (B < A && C < B && (B - C) >= (A - B)) console.log(":(");
else if (B == A && C > B) console.log(":)");
else if (B == A && C < B) console.log(":(");
else console.log(":(");
